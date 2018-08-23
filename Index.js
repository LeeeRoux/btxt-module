Array.prototype.random = function() {
return this[Math.floor(Math.random() * this.length)]};
module.exports = {
list: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
charA: {
a: ['a', 'á', 'à', 'ȁ', 'ȃ', 'ă', 'ā', 'ã', 'ȧ', 'ä', 'â', 'ǎ', 'å', 'ǟ', 'ǡ', 'ǻ', 'ą', 'ḁ', 'ɑ', 'ά', 'ⱥ', '∆', 'α', 'ά', 'ä', 'á', 'ﾑ', 'α', 'ɑ̝̚', '۸', 'ก', 'ถ', 'ภ', 'ฤ', 'ล', 'ส', 'อ', 'ฮ', 'ค'],
A: ['Á', 'Ā', 'Ā', 'Ă', 'Ă', 'Ą', 'Ą', 'Ǎ', 'Ǎ', 'Ǻ', 'Ǻ', 'Α', 'Δ', 'Λ', 'Ά', 'Α', 'Λ', 'Ά', 'А', 'Ạ', 'Ạ', 'Ả', 'Ả', 'Ấ', 'Ấ', 'Ầ', 'Ầ', 'Ẩ', 'Ẩ', 'Ẫ', 
'Ẫ', 'Ậ', 'Ậ', 'Ắ', 'Ắ', 'Ằ', 'Ằ', 'Ẳ', 'Ẳ', 'Ẵ', 'Ẵ', 'Ặ', 'Ặ']},
charB: {
b: ['Ь', 'Ъ', 'Ъ', 'b', 'ƀ', 'ɓ', 'ḃ', 'ḅ', 'ḇ', 'Ƅ', 'ъ', 'Ѣ', 'в', 'ʙ', 'ც', 'ɞ', 'ფ', '๒', 'в̝̚', 'Ь'],
B: ['Β', 'Ḃ', 'Ḃ', 'Ḅ', 'Ḅ', 'β', 'ß', '฿', 'ℬ', 'Յ', 'Ḇ']},
charC: {
c: ['๔', '๕', 'c', '¢', 'ç', 'ć', 'ḉ', 'ĉ', 'ċ', 'č', 'ƈ', 'ҫ', 'ς', 'ς', 'c̃̾', 'c͠'],
C: ['Ć', 'Ć', '₡', 'Ĉ', 'Ĉ', 'Ċ', 'Ċ', 'Č', 'Č', 'С', 'С']},
charD: {
d: ['∂', 'd̃̾', '₫', 'ḏ', 'ḑ', 'đ', 'ɗ', 'ď', 'ɖ', 'ժ', 'Ԁ', 'ԁ', 'ⅆ',],
D: ['Ď', 'Ḋ', 'Ḋ', 'Ḍ', 'Ḍ', 'Ḏ', 'Ḏ', 'Ḑ', 'Ḑ', 'Ḓ', 'Ḓ', 'Ď', 'Đ', 'Đ', 'ⅅ', 'Ð', 'Ɗ']},
charE: {
e: ['é', 'è', 'ε', 'ȅ', 'ȇ', 'ĕ', 'ē', 'ǝ̝̚', 'ė', 'ë', 'ê', 'ě', 'ę', 'ȩ', 'ҽ', 'ⅇ', 'ɛ', 'έ', 'є', 'ℰ', 'ӭ', 'ḛ', 'ḝ'],
E: ['Ē', 'Ē', 'Ĕ', 'Ė', 'Ę', 'Ę', 'Ě', 'Έ', 'Έ', 'Ё', 'Е', 'Ё', 'Ẹ', 'Ẹ', 'Ẻ', 'Ẻ', 'Ẽ', 'Ẽ', 'Ế', 'Ế', 'Ề', 'Ề', 'Ể', 'Ể', 'Ễ', 'Ễ', 'Ệ', 'Ệ', 'È', 'É', 'Ê']},
charF: {
F: ['₣', 'Ḟ', 'Ḟ', '₣', 'Ƒ', 'Ғ', 'Ƒ', 'ℱ'],
f: ['ḟ', 'ƒ', 'ʄ', 'ғ', 'ƒ', 'ғ']},
charG: {
g: ['g', 'ǵ', 'ģ', 'ğ', 'ġ', 'ĝ', 'ǧ', 'ḡ', 'ǥ', 'ɢ', 'ʛ'],
G: ['₲', 'Ǥ', 'Ĝ', 'Ĝ', 'Ğ', 'Ğ', 'Ġ', 'Ġ', 'Ģ', 'Ģ']},
charH: {
h: ['ĥ', 'ȟ', 'ḣ', 'ḥ', 'ḧ', 'ḩ', 'ḫ', 'ẖ', 'ħ', 'ɦ', 'ɧ', 'ђ', 'һ', 'ʜ', 'ң', 'ҥ', 'ӈ', 'ℎ', 'ჩ', 'ƕ'],
H: ['Ĥ', 'Ĥ', 'Ħ', 'Ħ', 'Ή', 'ℋ', 'ℌ', 'ℍ', 'Ħ']},
charI: {
i: ['เ', 'ι', 'i', 'í', 'ì', 'ȉ', 'ȋ', 'ĭ', 'ī', 'ĩ', 'ḭ', 'ï', 'î', 'į', 'ḯ', 'ɪ'],
I: ['Ĩ', 'Ĩ', 'Ī', 'Ī', 'Ĭ', 'Ĭ', 'Į', 'Į', 'İ', 'Ί', 'Ι', 'Ϊ', 'Ί', 'Ι', 'Ϊ', 'Ї', 'Ỉ', 'Ỉ', 'Ị', 'Ị']},
charJ: {
j: ['נ', 'j', 'ĵ', 'ǰ', 'ʝ', 'ℐ'],
J: ['Ĵ', 'Ĵ']},
charK: {
k: ['ĸ', 'ќ', 'қ', 'ҡ', 'ҝ', 'к'],
K: ['ǩ', 'ķ', 'ḱ', 'ḳ', 'ḵ', 'ƙ']},
charL: {
l: ['ℓ', 'ĺ', 'ļ', 'ḷ', 'ḹ', 'ḻ', 'ḽ', 'ŀ', 'ľ', 'ł', 'Ɩ', 'ʟ', 'ℓ'],
L: ['Ĺ', 'Ļ', 'Ļ', 'Ľ', 'Ľ', 'Ŀ', 'Ŀ', 'Ł', 'Ł', 'ℒ']},
charM: {
m: ['м', '₥', '๓', '๗', 'რ', 'ღ'],
M: ['Ḿ', 'Ḿ', 'Ṁ', 'Ṁ', 'Ṃ', 'Ṃ', 'ℳ']},
charN: {
n: ['ŉ', 'ห', 'ή', 'ภ', 'ɳ'],
N: ['Ń', 'Ń', 'Ņ', 'Ņ', 'Ň', 'Ň', 'Ŋ', 'Ŋ', 'Ν']},
charO: {
o: ['๏', '๐', '๑', 'σ', 'σ͠'],
O: ['Ố', 'Ồ', 'Ồ', 'Ổ', 'Ổ', 'Ỗ', 'Ỗ', 'Ộ', 'Ộ', 'Ớ', 'Ớ', 'Ờ', 'Ờ', 'Ở', 'Ở', 'Ỡ', 'Ỡ', 'Ợ', 'Ợ', 'Ơ', 'Ơ', 'Ǒ', 'Ǒ', 'Ǿ', 'Ǿ']},
charP: {
p: ['p', 'ṕ', 'ṗ', 'ῤ', 'ℙ', '₱', 'ρ'],
P: ['Ṕ', 'Ṕ', 'Ṗ', 'Ṗ', 'Ƥ']},
charQ: {
q: ['q'],
Q: ['Q̶', 'Q̲']},
charR: {
r: ['ŕ', 'ŗ', 'ȑ', 'ȓ', 'ř', 'ṙ', 'ṛ', 'ṝ', 'ṟ', 'ʀ', 'я'],
R: ['Ŕ', 'Ŕ', 'Ŗ', 'Ŗ', 'Ř', 'Ř', 'Ṙ', 'Ṛ', 'Ṛ', 'Ṝ', 'Ṝ', 'Ṟ', 'ℛ', 'ℜ', 'ℝ', '℞', '℟']},
charS: {
s: ['ś', 'ŝ', 'š', 'ș', 'ş', 'ṡ', 'ṣ', 'ṥ', 'ṧ', 'ṩ', 'ʂ'],
S: ['Ś', 'Ś', 'Ŝ', 'Ŝ', 'Ṡ', 'Ṡ', 'Ṣ', 'Ṣ', 'Ṥ', 'Ṧ', 'Ṥ', 'Ṧ', 'Ṩ', 'Ṩ', 'Ş', 'Ş']},
charT: {
t: ['ẗ', 'ț', 'ť', 'ţ', 'ṫ', 'ṭ', 'ṯ', 'ṱ', 'ẗ', 'ŧ', 'Ɨ', '†', 'ʈ', 'ɫ', 'т'],
T: ['Ţ', 'Ţ', 'Ṫ', 'Ṫ', 'Ṭ', 'Ṭ', 'Ṯ', 'Ṱ', 'Ṱ', 'Ť', 'Ť', 'Ŧ', 'Ŧ', 'Ƭ']},
charU: {
u: ['ข', 'ฃ', 'ช', 'ซ', 'ฌ', 'ญ', 'น', 'บ', 'ป', 'ม', 'ย', 'ΰ'],
U: ['Ũ', 'Ũ', 'Ū', 'Ū', 'Ŭ', 'Ŭ', 'Ů', 'Ů', 'Ű', 'Ű', 'Ų', 'Ų']},
charV: {
v: ['v', 'ṽ', 'ṿ', 'ѵ', 'ѷ', '℣'],
V: ['Ṽ', 'Ṽ', 'Ṿ', 'Ṿ']},
charW: {
w: ['ẁ', 'ŵ', 'ẅ', 'ẇ', 'ẉ', 'ẘ', 'ω', 'ώ', 'ῳ', 'ῴ', 'ผ', 'พ', 'ฟ' ,'ฬ'],
W: ['Ŵ', 'Ŵ', 'Ẁ', 'Ẁ']},
charX: {
x: ['ẋ', 'ẍ', 'ҳ', '×'],
X: ['Ẋ', 'Ẋ', 'Ẍ', 'Ẍ']},
charY: {
y: ['ỳ', 'ŷ', 'ȳ', 'ÿ', 'ӳ', 'ỷ', 'ẏ', 'ყ'],
Y: ['Ỳ', 'Ỳ', 'Ỵ', 'Ỵ', 'Ỷ', 'Ỷ', 'Ỹ', 'Ỹ']},
charZ: {
z: ['z̃̾', 'ź', 'ž', 'ż', 'ƶ', 'ʐ', 'ʑ', 'ℤ', 'ẑ', 'ẓ', 'ẕ'],
Z: ['Ź', 'Ẑ', 'Ẑ', 'Ẓ', 'Ẓ', 'Ẕ', 'Ẕ', 'Ż', 'Ż', 'Ž']},
btxt: function (txt) {
 if (typeof txt !== 'string') throw new TypeError(`You must provide a String. You've provided a "${typeof txt}"`)
  var finnalWord = '';
  for (var i = 0; i < txt.length + 1; i++) {
if (this.list.includes(txt.charAt(i).toLowerCase())) {
 finnalWord += this[`char${txt.charAt(i).toUpperCase()}`][txt.charAt(i)].random();
  } else {
 finnalWord += txt.charAt(i);
   }
if (i == txt.length) return finnalWord;
}}
};
