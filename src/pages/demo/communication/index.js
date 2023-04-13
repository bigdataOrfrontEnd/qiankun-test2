import React from "react";

export default function Communication(props) {
  const { car, money } = props;
  return (
    <div>
      {car} {money}
    </div>
  );
}
