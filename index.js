const addName = (obj, word, number) => {
  let objArg = obj;
  objArg[word] = number;

  return objArg;
};

addName({ piano: 500, stereo: 300 }, "Caligula", 440);

/* 
addName({}, "Brutus", 300) ➞ { Brutus: 300 }
addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 } 
*/