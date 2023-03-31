import React, { useEffect, useState } from "react";
import RegionApi from "../../api/RegionApi";
import RegionCreateForm from "./RegionCreateForm";
import RegionUpdateForm from "./RegionUpdateForm";

export default function RegionViewApi() {
  const [region, setRegion] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    RegionApi.read().then((data) => {
      setRegion(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    RegionApi.deleted(id).then(() => {
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
          <RegionUpdateForm id={id} setRefresh={setRefresh} />
        ) : display ? (
          <RegionCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
        ) : (
          <>
            <div class="card-header">
              <div class="row">
                <div class="col">
                  <h3>List Region</h3>
                </div>
                <div class="col-md-2 offset-md-1">
                  <button
                    class="btn btn-primary justify-end"
                    onClick={() => setDisplay(true)}
                  >
                    Add Region
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Region ID</th>
                    <th>Region Name</th>
                    <th colSpan={2} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {region &&
                    region.map((reg) => (
                      <tr key={reg.regionId}>
                        <td>{reg.regionId}</td>
                        <td>{reg.regionName}</td>
                        <td align="center">
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => onClick(reg.regionId)}
                          >
                            {" "}
                            Update{" "}
                          </button>
                        </td>
                        <td align="center">
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onDelete(reg.regionId)}
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
