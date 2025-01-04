const encodeForm = document.querySelector("#encodeForm");
const decodeForm = document.querySelector("#decodeForm");

const encodeText = document.querySelector("#encodeText");
const decodeText = document.querySelector("#decodeText");

const encodedOutput = document.querySelector("#encodedOutput");
const decodedOutput = document.querySelector("#decodedOutput");

// Custom Base64 encoding with variation
function customEncode(input) {
  const base64 = btoa(input);
  const randomOffset = Math.floor(Math.random() * 10) + 1; // Random offset between 1 and 10
  const shifted = base64
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + randomOffset))
    .join("");
  return `${shifted}.${randomOffset}`; // Append the offset for decoding
}

// Custom Base64 decoding
function customDecode(input) {
  const [shifted, offset] = input.split(".");
  const randomOffset = parseInt(offset, 10);
  const base64 = shifted
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) - randomOffset))
    .join("");
  return atob(base64);
}

encodeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  encodedOutput.textContent = customEncode(encodeText.value);
});

decodeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  try {
    decodedOutput.textContent = customDecode(decodeText.value);
  } catch (e) {
    decodedOutput.textContent = "Invalid encoded text!";
  }
});
