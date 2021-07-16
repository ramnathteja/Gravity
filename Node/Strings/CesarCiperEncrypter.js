function caesarCipherEncryptor(string, key) {
    // Write your code here.
    let letters = string.split('');
    let crypted = [];
    if (key >= 26) {
        key = key % 26;
    }
    for (const letter of letters) {
        if (letter.charCodeAt() + key > 122) {
            let round = 122 - letter.charCodeAt();
            round = Math.abs(key - round);
            crypted.push(String.fromCharCode(96 + round));
        } else {
            crypted.push(String.fromCharCode(letter.charCodeAt() + key));
        }
    }
    return crypted.join('');
}
