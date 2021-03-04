module.exports = function check(str, bracketsConfig) {
    // your solution

    const arr = [];
    let answer = str;

    for (let x of bracketsConfig) {
        if (parseInt(str)) {
            arr.push(`(${x[0]}${x[1]})`);
        } else {
            arr.push("(\\" + x[0] + "\\" + x[1] + ")");
        }
    }

    const pattern = arr.join("|");

    const re = new RegExp(pattern, "g");

    const lenarr = [-1];
    lenarr.push(str.length);
    let i = 1;
    let curlen = 0;

    while (lenarr[i - 1] !== lenarr[i]) {
        answer = answer.replace(re, "");
        curlen = answer.length;
        lenarr.push(curlen);
        i++;
    }

    return !answer;
};
