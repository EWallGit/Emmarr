function piratize(input){ 
    const words = input.split(' '); //splits up the sentence into individual words
    const translatedwords = [] 
    for (let element of words) {
        console.log(element);
        if(element==="pounds"){
            translatedwords.push("doubloons")
        }
        else if(Number(element)){ //will find numbers
            translatedwords.push(element);
        } 
        else{
            let ChangedWord=''; //created empty string called ChangedWord
            let AnotherString=element.substring(1); //gives the word without the first letter
            ChangedWord=AnotherString+element[0]+"arr"
            translatedwords.push(ChangedWord);
        }
      }
      let FinalArr='';
      FinalArr=translatedwords.join(' ');
      return FinalArr;
} 