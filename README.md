# btxt module v1.3.2
Btxt is a very-tiny module for more features to improve your Style

> npm i btxt

#### Methods & Classes
* **btxt** *Method*<br>
 Convert a String into a Customized String
- Argument 
  * `txt` String<br>
 Returns `String`<br>
e.g.
```js
const b = require("btxt");
 b.btxt("Hello World");
//"Ħȩŀḹ๑ Ŵ๏ṝḹժ!"
```
* **Compare** *Method*<br>
 Compare a String with an Array to find the most closed string
- Arguments 
  * `word` String
  * `toCompareWith` Array<br>
Returns `String` || `null` Incase there was no any similar value<br>
e.g.
```js
 const b = require("btxt");
b.compare("hulle wurld", ["hello", "boo", "Hello world", "baz", "ello world"])
//"Hello world"
```
*This function may not be 100% correct*
* **toLatin** *Method*<br>
 Calculate a number into Latin
- Argument
  * `number` Number<br>
Returns `String`<br>
e.g.
```js
const b = require('btxt');
 b.toLatin(1540);
//"MDXL"
```
* **keyGenerator** *Class*<br>
 Generate a random key that contains characters and numbers
 - Argument
 * `keyLength` Number *Optional* defualt = `15` You can also set the key length dirctly via the prop `.keyLength`<br>
Returns `String`<br>
e.g.
```js
const b = require('btxt');
 var gen = new b.keyGenerator();
gen.generate();
//"634h9jTd92X9d2M"
```
## Browser Version
```html
<script src='https://raw.githubusercontent.com/LeeeRoux/btxt/master/bin/btxt-browser.js'></script>
```
