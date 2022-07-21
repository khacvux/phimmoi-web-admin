import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const { admin } = useSelector((state: any) => state.auth);
  const navigate = useNavigate()
  useEffect(() => {
    if (!admin.token) {
      navigate('/signin')
    }
  }, [admin.token])
  return children;
}
