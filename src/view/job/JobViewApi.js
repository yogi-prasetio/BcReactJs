import React, { useEffect, useState } from "react";
import JobApi from "../../api/JobApi";
import JobCreateForm from "./JobCreateForm";
import JobUpdateForm from "./JobUpdateForm";

export default function JobViewApi() {
  const [job, setJob] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    JobApi.read().then((data) => {
      setJob(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    JobApi.deleted(id).then(() => {
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
          <JobUpdateForm id={id} setRefresh={setRefresh} />
        ) : display ? (
          <JobCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
        ) : (
          <>
            <div class="card-header">
              <div class="row">
                <div class="col">
                  <h3>List Job</h3>
                </div>
                <div class="col-md-2 offset-md-1">
                  <button
                    class="btn btn-primary justify-end"
                    onClick={() => setDisplay(true)}
                  >
                    Add Job
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Job ID</th>
                    <th>Job Title</th>
                    <th>Min Salary</th>
                    <th>Max Salary</th>
                    <th colSpan={2} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {job &&
                    job.map((val) => (
                      <tr key={val.jobId}>
                        <td>{val.jobId}</td>
                        <td>{val.jobTitle}</td>
                        <td>{val.minSalary}</td>
                        <td>{val.maxSalary}</td>
                        <td>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => onClick(val.jobId)}
                          >
                            {" "}
                            Update{" "}
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onDelete(val.jobId)}
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
