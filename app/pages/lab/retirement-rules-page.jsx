import React from 'react';
import WorkflowsList from './workflows/workflows-list';
import WorkflowRulesList from './workflows/workflow-rules-list';

const RetirementRulesPage = ({ rules, workflows, selectedWorkflow, onSelectWorkflow, onSelectFullCustom }) =>
  <div className="retirement-rules-page">
    <h2 className="form-label">Retirement Rules</h2>
    <p>Use the Retirement Rules to set how many users need to make a classification on a single subject before it is considered Retired. The larger the number, the more certain you can be of the aggregated result, but the longer it will take to complete your project.</p>
    <p>Custom Retirement Rules can filter out blank or empty images, or create a new subject set from a specific type of image</p>
    <div className="columns-container">
      <div className="column">
        <WorkflowsList workflows={workflows} onChange={onSelectWorkflow} />
      </div>
      <hr />
      <div className="column">
        <WorkflowRulesList workflow={selectedWorkflow} rules={rules} onSelectFullCustom={onSelectFullCustom} />
      </div>
    </div>
  </div>;

RetirementRulesPage.propTypes = {
  rules: React.PropTypes.arrayOf(React.PropTypes.object),
  workflows: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedWorkflow: React.PropTypes.shape({}), // TODO: fill this in
  onSelectWorkflow: React.PropTypes.func,
  onSelectFullCustom: React.PropTypes.func
};

export default RetirementRulesPage;
