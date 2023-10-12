import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <h2>i am add item page</h2>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("Recipe Name", { required: true })}
          />
          <select {...register("Category", { required: true })}>
            <option value="salad">salad</option>
            <option value=" dessert"> dessert</option>
            <option value=" drinks"> drinks</option>
            <option value=" pizza"> pizza</option>
            <option value=" soup"> soup</option>
          </select>
          <input
            type="number"
            placeholder="Price"
            {...register("Price", { required: true })}
          />
          <textarea {...register("Recipe Details", { required: true })} />
          <input
            type="url"
            placeholder="Recipe Image"
            {...register("Recipe Image", { required: true })}
          />

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddItem;
