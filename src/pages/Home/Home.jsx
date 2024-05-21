import { Helmet } from "react-helmet-async";
import Baner from "./Baner";
import Catagory from "./Catagory";
import Featured from "./Featured";
import PopularManu from "./PopularManu";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
                <Helmet>
                <title>Bistro Boss Restaurant | Home</title>
            </Helmet>
           <Baner></Baner>
           <Catagory></Catagory>
           <PopularManu></PopularManu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;