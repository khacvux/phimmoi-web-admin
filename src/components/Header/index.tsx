import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/auth/action";

export default function Header() {
  const { admin } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="py-1 flex flex-row items-center justify-end px-10 space-x-5 text-sm border-b border-slate-300">
      {admin.token ? (
        <div className="flex flex-row items-center space-x-2">
          <div className="flex flex-row items-center space-x-2 hover:bg-slate-200 py-1 px-2 rounded-xl cursor-pointer">
            <p>{admin.name}</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              className="h-6 w-6 object-cover rounded-full "
            />
          </div>
          <div className="border border-slate-200 hover:bg-slate-300 py-1 px-2 cursor-pointer rounded-xl " onClick={handleLogout}>
            <p className="text-red-500">Log out</p>
          </div>
        </div>
      ) : (
        <Link
          className=" bg-white border border-slate-200  mt-1 rounded-2xl p-2 hover:bg-slate-200 py-1 px-3"
          to="/signin"
        >
          <p className="text-center">Sign in</p>
        </Link>
      )}
    </div>
  );
}
