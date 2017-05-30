import React from 'react';
import getWorkflowsInOrder from '../../lib/get-workflows-in-order';

class RetirementRulesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nero_config: {
        extractors: { s: { type: 'survey', task_key: 'T0' }},
        reducers: { s: { type: 'stats' }},
        rules: [
          {
            /* eslint-disable quote-props */
            'if': ['gte', ['lookup', 's.VHCL', 0], ['const', 1]],
            'then': [{ action: 'retire_subject', reason: 'flagged' }]
            /* eslint-enable */
          }
        ]
      },
      rules: [],
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
    const rules = [
      { answer: 'HUMAN', count: 2 },
      { answer: '__ANY__', count: 5 }
    ];

    workflow.nero_config = this.state.nero_config; // eslint-disable-line no-param-reassign
    this.setState({ selectedWorkflow: workflow, rules });
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
