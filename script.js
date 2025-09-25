const button = document.getElementById("runButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
    const str = prompt("Enter your text:");
    if (!str || str.trim() === "") {
        resultDiv.innerHTML = "You must type something!";
        return;
    }

    const charsInput = prompt("Which letters do you want to remove? (like 'abc')");
    if (!charsInput || charsInput.trim() === "") {
        resultDiv.innerHTML = "Please enter at least one letter to remove!";
        return;
    }

    const charsToRemove = charsInput.split('');

    function cleanString(inputStr, removeChars) {
        let result = '';
        for (let char of inputStr) {
            if (!removeChars.includes(char)) {
                result += `<span class="kept">${char}</span>`;
            } else {
                result += `<span class="removed">${char}</span>`;
            }
        }
        return result;
    }

    const cleaned = cleanString(str, charsToRemove);
    resultDiv.innerHTML = `Here is your cleaned string:<br>${cleaned}`;
});
