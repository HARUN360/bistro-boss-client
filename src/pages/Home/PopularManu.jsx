
import SectionTitle from "../../SectionTitle";
import ManuItem from "../Shared/ManuItem";
import useMenu from "../../hukse/useMenu";


const PopularManu = () => {
    
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

   


    return (
        <section className="my-10">
            <SectionTitle
            heading={'From Our Manu'}
            subHeading={"Popular Items"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    popular.map(item => <ManuItem key={item._id} item={item}></ManuItem>)
                }
            </div>
           <div className="text-center"> <button className="btn btn-outline border-0 border-b-4 mt-4"> View Full Menu</button></div>
        </section>
    );
};

export default PopularManu;