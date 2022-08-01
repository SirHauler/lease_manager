/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Navbar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Barahona Realty": {}, Navbar: {} },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="1443px"
      height="102px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Navbar")}
    >
      <Text
        fontFamily="Impact"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="37.5px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="239px"
        height="34px"
        position="absolute"
        top="34px"
        left="35px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Barahona Realty"
        {...getOverrideProps(overrides, "Barahona Realty")}
      ></Text>
    </View>
  );
}
