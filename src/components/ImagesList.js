import React from 'react';
import {useSelector} from 'react-redux';
import {Button} from 'react-native';

import ImageItem from './ImageItem';

const ImagesList = ({onLoadMore}) => {
  const images = useSelector(state => state.images);
  return (
    <React.Fragment>
      {images.map(image => {
        return <ImageItem key={image.id} image={image} />;
      })}
      {images.length > 0 && (
        <Button
          onPress={onLoadMore}
          title="Load more"
          color="#2196F3"
          accessibilityLabel="Learn more images"
        />
      )}
    </React.Fragment>
  );
};

export default ImagesList;
