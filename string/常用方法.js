function handleStartsWith() {
    let str = "hello world";
    console.log(str.startsWith("hello"));
    console.log(str.startsWith("world"));
}

function handleEndsWith() {
    let str = "hello world";
    console.log(str.endsWith("hello"));
    console.log(str.endsWith("world"));
}

function handleLength() {
    let str = "hello world";
    console.log(str.length);
}

function handleSubstr() {
    let str = "hello world";
    console.log(str.substr(0, 5));
    console.log(str.substr(6, 5));
}

function handleSubstring() {
    let str = "hello world";
    console.log(str.substring(0, 5));
    console.log(str.substring(7, 6));
}

function handleSplit() {
    let str = "hello world";
    console.log('默认分割');
    console.log(str.split(""));

    console.log('以空字符串分割');
    console.log(str.split(" "));
}

function handleTrim() {
    let str = " hello world ";
    console.log(str.trim());
}

function handleIncludes() {
    let str = "hello world";
    console.log(str.includes("hello"));
    console.log(str.includes("world"));
}


function handleIndexOf() {
    let str = "hello world";
    console.log(str.indexOf("hello"));
    console.log(str.indexOf("world"));
}

function handleReplace() {
    let str = "hello world";
    console.log(str.replace("hello", "hi"));
    console.log(str.replace("world", "worlds"));
}

function handleConcat() {
    let str = "hello";
    console.log(str.concat(" ", "world"));
}