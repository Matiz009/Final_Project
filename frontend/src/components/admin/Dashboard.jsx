import React from "react";
import { Link } from "react-router-dom";

const Box = ({ title, value }) => (
  <div>
    <h3>
      {title === "Income"}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Dashboard = () => {
  return (
    <section className="dashboard">
      <main>
        <article>
          <Box title="Users" value={213} />
          <Box title="Orders" value={23} />
          <Box title="Income" value={21323} />
        </article>

        <section>
          <div>
            <Link to="/admin/orders">View Orders</Link>
            <Link to="/admin/users">View Users</Link>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
