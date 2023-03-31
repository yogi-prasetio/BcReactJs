import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductRequest } from "../../ReduxSaga/Action/ProductAction";
import ProductUpdateForm from "./ProductUpdateForm";
import ProductCreateForm from "./ProductCreateForm";
import { DelProductRequest } from "../../ReduxSaga/Action/ProductAction";

export default function ProductViewSaga() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productState);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetProductRequest());
  }, [refresh]);

  const onClick = (id) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onDelete = async (id) => {
    dispatch(DelProductRequest(id));
    window.alert("Data Successfully Deleted.");
    setRefresh = { setRefresh };
  };
  return (
    <div class="container mt-6">
      <div class="card mt-4 mb-4">
        {displayEdit ? (
          <ProductUpdateForm
            setRefresh={setRefresh}
            setDisplay={setDisplayEdit}
            id={id}
          />
        ) : display ? (
          <ProductCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
        ) : (
          <>
            <div class="card-header">
              <div class="row">
                <div class="col">
                  <h3>List Product</h3>
                </div>
                <div class="col-md-2 offset-md-1">
                  <button
                    class="btn btn-primary justify-end"
                    onClick={() => setDisplay(true)}
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Photo</th>
                    <th colSpan={2} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    products.map((prod) => {
                      return (
                        <tr key={prod.id}>
                          <td>{prod.id}</td>
                          <td>{prod.name}</td>
                          <td>{prod.description}</td>
                          <td>{prod.price}</td>
                          <td>{prod.image}</td>
                          <td>
                            <button
                              className="btn btn-success btn-sm"
                              onClick={() => onClick(prod.id)}
                            >
                              {" "}
                              Update{" "}
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => onDelete(prod.id)}
                            >
                              {" "}
                              Delete{" "}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
