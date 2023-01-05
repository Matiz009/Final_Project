import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";

ChartJS.register(Tooltip, ArcElement, Legend);
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
  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [2, 3, 4],
        backgroundColor: [
          "rgba(80,200,120,0.1)",
          "rgba(255,239,23,0.2)",
          "rgba(0,158,96,0.3)",
        ],
        borderColor: ["rgb(80,200,120)", "rgb(33,33,33)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };
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
          <aside>
            <Doughnut data={data} />
          </aside>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
