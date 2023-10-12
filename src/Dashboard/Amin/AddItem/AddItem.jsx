import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <h2>i am add item page</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <input
              className="input input-bordered"
              type="text"
              placeholder="Recipe Name"
              {...register("Recipe Name", { required: true })}
            />
          </div>
          <div className="form-control">
            <select {...register("Category", { required: true })}>
              <option value="salad">salad</option>
              <option value=" dessert"> dessert</option>
              <option value=" drinks"> drinks</option>
              <option value=" pizza"> pizza</option>
              <option value=" soup"> soup</option>
            </select>
          </div>
          <div className="form-control">
            <input
              className="input input-bordered"
              type="number"
              placeholder="Price"
              {...register("Price", { required: true })}
            />
          </div>

          <div className="form-contorl">
            <textarea
              className="input input-bordered"
              {...register("Recipe Details", { required: true })}
            />
          </div>
          <div className="form-control">
            <input
              className="input input-bordered"
              type="file"
              placeholder="Recipe Image"
              {...register("Recipe Image", { required: true })}
            />
          </div>

          <input type="submit" value="Add Item" className="btn btn-primary"/>
        </form>
      </div>
    </>
  );
};

export default AddItem;
