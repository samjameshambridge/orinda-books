import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    console.log("rendering");
    const { error, errorInfo } = this.state,
      { children } = this.props;
    console.log("rendering", error);
    if (error) {
      console.log("returning error boundary");
      return (
        <div>
          <h2>{"Oh-no! Something went wrong"}</h2>
          <p className="red">{error && error.toString()}</p>
          <div>{"Component Stack Error Details: "}</div>
          <p className="red">{errorInfo.componentStack}</p>
        </div>
      );
    }

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
