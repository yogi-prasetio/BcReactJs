import React, { useEffect, useState } from "react";
import CountryApi from "../../api/CountryApi";
import CountryCreateForm from "./CountryCreateForm";
import CountryUpdateForm from "./CountryUpdateForm";

export default function CountryViewApi() {
  const [country, setCountry] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    CountryApi.read().then((data) => {
      setCountry(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    CountryApi.deleted(id).then(() => {
      window.alert("Data Successfully Delete");
      setRefresh(true);
    });
  };
  const onClick = (id) => {
    setDisplayEdit(true);
    setId(id);
  };
  return (
    <div class="container mt-6">
      <div class="card mt-4 mb-4">
        {displayEdit ? (
          <CountryUpdateForm id={id} setRefresh={setRefresh} />
        ) : display ? (
          <CountryCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
        ) : (
          <>
            <div class="card-header">
              <div class="row">
                <div class="col">
                  <h3>List Country</h3>
                </div>
                <div class="col-md-2 offset-md-1">
                  <button
                    class="btn btn-primary justify-end"
                    onClick={() => setDisplay(true)}
                  >
                    Add Country
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <th>Country ID</th>
                  <th>Country Name</th>
                  <th colSpan={2} className="text-center">
                    Action
                  </th>
                </thead>
                <tbody>
                  {country &&
                    country.map((coun) => (
                      <tr key={coun.countryId}>
                        <td>{coun.countryId}</td>
                        <td>{coun.countryName}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => onClick(coun.countryId)}
                          >
                            {" "}
                            Update{" "}
                          </button>
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onDelete(coun.countryId)}
                          >
                            {" "}
                            Delete{" "}
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
