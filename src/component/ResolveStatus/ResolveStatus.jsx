import ResolveCard from "../ResolveCard/ResolveCard";

const ResolveStatus = ({resolve}) => {
  return (
    <div>
      <div className="title flex flex-col gap-3.5">
        <p className="task text-2xl">Resolved Task</p>
        <p>No resolved tasks yet.</p>
        {
            resolve.map((resolveCard)=><ResolveCard resolveCard={resolveCard}></ResolveCard>)
        }
      </div>
    </div>
  );
};

export default ResolveStatus;
