import React from 'react'
import AcceptedTask from './AcceptedTask'
import { NewTask } from './NewTask'
import CompletedTask from './CompletedTask'
import { FailedTask } from './FailedTask'

export const TaskList = ({ data }) => {
  return (
    <div  className="flex gap-5 overflow-x-auto flex-nowrap mt-10 h-[55%] py-2 w-full text-white">
      {data.tasks.map((task, idx) => {
        // Render components based on task properties
        if (task.new_task) {
          return <NewTask key={idx} data={task}/>;
        }
        if (task.active) {
          return <AcceptedTask key={idx} data={task}/>;
        }
        if (task.completed) {
          return <CompletedTask key={idx} data={task}/>;
        }
        if (task.failed) {
          return <FailedTask key={idx} data={task}/>;
        }
      })}
    </div>
  );
};
