import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import InputField from "../components/inputField";
import { loginModel } from "../models/auth";
import { login } from "../redux/auth/action";

export default function Signin() {
  const dispatch = useDispatch();
  const initialValues: loginModel = { email: "", password: "" };

  const handleSubmit = (values: loginModel) => {
    dispatch(login(values));
  };
  const { admin } = useSelector((state: any) => state.auth);

  if (admin.token) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="flex flex-col space-y-3 h-full items-center justify-center">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="w-80">
            <InputField
              name="email"
              type="text"
              placeholder="Email"
              label={null}
            />
            <InputField
              name="password"
              type="password"
              placeholder="Password"
              label={null}
            />
            <button className=" bg-red-600 w-80 py-2 rounded-md" type="submit">
              <p className="text-white font-bold">Login</p>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
