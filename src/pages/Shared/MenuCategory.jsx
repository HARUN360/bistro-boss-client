import { Link } from "react-router-dom";
import Cover from "./Cover";
import ManuItem from "./ManuItem";


const MenuCategory = ({items, title, img}) => {
    return (
        <div>
            { title && <Cover img={img} title={title}></Cover>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-6">
                {
                    items.map(item => <ManuItem key={item._id} item={item}></ManuItem>)
                }
           <Link to={`/order/${title}`} className=""> <button className="btn btn-outline border-0 border-b-4 mt-4"> Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;