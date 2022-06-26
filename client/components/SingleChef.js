import React from 'react'
import { connect } from 'react-redux';
import { fetchChef } from '../store/singleChef';
import { Link } from 'react-router-dom';

class SingleChef extends React.Component {
  componentDidMount() {
  this.props.fetchChef(this.props.match.params.id);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render () {
    const chefDetails = this.props.singleChef;
    return (
        <div>
            <h1>Chef</h1>
            <ul>
              <li>Name: {chefDetails.name}</li>
              <li>Food Type: {chefDetails.foodType}</li>
              <li>Rating: {chefDetails.rating}</li>
              <img src={chefDetails.imageUrl} />
            </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    singleChef: state.singleChef
})

const mapDispatchToProps = (dispatch) => ({
    fetchChef: (id) => dispatch(fetchChef(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleChef);