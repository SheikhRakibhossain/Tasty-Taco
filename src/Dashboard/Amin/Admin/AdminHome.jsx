import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiousSecure from "../../../Hooks/useAxiousSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiousSecure] = useAxiousSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiousSecure("/admin-stats");
      return res.data;
    },
  });

  return (
    <>
      <h2 className="text-xl font-semibold text-center">I am main admin page</h2>
      <p className="text-2xl font-bold text-center">Admin: {user?.displayName}</p>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Revenue</div>
          <div className="stat-value text-primary">${stats.revenue}K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Products</div>
          <div className="stat-value text-secondary">{stats.products}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              
            </div>
          </div>
          <div className="stat-title">Total Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc text-accent-content">31 tasks remaining</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              
            </div>
          </div>
          <div className="stat-title">Total Orders</div>
          <div className="stat-value text-teal-500">{stats.orders}</div>
          <div className="stat-desc text-secondary">12 is pending</div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
