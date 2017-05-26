import React from 'react';
import WorkflowRulesList from './workflows/workflow-rules-list';
import WorkflowsList from './workflows/workflows-list';

const RetirementRulesPage = ({ rules, workflows, selectedWorkflow, onSelectWorkflow }) =>
  <div className="retirement-rules-page">
    <WorkflowsList workflows={workflows} onChange={onSelectWorkflow} />
    <WorkflowRulesList workflow={selectedWorkflow} rules={rules} />
  </div>;

RetirementRulesPage.propTypes = {
  rules: React.PropTypes.arrayOf(React.PropTypes.object),
  workflows: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedWorkflow: React.PropTypes.shape({}), // TODO: fill this in
  onSelectWorkflow: React.PropTypes.func
};

export default RetirementRulesPage;
