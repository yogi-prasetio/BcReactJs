import React, { useEffect, useState } from "react";
import LocationApi from "../../api/LocationApi";
import LocationCreateForm from "./LocationCreateForm";
import LocationUpdateForm from "./LocationUpdateForm";

export default function LocationViewApi() {
  const [location, setLocation] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    LocationApi.read().then((data) => {
      setLocation(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    LocationApi.deleted(id).then(() => {
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
          <LocationUpdateForm id={id} setRefresh={setRefresh} />
        ) : display ? (
          <LocationCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
        ) : (
          <>
            <div class="card-header">
              <div class="row">
                <div class="col">
                  <h3>List Location</h3>
                </div>
                <div class="col-md-2 offset-md-1">
                  <button
                    class="btn btn-primary justify-end"
                    onClick={() => setDisplay(true)}
                  >
                    Add Location
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Location ID</th>
                    <th>Street Address</th>
                    <th>Postal Code</th>
                    <th>City</th>
                    <th>State Province</th>
                    <th colSpan={2} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {location &&
                    location.map((loca) => (
                      <tr key={loca.locationId}>
                        <td>{loca.locationId}</td>
                        <td>{loca.streetAddress}</td>
                        <td>{loca.postalCode}</td>
                        <td>{loca.city}</td>
                        <td>{loca.stateProvince}</td>
                        <td>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => onClick(loca.locationId)}
                          >
                            {" "}
                            Update{" "}
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onDelete(loca.locationId)}
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
