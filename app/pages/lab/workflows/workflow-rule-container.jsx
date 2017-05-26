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
      <EditRule rule={this.props.rule} onCancel={this.onCancelEdit} onSave={this.onSaveRule} /> :
      <ShowRule rule={this.props.rule} onEdit={this.editRule} />;
    /* eslint-enable */
  }
}

WorkflowRuleContainer.propTypes = {
  // workflow: React.PropTypes.shape({ save: React.PropTypes.func }),
  // rule: React.PropTypes.shape({})
};

export default WorkflowRuleContainer;
