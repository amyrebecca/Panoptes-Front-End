import React from 'react';

import ShowRule from './show-rule.jsx';

class WorkflowRuleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rule: props.rule,
      dirty: false
    };

    this.onChangeRule = this.onChangeRule.bind(this);
    this.deleteRule = this.deleteRule.bind(this);
    this.saveRule = this.saveRule.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rule) {
      this.setState({ rule: nextProps.rule, dirty: false });
    }
  }

  onChangeRule(count, answer) {
    this.setState({
      rule: { answer, count, dirty: true }
    });
  }

  deleteRule() {
    this.props.onDeleteRule(this.props.ruleId);
  }

  saveRule() {
    this.props.onSaveRule(this.props.ruleId, this.state.rule);
  }

  render() {
    return (
      <ShowRule
        rule={this.state.rule}
        onDeleteRule={this.deleteRule}
        onSaveRule={this.saveRule}
        onChangeRule={this.onChangeRule}
        disabled={this.props.disabled}
      />
    );
  }
}

WorkflowRuleContainer.propTypes = {
  rule: React.PropTypes.shape({}).isRequired, // TODO: fill this out
  ruleId: React.PropTypes.number,
  disabled: React.PropTypes.bool.isRequired,
  onDeleteRule: React.PropTypes.func,
  onSaveRule: React.PropTypes.func
};

WorkflowRuleContainer.defaultProps = {
  disabled: false
};

export default WorkflowRuleContainer;
