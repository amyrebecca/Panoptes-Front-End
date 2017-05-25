import React from 'react';

const ShowRule = ({ rule, onEdit }) =>
  <div>
    Showing a rule, neat stuff
    {rule}
    <button onClick={onEdit}>Edit</button>
  </div>;

ShowRule.propTypes = {
  rule: React.PropTypes.shape({}),
  onEdit: React.PropTypes.func
};

export default ShowRule;
