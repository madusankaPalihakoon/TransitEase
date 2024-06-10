import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItem, removeItem } from "../Util/handleStorage.js";
import API, { setAuthToken } from "../config/apiConfig";
import {
  openErrorNotification,
  openSuccessNotification,
} from "../Util/notificationUtils.js";

const EmailVerification = () => {
  const { id, hash } = useParams();
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resendStatus, setResendStatus] = useState(false);
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };

  const handleResend = async () => {
    try {
      const token = getItem("token");
      setAuthToken(token);
      const response = await API.post("/email/resend");
      console.log(response);
    } catch (error) {
      openErrorNotification("Email verification failed");
    }
  };

  const verifyEmail = async () => {
    setLoading(true);
    try {
      const token = getItem("token");
      setAuthToken(token);
      const response = await API.get(`/email/verify/${id}/${hash}`);
      setVerificationStatus("Email verified successfully");
      openSuccessNotification("Email verified successfully");
      removeItem("token");
      redirectToLogin();
      // console.log("Email verification successful", response.data);
    } catch (error) {
      setVerificationStatus("Email verification failed");
      setResendStatus(true);
    } finally {
      setLoading(false);
    }
  };

  // Trigger verification on component mount
  useEffect(() => {
    verifyEmail();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center py-4">
          Email Verification
        </h2>
        {loading ? (
          <div className="flex gap-2 w-full justify-center">
            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
          </div>
        ) : (
          <p className="text-center">{verificationStatus}</p>
        )}
        {resendStatus && (
          <div className="w-full text-nowrap text-center py-4">
            <button
              className=" bg-blue-600 px-2 py-1 rounded-md text-base hover:bg-blue-700 text-blue-50"
              onClick={handleResend}
            >
              Resend verification code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
