//Return an array of uppercase indices

const upperCaseIndices = (str) =>
  str.split("").reduce((result, letter, index) => {
    letter === letter.toUpperCase() && result.push(index);

    return result;
  }, []);

console.log(upperCaseIndices("UpperCaseIndices"));
