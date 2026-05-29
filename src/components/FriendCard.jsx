 import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {

  const {
    id,
    name,
    picture,
    days_since_contact,
    tags,
    status,
  } = friend;

  const statusColors = {
    overdue: "bg-red-100 text-red-500",
    "almost due": "bg-yellow-100 text-yellow-500",
    "on-track": "bg-green-100 text-green-500",
  };

  return (
    <Link to={`/friend/${id}`}>
      <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300">

        <img
          src={picture}
          alt={name}
          className="w-20 h-20 rounded-full object-cover mx-auto"
        />

        <h2 className="text-xl font-bold text-center mt-4">
          {name}
        </h2>

        <p className="text-center text-gray-500 mt-2">
          {days_since_contact} days ago
        </p>

        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {
            tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))
          }
        </div>

        <div className="mt-5 text-center">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColors[status]}`}
          >
            {status}
          </span>
        </div>

      </div>
    </Link>
  );
};

export default FriendCard;