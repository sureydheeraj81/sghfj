import { commonrequest } from "./Apicall";
import { BACKEND_URL } from "./Helper";

// userRegister
export const UserRegister = async(data)=>{
    return await commonrequest("post", `${BACKEND_URL}/api/users/register`, data)
}
// RegiMob
export const regiMob = async (data) => {
    return await commonrequest("post", `${BACKEND_URL}/api/addUser/cors-sendOtp`, data);
};
export const approvedUser = async () => {
    return await commonrequest("get", `${BACKEND_URL}/api/addUser/approvedData`,null);
}

// // Update user profile (PUT)
// export const updateUserProfile = async (userId, data) => {
//     return await commonrequest("put", `${BACKEND_URL}/api/users/update/${userId}`, data);   api/addUser/cors-verifyOtp
// };
export const updateUser = async (data,sno) => {
    return await commonrequest("patch", `${BACKEND_URL}/api/addUser/cors-updateRegister/${sno}`, data);
};


export const acceptedData = async (sno) => {
    return await commonrequest("get", `${BACKEND_URL}/api/addUser/cors-singleRegister/${sno}`,null);
}
// MobotbVerify
export const movVerify = async (data) => {
    return await commonrequest("post", `${BACKEND_URL}/api/addUser/cors-verifyOtp`, data);  
};

// region1Data
export const getAllRegion1Data = async () => {
    return await commonrequest("get", `${BACKEND_URL}/api/addUser/regionOneData`,null);    
}

// region2Data
export const getAllRegion2Data = async () => {
    return await commonrequest("get", `${BACKEND_URL}/api/addUser/region2Data`,null);    
}
// pendingUser
export const pendingUser = async () => {
    return await commonrequest("get", `${BACKEND_URL}/api/addUser/pendingList`,null);    
}

// get all UserData
export const getAllUserData = async () => {
    return await commonrequest("get", `${BACKEND_URL}/api/addUser/viewAllRegistrations`,null);    
}
export const getAllReject = async () => {
    return await commonrequest("get", `${BACKEND_URL}/api/addUser/rejectedData`,null);     
}
// transfer region
export const getDataforTrans = async () => {
    return await commonrequest("get", `${BACKEND_URL}/api/addUser/approvedData`,null);
}
export const regionTransfer = async (userToUpdate) => {
    return await commonrequest("post", `${BACKEND_URL}/api/addUser/transfer-region`, userToUpdate);  
};

// usageUserDetail or industry
export const usageUserDetails = async (data) => {
    return await commonrequest("post", `${BACKEND_URL}/api/usagedetail/usageUserType`, data);
};
export const usageIndustry = async (data) => {
    return await commonrequest("post", `${BACKEND_URL}/api/usageindustry/usageindustrytype`, data);
};
// usageindustry
export const usageTypeIndustry = async (data) => {
    return await commonrequest("post", `${BACKEND_URL}/api/usagedetail/usageUserType`, data);
};


// get SingleUser
export const  getSingleUser = async (userId) => {
    return await commonrequest("get", `${BACKEND_URL}/api/users/getsingle/${userId}`,null)
}
// Delete User data
export const deleteUser = async (userId) => {
    return await commonrequest("delete", `${BACKEND_URL}/api/users/deleteUser/${userId}`,null)
}
// Logout User
export  const logoutUser = async () => {
    return await commonrequest("post", `${BACKEND_URL}/api/users/logout`, null);
}

// Admin login & registration

export const adminRegister = async (data) => {
    return await commonrequest('post', `${BACKEND_URL}/api/admin/register`, data);
}

export const adminLogin = async (data) => {
    return await commonrequest('post', `${BACKEND_URL}/api/admin/login`, data);
}

export const getAllAdmin = async () => {
    return await commonrequest("get", `${BACKEND_URL}/api/admin/get-all-admin-info`, null);
}

export const updateAdminStatus = async (data) => {
    return await commonrequest("put", `${BACKEND_URL}/api/admin/update-status`, data)
}

export const deleteAdminRequest = async (data) => {
    return await commonrequest("delete", `${BACKEND_URL}/api/admin/delete-admin-request`, data)
}

// SUBSCRIPTION FUNCTIONS

export const createSubsData = async (data) => {
    return await commonrequest("post", `${BACKEND_URL}/api/subscription/add-subcription-plan`, data);
};

export const getAllSubsData = async () => {
    return await commonrequest("get", `${BACKEND_URL}/api/subscription/get-subscription-data`, null);
};

export const updateSubsData = async (userId, data) => {
    return await commonrequest("put", `${BACKEND_URL}/api/subscription/update-subscription-data/${userId}`, data);
};

export const deleteSubsData = async (userId) => {
    return await commonrequest("delete", `${BACKEND_URL}/api/subscription/delete-subscription-data`, userId);
};

//////////////////////////////////////////////////


// FEEDBACK FUNCTIONS 

export const submitFeedback = async (data) =>{
    return await commonrequest("post", `${BACKEND_URL}/api/feedback/send`,data);
};


export const getFeedbacks = async () =>{
    return await commonrequest('get', `${BACKEND_URL}/api/feedback/get-feedback`,null);
};

export const updateFeedback = async(sno,data) =>{
    return await commonrequest('put',`${BACKEND_URL}/api/feedback/update-feedback`,{ sno, ...data });
}

// Registrations rejection reason functions

export const addRegRejectionReason = async (data) => {
    return await commonrequest('post', `${BACKEND_URL}/api/master_reasontype/add-rejection-reason`, data)
}

export const getRegRejectionReason = async () => {
    return await commonrequest('get', `${BACKEND_URL}/api/master_reasontype/get-rejection-reason`);
}

export const updateRegRejectionReason = async (sno, data) => {
    return await commonrequest('put', `${BACKEND_URL}/api/master_reasontype/update-rejection-reason/${sno}`, data)
}

export const deleteRegRejectionReason = async (data) => {
    return await commonrequest('delete', `${BACKEND_URL}/api/master_reasontype/delete-rejection-reason`, data)
}

// Subscription rejection reason functions

export const addRejectionReason = async (data) => {
    return await commonrequest('post', `${BACKEND_URL}/api/subs_rejection/add-regs-rejection-reason`, data)
}

export const getRejectionReason = async () => {
    return await commonrequest('get', `${BACKEND_URL}/api/subs_rejection/get-regs-rejection-reason`);
}

export const updateRejectionReason = async (sno, data) => {
    return await commonrequest('put', `${BACKEND_URL}/api/subs_rejection/update-regs-rejection-reason/${sno}`, data)
}

export const deleteRejectionReason = async (data) => {
    return await commonrequest('delete', `${BACKEND_URL}/api/subs_rejection/delete-regs-rejection-reason`, data)
}

// user categories functions

export const addNewUserCategory = async (data) => {
    return await commonrequest('post', `${BACKEND_URL}/api/master_category/add-master-category`, data)
}

export const getUserCategoryData = async () => {
    return await commonrequest('get', `${BACKEND_URL}/api/master_category/get-master-category`,null)
}

export const updateUserCategories = async (sno, data) => {
    return await commonrequest('put', `${BACKEND_URL}/api/master_category/update-master-category/${sno}`, data)
}

export const deleteUserCategory = async (sno) => {
    return await commonrequest('delete', `${BACKEND_URL}/api/master_category/delete-master-category`, sno)
}

