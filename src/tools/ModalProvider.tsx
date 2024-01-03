import React, {
	createContext,
	useState,
	useContext,
	SetStateAction,
	Dispatch,
} from "react";

type modalContextType = {
	isAddModalVisible: boolean;
	setIsAddModalVisible: Dispatch<SetStateAction<boolean>>;
	setIsDetailModalVisibile: Dispatch<SetStateAction<boolean>>;
	isDetailModalVisibile: boolean;
};

const ModalContext = createContext<modalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{
	children: JSX.Element;
}> = ({ children }): JSX.Element => {
	const [isAddModalVisible, setIsAddModalVisible] = useState<boolean>(false);
	const [isDetailModalVisibile, setIsDetailModalVisibile] =
		useState<boolean>(false);

	return (
		<ModalContext.Provider
			value={{
				isAddModalVisible,
				isDetailModalVisibile,
				setIsDetailModalVisibile,
				setIsAddModalVisible,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const useModalContext = () => useContext(ModalContext);
