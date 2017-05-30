import React from 'react';

const ShowRule = ({ rule, onChangeRule }) => {
  const getOptions = () => [
    { label: '(Any Answer)', value: '__ANY__' },
    { label: '(Nothing Here)', value: '__BLANK__' },
    { label: 'Anteater', value: 'ANTEATER' },
    { label: 'Bear', value: 'BEAR' },
    { label: 'Human', value: 'HUMAN' },
    { label: 'Penguin', value: 'PENGUIN' },
    { label: 'Walrus', value: 'WALRUS' }
  ];

  let select = null;
  const setSelect = (elem) => { select = elem; };

  let countInput = null;
  const setCountInput = (elem) => { countInput = elem; };

  const onChange = () =>
    onChangeRule(countInput.value, select.value);

  return (
    <p className="workflow-rule-list__rule-option">
      <span className="form-label">After</span>&nbsp;
      <input type="text" value={rule.count} style={{ width: '4vw' }} onChange={onChange} ref={(elem) => { setCountInput(elem); }} />
      <span className="form-label">&nbsp;instances of&nbsp;</span>
      <select value={rule.answer} ref={(elem) => { setSelect(elem); }} onChange={onChange} >
        { getOptions().map(opt =>
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        )}
      </select>&nbsp;
      <button><i className="fa fa-trash-o fa-fw" /></button>
    </p>
  );
};

ShowRule.propTypes = {
  rule: React.PropTypes.shape({ answer: React.PropTypes.string }),
  onChangeRule: React.PropTypes.func
};

export default ShowRule;
