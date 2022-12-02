import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import CircleButton from "./Button";
import { ReactButton } from "./Button";
import { EthPrice, NFTTTitle, SubInfor } from "./SubInfor";

const NFTCard = ({ data }) => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfor />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <ReactButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;