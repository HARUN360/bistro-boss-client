import { FaGoogle } from "react-icons/fa";
import useAuth from './../../hukse/useAuth';
import useAxiosPublic from "../../hukse/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
            }
            console.log(result.user);
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }

    return (
        <div className="px-6 py-4">
            <div className="divider"></div>
            <div>
                <button onClick={handleGogleSignIn} className="btn">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;