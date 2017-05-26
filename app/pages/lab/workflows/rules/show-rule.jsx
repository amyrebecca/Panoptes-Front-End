import React from 'react';

const ShowRule = ({ rule, onEdit }) =>
  <div>
    <p>Showing a rule ({rule.foo})</p>
    <button onClick={onEdit}>Edit</button>
  </div>;

ShowRule.propTypes = {
  // rule: React.PropTypes.shape({ foo: React.PropTypes.string }),
  // onEdit: React.PropTypes.func
};

export default ShowRule;
