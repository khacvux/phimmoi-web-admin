import { Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "../../components/InputField";
import { addMovie } from "../../redux/movie/action";

export default function AddMoviesPage() {
  const dispatch = useDispatch();
  const [image, setImage] = useState<File | null>();
  const [preview, setPreview] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>();

  const initialValues = {
    name: "",
    id: "",
    description: "",
  };

  const handleSubmit = (values: any) => {
    if (values.name && values.id && values.description && image) {
      dispatch(
        addMovie({
          name: values.name,
          idMovieDrive: values.id,
          description: values.description,
          image: image,
        })
      );
    }
  };

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
      <div className="flex-1 border justify-center overflow-hidden rounded-md">
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
            className="w-full h-full"
          >
            Image
          </button>
        )}
      </div>
      <div className="flex-1 mx-4 items-stretch flex flex-col">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form className="w-full">
              <InputField
                name="name"
                type="text"
                placeholder="name"
                label="Name"
              />
              <InputField
                name="id"
                type="text"
                placeholder="ID video in google drive"
                label="ID video in google drive"
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
                className=" items-center w-full bg-slate-50 border border-blue-100 justify-center 
                flex py-3 rounded-lg my-8 cursor-pointer hover:bg-blue-400"
              >
                <span className="text-blue-600  text-sm font-medium ">
                  Upload
                </span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
