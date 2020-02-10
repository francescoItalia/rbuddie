import React, { Component } from "react";

class FilterReceipts extends Component {
  state = {};
  render() {
    return (
      <div>
        <input
          onChange={this.onInputChange}
          type="text"
          placeholder="Search by vendor"
        />
        {/* <div>{this.props.filteredDataError ? '' : "You're filter failed so here are all your receipts"}</div> */}
      </div>
    );
  }

  onInputChange = event => {
    this.props.filter(event.target.value);

  };
}

export default FilterReceipts;