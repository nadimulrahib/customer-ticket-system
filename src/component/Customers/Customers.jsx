import { use } from "react";
import Customer from "../Customer/Customer";

const Customers = ({ customersPromise }) => {
  const customersData = use(customersPromise);
  console.log(customersData);
  return (
    <div>
      <div className="card grid grid-cols-1 lg:grid-cols-2 gap-6">
        {customersData.map((singleCustomer) => (
          <Customer key={singleCustomer.id} singleCustomer={singleCustomer}></Customer>
        ))}
      </div>
    </div>
  );
};

export default Customers;
