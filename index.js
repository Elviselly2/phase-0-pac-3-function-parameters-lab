function introduction(name) {
    const message = `Hi, my name is ${name}.`;
    console.log(message);
    return message;
  }
  function introductionWithLanguage(name, language) {
    const message = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log(message);
    return message;
  }
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    const message = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log(message);
    return message;
  }
  