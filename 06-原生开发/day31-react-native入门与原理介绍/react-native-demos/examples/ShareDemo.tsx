import React, { useState } from "react";
import { Share, View, Button, Text } from "react-native";

export const ShareDemo = () => {
  const [shareStatus, setShareStatus] = useState("init");
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "React Native 分享演示",

        url: "http://www.baidu.com",
      });
      setShareStatus(result.action);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          setShareStatus(`已分享 ${result.activityType}`);
        } else {
          // shared
          setShareStatus("已分享");
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginTop: 50 }}>
      <Button onPress={onShare} title="Share" />
      <Text>share status: {shareStatus}</Text>
    </View>
  );
};
