import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import callImg from "../assets/call.png";
import textImg from "../assets/text.png";
import videoImg from "../assets/Video.png";
import Snooze from "../assets/Snooze.png";
import Archive from "../assets/Archive.png";
import deleteImg from "../assets/delete.png";
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import toast from "react-hot-toast";

const FriendDetails = () => {
    const { addTimeline } = useContext(TimelineContext);
    const { id } = useParams();
    const [friend, setFriend] = useState(null);

    useEffect(() => {

        fetch("/friends.json")
            .then(res => res.json())
            .then(data => {

                const singleFriend = data.find(
                    friend => friend.id === parseInt(id)
                );

                setFriend(singleFriend);

            });

    }, [id]);

    if (!friend) {

        return (
            <div className="flex justify-center py-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    const {
        name,
        picture,
        email,
        status,
        tags,
        bio,
        days_since_contact,
        goal,
        next_due_date,
    } = friend;
    const statusColors = {
        overdue: "bg-red-100 text-red-500",
        "almost due": "bg-yellow-100 text-yellow-500",
        "on-track": "bg-green-100 text-green-500",
    };

    const handleCheckIn = (type) => {
        addTimeline(type, name);
        toast.success(`${type} added successfully`);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">

            {/* Left Side */}
            <div className="bg-white shadow-md rounded-2xl p-6">

                <img
                    src={picture}
                    alt={name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                />

                <h2 className="text-3xl font-bold text-center mt-5">
                    {name}
                </h2>

                <div className="text-center mt-4">
                    <span
                        className={`px-4 py-2 rounded-full font-semibold ${statusColors[status]}`}
                    >
                        {status}
                    </span>
                </div>

                <div className="flex flex-wrap gap-2 justify-center mt-5">
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

                <p className="text-gray-500 text-center mt-6">
                    {bio}
                </p>

                <p className="text-center mt-4 font-medium">
                    {email}
                </p>


                {/* Buttons */}
                <div className="space-y-3 mt-8">

                    <button className="btn text-black w-full">
                        <img
                            src={Snooze}
                            alt="Snooze"
                            className="w-4 h-4"></img>
                        Snooze 2 Weeks
                    </button>

                    <button className="btn text-black w-full">
                        <img
                            src={Archive}
                            alt="Archive"
                            className="w-4 h-4"></img>
                        Archive
                    </button>

                    <button className="btn text-red-600 w-full">
                        <img
                            src={deleteImg}
                            alt="deleteImg"
                            className="w-4 h-4"></img>
                        Delete
                    </button>

                </div>

            </div>

            {/* Right Side */}
            <div className="lg:col-span-2 space-y-6">

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div className="bg-white text-center shadow-md rounded-2xl p-6">
                        <p className="text-3xl font-bold mt-4 [#244D3F]">
                            {days_since_contact}
                        </p>
                        <h3 className="text-lg font-semibold">
                            Days Since Contact
                        </h3>


                    </div>

                    <div className="bg-white text-center shadow-md rounded-2xl p-6">
                        <p className="text-3xl font-bold mt-4 [#244D3F]">
                            {goal}
                        </p>
                        <h3 className="text-lg font-semibold">
                            Goal(days)
                        </h3>


                    </div>

                    <div className="bg-white shadow-md text-center rounded-2xl p-6">
                        <p className="text-2xl font-bold mt-4 text-[#244D3F]">
                            {next_due_date}
                        </p>
                        <h3 className="text-lg  font-semibold">
                            Next Due
                        </h3>

                    </div>

                </div>

                {/* Goal Card */}
                <div className="bg-white shadow-md rounded-2xl p-6">

                    <div className="flex justify-between items-center">

                        <h2 className="text-2xl font-bold">
                            Relationship Goal
                        </h2>

                        <button className="btn">
                            Edit
                        </button>

                    </div>

                    <p className="mt-4 text-gray-500">
                        Connect every {goal} days.
                    </p>

                </div>

                {/* Quick Check-In */}
                <div className="bg-white shadow-md rounded-2xl p-6">

                    <h2 className="text-2xl font-bold mb-6">
                        Quick Check-In
                    </h2>

                    <div className="flex flex-col md:flex-row text-2xl gap-4">

                        <button
                            onClick={() => handleCheckIn("Call")}
                            className="btn flex-1 flex items-center gap-2"
                        >
                            <img
                                src={callImg}
                                alt="call"
                                className="w-5 h-5"
                            />

                            Call
                        </button>

                        <button
                            onClick={() => handleCheckIn("Text")}
                            className="btn flex-1 flex items-center gap-2"
                        >
                            <img
                                src={textImg}
                                alt="text"
                                className="w-5 h-5"
                            />

                            Text
                        </button>

                        <button
                            onClick={() => handleCheckIn("Video")}
                            className="btn flex-1 flex items-center gap-2"
                        >
                            <img
                                src={videoImg}
                                alt="video"
                                className="w-5 h-5"
                            />

                            Video
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default FriendDetails;