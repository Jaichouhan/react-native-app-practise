import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import CircleButton, { ReactButton } from "../components/Button";
import DetailsBid from "../components/DetailsBid";
import DetailsDesc from "../components/DetailsDesc";
import FocusStatusBar from "../components/FocusStatusBar";
import { SubInfor } from "../components/SubInfor";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

const Deatils = ({ route, navigation }) => {
  const { data } = route.params;
  const DetailsHeadre = ({ data, navigation }) => (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ height: "100%", width: "100%" }}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
          padding: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <ReactButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid data={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeadre data={data} navigation={navigation} />
            <SubInfor />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Deatils;
