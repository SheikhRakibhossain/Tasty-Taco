import FCard from "./FCard";

const FoodCard = ({items}) => {
  
    return (
        <>
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4  justify-items-center">
            {
                items.map(item=><FCard key={item._id} item={item}/>)
            }
        </div>
            
        </>
    );
};

export default FoodCard;