import React from 'react'
import { useEffect } from 'react';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const user = "";
    const {
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    useEffect(() => {
        user && navigate("/dashboard")
    }, [user]);

    return ( 
        <div className="w-full min-h-screen flex tems-center justify-center flex-col lg:flex-row bg-white">
            <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
                {/* left side */}
                <div className="h-full w-full lg:w-2/3 flex flex-col items-center justfiy-center">
                    <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justfy-center gap-5 md:gap-y-10 2xl:-mt-20'>
                        <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600'>Manage all your tasks in one place!</span>

                    </div>
                </div>

                {/* right side */}
                <div></div>

            </div>
        </div>
    );
};

export default Login