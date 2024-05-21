import SectionTitle from "../../SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white p-6 my-16 rounded-xl">
            <SectionTitle
            subHeading="check is out"
            heading="Featured item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-16">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase"> Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ducimus iure vel! Quos tenetur fuga quidem nihil ipsam, similique explicabo sed voluptas soluta quis tempora numquam eius perspiciatis molestias alias. Voluptatibus voluptas omnis veritatis. Illum vitae ex nemo molestiae? Optio?</p>
                    <button className="btn btn-outline border-0 border-b-4"> Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;