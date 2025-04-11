import apiService from "./api_service";
import apiServiceMultipart from "./api_service_multipart";

export const createNewUser = async (register_user_data) => {
    try {
      const response = await apiService(
        "date-me/user/register",
        "POST",
        register_user_data
      );
      return response;
    } catch (error) {
      throw error;
    }
  };
  export const deleteUser = async (delete_user_data) => {
    try {
      const response = await apiService(
        "date-me/user/delete-profile",
        "POST",
        delete_user_data
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const forgotPassword = async (forgot_password_data) => {
    try {
      const response = await apiService(
        "date-me/user/forgot-password",
        "POST",
        forgot_password_data
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getUserInterest = async (get_user_interest_data) => {
    try {
      const response = await apiService(
        "date-me/user/get-user-interest",
        "POST",
        get_user_interest_data
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getAllUsers = async () => {
    try {
      const response = await apiService(
        "date-me/admin/getUsers",
        "GET",
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getGenders = async () => {
    try {
      const response = await apiService(
        "date-me/admin/getGenders",
        "GET",
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getAllInterests = async () => {
    try {
      const response = await apiService(
        "date-me/user/get-all-interests",
        "GET",
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const uploadProfileImage = async (uploadProfileImageData) => {
    try {
      const response = await apiServiceMultipart(
        "date-me/user/upload-profile-image",
        "POST",
        uploadProfileImageData
      );
      return response;
    } catch (error) {
      throw error;
    }
  };