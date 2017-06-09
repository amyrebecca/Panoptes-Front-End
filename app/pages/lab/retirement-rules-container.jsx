import React from 'react';
import getWorkflowsInOrder from '../../lib/get-workflows-in-order';

class RetirementRulesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sample_config: {
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
      workflows: [],
      basicCount: null
    };

    this.addRule = this.addRule.bind(this);
    this.deleteRule = this.deleteRule.bind(this);
    this.saveRule = this.saveRule.bind(this);
    this.fetchWorkflows = this.fetchWorkflows.bind(this);
    this.selectWorkflow = this.selectWorkflow.bind(this);
    this.onSelectFullCustom = this.onSelectFullCustom.bind(this);
  }

  componentDidMount() {
    this.fetchWorkflows(this.props.project);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.project === nextProps.project) return;
    this.fetchWorkflows(nextProps.project);
  }

  onSelectFullCustom() {
    const selectedWorkflow = this.state.selectedWorkflow;
    const config = Object.assign({}, this.state.selectedWorkflow.nero_config);
    selectedWorkflow.nero_config = config;

    if (selectedWorkflow && selectedWorkflow.nero_config) {
      selectedWorkflow.nero_config.full_custom = true;
    }

    this.setState({ rules: null, selectedWorkflow });
  }

  addRule() {
    const rules = this.state.rules.slice();
    rules.push({ answer: '', count: '', dirty: true });
    this.setState({ rules });
  }

  deleteRule(id) {
    let rules = this.state.rules.slice();
    rules = rules.filter((val, idx) => idx !== id);
    this.setState({ rules });
  }

  saveRule(id, rule) {
    const rules = this.state.rules.slice();
    rules[id] = Object.assign({}, rule, { dirty: false });
    this.setState({ rules });
  }

  fetchWorkflows(project) {
    getWorkflowsInOrder(project, { fields: ['display_name', 'retirement'] }).then((workflows) => {
      this.setState({ workflows, loading: false });
    });
  }

  selectWorkflow(workflow) {
    // const rules = [
    //   { answer: 'HUMAN', count: 2 },
    //   { answer: '__ANY__', count: 5 }
    // ];
    const rules = [{ answer: 'HUMAN', count: '5' }];

    // workflow.nero_config = this.state.sample_config; // eslint-disable-line no-param-reassign
    this.setState({ selectedWorkflow: workflow, rules });
  }

  render() {
    return React.cloneElement(this.props.children, {
      rules: this.state.rules,
      workflows: this.state.workflows,
      selectedWorkflow: this.state.selectedWorkflow,
      onAddRule: this.addRule,
      onDeleteRule: this.deleteRule,
      onSaveRule: this.saveRule,
      onSelectWorkflow: this.selectWorkflow,
      onSelectFullCustom: this.onSelectFullCustom
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
