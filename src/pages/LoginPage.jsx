import React from 'react';
import AuthIllustration from '../assets/images/auth_illustration.png';
import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
    return (
        <main
            className="flex min-h-screen items-center justify-center bg-deepDark py-8"
        >
            <div className="max-w-[1368px] flex-1">
                <div className="container grid items-center gap-8 lg:grid-cols-2">
                    {/* illustration and title */}
                    <div>
                        <img
                            className="mb-12 max-w-full max-lg:hidden"
                            src={AuthIllustration}
                            alt="auth_illustration"
                        />
                        <div>
                            <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">Share Idea</h1>
                            <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
                                Connect, collaborate, and grow by sharing your thoughts with the world. Log in to your account to join conversations, discover new perspectives, and contribute your own ideas. Your voice matters here—sign in and start sharing today!
                            </p>
                        </div>
                    </div>

                    {/* <!-- login form --> */}
                    <div className="card">
                        {/* Login Form */}
                        <LoginForm />
                        <div className="py-4 lg:py-6">
                            <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                                Dont have account?
                                <Link
                                    className="text-white transition-all hover:text-myGreen hover:underline"
                                    to="/register"
                                >Create New
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;