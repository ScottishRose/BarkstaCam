import React from 'react';
import ReactDOM from 'react-dom';
// import Nav from './nav.jsx';


class Add extends React.Component {





  render() {
    return (

      <div>
        <form className="add">
        <input type="file"
          onChange={this.handleImageChange} />
        <button onClick={this.handleSubmit}>Upload Image</button>

        <input type="text"
          placeholder="Pup's name"
          // value={this.state.value}
          onChange={this.handleNameChange} />
        <input type="text"
          placeholder="Social Media Handle"
          // value={this.state.value}
          onChange={this.handleSocialChange} />
        <input type="text"
          placeholder="Tags"
          // value={this.state.value}
          onChange={this.handleTagsChange} />
        <input type="text"
          placeholder="Caption"
          // value={this.state.value}
          onChange={this.handleCaptionChange} />
        <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Add;
