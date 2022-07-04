import { memo } from "react";
import { useDispatch } from "react-redux";
import { removeCategory } from "../redux/categoryMovie/actions";
interface ICategoryItem {
  name: string;
  _id: string;
  token: string;
}

function CategoryItem({ name, _id, token }: ICategoryItem) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeCategory({ _id, token }));
  };

  return (
    <div className="my-2 py-2 px-3 rounded text-sm hover:bg-dark flex flex-row items-center justify-betweenr">
      <div className="w-full cursor-pointer">
        <p>{name}</p>
      </div>
      <div
        className="w-full bg-slate hover:bg-secondary py-1 rounded-md cursor-pointer"
        onClick={handleRemove}
      >
        <p className="text-center">Remove</p>
      </div>
    </div>
  );
}

export default memo(CategoryItem);
