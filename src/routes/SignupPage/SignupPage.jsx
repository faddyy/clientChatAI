import { SignUp } from "@clerk/clerk-react";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <div className="signUpPage">
      <SignUp
        path="/sign-up"
        signInUrl="sign-in"
        forceRedirectUrl={"/dashboard"}
      />
    </div>
  );
};

export default SignupPage;
