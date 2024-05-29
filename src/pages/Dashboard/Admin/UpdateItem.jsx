import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hukse/useAxiosPublic";
import useAxiosSecure from "../../../hukse/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, category, recipe, price, _id} = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async(data) => {
        console.log(data);
        
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            // now send the menu item data on the server with image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            console.log('menu item added data',menuItem);
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if(menuRes.data.modifiedCount > 0){
                // show seccess popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with image url',res.data);
        // data post
        // image upload to imgbb and then get an url


    }

    return (
        <div>
            <SectionTitle heading="Updated an Item" subHeading="Refresh info"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>

                        </div>
                        <input defaultValue={name} {...register("name",{required: true})} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />

                    </label>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                        <label className="">
                            <div className="label">
                                <span className="label-text">Category*</span>

                            </div>
                            <select defaultValue={category}  {...register("category" ,{required: true} )} className="select select-bordered w-full">
                                <option disabled value='default'>Selected a category?</option>
                                <option value="Salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Soup">Soup</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Drinks">Drinks</option>


                            </select>

                        </label> 
                        </div>
                        {/* price */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price*</span>

                            </div>
                            <input defaultValue={price} {...register("price",{required: true})} type="number" placeholder="category price" className="input input-bordered w-full" />

                        </label>

                    </div>
                    {/* recipe details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe details</span>
                        
                        </div>
                        <textarea defaultValue={recipe} {...register("recipe")}  className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                      
                    </label>
                    {/* submit file */}
                    <div className="form-control w-full my-6">
                    <input {...register("image",{required: true})}  type="file" className="file-input w-full max-w-xs" />
                    </div>













                    {/* <input type="submit" /> */}
                    <button className="btn">
                      Updated Menu Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;