function mapBuilder(keysArray, valuesArrays) {
   let map = new Map();
   keysArray.forEach((key, index) => {
      map.set(key, valuesArrays[index]);
   });
   return map;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
