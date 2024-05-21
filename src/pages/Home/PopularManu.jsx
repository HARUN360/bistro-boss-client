import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle";
import ManuItem from "../Shared/ManuItem";


const PopularManu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    },[])
    return (
        <section className="my-10">
            <SectionTitle
            heading={'From Our Manu'}
            subHeading={"Popular Items"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    menu.map(item => <ManuItem key={item._id} item={item}></ManuItem>)
                }
            </div>
        </section>
    );
};

export default PopularManu;