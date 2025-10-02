import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { api } = useAxios();
    const { auth } = useAuth();

    useEffect(() => {
        setLoading(true);
        const fetchUserProfile = async () => {
            try {
                const response = await api.get(`/profile/${auth?.user?.id}`);
                setUser(response?.data?.user);
                setPosts(response?.data?.posts);
            } catch (error) {
                console.error("Error fetching user profile:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) {
        return <p>Fetching user profile data...</p>;
    }

    if (error) {
        return <p>Error fetching user profile</p>;
    }

    return (
        <div>
            Welcome, {user?.firstName}{' '}{user?.lastName}
            <p>You have {posts.length} posts</p>
        </div>
    );
};

export default ProfilePage;