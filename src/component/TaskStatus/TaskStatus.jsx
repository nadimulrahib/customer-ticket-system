import TaskCards from "../TaskCards/TaskCards";

const TaskStatus = ({ cardClick }) => {

  return (
    <div>
      <div className="title flex flex-col gap-3.5">
        <p className="task text-2xl">Task Status</p>

    {
      cardClick.length===0?<p>Select a ticket to add to Task Status</p>     
     : <div className="customer flex flex-col gap-5">
        {cardClick.map((customer) => (
          <TaskCards customer={customer}></TaskCards>
        ))}
      </div>
    }

   
      </div>

    </div>
  );
};

export default TaskStatus;
