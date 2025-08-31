import { useNavigate } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import type { User } from "@/hooks/AuthContext";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const { storeUserInfo } = useLoggedInUser();

  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const credential = credentialResponse.credential;
    if (credential) {
      const decoded: User = jwtDecode(credential);
      // console.log("Login Success! Decoded JWT:", decoded);
      storeUserInfo(decoded);
      navigate("/data-hydrator");
    } else {
      console.error("Login failed: No credential found in response.");
      handleLoginFailure();
    }
  };
  const handleLoginFailure = () => {
    toast.error("Login failed.");
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gray-100 dark:bg-black">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <img
                src="logo-main.png"
                alt="Skin Elements Logo"
                className="h-18 bg-white object-contain mb-2 rounded border px-4"
              />
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Welcome back! Please login to continue.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginFailure}
                useOneTap
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
