import { useForm } from "react-hook-form";
function DeliveryAddressForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        {...register("name", { required: true, maxLength: 15,minLength : 3 })}
      />
      {errors.name && (
        <h5 style={{ color: "red" }}>name is required</h5>
      )}
     
     <label htmlFor="phone Number">Phone Number</label>
     <input type="number"
     {...register("number",{required : true,maxLength : 10,minLength : 10})} />
     {errors.number && (
        <h5 style={{color : "red"}}>Phone number is required</h5>
     )}

     <label htmlFor="pincode">Pincode</label>
     <input type="number"
     {...register("pincode",{required : true,maxLength : 6,minLength : 6})} />
     {errors.pincode && (
        <h5 style={{color : "red"}}>Pincode is required</h5>
     )}

     <label htmlFor="locality">Locality</label>
     <input type="text"
     {...register("locality",{required : true})}
     />
     {errors.locality && (
        <h5 style={{color : "red"}}>Enter Locality</h5>
     )}

     <label htmlFor="address">Address</label>
     <textarea cols="30" rows="3" {...register("address",{required : true})}>
     </textarea>
     {errors.address && (
        <h5 style={{color : "red"}}>Address is required</h5>
     )}

     <label htmlFor="city">City</label>
     <input type="text" {...register("city",{required : true})}/>
     {errors.city && (
        <h5 style={{color : "red"}}>City is required</h5>
     )}

     <label htmlFor="state">State</label>
     <input type="text" {...register("state",{required : true})} />
     {errors.state && (
        <h5 style={{color : "red"}}>State is required</h5>
     )}
        
      <input type="submit" />
    </form>
  );
}
export default DeliveryAddressForm;
