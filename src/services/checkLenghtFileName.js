
function checkLenghtFileName (name) {
    return name.lenght < 32
        ? name
        : name.replace(/(?<=.{32}).*(?=\..*)/, "... ");
}


export {checkLenghtFileName}