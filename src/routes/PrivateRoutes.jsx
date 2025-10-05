import Header from "../components/common/Header";
import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";
import ProfileProvider from "../providers/ProfileProvider";
import PostProvider from "../providers/PostProvider";


const PrivateRoutes = () => {

    const { auth } = useAuth();

    return (
        <>
            {
                auth.authToken ? (
                    <>
                        <PostProvider>
                            <ProfileProvider>
                                <Header />
                                <main className="mx-auto max-w-[1020px] py-8">
                                    <div className="container">
                                        <Outlet />
                                    </div>
                                </main>
                            </ProfileProvider>
                        </PostProvider>
                    </>
                ) : (
                    <Navigate to="/login" />
                )
            }
        </>
    );
};

export default PrivateRoutes;