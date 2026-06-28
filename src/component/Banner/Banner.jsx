const Banner = ({cardClick, resolve}) => {
  return (
    <div>
      <div className="card-wrap grid grid-cols-2 gap-8 mt-10">
        <div className="lieaner bg-linear-to-r from-[#632EE3] to-[#9F62F2] h-52 rounded-2xl flex items-center justify-center">
          <div className="item flex flex-col items-center gap-3">
            <p className="inProgress  text-2xl text-white">In-Progress</p>
            <h1 className="number text-5xl text-white">{cardClick.length}</h1>
          </div>
        </div>
        <div className="lieaner bg-linear-to-r from-[#54CF68] to-[#00827A] h-52 rounded-2xl flex items-center justify-center">
          <div className="item flex flex-col items-center gap-3">
            <p className="inProgress  text-2xl text-white">Resolved</p>
            <h1 className="number text-5xl text-white">{resolve.length}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
