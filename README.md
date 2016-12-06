# LocalStorage
Local Storage manager for Javascript

# usage
```javascript
//set key with value or object
LocalStorageManager.setValue("user", "jonathanstevens89@gmail.com");

//get object or value
var user = LocalStorageManager.getValue("user");
```

The variable, or object, is then persisted to the browser's window.localstorage and remains there until removed.
