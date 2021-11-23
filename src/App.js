import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListScreen from './screens/ListScreen';
import PhotoScreen from './screens/PhotoScreen';

import {fetchImages, fetchMoreImages} from './store/imagesSlice';

const Stack = createNativeStackNavigator();

const App = () => {
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState('photo');

  const images = useSelector(state => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages(term, 1));
  }, [dispatch, term]);

  useEffect(() => {
    if (images.length > 0) {
      setPage(prev => ++prev);
    }
  }, [images]);

  const onSearchChange = searchTerm => {
    setTerm(searchTerm);
    setPage(1);
  };

  const onLoadMore = () => {
    console.log(term, page);
    dispatch(fetchMoreImages(term, page));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Images list">
          {props => (
            <ListScreen
              {...props}
              onSearchChange={onSearchChange}
              onLoadMore={onLoadMore}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Photo" component={PhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
