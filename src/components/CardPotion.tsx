import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { dataType } from "./ListPotion";
export default function CardPotion({
	content,
}: {
	content: dataType;
}): JSX.Element {
	return (
		<View style={style.container}>
			<View>
				<Text style={style.titleStyle}>{content.date}</Text>
			</View>
			<View>
				<Text>{content.percentage}</Text>
			</View>
		</View>
	);
}
const style = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 5,
		height: 80,
		marginBottom: 15,
		borderWidth: 0.1,
		borderColor: "#f3f4f6",
		backgroundColor: "white",
	},
	titleStyle: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
