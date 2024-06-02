import useAuth from "../../../hukse/useAuth";

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
        <h2 className='text-3xl'>
            <span>Hi, welcome</span>
        </h2>
        {
            user?.displayName ? user.displayName : 'Back'
        }
    </div>
    );
};

export default UserHome;