import React, { Component } from "react";

export class SearchBar extends Component {
  state = { term: "" };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFromSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    //Call CallBack From Parent
  };
  render() {
    return (
      <div onSubmit={this.onFromSubmit} className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search"> Search </label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
