import { useField } from "formik";
interface IInputFieldProps {
  name: string;
  label: string | null;
  placeholder: string;
  type: string;
  textarea?: boolean;
}

const InputField = ({ textarea, ...props }: IInputFieldProps) => {
  const [field, { error }] = useField(props);
  return (
    <div className="mb-2">
      <label
        className="text-font text-sm font-bold mb-2"
        htmlFor={field.name}
      >
        {props.label}
      </label>
      {textarea ? (
        <textarea
          id={field.name}
          value={field.value}
          onChange={field.onChange}
          className=" appearance-none h-16 rounded w-full py-2 px-3 text-font
          leading-tight outline-none bg-dark"
          {...props}
        />
      ) : (
        <input
          className=" appearance-none h-11 rounded w-full py-2 px-4 text-font
            leading-tight outline-none bg-dark"
          id={field.name}
          {...props}
          value={field.value}
          onChange={field.onChange}
        />
      )}
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default InputField;
