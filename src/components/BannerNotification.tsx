import React from "react";
import { View } from "react-native";

export default function BannerNotification({
	status,
	msg,
	duration,
}: {
	status: string;
	msg: string;
	duration: flaot;
}): JSX.Element {
	return (
		<View
			style={{
				width: "90%",
				height: 50,
				backgroundColor: "red",
				position: "absolute",
				marginLeft: 15,
				marginRight: 15,
				marginTop: 60,
			}}
		></View>
	);
}
