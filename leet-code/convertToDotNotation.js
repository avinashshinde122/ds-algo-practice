var obj = {
  a: 10,
  b: "name",
  c: {
    d: "f1",
    e: {
      f: "f2",
      g: 5,
    },
  },
  h: [4, 6, 8],
};

// convertToDotNotation(obj)  // {a : 10, b : 'name', c.d : 'f1', c.e.f : 'f2', c.e.g : 5, h: [4,6,8]}

//==================================================================================//

const recursive = (key, value, output) => {
  if (typeof value === "object" && !Array.isArray(value)) {
    for (const k in value) {
      recursive(`${key}.${k}`, value[k], output);
    }
  } else {
    output[key] = value;
  }
};

const convertToDotNotation = (obj) => {
  const output = {};
  for (const key in obj) {
    recursive(key, obj[key], output);
  }
  return output;
};

console.log(convertToDotNotation(obj));
