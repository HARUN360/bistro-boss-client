import Swal from "sweetalert2";
import useAuth from "../hukse/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hukse/useAxiosSecure";



const FoodCard = ({item}) => {
    const {name, image, price, recipe, category, _id } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const handleAddToCart = food => {
      if(user && user.email){
        console.log('food card',food, user?.email);
        // todo: send cart item to the database
        const cartItem = {
          menuId: _id,
          email: user.email,
          name, 
          image,
          price,
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })

      }
      else{
        Swal.fire({
          title: " You are not Logged In",
          text: "Please Login to the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
           
            // send the user  to the login page
            navigate('/login', {state: {from: location}} )

          }
        });
      }
    }

    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-10 mt-4 px-4 text-2xl py-2 rounded-lg">&{price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p>{category}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 mt-4">Add to card</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;