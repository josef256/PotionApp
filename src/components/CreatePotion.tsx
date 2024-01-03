import { Text, View, StyleSheet } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
export default function CreatePotion(): JSX.Element {
	return (
		<View style={style.container}>
			<View style={style.content}>
				<Text>Add Task</Text>
				<View>
					<Text>Select a date</Text>
					<View style={style.datepicker}></View>
				</View>
				<View></View>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		position: "absolute",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		padding: 15,
		backgroundColor: "white",
		width: "90%",
		minHeight: "50%",
	},
	datepicker: {},
});
