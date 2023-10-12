import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const imageApi = import.meta.env.VITE_IMAGE_API;
  console.log(imageApi);
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imageApi}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   data submit form
  const onSubmit = (data) => {
    console.log("form data", data);
    const formdata = new FormData();
    formdata.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((imageRes) => {
        console.log(imageRes);
        if (imageRes.success) {
          const imageUrl = imageRes.data.display_url;
          const { name, price, recipe, category } = data;
          const newItem = { name, price, recipe, category, image: imageUrl };
          console.log("success", newItem);
        }
      });

    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <Helmet>
        <title>Testy Taco | Add Item</title>
      </Helmet>
      <div className="py-6">
        <p className="text-center italic">----- Add Items Here -----</p>
        <h3 className="text-center text-4xl uppercase font-semibold">
          Hers{"'"}s is our menu adding form.
        </h3>
      </div>
      <div className="py-8">
        <h2 className="text-4xl text-center py-4">Add Items</h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <input
                className="input input-bordered"
                type="text"
                placeholder="Recipe Name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-control">
              <select
                {...register("category", { required: true })}
                className="input input-bordered"
              >
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
                placeholder="Price $"
                {...register("price", { required: true })}
              />
            </div>

            <div className="form-contorl w-full">
              <textarea
                className="textarea textarea-primary w-full"
                {...register("recipe", { required: true })}
                placeholder="Recipe Details"
              />
            </div>
            <div className="form-control">
              <input
                className="input input-bordered"
                type="file"
                placeholder="Recipe Image"
                {...register("image", { required: true })}
              />
            </div>

            <input type="submit" value="Add Item" className="btn btn-primary" />
          </div>{" "}
        </form>
      </div>
    </>
  );
};

export default AddItem;
