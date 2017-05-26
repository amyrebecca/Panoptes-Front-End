/* eslint-disable no-confusing-arrow, multiline-ternary */

import React from 'react';
import WorkflowRuleContainer from './workflow-rule-container';

const WorkflowRuleList = ({ rules, workflow }) =>
  <div>
    <h3>Retirement Rules</h3>
    {(rules && rules.length) ?
      <div>
        {rules.map((rule, idx) => <WorkflowRuleContainer rule={rule} key={idx} disabled={!workflow} />)}
      </div>
    : <span>no rules</span>}
  </div>;

WorkflowRuleList.propTypes = {
  rules: React.PropTypes.arrayOf(React.PropTypes.shape({ foo: React.PropTypes.string })),
  workflow: React.PropTypes.shape({}) // TODO: fill this in
};

export default WorkflowRuleList;
