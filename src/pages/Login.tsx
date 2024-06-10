/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import PrimaryButton from "../components/buttons/PriimaryButton";
import CustomInput from "../components/inputs/CustomInput";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  //   const router = useRouter();

  const login_user = async () => {
    setLoading(true);
    try {
      console.log("login user");
      //   router.push("/overview");
    } catch (error) {
      setLoading(false);
      setErr("login fail");
    }
  };
  return (
    <div className="overflow-hidden relative min-h-screen grid pt-40 w-full px-4">
      <div className="max-w-sm mx-auto w-full flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row self-center">
            <div className="w-16 h-12 relative rounded-lg">
              {/* <Image
            src={"/images/velocity.svg"}
            alt="logo icon"
            layout="fill"
            objectFit="cover"
          /> */}
            </div>
          </div>
          {/* <BorderedHeading text="Welcome Back" /> */}
          <p className="text-2xl heading-text text-center font-semibold mb-8">
            Sign in to Duty Calculator
          </p>
        </div>
        <form onSubmit={login_user} className="flex flex-col space-y-4">
          <CustomInput
            heading="Email Address"
            value={email}
            setValue={setEmail}
            placeholder="Enter email address"
            type="email"
          />
          <div className="flex flex-col space-y-2">
            <CustomInput
              heading="Password"
              value={password}
              setValue={setPassword}
              placeholder="Password"
              type="password"
            />
            <Link
              to={"/login"}
              className="text-xs font-medium  main-link-text text-right"
            >
              Forgot password?
            </Link>
          </div>
          <PrimaryButton
            type="submit"
            loading={loading}
            text="Sign in to account"
            onClick={login_user}
          />
        </form>
        <Link
          to={"/register"}
          className="text-xs font-medium main-link-text text-center"
        >
          Don't have an account?
        </Link>
      </div>
    </div>
  );
}

export default Login;
