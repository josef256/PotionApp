import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePotion from "./components/CreatePotion";
import ListPotion from "./components/ListPotion";
import { View, StyleSheet } from "react-native";

type ScreenList = {};

const Stack = createNativeStackNavigator();

export default function Navigation(): JSX.Element {
	return (
		<View style={style.container}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName="ListPotion"
			>
				<Stack.Screen name="CreatePotion" component={CreatePotion} />
				<Stack.Screen name="ListPotion" component={ListPotion} />
			</Stack.Navigator>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "green",
		marginTop: 80,
	},
});
