import { useState, useEffect } from "react";
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
	const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(false);
	const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
	const [selectedDate, setSelectedDate] = useState<string>("");
	const [taskInputs, setTaskInputs] = useState<taskInputType[]>([]);
	const { tasks, setTasks } = useTaskContext();

	useEffect(() => {
		console.log("remote tasks", tasks);
	}, [tasks]);

	const datePress = (): void => {
		setIsCalendarVisible(!isCalendarVisible);
	};
	const addTaskInput = (): void => {
		setTaskInputs([
			...taskInputs,
			{ id: uuidv4(), taskName: "", validated: false },
		]);
	};
	const changeTaskInputValue = (text: string, index: number): void => {
			const newEntries: taskInputType[]  = [...taskInputs];
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
		setTasks(taskInputs);
	};
	console.log("teskinput", taskInputs);
	return (
		<View style={style.container}>
			<ScrollView
				contentContainerStyle={style.contentContainer}
				style={style.content}
			>
				<View>
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
							<Pressable onPress={addTaskInput}>
								<Text>Add Task</Text>
							</Pressable>
						</View>
						{taskInputs.map((element, index) => (
							<View style={style.inputContainer} key={element.id}>
								<TextInput
									style={style.input}
									value={element.taskName}
									onChangeText={(text) =>
										changeTaskInputValue(text, index)
									}
								/>
								<View style={style.actionButtonContainer}>
									<Pressable
										onPress={() => approveTask(index)}
									>
										<ConfirmIcon width={30} height={30} />
									</Pressable>
									<Pressable>
										<RejectIcon width={30} height={30} />
									</Pressable>
								</View>
							</View>
						))}
					</View>
				</View>
				<View style={style.actionButton}>
					<Pressable onPress={synchronizeTask}>
						<Text>Add Task</Text>
					</Pressable>
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
		justifyContent: "space-between",
	},
	content: {
		width: "90%",
		maxHeight: "50%",
		backgroundColor: "white",
	},
	datepicker: {},
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
		backgroundColor: "red",
		width: "70%",
	},
	actionButton: {
		alignItems: "center",
	},
});
