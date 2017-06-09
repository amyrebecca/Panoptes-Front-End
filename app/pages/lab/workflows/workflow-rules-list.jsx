/* eslint-disable no-confusing-arrow, multiline-ternary, no-nested-ternary */

import React from 'react';
import WorkflowRuleContainer from './workflow-rule-container';

const WorkflowRulesList = ({
  rules,
  workflow,
  onSaveBasic,
  onAddRule,
  onDeleteRule,
  onSaveRule,
  onSelectFullCustom,
  basicCount,
  onUpdateBasicCount
}) => {
  const count = basicCount || '';

  const isFullCustom = wf =>
    wf && wf.nero_config && wf.nero_config.full_custom;

  return (
    <div className="workflow-rules-list">
      <h3 className="form-label">Configure Rules</h3>
      <input type="checkbox" className="workflow-rule-list__rule-enable" disabled="true" checked="true" />
      <p><small><strong>Basic Subject Retirement</strong></small></p>
      <p className="workflow-rule-list__rule-description">
        <small>Use this option to set one retirement rule for every subject.</small>
      </p>
      <p className="workflow-rule-list__rule-option">
        <span className="form-label">Classification Count</span>&nbsp;
        <input type="text" value={count} disabled={!workflow} onChange={onUpdateBasicCount} />
      </p>
      <button
        className="workflow-rule-list__button standard-button"
        disabled={!workflow}
        onClick={onSaveBasic}
      >Save</button>
      <hr />
      <input
        type="radio"
        name="custom_rule_type"
        className="workflow-rule-list__rule-enable"
        disabled={!workflow || isFullCustom(workflow)}
        checked={!isFullCustom(workflow)}
      />
      <p><small><strong>Custom Subject Retirement</strong></small></p>
      <p className="workflow-rule-list__rule-description">
        <small>
          Use this option to remove some subjects before others;
          e.g. retire blank images quicker than images in which users say they see something
        </small>
      </p>
      {(rules && rules.length) ?
        <div>
          { rules.map((rule, idx) => { // eslint-disable-line arrow-body-style
            return (
              <WorkflowRuleContainer
                rule={rule}
                ruleId={idx}
                key={idx}
                disabled={!workflow}
                onDeleteRule={onDeleteRule}
                onSaveRule={onSaveRule}
              />);
          })}
        </div>
      : <p className="form-label workflow-rule-list__rule-description">&nbsp;&nbsp;No rules have been defined</p>}
      <button
        className="workflow-rule-list__button standard-button"
        disabled={!workflow || isFullCustom(workflow)}
        onClick={onAddRule}
      >Add Rule</button>
      <hr />
      <input
        type="radio"
        name="custom_rule_type"
        className="workflow-rule-list__rule-enable"
        disabled={!workflow}
        checked={isFullCustom(workflow)}
        onClick={onSelectFullCustom}
      />
      <p><small><strong>Custom JSON Configuration</strong></small></p>
      <p className="workflow-rule-list__rule-description">
        <small>If you would like to add even more complex rules, please get in touch via the Contact Us page</small>
      </p>
      <textarea
        className="workflow-rule-list__big-input"
        disabled={!isFullCustom(workflow)}
        value={workflow ? JSON.stringify(workflow.nero_config) : ''}
      />
      <button
        className="workflow-rule-list__button standard-button"
        disabled={!workflow || !isFullCustom(workflow)}
      >Save Custom</button>
      <button
        className="workflow-rule-list__button minor-button"
        disabled={!workflow || !isFullCustom(workflow)}
      >Cancel</button>
    </div>
  );
};

WorkflowRulesList.propTypes = {
  rules: React.PropTypes.arrayOf(React.PropTypes.shape({ foo: React.PropTypes.string })),
  workflow: React.PropTypes.shape({}), // TODO: fill this in
  onAddRule: React.PropTypes.func,
  onDeleteRule: React.PropTypes.func,
  onSaveRule: React.PropTypes.func,
  onSelectFullCustom: React.PropTypes.func,
  onSaveBasic: React.PropTypes.func,
  onUpdateBasicCount: React.PropTypes.func,
  basicCount: React.PropTypes.string
};

WorkflowRulesList.defaultProps = {
  workflow: {},
  basicCount: '0',
  onUpdateBasicCount: () => null
};

export default WorkflowRulesList;
