import { Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropdownField, { optionsModel } from "../components/DropdownField";
import InputField from "../components/InputField";
import { getListCategory } from "../redux/categoryMovie/actions";
import { addMovie } from "../redux/movie/actions";

export default function AddMoviesPage() {
  const dispatch = useDispatch();
  const [image, setImage] = useState<File>();
  const [movie, setMovie] = useState<File>();
  const [category, setCategory] = useState<string>();
  const [preview, setPreview] = useState<string>();
  const fileInputRef = useRef<any>();
  const { admin } = useSelector((state: any) => state.auth);
  const [categoryOption, setCategoryOption] = useState<Array<optionsModel>>();
  const { listCategory } = useSelector((state: any) => state.category);

  const initialValues = {
    name: "",
    description: "",
  };

  const getCategory = (event: any, { value }: any) => {
    setCategory(value);
  };

  const handleSubmit = (values: any) => {
    if (values.name && values.description && image && movie && category)
      dispatch(
        addMovie({
          name: values.name,
          description: values.description,
          category: category,
          poster: image,
          movieFile: movie,
        })
      );
  };

  useEffect(() => {
    dispatch(getListCategory(admin.token));
  }, []);

  useEffect(() => {
    if (listCategory) {
      const newlist = listCategory.map((item: any): optionsModel => {
        return {
          key: item._id,
          text: item.name,
          value: item._id,
        };
      });
      setCategoryOption(newlist);
    }
  }, []);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
    }
  }, [image]);

  return (
    <div className="p-3 flex flex-row flex-1">
      <div className="flex-1 border border-slate justify-center overflow-hidden rounded-md">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className=" hidden"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.substr(0, 5) === "image") {
              setImage(file);
            }
          }}
        />
        {preview ? (
          <img
            src={preview}
            className="w-full h-full object-cover"
            onClick={() => fileInputRef.current?.click()}
          />
        ) : (
          <button
            onClick={(event) => {
              event.preventDefault();
              fileInputRef.current?.click();
            }}
            className="w-full h-full items-center flex flex-col justify-center"
          >
            <p className="bg-bg3 text-font px-10 py-2 rounded">Image</p>
          </button>
        )}
      </div>
      <div className="flex-1 mx-4 items-stretch flex flex-col">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form className="w-full">
              <div className="mb-3">
                <p className="text-font text-sm font-bold mb-2">Select file</p>
                <input
                  name="movie"
                  type="file"
                  accept="video/*"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file && file.type.substr(0, 5) == "video")
                      setMovie(file);
                  }}
                />
              </div>
              <InputField
                name="name"
                type="text"
                placeholder="name"
                label="Name"
              />
              <DropdownField
                name="category"
                label="Category"
                placeholder="select category"
                options={categoryOption}
                onChange={getCategory}
              />
              <InputField
                name="description"
                type="text"
                textarea
                placeholder="..."
                label="Decription"
              />

              <button
                type="submit"
                className=" items-center w-full justify-center bg-secondary hover:opacity-60
                flex py-3 rounded-md my-8 cursor-pointer"
              >
                <span className="text-font">Upload</span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
