
    function reverseWord(word){
    var ans = "";
    for(var i=word.length-1;i>=0;i--){
        ans+=word.charAt(i);
    }
    return ans;
    }

    console.log(reverseWord("Hello world"));

    console.log(reverseWord("Tirtha Here"));

    console.log(reverseWord("Geresius manitila"));
