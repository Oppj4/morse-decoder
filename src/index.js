const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let strSlc = '';
    let res = '';
    for (let i=0; i<expr.length; i += 10){
        strSlc = expr.slice(i, i + 10);
        if (strSlc !=="**********"){
            let result = '';
            let strSlc2='';
            for(j = 0; j < strSlc.length; j += 2){
                strSlc2 = strSlc.slice(j, j + 2);
                if(strSlc2 == '10') result += '.';
                if(strSlc2 == "11") result += '-';
            }
          res+=MORSE_TABLE[result];
        }else res += ' ';
    }
    return res;
}

module.exports = {
    decode
}