import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../Screens/HomeScreen";
import {
    View,
    Image
} from "react-native";
import { vh, vw } from "../../Components/Responsive";

const BottomTab = createBottomTabNavigator();
function BottomTabBar() {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: "8%",
                    backgroundColor: "#FFFF"
                }
            }}>
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Image
                                    resizeMode="contain"
                                    style={{ height: vh(27.79), width: vw(30.11), tintColor: focused ? "#8FB4AA" : "#3B3F44" }}
                                    source={require("../../../assets/icons/icon1.png")}
                                />
                            </View>
                        )
                    }
                }

                } name="Home" component={HomeScreen} />
            <BottomTab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                resizeMode="contain"
                                style={{ height: vh(23.59), width: vw(24.79), tintColor: focused ? "#8FB4AA" : "#3B3F44" }}
                                source={require("../../../assets/icons/icon2.png")}
                            />
                        </View>
                    )
                }
            }

            } name="Scanbox" component={HomeScreen} />
            <BottomTab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                resizeMode="contain"
                                style={{ height: vh(26.21), width: vw(27.48), tintColor: focused ? "#8FB4AA" : "#3B3F44" }}
                                source={require("../../../assets/icons/icon3.png")}
                            />
                        </View>
                    )
                }
            }
            } name="MycardVirtual" component={HomeScreen} />

            <BottomTab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                resizeMode="contain"
                                style={{ height: vh(24.28), width: vw(24.32), tintColor: focused ? "#8FB4AA" : "#3B3F44" }}
                                source={require("../../../assets/icons/icon4.png")}
                            />
                        </View>
                    )
                }
            }
            } name="My Wallet" component={HomeScreen} />
            <BottomTab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                resizeMode="contain"
                                style={{ height: vh(25.68), width: vw(25.72), tintColor: focused ? "#8FB4AA" : "#3B3F44" }}
                                source={require("../../../assets/icons/icon5.png")}
                            />
                        </View>
                    )
                }
            }
            } name="My Wall" component={HomeScreen} />
        </BottomTab.Navigator>
    )
}

export default BottomTabBar;