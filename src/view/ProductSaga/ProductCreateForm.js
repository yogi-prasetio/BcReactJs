import { useFormik } from "formik";
import React, { useState } from "react";
import ProductApi from "../../api/ProductApi";
import { useDispatch } from "react-redux";
import { AddProductRequest } from "../../ReduxSaga/Action/ProductAction";

export default function ProductCreateForm(props) {
  const dispatch = useDispatch();
  const [previewImg, setPreviewImg] = useState();
  const [upload, setUpload] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: undefined,
      description: undefined,
      price: undefined,
      file: undefined,
    },
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("name", values.name);
      payload.append("description", values.description);
      payload.append("price", values.price);
      payload.append("file", values.file);

      dispatch(AddProductRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Added.");
      props.setRefresh(true);
    },
  });
  const uploadConfig = (name) => (event) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    console.log(event.target.files);
    reader.onload = () => {
      formik.setFieldValue("file", file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
    setUpload(true);
  };
  const onClear = (event) => {
    event.preventDefault();
    setPreviewImg(null);
    setUpload(false);
  };
  return (
    <div class="container">
      <div class="mb-3 mt-3">
        <h4>Add Product</h4>
      </div>
      <hr aria-setsize={2} />
      <div class="mb-3">
        <label>Product Name : </label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        ></input>
      </div>
      <div class="mb-3">
        <label>Description : </label>
        <textarea
          name="description"
          class="form-control"
          id="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        ></textarea>
      </div>
      <div class="mb-3">
        <label>Price : </label>
        <input
          type="number"
          name="price"
          class="form-control"
          id="price"
          value={formik.values.price}
          onChange={formik.handleChange}
        ></input>
      </div>
      <div class="mb-3">
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Photo
          </label>
          <div className="mt-2 flex justify-center text-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            {upload === false ? (
              <>
                <span></span>
              </>
            ) : (
              <>
                <img
                  src={previewImg}
                  alt="img"
                  height="25%"
                  width="25%"
                  align="center"
                />
                <br></br>
                <span onClick={onClear}>Remove</span>
              </>
            )}
            <div className="text-center">
              <div className="mt-4 mb-3 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  {/* <span>Upload a file </span> */}
                  <input
                    id="file-upload"
                    class="mb-3"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={uploadConfig("file")}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 text-end">
        <button
          type="submit"
          class="btn btn-secondary"
          style={{ marginRight: "1rem" }}
          onClick={() => props.setDisplay(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={formik.handleSubmit}
        >
          Simpan
        </button>
      </div>
    </div>
  );
}
