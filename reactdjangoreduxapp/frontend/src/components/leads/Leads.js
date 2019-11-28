/**
 * KYIV MEDIA 26.11.2019
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <div>
        <h1>Leads List</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  leads: state.leads.leads //leads - reducer, then leads from reducer
});

export default connect(mapStateToProps, { getLeads })(Leads);
