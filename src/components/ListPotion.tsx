import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import CardPotion from "./CardPotion";
import AddButtonFab from "./AddButtonFab";
import { useModalContext } from "../tools/ModalProvider";

export type dataType = {
	date: string;
	percentage: number;
};

const data: dataType[] = [
	{ date: "21 september 2023", percentage: 30 },
	{ date: "01 november 2023", percentage: 5 },
];
export default function ListPotion(): JSX.Element {
	const { isAddModalVisible, setIsAddModalVisible } = useModalContext();
	return (
		<View style={style.container}>
			<FlatList
				data={data}
				renderItem={({ item }: { item: dataType }) => (
					<CardPotion content={item} />
				)}
				keyExtractor={(element) => element.date}
				style={style.ListWrapper}
			/>
			<View
				style={{
					position: "absolute",
					right: "10%",
					bottom: "10%",
				}}
			>
				<AddButtonFab displayModal={setIsAddModalVisible} />
			</View>
		</View>
	);
}
const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "#f3f4f6",
	},
	ListWrapper: {
		width: "100%",
	},
});
