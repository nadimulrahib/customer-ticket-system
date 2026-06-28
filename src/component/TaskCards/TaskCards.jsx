
const TaskCards = ({customer}) => {
    return (
        <div>
            <div className='taskCards bg-white shadow-2xl p-3 flex flex-col gap-3'>
                <h3 className='cardHeading text-2xl font-medium '>{customer.title}</h3>
                <button className='btn p-4 bg-[#02A53B] text-center text-[18px] text-white'>Complete</button>
            </div>
        </div> 
    );
};

export default TaskCards;