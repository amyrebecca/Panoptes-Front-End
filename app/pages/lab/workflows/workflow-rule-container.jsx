import React from 'react';

import EditRule from './rules/edit-rule.jsx';
import ShowRule from './rules/show-rule.jsx';

class WorkflowRuleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { editing: false };

    this.editRule = this.editRule.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this);
    this.onSaveRule = this.onSaveRule.bind(this);
  }

  onCancelEdit() {
    this.setState({ editing: false });
  }

  onSaveRule() {
    this.props.workflow.save().then(() => this.setState({ editing: false }));

    // TODO: remove this
    this.setState({ editing: false });
  }

  editRule() {
    this.setState({ editing: true });
  }

  render() {
    /* eslint-disable multiline-ternary */
    return this.state.editing ?
      <EditRule rule={this.props.rule} onCancel={this.onCancelEdit} onSave={this.onSaveRule} disabled={this.props.disabled} /> :
      <ShowRule rule={this.props.rule} onEdit={this.editRule} disabled={this.props.disabled} />;
    /* eslint-enable */
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
