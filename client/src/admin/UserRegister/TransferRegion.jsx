import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getDataforTrans, regionTransfer } from "../../services/Apis"
import Sidebar from '../layout/Sidebar';

const TransferRegion = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [fetchData, setUsers] = useState([]);

  // const getAPI_URL = 'http://localhost:8000/api/addUser/approvedData';
  // const updateAPI_URL = 'http://localhost:8000/api/addUser/transfer-region';

  const fetchUsers = async () => {
    try {
      const { data } = await getDataforTrans();
      setUsers(data.AcceptedData);
    } catch (error) {
      console.error(error);
      toast.error('Error fetching users!');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = fetchData.filter(user =>
    [user.name, user.email, user.username, user.mobile_no].some(field =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getSelectedUserRegion = () => {
    const user = fetchData.find(user => user.sno === selectedUser);
    return user ? (user.region === 'region-1' ? 'region-2' : 'region-1') : 'N/A';
  };

  const transferRegion = async () => {
    const userToUpdate = fetchData.find(user => user.sno === selectedUser);


    try {
      const res = await regionTransfer(userToUpdate)
      // console.log(res.data);
      if (res.data.success === true) {

        toast.success('User region transferred successfully!');
        fetchUsers();
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.success === false) {
        toast.error(error.response.data.message);
      }


    }
  };

  const handleSelect = id => setSelectedUser(id);

  const renderTransferButton = () => (
    <button className="btn btn-success w-100 mt-3" disabled>
      Transfer
    </button>
  );

  const renderTransferUserButton = () => (
    <button className="btn btn-success w-100 mt-3" onClick={transferRegion}>
      Transfer User at S.No {selectedUser} to {getSelectedUserRegion()}
    </button>
  );

  return (
    <Sidebar>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Transfer Region</h2>

        <div className="card">
          <div className="card-header bg-dark text-white">
            <h5>🔄 Search User and Transfer Region</h5>
          </div>

          <div className="card-body">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search anything..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />

            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Sno</th>
                    <th>Ack. No</th>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Mobile No</th>
                    <th>Username</th>
                    <th>Region</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.sno}</td>
                        <td>{user.application_no}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile_no}</td>
                        <td>{user.username}</td>
                        <td>{user.region}</td>
                        <td>
                          <input
                            type="radio"
                            name="selectUser"
                            checked={selectedUser === user.sno}
                            onChange={() => handleSelect(user.sno)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center">
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {selectedUser === null ? renderTransferButton() : renderTransferUserButton()}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default TransferRegion;