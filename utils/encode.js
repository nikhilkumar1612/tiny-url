const encode62 = (num) => {
    const base62String = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encodedString = '';
    while(num > 0) {
        encodedString += base62String.charAt(
            +BigInt(num % 62n).toString(),
        );
        num /= 62n;
    }
    return encodedString.split("").reverse().join("");
}

module.exports = {
    encode62
};