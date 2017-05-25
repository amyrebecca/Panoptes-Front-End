import React from 'react';

class EditRule extends React.Component {
  render() {
    return (
      <div>
        <span>editing a rule</span>
        <button onClick={this.props.onCancel}>Cancel</button>
        <button onClick={this.props.onSave}>Save</button>
      </div>
    );
  }
}

EditRule.propTypes = {
  rule: React.PropTypes.shape({}),
  onCancel: React.PropTypes.func,
  onSave: React.PropTypes.func
};

export default EditRule;
