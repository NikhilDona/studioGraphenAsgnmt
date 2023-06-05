import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { ms, vh, vw } from '../../Components/Responsive'
import { description } from '../../../assets/data'
import { info } from '../../../assets/data'

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        backgroundColor={"#FFFFFF"}
        barStyle={'dark-content'}
      />
      <View style={styles.crossStyle}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../../assets/icons/cross.png')}
            style={styles.crossIconStyle}
          />
        </TouchableOpacity>
        <View style={styles.imgView}>
          <Image
            source={require('../../../assets/images/lawyer1.png')}
            style={styles.lawyerImageStyle}
          />
          <View style={{ marginLeft: vw(10) }}>
            <View style={styles.imgView2}>
              <Text style={styles.nameStyle}>Adam Brown</Text>
              <View style={styles.tickBG}>
                <Image
                  source={require('../../../assets/images/tick.png')}
                  resizeMode='contain'
                  style={styles.tickStyle}
                />
              </View>
            </View>
            <Text style={styles.typeStyle}>Immigration Law</Text>
            <Text style={styles.rateStyle}>£65.99/h</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.containersView}>
          <View style={styles.container1Style}>
            <View style={{ position: "absolute", top: vh(-19), left: vw(2) }}>
              <Image
                source={require('../../../assets/images/winCup.png')}
                style={styles.cupStyle}
                resizeMode="contain"
              />
            </View>
            <View style={styles.ratingView}>
              <Text style={styles.ratingText}>4.8</Text>
              <Text style={styles.ratingText2}>Rating</Text>
            </View>
          </View>
          <View style={styles.container1Style}>
            <View style={{ position: "absolute", top: vh(-17), left: vw(15) }}>
              <Image
                source={require('../../../assets/images/msgIcon.png')}
                style={styles.cupStyle}
                resizeMode="contain"
              />
            </View>
            <View style={styles.ratingView}>
              <Text style={styles.ratingText}>12</Text>
              <Text style={styles.ratingText2}>Reviews</Text>
            </View>
          </View>
          <View style={styles.container1Style}>
            <View style={{ position: "absolute", top: vh(-17), left: vw(15) }}>
              <Image
                source={require('../../../assets/images/rank.png')}
                style={styles.cupStyle}
              />
            </View>
            <View style={[styles.ratingView]}>
              <Text style={[styles.ratingText, { marginTop: 2 }]}>1/18</Text>
              <Text style={styles.ratingText2}>Ranking</Text>
            </View>
          </View>
        </View>
        <View style={styles.consultationView}>
          <Text style={styles.consultationText}>1st Free Consultation Available</Text>
        </View>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionHeading}>Description</Text>
        <Text style={styles.descriptionTxt}>{description}</Text>
        <Text style={[styles.descriptionHeading, { marginTop: 16 }]}>Another information</Text>
        <Text style={styles.descriptionTxt}>{info}</Text>
      </View>
      <View style={styles.bottomBTNView}>
        <View style={styles.memText}>
          <Text style={styles.memTxtStyle}>Member Since: Feb 2023</Text>
        </View>
        <View style={styles.memText}>
          <Text style={[styles.memTxtStyle, { marginLeft: vw(17), marginRight: vw(17) }]}>Avg. Response Time: 1 day</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.sendRequestBTN}>
        <Text style={styles.sendRequestBTNTXT}>Send request</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#cacaca"
  },
  crossStyle: {
    backgroundColor: "#FFFFFF",
    paddingTop: vh(40),
    paddingLeft: vw(16),
    paddingRight: vw(24),
    paddingBottom: vh(16),
    borderBottomLeftRadius: ms(16),
    borderBottomRightRadius: ms(16)
  },
  crossIconStyle: {
    height: vh(24),
    width: vw(24),
    alignSelf: "flex-end"
  },
  lawyerImageStyle: {
    height: vh(108),
    width: vw(108),
    borderRadius: ms(8)
  },
  imgView: {
    flexDirection: "row",
    marginTop: vh(18),
    alignItems: "center"
  },
  imgView2: {
    flexDirection: "row",
    alignItems: "center"

  },
  tickBG: {
    height: vh(17),
    width: vw(17),
    borderRadius: ms(8.5),
    backgroundColor: "#8FB4AA",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: vw(7)
  },
  tickStyle: {
    height: vh(5.73),
    width: (8.02)
  },
  nameStyle: {
    fontSize: ms(28),
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: "400",
    lineHeight: vh(35),
    color: "#3B3F44"
  },
  typeStyle: {
    fontSize: ms(16),
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: "400",
    lineHeight: vh(22),
    color: "#3B3F44"
  },
  rateStyle: {
    fontSize: ms(22),
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: "400",
    lineHeight: vh(28),
    color: "#3B3F44",
    marginTop: vh(1)
  },
  containersView: {
    marginTop: vh(24),
    marginHorizontal: vw(16),
    flexDirection: "row",
    justifyContent: "space-between"
  },
  container1Style: {
    height: vh(124),
    width: vw(108),
    backgroundColor: "#E2E6E6",
    borderRadius: ms(8)
  },
  cupStyle: {
    height: vh(64),
    width: vw(64)
  },
  ratingView: {
    marginTop: vh(45),
    marginLeft: vw(15)
  },
  ratingText: {
    fontSize: ms(22),
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: "400",
    lineHeight: vh(28),
    color: "#3B3F44"
  },
  ratingText2: {
    fontSize: ms(16),
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: "400",
    color: "#3B3F44"
  },
  consultationView: {
    height: vh(34),
    width: vw(234),
    backgroundColor: "#8FB4AA",
    borderRadius: ms(8),
    alignSelf: "center",
    position: 'absolute',
    bottom: vh(-18)
  },
  consultationText: {
    fontSize: ms(16),
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: "400",
    color: "#FFFFFF",
    marginTop: vh(5),
    marginBottom: vh(7),
    marginLeft: vw(14)
  },
  descriptionView: {
    marginTop: vh(30),
    marginHorizontal: vw(16)
  },
  descriptionHeading: {
    fontSize: ms(12),
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: "400",
    color: "#AEB9BC"
  },
  descriptionTxt: {
    color: "#3B3F44",
    fontSize: ms(16),
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: "400",
    marginTop: vh(4)
  },
  memText: {
    height: vh(40),
    width: vw(167),
    backgroundColor: "#E2E6E6",
    borderRadius: ms(8)

  },
  bottomBTNView: {
    marginHorizontal: vw(16),
    marginTop: vh(55),
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  memTxtStyle: {
    fontSize: ms(12),
    color: '#AEB9BC',
    marginTop: vh(11),
    marginBottom: vh(12),
    marginLeft: vw(15),
    marginRight: vw(16)
  },
  sendRequestBTN:{
    height:vh(46),
    width:vw(343),
    alignSelf:"center",
    borderRadius:ms(8),
    backgroundColor:"#CF974F",
    position:"absolute",
    bottom:vh(5),
    justifyContent:"center",
    alignItems:"center"
  },
  sendRequestBTNTXT:{
    color:"#FFFFFF",
    fontSize:ms(20),
    fontWeight:"400"
  }


})