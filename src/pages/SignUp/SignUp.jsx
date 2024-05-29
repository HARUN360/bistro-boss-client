import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hukse/useAxiosPublic";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserPhofile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(reseult => {
                console.log(reseult.user);
                updateUserPhofile(data.name, data.photourl)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,

                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Create a succesfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })

                    })
                    
            })
            .catch(error => console.error(error))
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss Restaurant/signUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter Your Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-700">This Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photourl", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photourl && <span className="text-red-700">Photo URl is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-700">This email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    // pattern: /(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/

                                })} name="password" placeholder="password" className="input input-bordered" />
                                {/* {errors.password && <span>This field is required</span>} */}
                                {errors.password?.type === "required" && (
                                    <p role="alert" className="text-red-600">Password  is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p role="alert" className="text-red-600">Password  must be 6 character</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p role="alert" className="text-red-600">Password  must be less then 20 character</p>
                                )}
                                {/* {errors.password?.type === "pattern" && (
                                    <p role="alert" className="text-red-600">Password must have one uppercase,onelowercase, one number and one specila character</p>
                                )} */}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="SignUP" className="btn btn-primary" />
                                {/* <button className="btn btn-primary">Login</button> */}
                            </div>
                        </form>
                        <p className="px-6"><small>Already have an account? <Link to='/login'>Please login</Link></small></p>
                    <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;