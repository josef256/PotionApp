import { useState } from "react";
import {
	Text,
	View,
	ScrollView,
	StyleSheet,
	Pressable,
	TextInput,
} from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import ConfirmIcon from "../../assets/confirm-icon.svg";
import RejectIcon from "../../assets/reject-icon.svg";

export default function CreatePotion(): JSX.Element {
	const [isCalendarVisible, setIsCalendarVisible] = useState(false);
	const [isInputVisible, setIsInputVisible] = useState(false);
	const [selectedDate, setSelectedDate] = useState("");
	const datePress = () => {
		setIsCalendarVisible(!isCalendarVisible);
	};
	return (
		<View style={style.container}>
			<ScrollView
				contentContainerStyle={style.contentContainer}
				style={style.content}
			>
				<Text>Add Task</Text>
				<View>
					<Pressable onPress={datePress}>
						<Text>Select a date</Text>
					</Pressable>
					<View style={style.datepicker}>
						{isCalendarVisible && <DateTimePicker />}
					</View>
				</View>
				<View>
					<View>
						<Text>Add Task</Text>
					</View>
					<View style={style.inputContainer}>
						<TextInput style={style.input} />
						<View style={style.actionButtonContainer}>
							<ConfirmIcon width={30} height={30} />
							<RejectIcon width={30} height={30} />
						</View>
					</View>
				</View>
			</ScrollView>
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
	contentContainer: {
		padding: 15,
		backgroundColor: "white",
		minHeight: "50%",
	},
	content: {
		width: "90%",
		maxHeight: "50%",
		backgroundColor: "white",
	},
	datepicker: {},
	inputContainer: {
		justifyContent: "space-between",
		alignItems:"center",
		flexDirection: "row",

	},
	actionButtonContainer: {
		justifyContent: "space-between",
		alignItems:"center",
		flexDirection: "row",
		gap:15
	},
	input: {
		borderWidth: 1,
		backgroundColor:"red",
		width: "70%",
	},
});
