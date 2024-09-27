import React, { useState } from "react";
import WaterTracker from "./waterTracker";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0)

	const increaseWater = (e) => {
		e.preventDefault();
		if(count < 8) {
			setCount(count + 1);
		}
		else {
			setCount(0);
		}
	}
	return (
		<div className="text-center m-5">
			<WaterTracker glasses={count}/>
			<button className="btn btn-primary" onClick={(e)=>increaseWater(e)}>I drank more water</button>
		</div>
	);
};

export default Home;
