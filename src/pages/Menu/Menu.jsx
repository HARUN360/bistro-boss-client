import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import manuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hukse/useMenu";
import SectionTitle from "../../SectionTitle";
import MenuCategory from "../Shared/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant | menu</title>
            </Helmet>
            <Cover img={manuImg} title="Our Menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Toda's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu  items */}
            <MenuCategory img={dessertImg} title="dessert" items={desserts}></MenuCategory>
            {/* pizza */}
            <MenuCategory img={pizzaimg} title="pizza" items={pizza}></MenuCategory>
            {/* salad */}
            <MenuCategory img={saladImg} title="salad" items={salad}></MenuCategory>
            {/* pizza */}
            <MenuCategory img={soupImg} title="soup" items={soup}></MenuCategory>
           
            
             
        </div>
    );
};

export default Menu;