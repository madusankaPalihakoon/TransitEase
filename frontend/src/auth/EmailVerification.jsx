import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../config/apiConfig";

const EmailVerification = () => {
  const { id, hash } = useParams();
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resendStatus, setResendStatus] = useState(false);

  const verifyEmail = async () => {
    setLoading(true);
    try {
      const response = await API.get(`/email/verify/${id}/${hash}`);
      setVerificationStatus("Email verified successfully");
      console.log("Email verification successful", response.data);
    } catch (error) {
      setVerificationStatus("Email verification failed");
      setResendStatus(true);
      console.error(
        "Email verification failed",
        error.response?.data || error.message
      );
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
        <h2 className="text-2xl font-bold text-center">Email Verification</h2>
        {loading ? (
          <p className="text-center">Verifying...</p>
        ) : (
          <p className="text-center">{verificationStatus}</p>
        )}
        {resendStatus && (
          <div className="w-full text-nowrap text-center py-4">
            <a
              className=" bg-blue-500 px-2 py-2 rounded-md text-xl hover:bg-blue-600"
              href=""
            >
              Resend verification code
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
