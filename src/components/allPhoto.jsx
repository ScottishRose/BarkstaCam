import React from 'react';
import SinglePhoto from './singlePhoto.jsx';
// import Nav from './nav.jsx';

class AllPhoto extends React.Component {

}

  render() {
    return (
      <div className="polaroid">

        <img />
        <img />
        <img />
        <img />
        <img />
        <img />
        <img />
        <img />
        <img />
        <button onClick={this.props.handlePreviousPageClick}>Previous</button>
        <button onClick={this.props.handleNextPageClick}>Next</button>
      </div>
    );
  }
}
export default AllPhoto;
