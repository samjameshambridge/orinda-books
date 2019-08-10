import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    // whether or not there is an error is stored in the state
    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    // if there is an error passed in, then getDerivedStateFromError will update the state {error: error}
    return { error };
  }

  render() {
    // extract error and child component
    const { error } = this.state,
      { children } = this.props;

    // if error, return alternative component
    if (error) {
      return (
        <div className="error-boundary">
          <h2>Oh-no! Something went wrong</h2>
          <p>Give this page a refresh!</p>
        </div>
      );
    }

    // if no error, return child components
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default ErrorBoundary;
