/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
function DeliveryAddressForm({ address }) {
  const [deliveryAddress, setDeliveryAddress] = useState([]);
  const [pincodeData, setPincodeData] = useState([]);
  const [addressData, setAddressData] = useState([]);
  const [selectedLocality, setSelectedLocality] = useState("");
  const uniqueCity = Array.from(
    new Set(addressData?.PostOffice?.map((postOffice) => postOffice.District))
  );
  const uniqueDistricts = Array.from(
    new Set(addressData?.PostOffice?.map((postOffice) => postOffice.Circle))
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => setDeliveryAddress(data);
  const handleFormSubmit = (data, city, district) => {
    data.state = [district];
    data.city = [city];
    data.locality = [selectedLocality];
    address(data, city, district);
  };
  const handleLocalityChange = (event) => {
    setSelectedLocality(event.target.value); 
  };
  useEffect(() => {
    axios
      .get(`https://api.postalpincode.in/pincode/${deliveryAddress.pincode}`)
      .then((res) => {
        console.log(res.data);
        setPincodeData(res.data);
      });

    // fetch(`https://api.postalpincode.in/pincode/${deliveryAddress.pincode}`)
    // .then((res) => {
    //   res.json().then((res) => {
    //     console.log(res);
    //     setPincodeData(res)
    //   });
    // });

    // const fetchData = () => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.open('GET', `https://api.postalpincode.in/pincode/${deliveryAddress.pincode}`, true);
    //   xhr.onload = function () {
    //     if (xhr.status === 200) {
    //       const responseData = JSON.parse(xhr.responseText);
    //       // console.log(responseData);
    //       setPincodeData(responseData);
    //     }
    //   };
    //   xhr.send();
    // };
    // fetchData();
  }, [deliveryAddress]);
  useEffect(() => {
    pincodeData?.map((items) => {
      setAddressData(items);
    });
  }, [pincodeData]);
  return (
    <form
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4 flex">
        <div className="mr-4 w-1/2">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-600"
          >
            Name
          </label>
          <input
            id="name"
            {...register("name", {
              required: true,
              minLength: 3,
            })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.name && (
            <h5 className="text-red-500 text-xs mt-1">Name is required</h5>
          )}
        </div>
        <div className="w-1/2">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-semibold text-gray-600"
          >
            Phone Number
          </label>
          <input
            type="number"
            {...register("phoneNumber", {
              required: true,
              maxLength: 10,
              minLength: 10,
            })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.phoneNumber && (
            <h5 className="text-red-500 text-xs mt-1">
              Phone number is required
            </h5>
          )}
        </div>
      </div>
      <div className="mb-4 flex">
        <div className="mr-4 w-1/2">
          <label
            htmlFor="pincode"
            className="block text-sm font-semibold text-gray-600"
          >
            Pincode
          </label>
          <input
            type="number"
            {...register("pincode", {
              required: true,
              maxLength: 6,
              minLength: 6,
            })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.pincode && (
            <h5 className="text-red-500 text-xs mt-1">Pincode is required</h5>
          )}
        </div>
        <div className="w-1/2">
          <label
            htmlFor="state"
            className="block text-sm font-semibold text-gray-600"
          >
            Locality
          </label>
          <select
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleLocalityChange}
            value={selectedLocality}
          >
            <option value="" {...register("locality", { required: false })}>
              Select Locality
            </option>
            {addressData.PostOffice?.map((items) => {
              return (
                <option key={items.Name} value={items.Name}>
                  {items.Name}
                </option>
              );
            })}
          </select>
          {errors.locality && (
            <h5 className="text-red-500 text-xs mt-1">Locality is required</h5>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="state"
          className="block text-sm font-semibold text-gray-600"
        >
          Address
        </label>
        <textarea
          cols="30"
          rows="3"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          {...register("address", { required: true })}
        ></textarea>
        {errors.address && (
          <h5 className="text-red-500 text-xs mt-1">Address is required</h5>
        )}
      </div>
      <div className="mb-4 flex">
        <div className="mr-4 w-1/2">
          <label
            htmlFor="city"
            className="block text-sm font-semibold text-gray-600"
          >
            City/District/Town
          </label>
          <input
            type="text"
            value={uniqueCity[0]}
            {...register("city", { required: false })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            readOnly
          />
          {errors.city && (
            <h5 className="text-red-500 text-xs mt-1">City is required</h5>
          )}
        </div>
        <div className="w-1/2">
          <label
            htmlFor="state"
            className="block text-sm font-semibold text-gray-600"
          >
            State
          </label>
          <input
            type="text"
            value={uniqueDistricts[0]}
            {...register("state", { required: false })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            readOnly
          />
          {errors.state && (
            <h5 className="text-red-500 text-xs mt-1">State is required</h5>
          )}
        </div>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
          onClick={handleFormSubmit(
            deliveryAddress,
            uniqueCity,
            uniqueDistricts
          )}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default DeliveryAddressForm;