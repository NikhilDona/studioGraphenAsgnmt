import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Image,
    FlatList,
    ScrollView,
    Animated,
    Easing
} from 'react-native'
import React, { useRef, useState } from 'react'
import { data, lawyerList } from '../../../assets/data';
import { ms, vh, vw } from '../../Components/Responsive';

const HomeScreen = ({ navigation }) => {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [index, setIndex] = useState(0)
    const fadeText = useRef(new Animated.Value(0)).current;


    const renderLawyerTypes = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => setSelectedIndex(index)}
            style={[styles.lawyerTypeBtn, { backgroundColor: selectedIndex == index ? "#CF974F" : '#FFFFFF' }]}>
            <Text style={[styles.lawyerTypeTxt, { color: selectedIndex == index ? "#FFFFFF" : "#3B3F44" }]}>
                {item?.type}
            </Text>
        </TouchableOpacity>
    );

    const showAnimation = (toValue) => {
        Animated.spring(fadeText, {
            toValue,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.ease
        }).start()
    }
    const onPress = () => {
        setIndex(index === 1 ? 0 : 1);
        showAnimation(index === 1 ? 0 : 1)
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                backgroundColor={"#CACACA"}
                barStyle={'dark-content'}
            />
            <View style={styles.HeaderView}>
                <Text style={styles.LawyersText}>Lawyers</Text>
                <View style={styles.topIconsView}>
                    <TouchableOpacity
                        style={{ marginRight: vw(17) }}
                    >
                        <Image
                            source={require('../../../assets/icons/icon6.png')}
                            style={{ height: vh(18), width: vw(20) }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../../assets/icons/icon7.png')}
                            style={{ height: vh(14), width: vw(20) }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.flatListView}>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    key={(item) => item?.id}
                    renderItem={renderLawyerTypes}
                />
            </View>
            <ScrollView>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => onPress()}
                    style={{ marginHorizontal: vw(10), overflow: "hidden" }}>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageContainer2}>
                            <Animated.Text style={[styles.lawyerAreaTxt, {
                                opacity: fadeText.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1]
                                }),
                                transform: [
                                    {
                                        translateY: fadeText.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, vh(-15)]
                                        })
                                    }
                                ]

                            }]}>
                                Lawyers in your area
                            </Animated.Text>
                            <Animated.Text style={[styles.lawyerAvailableTxt, {
                                opacity: fadeText.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1]

                                }),
                                transform: [
                                    {
                                        translateY: fadeText.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, vh(-15)]
                                        })
                                    }
                                ]
                            }]}>18 available</Animated.Text>
                            <View style={styles.btnView}>
                                <Text style={styles.allLwysText}>All certified lawyers</Text>
                            </View>
                        </View>
                        <View>
                            <Animated.Image
                                source={require('../../../assets/images/animeImage.png')}
                                style={[styles.phoneIMG, {
                                    transform: [
                                        {
                                            translateY: fadeText.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, vh(-120)]
                                            })
                                        }
                                    ]
                                }]}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ marginBottom: vh(10) }}>
                    {
                        lawyerList.map((item) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => navigation.navigate("Profile")}
                                    key={item?.id}
                                    style={styles.mainMapView}>
                                    <View>
                                        <Image
                                            source={item?.image}
                                            style={{ height: vh(80), width: vw(80) }}
                                        />
                                    </View>

                                    <View style={{ width: "70%", marginLeft: vw(17) }}>
                                        <View style={styles.lwyDetailView}>
                                            <View style={styles.lwyDetailView2}>
                                                <Text style={styles.lawyerName}>{item?.name}</Text>
                                                {
                                                    item?.isVerified == "yes" ?
                                                        <View style={styles.tickBG}>
                                                            <Image
                                                                source={require('../../../assets/images/tick.png')}
                                                                resizeMode='contain'
                                                                style={{ height: vh(5.35), width: vw(6.09) }}
                                                            />

                                                        </View>
                                                        :
                                                        null
                                                }
                                            </View>
                                            <View style={styles.lwyDetailView2}>
                                                <Text style={styles.ratingTxt}>{item?.rating}</Text>
                                                <Image
                                                    source={require('../../../assets/images/star.png')}
                                                    resizeMode='contain'
                                                    style={styles.imgStar}
                                                />

                                            </View>
                                        </View>
                                        <View style={styles.lwyType}>
                                            <View style={styles.lwyDetailView2}>
                                                <Text style={styles.lawyerType}>{item?.type}</Text>
                                            </View>
                                            <View style={styles.lwyDetailView2}>
                                                <Text style={styles.ratingTxt}>{item?.rate}/h</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#CACACA"
    },
    LawyersText: {
        fontSize: ms(35),
        lineHeight: vh(44),
        fontFamily: 'SourceSansPro-Regular',
        marginLeft: vw(16),
        color: "#3B3F44",
        fontWeight: "400",
        alignSelf: "center"
    },
    HeaderView: {
        marginTop: "3%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    lawyerTypeBtn: {
        justifyContent: "center",
        alignItems: 'center',
        padding: ms(10),
        marginRight: vw(5),
        borderRadius: ms(8)
    },
    lawyerTypeTxt: {
        fontSize: ms(16),
        lineHeight: vh(20),
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: "400"
    },
    imageContainer: {
        width: "100%",
        height: vh(140),
        borderRadius: ms(8),
        backgroundColor: "#E2E6E6",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: vh(25)
    },
    imageContainer2: {
        marginLeft: vw(16),
        marginTop: vh(25)
    },
    lawyerAreaTxt: {
        fontSize: 16,
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: "400",
        color: "#3B3F44",
        lineHeight: 22
    },
    lawyerAvailableTxt: {
        fontSize: ms(22),
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: "400",
        color: "#3B3F44",
        lineHeight: vh(28),
        marginTop: vh(5)
    },
    btnView: {
        marginTop: vh(25),
        height: vh(21),
        width: vw(114),
        backgroundColor: "#FFFFFF",
        borderRadius: ms(20),
        justifyContent: 'center',
        alignItems: "center"

    },
    allLwysText: {
        fontSize: ms(12),
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: "400",
        color: "#AEB9BC"
    },
    mainMapView: {
        backgroundColor: "#FFFFFF",
        width: "95%",
        height: vh(80),
        marginTop: vh(10),
        alignSelf: "center",
        borderRadius: ms(8),
        flexDirection: 'row'

    },
    lawyerName: {
        fontSize: ms(22),
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: "400",
        lineHeight: vh(28),
        color: "#3B3F44"
    },
    lawyerType: {
        marginTop: vh(2),
        fontSize: ms(16),
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: "400",
        color: "#3B3F44"
    },
    tickBG: {
        height: vh(12.9),
        width: vw(12.9),
        borderRadius: ms(12.9 / 2),
        backgroundColor: "#8FB4AA",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: vw(7)
    },
    ratingTxt: {
        fontSize: ms(16),
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: "600",
        color: "#3B3F44"
    },
    topIconsView: {
        flexDirection: "row",
        marginRight: vw(18)
    },
    flatListView: {
        marginTop: vh(20),
        marginLeft: vw(10),
        marginBottom: vh(10)
    },
    phoneIMG: {
        height: vh(158),
        width: vw(168),
        position: "absolute",
        right: 0,
        top: "70%"
    },
    lwyDetailView: {
        marginTop: vh(14),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    lwyDetailView2: {
        flexDirection: "row",
        alignItems: 'center'
    },
    imgStar: {
        height: vh(11.56),
        width: vw(12.08),
        marginLeft: vw(3)
    },
    lwyType: {
        marginTop: vh(2),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    }

})
export default HomeScreen