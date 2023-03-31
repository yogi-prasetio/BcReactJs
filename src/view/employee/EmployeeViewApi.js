import React, { useEffect, useState } from "react";
import EmployeeApi from "../../api/EmployeeApi";
import EmployeeCreateForm from "./EmployeeCreateForm";
import EmployeeUpdateForm from "./EmployeeUpdateForm";

export default function EmployeeViewApi() {
  const [employee, setEmployee] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    EmployeeApi.read().then((data) => {
      setEmployee(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    EmployeeApi.deleted(id).then(() => {
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
          <EmployeeUpdateForm id={id} setRefresh={setRefresh} />
        ) : display ? (
          <EmployeeCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
        ) : (
          <>
            <div class="card-header">
              <div class="row">
                <div class="col">
                  <h3>List Employee</h3>
                </div>
                <div class="col-md-2 offset-md-1">
                  <button
                    class="btn btn-primary justify-end"
                    onClick={() => setDisplay(true)}
                  >
                    Add Employee
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Hire Date</th>
                    <th>Salary</th>
                    <th colSpan={2} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employee &&
                    employee.map((emp) => (
                      <tr key={emp.employeeId}>
                        <td>{emp.employeeId}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.email}</td>
                        <td>{emp.phoneNumber}</td>
                        <td>{emp.hireDate}</td>
                        <td>{emp.salary}</td>
                        <td>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => onClick(emp.employeeId)}
                          >
                            {" "}
                            Update{" "}
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onDelete(emp.employeeId)}
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
