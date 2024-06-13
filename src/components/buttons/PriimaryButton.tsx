import { FC, ReactElement } from "react";

type Props = {
  text: string;
  dark?: boolean;
  outline?: boolean;
  onClick?: () => void;
  loading?: boolean;
  textStyles?: string;
  type?: "button" | "submit" | "reset";
};

const PrimaryButton: FC<Props> = (props: Props): ReactElement => {
  return (
    <button
      type={props.type}
      disabled={props.loading}
      onClick={props.loading ? () => console.log("loading") : props.onClick}
      className={`${""} bg-zinc-950 cursor-pointer hover:bg-zinc-800  rounded-full font-semibold text-center p-3 text-white text-sm`}
    >
      {props.loading ? (
        <p>Loading...</p>
      ) : (
        <p className={props.textStyles}>{props.text}</p>
      )}
    </button>
  );
};

export default PrimaryButton;
