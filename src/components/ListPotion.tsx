import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import CardPotion from "./CardPotion";
const data = ["title 1", "title 2"];
export default function ListPotion(): JSX.Element {
	return (
		<ScrollView contentContainerStyle={style.container}>
			{data.map((card, index) => (
				<CardPotion key={{ index }} />
			))}
		</ScrollView>
	);
}
const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
