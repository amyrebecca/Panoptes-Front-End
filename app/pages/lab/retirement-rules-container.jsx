import React from 'react';

class RetirementRulesContainer extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

RetirementRulesContainer.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default RetirementRulesContainer;
