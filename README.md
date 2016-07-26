##DAAsyncStorage for React Native Beginners

This small library will help begineers in react-native to store data easily in their project. Its just a simple helper file which reduces a lot of boiler plate code.

##Usage
Add the `DAAsyncStorage.js` file to your project. <br>
Add <br>
```javascript
var myDB = require('./DAStorage');
var myDBInstance = new myDB();
```

* To store any kind of object <br>
```javascript
myDB.setTheItem(key,value,function() { // DO ANY FURTHER OPERATIONS AFTER SAVING });
```

For eg. <br>
```javascript
myDB.setTheItem('username','darkarmy',function() { // DO ANY FURTHER OPERATIONS AFTER SAVING });
```

* To fetch any object just send the key to the function and it will return the value as a callback<br>
```javascript
myDB.getTheItem(key,function(val) {
      callback(val);
    });
```
For eg. <br>
```javascript
myDB.getTheItem('username',function(val) {
      callback(val);
      // Saved username will be returned
    });
```
    
* To delete all key-value pairs that are saved, just call this function with all the keys as an array<br>
```javascript
myDB.deleteAllItems(keys,function() {
// After deletion
});
```

For eg. <br>
```javascript
myDB.deleteAllItems(["username","password"],function() {
// After deletion
});
```