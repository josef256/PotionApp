import React, { createContext, useState, useContext } from "react";

type modalContextType = {
	isAddModalVisible: boolean;
	isDetailModalVisibile: boolean;
};

const ModalContext = createContext<modalContextType | undefined>();

export const ModalProvider: React.FC<{
	children: JSX.Element;
}> = ({ children }): JSX.Element => {
	const [isAddModalVisible, setIsAddModalVisible] = useState(false);
	const [isDetailModalVisibile, setIsDetailModalVisibile] = useState(false);

	return (
		<ModalContext.Provider
			value={{
				isAddModalVisible,
				isDetailModalVisibile,
				setIsDetailModalVisibile,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const useModalContext = () => useContext(ModalContext);
