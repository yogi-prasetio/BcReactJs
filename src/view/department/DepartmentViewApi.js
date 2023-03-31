import React, { useEffect, useState } from "react";
import DepartmentApi from "../../api/DepartmentApi";
import DepartmentCreateForm from "./DepartmentCreateForm";
import DepartmentUpdateForm from "./DepartmentUpdateForm";

export default function DepartmentViewApi() {
  const [department, setDepartment] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    DepartmentApi.read().then((data) => {
      setDepartment(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    DepartmentApi.deleted(id).then(() => {
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
          <DepartmentUpdateForm id={id} setRefresh={setRefresh} />
        ) : display ? (
          <DepartmentCreateForm
            setRefresh={setRefresh}
            setDisplay={setDisplay}
          />
        ) : (
          <>
            <div class="card-header">
              <div class="row">
                <div class="col">
                  <h3>List Department</h3>
                </div>
                <div class="col-md-2 offset-md-1">
                  <button
                    class="btn btn-primary justify-end"
                    onClick={() => setDisplay(true)}
                  >
                    Add Department
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <th>Department ID</th>
                  <th>Department Name</th>
                  <th colSpan={2} className="text-center">
                    Action
                  </th>
                </thead>
                <tbody>
                  {department &&
                    department.map((dep) => (
                      <tr key={dep.departmentId}>
                        <td>{dep.departmentId}</td>
                        <td>{dep.departmentName}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => onClick(dep.departmentId)}
                          >
                            {" "}
                            Update{" "}
                          </button>
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onDelete(dep.departmentId)}
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
