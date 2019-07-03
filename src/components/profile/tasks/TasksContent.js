import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TaskCard from "components/profile/tasks/TaskCard";
import EmptyTasksContent from "components/profile/tasks/EmptyTasksContent";
import AddNewTask from "components/profile/tasks/AddNewTask";

function TasksContent({ tasks }) {
  let content;

  if (tasks) {
    content = (
      <React.Fragment>
        <AddNewTask />
        {tasks.map(task => {
          return <TaskCard key={task.title} task={task} />;
        })}
      </React.Fragment>
    );
  } else {
    content = <EmptyTasksContent />;
  }

  return (
    <div className="profile-related-content-container tasks-page-content-container">
      {content}
    </div>
  );
}

TasksContent.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      deadline: PropTypes.string,
      notes: PropTypes.string
    })
  )
};

const mapStateToProps = ({
  firebase: {
    profile: { tasks }
  }
}) => {
  return {
    tasks
  };
};

export default connect(mapStateToProps)(TasksContent);
