import React from 'react';

class EditRule extends React.Component {
  render() {
    return (
      <div>
        <p>editing a rule ({this.props.rule.answer})</p>
        <button onClick={this.props.onCancel} disabled={this.props.disabled}>Cancel</button>
        <button onClick={this.props.onSave} disabled={this.props.disabled}>Save</button>
      </div>
    );
  }
}

EditRule.propTypes = {
  rule: React.PropTypes.shape({ answer: React.PropTypes.string }).isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool.isRequired
};

export default EditRule;
