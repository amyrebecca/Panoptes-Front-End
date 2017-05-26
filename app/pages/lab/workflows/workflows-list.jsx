import React from 'react';

const WorkflowsList = ({ workflows, onChange }) =>
  <div className="workflows-list">
    <h3 className="form-label">Select Workflow</h3>
    <ul>
      { workflows.map((workflow) => {
        const bound = () => onChange(workflow);
        return (
          <li key={workflow.id} className="workflows-list__item" draggable="true">
            <input type="radio" name="workflow_list_workflows" onChange={bound} />
            {workflow.display_name}
          </li>
        );
      })}
    </ul>
  </div>;

WorkflowsList.propTypes = {
  workflows: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default WorkflowsList;
