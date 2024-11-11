import commonApi from "./commonApi";
import SERVER_URL from "./serverUrl";

// registerapi called by auth component when user click register btn
export const registerAPI = async (reqBody)=>{
    return await commonApi("POST",`${SERVER_URL}/register`,reqBody)
}

// loginapi called by auth component when user click login btn
export const loginAPI = async (reqBody)=>{
    return await commonApi("POST",`${SERVER_URL}/login`,reqBody)
}
// addProjectAPI called by ADD component when user click add btn addd-project
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonApi("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}
// getHomeProjectAPI called by home component when page loaded in browser (use effect)
export const getHomeProjectAPI = async ()=>{
    return await commonApi("GET",`${SERVER_URL}/home-project`,{})
}
// allProjectAPI called by project component when page loaded in browser (useeffect)
export const allProjectAPI = async ( searchKey,reqHeader)=>{
    return await commonApi("GET",`${SERVER_URL}/all-projects?search=${searchKey}`,{},reqHeader)
}
// allProjectAPI called by view component when page loaded in browser (useeffect)
export const userProjectAPI = async (reqHeader)=>{
    return await commonApi("GET",`${SERVER_URL}/user-projects`,{},reqHeader)
}
// updateProjectAPI called by edit component when user click update btn  projects/6725f7b49e2adb205fe52084/edit
export const updateProjectAPI = async (id,reqBody,reqHeader)=>{
    return await commonApi("PUT",`${SERVER_URL}/projects/${id}/edit`,reqBody,reqHeader)
}

// userProjectRemoveAPI called by view component when user click delete btn
export const userProjectRemoveAPI = async (id,reqHeader)=>{
    return await commonApi("DELETE",`${SERVER_URL}/projects/${id}/remove`,{},reqHeader)
}
// updateUserAPI called by profile component when user click update btn url(edit-user)
export const updateUserAPI = async (reqBody,reqHeader)=>{
    return await commonApi("PUT",`${SERVER_URL}/edit-user`,reqBody,reqHeader)
}