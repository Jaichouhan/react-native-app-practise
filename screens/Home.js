import React from "react";
import { Text, SafeArea, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import FocusStatusBar from "../components/FocusStatusBar";
import HomeHeader from "../components/HomeHeader";
import NFTCard from "../components/NFTCard";
import NFTData from "../constants/dummy";
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <>
        <FocusStatusBar background={COLORS.primary} />
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0 }}>
            <FlatList
              data={NFTData}
              renderItem={({ item }) => <NFTCard data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader />}
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: -1,
            }}
          >
            <View style={{ height: 300, backgroundColor: COLORS.primary }} />
            <View style={{ flex: 1, backgroundColor: COLORS.white }} />
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};

export default Home;
