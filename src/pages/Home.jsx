import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import FriendCard from "../components/FriendCard";
const Home = () => {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("/friends.json")
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            });

    }, []);
    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
    return (
        <div>

            <Banner />

            <div className="my-16">

                <h2 className="text-4xl font-bold mb-10 text-center">
                    Your Friends
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {
                        friends.map(friend => (
                            <FriendCard
                                key={friend.id}
                                friend={friend}
                            />
                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default Home;











