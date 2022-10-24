function extractKey(objs, keyName) {
    objs.map((obj) => {
        return obj[keyName];
    })
    return objs
}

console.log(extractKey[{ eyeColor: "blue", age: 4 }, {
    eyeColor: "brown",
    age: 8,
}, { eyeColor: "green", age: 1 }, { eyeColor: "brown", age: 6 }], "age")