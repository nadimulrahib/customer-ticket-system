import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./component/Banner/Banner";
import Customers from "./component/Customers/Customers";
import Navbar from "./component/Navbar/Navbar";
import TaskStatus from "./component/TaskStatus/TaskStatus";
import ResolveStatus from "./component/ResolveStatus/ResolveStatus";

const customers = async () => {
  const customersData = await fetch("/customer.json");
  const res = await customersData.json();
  return res;
};

const customersPromise = customers();
function App() {
  const [cardClick, setCardClick] = useState([]);
  const [resolve, setResolve] = useState([]);

  const handleCompleted = (customersData) => {

    const filterData = cardClick.filter((p) => p.id !== customersData.id);
    setCardClick(filterData);

    const resolveData = resolve.filter((r)=>r.id!==customersData.id)
    setResolve(resolveData)

    setResolve((prev)=>[...prev,customersData])

  };

  return (
    <>
      <div className="app container mx-auto">
        <Navbar />
        <Banner cardClick={cardClick} resolve={resolve}></Banner>
        <div className="cardAndTaskWrap flex gap-9 mt-10">
          <Suspense
            fallback={<span className="loading loading-ring loading-xl"></span>}
          >
            <Customers
              className="customer w-[60%] "
              customersPromise={customersPromise}
              setCardClick={setCardClick}
              cardClick={cardClick}
            ></Customers>
          </Suspense>

          <div className="taskbar flex flex-col gap-8">
            <TaskStatus
              cardClick={cardClick}
              handleCompleted={handleCompleted}
            ></TaskStatus>
            <ResolveStatus resolve={resolve}></ResolveStatus>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
