/* eslint-disable no-confusing-arrow, multiline-ternary, no-nested-ternary */

import React from 'react';
import WorkflowRuleContainer from './workflow-rule-container';

const WorkflowRulesList = ({ rules, workflow }) => {
  const findCount = wf =>
    wf && wf.retirement && wf.retirement.options ?
          wf.retirement.options.count : 'n/a';

  const noOp = () => null;

  return (
    <div className="workflow-rules-list">
      <h3 className="form-label">Configure Rules</h3>
      <input type="checkbox" className="workflow-rule-list__rule-enable" disabled="true" checked="true" /><p><small><strong>Basic Subject Retirement</strong></small></p>
      <p className="workflow-rule-list__rule-description"><small>Use this option to set one retirement rule for every subject.</small></p>
      <p className="workflow-rule-list__rule-option">
        <span className="form-label">Classification Count</span>&nbsp;
        <input type="text" value={findCount(workflow)} disabled={!workflow} onChange={noOp} />
      </p>
      <hr />
      <input type="checkbox" className="workflow-rule-list__rule-enable" disabled={!workflow} checked={false} /><p><small><strong>Custom Subject Retirement</strong></small></p>
      <p className="workflow-rule-list__rule-description"><small>Use this option to remove some subjects before others; e.g. retire blank images quicker than images in which users say they see something</small></p>
      {(rules && rules.length) ?
        <div>
          {rules.map((rule, idx) => <WorkflowRuleContainer rule={rule} key={idx} disabled={!workflow} />)}
        </div>
      : <span>no rules</span>}
    </div>
  );
};

WorkflowRulesList.propTypes = {
  rules: React.PropTypes.arrayOf(React.PropTypes.shape({ foo: React.PropTypes.string })),
  workflow: React.PropTypes.shape({}) // TODO: fill this in
};

export default WorkflowRulesList;
