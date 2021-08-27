import { useState } from "react";
import "./ShapeMaker.css";

function ShapeMaker() {
	const [diameter, setDiameter] = useState(0);

	const [circle, setCircle] = useState(false);

	let styles = {
		height: diameter,
		width: diameter,
		background: "blue",
	};

	return (
		<div>
			<label>
				<input
					type="number"
					onChange={(event) => {
						// console.log(event.target.valueAsNumber);
						setDiameter(event.target.valueAsNumber);
					}}
				/>
				Diameter
			</label>

			<label>
				<input
					type="checkbox"
					onChange={(event) => {
						setCircle(event.target.checked);
					}}
				/>
				Circle ?
			</label>

			<div style={styles} className={circle ? "circle" : ""}></div>
		</div>
	);
}

export default ShapeMaker;
