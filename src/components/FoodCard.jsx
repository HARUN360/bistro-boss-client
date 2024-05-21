

const FoodCard = ({item}) => {
    const {name, image, price, recipe, category } = item;

    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-10 mt-4 px-4 text-2xl py-2 rounded-lg">&{price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p>{category}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 mt-4">Add to card</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;