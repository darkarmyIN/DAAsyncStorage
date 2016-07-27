import React ,{Component} from 'React';
import {
  AsyncStorage,
} from 'react-native';

class DAAsyncStorage {

  async getTheItem(key,callback) {
    var fetchedItem;
    try {
      fetchedItem = await AsyncStorage.getItem(key);
    } catch (e) {
      console.log(e);
    } finally {
      callback(fetchedItem);
    }
  }

  async setTheItem(key,val,callback) {
    try {
      await AsyncStorage.setItem(key,val);
    } catch (e) {
      console.log(e);
    } finally {
      callback();
    }
  }

  async deleteAllItems(keys, callback) {
    try {
      await AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.log(e);
    } finally {
      callback();
    }
  }

}

module.exports = DAAsyncStorage;
