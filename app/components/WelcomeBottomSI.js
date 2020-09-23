import React from "react";
import InfoCard from "./InfoCard";

export default function WelcomeBottomSI() {
  return (
    <>
      <InfoCard
        heading="Welcome home, pumpkin"
        imageUri={require("../../assets/pumpkin.jpg")}
        text="Fall returns with our Pumpkin Spice Latte."
      />
      <InfoCard
        heading="Facial coverings now required"
        imageUri={require("../../assets/masks.jpg")}
        text="Now in all our stores, we require our customers to wear a facial covering to protect rhe health of our communities and help stop the spread of COVID-19"
      />
      <InfoCard
        heading="Pay how you want, earn Rewards"
        imageUri={require("../../assets/waystopay.jpg")}
        text="Reload and pay with your Starbucks card to earn 2x as fast-or pay with cash or debit to earn 1 start per $1 spent."
       marginBottom={130}
      />
    </>
  );
}
