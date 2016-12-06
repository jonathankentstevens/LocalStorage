/**
 * Used to manage local storage without parsing and stringifying manually
 */
var LocalStorageManager = {
    setValue: function(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    },
    getValue: function(key, property) {
        try {
            var obj = JSON.parse(window.localStorage.getItem(key));
            if (property) {
                return obj[property];
            } else {
                return obj;
            }
        } catch (e) {

        }
    }
};