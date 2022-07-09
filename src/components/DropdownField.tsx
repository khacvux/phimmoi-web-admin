import { useField } from "formik";
import { Dropdown } from "semantic-ui-react";

export interface optionsModel {
  key: string;
  text: string;
  value: string;
}

interface DropdownFieldProps {
  name: string;
  label: string | null;
  options: Array<optionsModel> | any;
  placeholder: string;
  onChange: Function | any
}

const DropdownField = (props: DropdownFieldProps) => {
  const [field, { error }] = useField(props);
  return (
    <div className="mb-2">
      <label className="text-font text-sm font-bold mb-5">
        {props.label}
      </label>
      <Dropdown
        className="mt-2 input"
        selection
        fluid
        search={true}
        {...props}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default DropdownField;
