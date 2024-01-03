import React, { SetStateAction, Dispatch } from "react";
import { Text, Pressable } from "react-native";
import AddIcon from "../../assets/add-icon.svg";

export default function AddButtonFab({
	displayModal,
}: {
	displayModal: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
	return (
		<Pressable
			style={{
				borderStyle: "solid",
				borderRadius: 9999,
				borderWidth: 0,
				padding: 15,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#f97316",
			}}
		>
			<AddIcon width={30} height={30} />
		</Pressable>
	);
}
