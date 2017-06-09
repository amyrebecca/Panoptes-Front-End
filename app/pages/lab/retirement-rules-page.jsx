import React from 'react';
import WorkflowsList from './workflows/workflows-list';
import WorkflowRulesListContainer from './workflows/workflow-rules-list-container';

/* eslint-disable max-len */
const RetirementRulesPage = ({ rules, workflows, selectedWorkflow, onAddRule, onSelectWorkflow, onSelectFullCustom, onDeleteRule, onSaveRule }) =>
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
        <WorkflowRulesListContainer rules={rules} workflow={selectedWorkflow} onSelectFullCustom={onSelectFullCustom} onAddRule={onAddRule} onDeleteRule={onDeleteRule} onSaveRule={onSaveRule} />
      </div>
    </div>
  </div>;
/* eslint-enable */

RetirementRulesPage.propTypes = {
  workflows: React.PropTypes.arrayOf(React.PropTypes.object),
  rules: React.PropTypes.arrayOf(React.PropTypes.object), // TODO: fill this in
  selectedWorkflow: React.PropTypes.shape({}), // TODO: fill this in
  onAddRule: React.PropTypes.func,
  onDeleteRule: React.PropTypes.func,
  onSaveRule: React.PropTypes.func,
  onSelectWorkflow: React.PropTypes.func,
  onSelectFullCustom: React.PropTypes.func
};

export default RetirementRulesPage;
