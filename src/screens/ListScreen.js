import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';

import ImagesList from '../components/ImagesList';

const ListScreen = ({onSearchChange, onLoadMore}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Searchbar
          icon="image-search"
          style={styles.searchbar}
          placeholder="Search for images"
          value={searchTerm}
          onChangeText={text => {
            setSearchTerm(text);
          }}
          onSubmitEditing={() => onSearchChange(searchTerm)}
        />
        <ScrollView>
          <ImagesList onLoadMore={onLoadMore} />
        </ScrollView>
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
    margin: 10,
  },
  searchbar: {marginBottom: 10},
});

export default ListScreen;
