import React from "react";

interface Props {
  route: string;
  selected: boolean;
  onClick: Function;
}

const RouteButton: React.FC<Props> = ({ route, selected, onClick }) => {
  return (
    <input
      className={selected ? "Button Selected" : "Button"}
      type="button"
      value={route}
      onClick={onClick}
    />
  );
};

export default RouteButton;
