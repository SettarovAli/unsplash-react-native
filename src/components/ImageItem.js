import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ImageItem = ({image}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Photo', {image})}>
      <View style={styles.item}>
        <Image
          source={{uri: image.urls.small}}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.description}>{image.alt_description}</Text>
          <Text>{image.user.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {width: 150, height: 150},
  info: {flex: 1, padding: 15},
  description: {fontWeight: 'bold', marginBottom: 10},
});

export default ImageItem;
