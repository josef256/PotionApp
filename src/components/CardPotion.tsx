import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CardPotion(): JSX.Element {
	return (
		<View style={style.container}>
			<View>
				<Text style={style.titleStyle}>im a date</Text>
			</View>
			<View>
				<Text>percent</Text>
			</View>
		</View>
	);
}
const style = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		backgroundColor: "red",
		padding: 5,
		marginBottom: 15, 
	},
	titleStyle: {
		fontSize: 20,
		fontWeight:"bold",
		fontFamily: "Ambassador",
	},
});
