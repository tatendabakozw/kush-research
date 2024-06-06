/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = { label?: string; value?: any; setValue?: any };

const RadioItem = ({ label, value, setValue }: Props) => {
  return (
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
      <div className="flex items-center ps-3">
        <input
          id="horizontal-list-radio-license"
          type="radio"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          defaultValue=""
          name="list-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500   focus:ring-2"
        />
        <label
          htmlFor="horizontal-list-radio-license"
          className="w-full py-3 ms-2 text-xs font-medium text-gray-900 "
        >
          {label}
        </label>
      </div>
    </li>
  );
};

export default RadioItem;
