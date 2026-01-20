"use client";
import { signIn, useSession } from "@/lib/authMock";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AuthDialogContext from "@/app/context/AuthDialogContext";
import { User } from "lucide-react";


const Signin = ({ signInOpen }: { signInOpen?: any }) => {
    const { data: session } = useSession();
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("admin123");
    const [error, setError] = useState("");
    const authDialog = useContext(AuthDialogContext);


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });
        if (result?.error) {
            setError(result.error);
        }
        if (result?.status === 200) {
            setTimeout(() => {
                signInOpen(false);
            }, 1200);
            authDialog?.setIsSuccessDialogOpen(true);
            setTimeout(() => {
                authDialog?.setIsSuccessDialogOpen(false);
            }, 1100);
        } else {
            authDialog?.setIsFailedDialogOpen(true);
            setTimeout(() => {
                authDialog?.setIsFailedDialogOpen(false);
            }, 1100);
        }
    };

    return (
        <>
            <div className="mb-10 text-left mx-auto inline-block max-w-[160px]">
                <h1 className="text-2xl font-semibold flex items-center gap-2">
                    <User className="w-6 h-6 sm:w-7 sm:h-7" />
                    Sign In
                </h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-[22px]">
                    <input
                        type="text"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full rounded-md border placeholder:text-gray-400  border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-[22px]">
                    <input
                        type="password"
                        required
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-9">
                    <button
                        type="submit"
                        className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary hover:bg-darkprimary dark:hover:!bg-darkprimary px-5 py-3 text-base text-white transition duration-300 ease-in-out "
                    >
                        Sign In
                    </button>

                </div>
            </form>

            <Link
                href="/"
                className="mb-2 inline-block text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
            >
                Forget Password?
            </Link>
        </>
    );
};

export default Signin;