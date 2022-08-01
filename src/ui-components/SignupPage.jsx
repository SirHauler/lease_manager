/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SignupPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(104,164,223,0.33)"
      {...rest}
      {...getOverrideProps(overrides, "SignupPage")}
    >
      <View
        width="668px"
        height="681px"
        position="absolute"
        top="171px"
        left="386px"
        overflow="hidden"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Text
          fontFamily="Arial"
          fontSize="48px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="56.25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="192px"
          height="47px"
          position="absolute"
          top="76px"
          left="238px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign Up"
          {...getOverrideProps(overrides, "Sign Up")}
        ></Text>
        <View
          width="453px"
          height="64px"
          position="absolute"
          top="260px"
          left="108px"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
        <View
          width="453px"
          height="64px"
          position="absolute"
          top="408px"
          left="108px"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 2")}
        ></View>
        <Text
          fontFamily="Arial"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="28.125px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="71px"
          height="37px"
          position="absolute"
          top="274px"
          left="142px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="email"
          {...getOverrideProps(overrides, "email")}
        ></Text>
        <Text
          fontFamily="Arial"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="28.125px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="128px"
          height="37px"
          position="absolute"
          top="421px"
          left="142px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="password"
          {...getOverrideProps(overrides, "password")}
        ></Text>
      </View>
    </View>
  );
}
