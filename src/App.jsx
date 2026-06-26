import { Suspense } from "react";
import "./App.css";
import Banner from "./component/Banner/Banner";
import Customers from "./component/Customers/Customers";
import Navbar from "./component/Navbar/Navbar";

const customers = async () => {
  const customersData = await fetch("/customer.json");
  const res = await customersData.json();
  return res;
};

function App() {
  const customersPromise = customers();
  console.log(customersPromise);

  return (
    <>
      <div className="app container mx-auto">
        <Navbar />
        <Banner></Banner>
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <Customers customersPromise={customersPromise}></Customers>
        </Suspense>
      </div>
    </>
  );
}

export default App;
