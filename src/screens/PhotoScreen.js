import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import LoadingView from '../components/LoadingView';

const PhotoScreen = ({route}) => {
  const {image} = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageViewer
          imageUrls={[{url: image.urls.full}]}
          renderIndicator={() => null}
          backgroundColor="white"
          loadingRender={() => <LoadingView />}
        />
      </View>
      <View style={styles.description}>
        <Text>{image.alt_description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  description: {
    alignItems: 'center',
    padding: 15,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default PhotoScreen;
