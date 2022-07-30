import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "../components/CategoryItem";
import InputField from "../components/InputField";
import Movie from "../components/Movie";
import { categoryModel } from "../models/categoryMovie";
import { infoMovieModel } from "../models/movie";
import {
  addCategory,
  getListCategory,
  removeCategory,
} from "../redux/categoryMovie/actions";
import { getInfoMovie, getListMovieByCategory } from "../redux/movie/actions";
import { RootReducerInterface } from "../redux/rootReducer";

interface IActiveCategory {
  name: string;
  _id: string;
}
export default function AddCategoryPage() {
  const dispatch = useDispatch();
  const { admin } = useSelector((state: any) => state.auth);
  const listMovie = useSelector(
    (state: RootReducerInterface) => state.movie.listMovie
  );
  const [activeCategory, setActiveCategory] = useState<IActiveCategory>();
  const initialValues: categoryModel = { name: "" };
  const handleSubmit = (values: categoryModel, { resetForm }: any) => {
    dispatch(addCategory({ name: values.name, token: admin.token }));
    resetForm();
  };

  useEffect(() => {
    dispatch(getListCategory(admin.token));
  }, []);

  useEffect(() => {
    if (activeCategory?._id)
      dispatch(
        // getInfoMovie({ token: admin.token, idMovie: activeCategory?._id })
        getListMovieByCategory({
          token: admin.token,
          idCategory: activeCategory?._id,
        })
      );
  }, [activeCategory]);

  const { listCategory } = useSelector((state: any) => state.category);
  // console.log(listMovie)

  return (
    <div className="py-3 px-8 w-full h-screen flex flex-row items-start space-x-3">
      <div className="w-1/3 h-full">
        <div className="w-full text-bg3">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {() => (
              <Form className="flex flex-row items-center justify-between space-x-2">
                <div className="w-full">
                  <InputField
                    name="name"
                    type="text"
                    placeholder="Name"
                    label={null}
                  />
                </div>
                <button
                  className=" bg-highlight px-5 py-1 rounded"
                  type="submit"
                >
                  Add
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div
          className="h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-dark 
                scrollbar-thumb-rounded-full"
        >
          {listCategory.map((item: any) => {
            return (
              <CategoryItem
                name={item.name}
                _id={item._id}
                key={item._id}
                token={admin.token}
                setActiveCategory={setActiveCategory}
              />
            );
          })}
        </div>
      </div>

      <div className="w-2/3 ">
        <div className="w-full flex items-center justify-center mt-2 mb-5">
          <p className="text-lg font-bold">{activeCategory?.name}</p>
        </div>
        <div
          className="h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-dark 
                scrollbar-thumb-rounded-full grid grid-cols-3 gap-2 pr-3"
        >
          {listMovie.map((item: any) => {
            return <Movie info={item} key={item._id} />;
          })}
        </div>
      </div>
    </div>
  );
}
