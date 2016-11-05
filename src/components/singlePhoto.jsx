import React from 'react';
// import { Link, withRouter } from 'react-router';
// import Add from './add.jsx';
// import Nav from './nav.jsx';

class SinglePhoto extends React.Component {

  // componentWillMount() {
  //   this.props.getPhotos()
  // }

  render() {
    return (

      <div>
        <button onClick={this.props.handlePreviousClick}>Previous</button>
        <button onClick={this.props.handleNextClick}>Next</button>

        <ul>
          <img src={this.props.url} />
          <h2>{this.props.name}</h2>
          <h3>{this.props.social}</h3>
          <h4>{this.props.tags}</h4>
          <h4>{this.props.caption}</h4>
          <button onClick={this.props.handleUpdateClick}>Update</button>
          <button onClick={this.props.handleDeleteClick}>Delete</button>
        </ul>
      </div>
    )
  }
}

export default SinglePhoto;
