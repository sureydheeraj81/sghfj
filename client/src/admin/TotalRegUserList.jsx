import React, { useEffect, useState } from 'react';
import Sidebar from "./layout/Sidebar";
import {getAllUserData}  from "../services/Apis"


const TotalRegUserList = () => {
  const [applications, setApplications] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    count: "10"
  });
  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await getAllUserData()
      setApplications(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(inputs);
  const handleEdit = (e) => { };

  return (
    <Sidebar>
      <div className="clear">
        <div className="section_heading">
          <h2 className="title_heading">CORS Registration List</h2>
        </div>
        <div className="mb-4"></div>
        <div>
          <div className="box_header">
            <div style={{ padding: "5px 0px" }}>
              <i className="fa-regular fa-rectangle-list mx-3"></i>&nbsp; Total
              Users: 6435
            </div>
          </div>
          <div>
            <div className="box_body">
              <form
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <label className="col-md-10">Records per page:</label>
                  <div className="col-md-8">
                    <select
                      className="form-select"
                      name="count"
                      onChange={handleChange}
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <input
                    type="text"
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                    placeholder="Search here ..."
                    style={{ borderRight: "none", padding: "0px 10px", outline: "none" }}
                  />
                  <button style={{ borderLeft: "none", }}><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
              </form>
              <div className="table-div-admin">
                <table className="table table-bordered data_table">
                  <thead>
                    <tr>
                      <th>SNo</th>
                      <th>Application No</th>
                      <th>Reg. Date/Time</th>
                      <th>User Information</th>
                      <th>Account Status</th>
                      <th>Update By</th>
                      <th>Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.length > 0 ? (
                      applications.map((app, index) => (
                        <tr key={app.application_no}>
                          <td>{app.application_no}</td>
                          <td>{app.date_created}</td>
                          <td>
                            <div>
                              <strong>Name:</strong> {app.name} <br />
                              <strong>Email:</strong> {app.email} <br />
                              <strong>Phone:</strong> {app.mobile_no} <br />
                              <strong>User Type:</strong> {app.usertype} <br />
                              <strong>Organization:</strong> {app.emptype} <br />
                              <strong>Region:</strong> {app.region} <br />
                            </div>
                          </td>
                          <td><div>{app.is_rejected}</div><div>{app.rejected_reason}</div></td>
                          <td>{app.updatedBy}</td>
                          <td>
                            <button className="btn btn-outline-primary btn-sm">
                              <Link to={`/admin/approved/${app.sno}`} className="text-decoration-none text-dark">
                                <i className="bi bi-pencil-square"></i>
                              </Link>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="d-md-flex d-sm-block justify-content-between mt-2">
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default TotalRegUserList;
