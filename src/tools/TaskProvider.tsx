import React, {
	createContext,
	useState,
	useContext,
	Dispatch,
	SetStateAction,
} from "react";

type taskType = {
	id: string;
	taskName: string;
	validated: boolean;
};
type TaskTypeContext = {
	tasks: taskType[];
	setTasks: Dispatch<SetStateAction<taskType[]>>;
};

const TaskContext = createContext<TaskTypeContext | undefined>(undefined);

export const TaskProvider: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const [tasks, setTasks] = useState<taskType[]>([]);
	return (
		<TaskContext.Provider value={{ tasks, setTasks }}>
			{children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskContext);
