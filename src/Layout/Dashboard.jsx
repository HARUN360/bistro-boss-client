
import { FaAd, FaBook, FaCalendar, FaCalendarMinus, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils,  } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hukse/useCart';
import useAdmin from '../hukse/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    // todo: get isAdmin value from the database
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu'>
                   {
                    isAdmin ? 
                    <>
                     <li>
                        <NavLink to='/dashboard/AdminHome'> <FaHome></FaHome> Admin Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItems'> <FaUtensils></FaUtensils> Add Items </NavLink>
                    </li>
                 
                    <li>
                        <NavLink to='/dashboard/manageItems'> <FaList></FaList> Manage Items </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'> <FaBook></FaBook> Manage Bookins</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/users'> <FaUser></FaUser> All Users</NavLink>
                    </li>
                    </> 
                    :
                    <>
                     <li>
                        <NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation </NavLink>
                    </li>
                 
                    <li>
                        <NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My cart ({cart.length}) </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'> <FaAd></FaAd> add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/paymentHistory'> <FaList></FaList> Payment Real History</NavLink>
                    </li>
                    </>
                   }
                    {/* shared common nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'> <FaHome></FaHome>Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'> <FaCalendarMinus></FaCalendarMinus>Menu </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'> <FaEnvelope></FaEnvelope>Contact </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'> <FaShoppingCart></FaShoppingCart>Shop </NavLink>
                    </li>
              
                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;