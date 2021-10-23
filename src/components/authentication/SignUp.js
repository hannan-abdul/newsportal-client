import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { CgSpinner } from 'react-icons/cg';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './Login.css';

const SignUp = () => {
    const [error, setError] = useState(false);
    const [pending, setPending] = useState(false);
    const history = useHistory()
    const { handleSubmit, register } = useForm();
    const onSubmit = async (data) => {
        const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: "user",
        }
        console.log(userData);
        setPending(true)
        try {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:5050/api/auth/register',
                data: userData
            });
            console.log('server side response', res)
            res && history.push("/login")

        } catch (err) {
            setError(true);
            setPending(false);
            console.log(err);
        }
    }

    return (
        <div className="text-center container mt-3 ">
            <div class="form-fix">
                <h3 class="mt-4 mb-4">
                    User Signup
                </h3>
                <div class="p-6 mt-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="flex flex-col mb-2">
                            <div class="">
                                <input type="text" id="create-account-pseudo" class="border py-2 px-4" placeholder="Your Full Name"
                                    {...register("name")} />
                            </div>
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class="">
                                <input type="email" id="create-account-pseudo" class="border py-2 px-4" placeholder="Your Email Address"
                                    {...register("email")} />
                            </div>
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class="">
                                <input type="password" class="border py-2 px-4" placeholder=" Password"
                                    {...register("password")} />
                            </div>
                        </div>
                        <div class="flex w-full my-2">

                            <button type="submit" class="border py-2 px-4 rounded">
                                {pending ? <CgSpinner class="animate-spin text-xl" /> : "Sign up"}
                            </button>
                        </div>
                        <div class="mb-3">
                            Already have an account ?
                            <Link to="login" class="">
                                Log in
                            </Link>
                        </div>
                        {error && <span style={{ color: 'red', marginTop: '10px' }}>Something went wrong!</span>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;