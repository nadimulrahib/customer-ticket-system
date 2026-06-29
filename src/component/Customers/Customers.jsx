import { use } from "react";
import Customer from "../Customer/Customer";

const Customers = ({ customersPromise, setCardClick, cardClick }) => {
  const customersData = use(customersPromise);
  return (
    <div>
      <div className="card grid grid-cols-1 lg:grid-cols-2 gap-6">
        {customersData.map((singleCustomer) => (
          <Customer key={singleCustomer.id} singleCustomer={singleCustomer} setCardClick={setCardClick} cardClick={cardClick}></Customer>


        ))}
      </div>
    </div>
  );
};

export default Customers;
