function findAllOccurrences(mainString, wordToFind) {
    let indexes = [];
    let index = mainString.indexOf(wordToFind);
    while (index !== -1) {
    indexes.push(index);
    index = mainString.indexOf(wordToFind, index + 1);
    }
    return indexes;
    }