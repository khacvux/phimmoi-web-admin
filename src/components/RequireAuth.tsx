import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function RequireAuth({ children }: { children: JSX.Element }) {
    const { admin } = useSelector((state: any)=> state.auth)
  
    if (!admin.token) {
      return <Navigate to="/signin" replace />;
    }
    return children;
  }
  