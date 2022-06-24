import { useEffect, useRef, useState } from "react";

export default function InfoMovie() {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>();

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
      <div className="flex-1 border justify-center overflow-hidden rounded-md relative">
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

        <img
          src={preview}
          className="w-full h-full object-cover"
        />

        <button
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current?.click();
          }}
          className="absolute top-1 right-1 bg-red-700 hover:bg-red-600 px-3 py-2 rounded-lg"
        >
          <p className="text-sm text-white">Update</p>
        </button>
      </div>
      <div className="flex-1 mx-4 items-stretch flex flex-col">
        <p className="mt-1 font-light text-sm">Name Movie</p>
        <input
          type="text"
          className=" bg-slate-50 outline-none rounded-md px-3 py-2"
        />
        <p className="mt-3 font-light text-sm">Description</p>
        <textarea className=" bg-slate-50 outline-none rounded-md px-3 py-2 h-36" />

        <div
          className=" items-center w-full bg-red-700 justify-center flex py-3 rounded-lg my-8 cursor-pointer hover:bg-red-600"
          onClick={() => console.log(123)}
        >
          <span className="text-white text-sm font-medium ">Save</span>
        </div>
      </div>
    </div>
  );
}
