const readline = require('readline'); // require the 'readline' library which returns as its
// `module.export` return evaluation some object with a bunch of methods set as attributes on it that we can
// then call with our readline constant love it lol

const reader = readline.createInterface({
    input: process.stdin, // this specifies the input channel for getting a response back from reader.question and I'm sure other methods
    output: process.stdout // this specifies the output channel to print out the first argument too in reader.question and I'm sure other methods love it so great and fortunate to actually understand everything can't wait to keep pushing and getting everything 
}); // as an assignment you need semicolons love it but JS is so nice it lets you
// run things even with bad syntax lmao so nuts

// So lucky to have Mai and to get to talk to her every day so great

function teaAndBiscuits() {
    let tea = "don't";
    let biscuits = "don't";

    function askForTea(){
        reader.question("Would you like tea? Y/N\n", parseTeaAndAskForBiscuits) // the .question method will automatically pass an argument to the callback function parseTeaAndAskForBiscuits which will be the stdin response from the user in the console love it
    }

    function parseTeaAndAskForBiscuits(teaAnswer){
        if (teaAnswer.toUpperCase() === "Y") {tea = "do";} // right semicolon on the inside love it
        console.log(`So you ${tea} want tea!`)
        reader.question("Would you like biscuits? Y/N\n", parseTeaAndBiscuits)
    }

    function parseTeaAndBiscuits(biscuitAnswer){
        if (biscuitAnswer.toUpperCase() === "Y") {biscuits = "do";}
        console.log(`So you ${biscuits} want biscuits!`)
        console.log(`So you ${tea} want tea and you ${biscuits} want biscuits!`)
        reader.close();
    }

    askForTea();
}

teaAndBiscuits(); // fucking amazing so proud of yourself totally get it lucky
// lucky to really get this stuff