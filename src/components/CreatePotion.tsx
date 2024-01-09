import { useState, useRef } from "react";
import {
	Text,
	View,
	ScrollView,
	StyleSheet,
	Pressable,
	TextInput,
	FlatList,
} from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import ConfirmIcon from "../../assets/confirm-icon.svg";
import TrashIcon from "../../assets/trash-icon.svg";
import CalendarIcon from "../../assets/calendar-icon.svg";
import RejectIcon from "../../assets/reject-icon.svg";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { useTaskContext } from "../tools/TaskProvider";

type taskInputType = {
	id: string;
	taskName: string;
	validated: boolean;
};
export default function CreatePotion(): JSX.Element {
	const scrollViewRef = useRef(null);
	const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(false);
	const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
	const [selectedDate, setSelectedDate] = useState<string>("");
	const [taskInputs, setTaskInputs] = useState<taskInputType[]>([
		{ id: uuidv4(), taskName: "", validated: false },
	]);
	const { tasks, setTasks } = useTaskContext();

	const datePress = (): void => {
		setIsCalendarVisible(!isCalendarVisible);
	};
	const addTaskInput = (): void => {
		setTaskInputs([
			...taskInputs,
			{ id: uuidv4(), taskName: "", validated: false },
		]);
		setTimeout(() => {
			scrollViewRef.current.scrollToEnd({ animated: true });
		}, 10);
	};
	const changeTaskInputValue = (text: string, index: number): void => {
		const newEntries: taskInputType[] = [...taskInputs];
		newEntries[index] = {
			...newEntries[index],
			taskName: text,
		};
		setTaskInputs(newEntries);
	};
	const approveTask = (index: number): void => {
		const newEntries: taskInputType[] = [...taskInputs];
		newEntries[index] = {
			...newEntries[index],
			validated: true,
		};
		setTaskInputs(newEntries);
	};
	const synchronizeTask = (): void => {
		if (taskInputs.findIndex((elem) => !elem.validated) == -1) {
			setTasks(taskInputs);
		} else {
		}
	};
	const RemoveTask = (index: number): void => {
		const newEntries: taskInputType[] = [...taskInputs];
		newEntries.splice(index, 1);
		setTaskInputs(newEntries);
	};
	return (
		<View style={style.container}>
			<View style={style.content}>
				<ScrollView
					contentContainerStyle={style.contentContainer}
					style={style.contentWrapper}
					ref={scrollViewRef}
				>
					<View>
						<Text style={{ fontSize: 12, color: "#9ca3af" }}>
							Task Manager
						</Text>
						<View style={style.calendarSection}>
							<Pressable
								style={style.calendarButton}
								onPress={datePress}
							>
								<CalendarIcon width={30} height={30} />
								<Text style={style.calendarText}>
									Select a date
								</Text>
							</Pressable>
							{isCalendarVisible && (
								<View style={style.datepicker}>
									<DateTimePicker mode="date" />
								</View>
							)}
						</View>
						<View style={style.inputWrapper}>
							{taskInputs.map((element, index) => (
								<View
									style={style.inputContainer}
									key={element.id}
								>
									<TextInput
										style={style.input}
										value={element.taskName}
										placeholder={"Enter Task name..."}
										onChangeText={(text) =>
											changeTaskInputValue(text, index)
										}
									/>
									<View style={style.actionButtonContainer}>
										<Pressable
											onPress={() => RemoveTask(index)}
										>
											<TrashIcon width={30} height={30} />
										</Pressable>
									</View>
								</View>
							))}
							<View>
								<Pressable onPress={addTaskInput}>
									<Text>Add Task</Text>
								</Pressable>
							</View>
						</View>
					</View>
				</ScrollView>
				<View style={style.actionButton}>
					<Pressable onPress={synchronizeTask}>
						<Text>Save</Text>
					</Pressable>
				</View>
				<View style={style.closeWrapper}>
					<RejectIcon width={30} height={30} />
				</View>
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
	contentContainer: {
		padding: 15,
		backgroundColor: "white",
		justifyContent: "space-between",
		borderRadius: 15,
	},
	content: {
		width: "90%",
		minHeight: "70%",
		backgroundColor: "white",
		borderWidth: 2,
		borderColor: "#e5e7eb",
		borderRadius: 15,
	},
	contentWrapper: {
		height: "70%",
	},
	datepicker: {
		borderWidth: 1,
		borderRadius: 15,
		marginTop: 15,
	},
	inputContainer: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
	},
	actionButtonContainer: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		gap: 15,
	},
	input: {
		borderWidth: 1,
		borderColor: "#e5e7eb",
		backgroundColor: "#f3f4f6",
		width: "80%",
		padding: 5,
		borderWidth: 1,
		borderRadius: 15,
		height: 40,
	},
	actionButton: {
		alignItems: "center",
		justifyContent: "center",
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		padding: 15,
		borderColor: "#e5e7eb",
		borderTopWidth: 1,
		backgroundColor: "#f3f4f6",
	},
	calendarSection: {
		marginTop: 15,
		marginBottom: 15,
	},
	calendarButton: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "#e5e7eb",
		backgroundColor: "#f3f4f6",
		padding: 5,
	},
	calendarText: {
		fontSize: 18,
		marginLeft: 5,
		color: "#3f3f46",
		fontWeight: "600",
	},
	inputWrapper: {
		gap: 15,
	},
	closeWrapper: {
		position: "absolute",
		padding: 5,
		borderRadius: 999,
		borderWidth: 0.8,
		backgroundColor: "white",
		right: -10,
		top: -15,
	},
});
