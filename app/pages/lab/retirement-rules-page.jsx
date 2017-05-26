import React from 'react';
import WorkflowRulesList from './workflows/workflow-rules-list';
import WorkflowsList from './workflows/workflows-list';

const RetirementRulesPage = ({ rules, workflows, selectedWorkflow, onSelectWorkflow }) =>
  <div className="retirement-rules-page">
    <h2 className="form-label">Retirement Rules</h2>
    <p>Use the Retirement Rules to set how many users need to make a classification on a single subject before it is considered Retired. The larger the number, the more certain you can be of the aggregated result, but the longer it will take to complete your project.</p>
    <p>Custom Retirement Rules can filter out blank or empty images, or create a new subject set from a specific type of image</p>
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
