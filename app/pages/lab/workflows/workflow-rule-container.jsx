import React from 'react';

import ShowRule from './show-rule.jsx';

class WorkflowRuleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dirty: false };

    this.onChangeRule = this.onChangeRule.bind(this);
    this.onSaveRule = this.onSaveRule.bind(this);
  }

  onSaveRule() {
    this.props.workflow.save().then(() => this.setState({ dirty: false }));
    this.setState({ dirty: false });
  }

  onChangeRule() {
    this.setState({ dirty: true });
  }

  render() {
    return <ShowRule rule={this.props.rule} onChangeRule={this.onChangeRule} disabled={this.props.disabled} />;
  }
}

WorkflowRuleContainer.propTypes = {
  workflow: React.PropTypes.shape({ save: React.PropTypes.func }),
  rule: React.PropTypes.shape({}).isRequired, // TODO: fill this out
  disabled: React.PropTypes.bool.isRequired
};

WorkflowRuleContainer.defaultProps = {
  disabled: false
};

export default WorkflowRuleContainer;
