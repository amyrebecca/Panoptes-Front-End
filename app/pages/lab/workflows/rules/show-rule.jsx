import React from 'react';

const ShowRule = ({ rule }) => {
  const getOptions = () => [
    { label: '(Any Answer)', value: '__ANY__' },
    { label: '(Nothing Here)', value: '__BLANK__' },
    { label: 'Anteater', value: 'ANTEATER' },
    { label: 'Bear', value: 'BEAR' },
    { label: 'Human', value: 'HUMAN' },
    { label: 'Penguin', value: 'PENGUIN' },
    { label: 'Walrus', value: 'WALRUS' }
  ];

  return (
    <p className="workflow-rule-list__rule-option">
      <span className="form-label">After</span>&nbsp;
      <input type="text" value={rule.count} style={{ width: '4vw' }} readOnly="true" />
      <span className="form-label">&nbsp;instances of&nbsp;</span>
      <select value={rule.answer} readOnly="true">
        { getOptions().map(opt =>
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        )}
      </select>&nbsp;
      <button><i className="fa fa-trash-o fa-fw" /></button>
    </p>
  );
};

ShowRule.propTypes = {
  rule: React.PropTypes.shape({ answer: React.PropTypes.string })
};

export default ShowRule;
