function isPalindrome(string) {
    // Write your code here.
    let letters = string.split('');
    let i = 0;
    let j = letters.length - 1;
    while (i < j) {
        if (letters[i] != letters[j]) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
}