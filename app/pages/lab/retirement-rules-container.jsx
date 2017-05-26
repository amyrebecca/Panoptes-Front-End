import React from 'react';
import getWorkflowsInOrder from '../../lib/get-workflows-in-order';

class RetirementRulesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rules: [
        { foo: 'bar' },
        { foo: 'baz' }
      ],
      selectedWorkflow: null,
      workflows: []
    };

    this.fetchWorkflows = this.fetchWorkflows.bind(this);
    this.selectWorkflow = this.selectWorkflow.bind(this);
  }

  componentDidMount() {
    this.fetchWorkflows(this.props.project);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.project === nextProps.project) return;
    this.fetchWorkflows(nextProps.project);
  }

  fetchWorkflows(project) {
    getWorkflowsInOrder(project, { fields: ['display_name', 'retirement'] }).then((workflows) => {
      this.setState({ workflows, loading: false });
    });
  }

  selectWorkflow(workflow) {
    this.setState({ selectedWorkflow: workflow });
  }

  render() {
    return React.cloneElement(this.props.children, {
      rules: this.state.rules,
      workflows: this.state.workflows,
      selectedWorkflow: this.state.selectedWorkflow,
      onSelectWorkflow: this.selectWorkflow
    });
  }
}

RetirementRulesContainer.propTypes = {
  children: React.PropTypes.element.isRequired,
  /* eslint-disable react/no-unused-prop-types */ // linter is confused
  project: React.PropTypes.shape({ id: React.PropTypes.string })
  /* eslint-enable */
};

export default RetirementRulesContainer;
