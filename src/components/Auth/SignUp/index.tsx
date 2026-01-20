"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { registerUser } from "@/lib/apiMock";
import { useContext, useState } from "react";
import Loader from "@/components/Common/Loader";
import AuthDialogContext from "@/app/context/AuthDialogContext";
import { User } from "lucide-react";

const SignUp = ({ signUpOpen }: { signUpOpen?: any }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const authDialog = useContext(AuthDialogContext);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setLoading(true);
        const data = new FormData(e.currentTarget);
        const value = Object.fromEntries(data.entries());
        const finalData = { ...value };

        // Use client-side mock for registration (static export)
        registerUser(finalData)
            .then((data: any) => {
                toast.success("Successfully registered");
                setLoading(false);
                router.push("/");
            })
            .catch((err: any) => {
                toast.error(err?.message || "Registration failed");
                setLoading(false);
            });
        setTimeout(() => {
            signUpOpen(false);
        }, 1200);
        authDialog?.setIsUserRegistered(true);

        setTimeout(() => {
            authDialog?.setIsUserRegistered(false);
        }, 1100);

    };

    return (
        <>
            <div className="mb-10 text-left mx-auto inline-block max-w-[160px]">
                <h1 className="text-2xl font-semibold flex items-center gap-2">
                    <User className="w-6 h-6 sm:w-7 sm:h-7" />
                    Sign Up
                </h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-[22px] flex gap-4">
                <input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    required
                    className="w-2/2 rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-4 py-3 text-base text-dark outline-none transition placeholder:text-gray-300 focus:border-primary dark:text-white dark:focus:border-primary"
                />
                <input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    required
                    className="w-2/2 rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-4 py-3 text-base text-dark outline-none transition placeholder:text-gray-300 focus:border-primary dark:text-white dark:focus:border-primary"
                />
                </div>

                <div className="mb-[22px]">
                    <input
                        type="date"
                        placeholder="Date of Birth"
                        name="dateOfBirth"
                        required
                        className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-[22px]">
                    <input
                        type="text"
                        placeholder="Gender"
                        name="gender"
                        required
                        className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-[22px]">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-[22px]">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-9">
                    <button
                        type="submit"
                        className="flex w-full cursor-pointer items-center justify-center rounded-md bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:!bg-darkprimary dark:hover:!bg-darkprimary"
                    >
                        Sign Up {loading && <Loader />}
                    </button>
                </div>
            </form>
        </>
    );
};

export default SignUp;
