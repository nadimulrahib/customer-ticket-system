import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./component/Banner/Banner";
import Customers from "./component/Customers/Customers";
import Navbar from "./component/Navbar/Navbar";
import TaskStatus from "./component/TaskStatus/TaskStatus";

const customers = async () => {
  const customersData = await fetch("/customer.json");
  const res = await customersData.json();
  return res;
};

function App() {
  const customersPromise = customers();
  console.log(customersPromise);

  const [cardClick, setCardClick] = useState([]);



  return (
    <>
      <div className="app container mx-auto">
        <Navbar />
        <Banner cardClick={cardClick}></Banner>
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
          <TaskStatus cardClick={cardClick}></TaskStatus>
        </div>
      </div>
    </>
  );
}

export default App;
