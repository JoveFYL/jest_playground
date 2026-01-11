export default function cipher(str, offset) {
    let arr = Array.from(str);
    return arr
        .map((letter) => {
            if (letter >= 'a' && letter <= 'z') {
                return String.fromCharCode(
                    ((letter.charCodeAt(0) + offset - 'a'.charCodeAt(0)) % 26) +
                        'a'.charCodeAt(0)
                );
            } else if (letter >= 'A' && letter <= 'Z') {
                return String.fromCharCode(
                    ((letter.charCodeAt(0) + offset - 'A'.charCodeAt(0)) % 26) +
                        'A'.charCodeAt(0)
                );
            } else {
                return letter;
            }
        })
        .join('');
}
