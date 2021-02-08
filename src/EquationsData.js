import React from "react";
export const equations = [
	"x + y p, xy = q",
	"x^2 + 2 = px",
	"a x2 + bx + c = 0 (a, b, c are constants, a != 0)",
];
console.log(equations);

export const EquationsData = ({ text }) => {
	return (
		<>
			<p style={{ textAlign: "center" }}>{text}</p>
		</>
	);
};
