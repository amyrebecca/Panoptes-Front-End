import React from 'react';

class EditRule extends React.Component {
  render() {
    return (
      <div>
        <p>editing a rule ({this.props.rule.foo})</p>
        <button onClick={this.props.onCancel}>Cancel</button>
        <button onClick={this.props.onSave}>Save</button>
      </div>
    );
  }
}

EditRule.propTypes = {
  // rule: React.PropTypes.shape({ foo: React.PropTypes.string }).isRequired,
  // onCancel: React.PropTypes.func.isRequired,
  // onSave: React.PropTypes.func.isRequired
};

export default EditRule;
