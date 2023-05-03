import React from "react";
export interface Props {
  label: string;
  disable?: boolean;
  outlined?: boolean;
  onClickHandler?: (e: any) => void;
  className?: string;
}

const defaultProps: Props = {
  label: "Default",
};

const Button: React.FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <div
        className={` transition-all text-xl cursor-pointer px-6 py-2 w-max rounded-full ${
          props.disable
            ? props.outlined
              ? " text-gray-400 border-gray-400 border pointer-events-none"
              : " bg-gray-400 pointer-events-none text-white"
            : props.outlined
            ? " text-primary border border-primary hover:bg-primary-50 bg-white"
            : " text-white bg-primary hover:bg-gray-500"
        }  ${props.outlined && ""}`}
        onClick={props.onClickHandler}
      >
        {props.label}
      </div>
    </div>
  );
};

Button.defaultProps = defaultProps;

export default Button;
