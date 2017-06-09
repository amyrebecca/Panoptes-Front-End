/* eslint-disable no-confusing-arrow, multiline-ternary, no-nested-ternary */
import React from 'react';
import WorkflowRulesList from './workflow-rules-list';

function findCount(wf) {
  return wf && wf.retirement && wf.retirement.options ?
        wf.retirement.options.count.toString() : '';
}

class WorkflowRulesListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      basicCount: null
    };

    this.updateBasicCount = this.updateBasicCount.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ basicCount: findCount(nextProps.workflow) });
  }

  saveBasicCount() {
    this.props.workflow.retirement.options.count = this.state.basicCount;
    this.props.workflow.save();
  }

  updateBasicCount(evt) {
    this.setState({ basicCount: evt.nativeEvent.target.value });
  }

  render() {
    return (<WorkflowRulesList
      basicCount={this.state.basicCount}
      onUpdateBasicCount={this.updateBasicCount}
      onSaveBasic={this.saveBasicCount}
      {...this.props}
    />);
  }
}

WorkflowRulesListContainer.propTypes = {
  rules: React.PropTypes.arrayOf(React.PropTypes.shape({ foo: React.PropTypes.string })),
  workflow: React.PropTypes.shape({ retirement: React.PropTypes.object, save: React.PropTypes.func }), // TODO: fill this in
  onAddRule: React.PropTypes.func,
  onDeleteRule: React.PropTypes.func,
  onSaveRule: React.PropTypes.func,
  onSelectFullCustom: React.PropTypes.func
};

WorkflowRulesList.defaultProps = {
  workflow: {}
};

export default WorkflowRulesListContainer;
