import React from 'react';

const ShowRule = ({ rule, onEdit, disabled }) =>
  <div>
    <p>Showing a rule ({rule.foo})</p>
    <button onClick={onEdit} disabled={disabled}>Edit</button>
  </div>;

ShowRule.propTypes = {
  rule: React.PropTypes.shape({ foo: React.PropTypes.string }),
  onEdit: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool.isRequired
};

export default ShowRule;
