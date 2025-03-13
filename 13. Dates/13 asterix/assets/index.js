
let str;
function formatName(str) {
    let result = str.trim().replace(/\s{2,}/gm," ")
    if (result === "") {
        return "Аноним";
    }
    let arr = result.split(" ");
    arr = arr.map(
        (element) => element[0].toUpperCase() + element.slice(1).toLowerCase()
    );
    return arr.join(" ");
}

function checkSpam(spam) {
    let result = spam.replace(/виагра|xxx|порно|porno|viagra/gi, "***");
    return result[0].toUpperCase() + result.slice(1).toLowerCase();
}



// function createContent (content) {
// const p = document.createElement ('p');
// p.textContent = content;
// const container = document.getElementById("main__output");
// container.append(p)
// }


// function CreateUIMessage (inpName, imagelink, text) {
// let UIname = formatName(inpName);
// let UIText = checkSpam(text);
// let UIImage = showImage(image);
// createContent (UIName);
// createContent (UIText);
// createContent (UIImage);
// }

const inpName = document.querySelector("#name");
const imagelink = document.querySelector("#imagelink");
const text = document.querySelector("#text");


const UIImage = document.querySelector("#chat__avatar");
const UIName = document.querySelector("#chat__FIO");
const UIText = document.querySelector("#chattxt");
const button = document.querySelector("#submitbtn");
const formUser = document.getElementById("form");

const date = document.getElementById('date');

const yes = document.getElementById('yes');
const no = document.getElementById('no');

const supportArray = [
"https://cdn-icons-png.flaticon.com/256/10993/10993398.png",
"https://cdn-icons-png.flaticon.com/256/4213/4213735.png",
"https://cdn-icons-png.flaticon.com/256/4213/4213736.png",
"https://cdn-icons-png.flaticon.com/256/4213/4213732.png",
"https://cdn-icons-png.flaticon.com/256/4213/4213641.png",
"https://cdn-icons-png.flaticon.com/256/4213/4213646.png"
];

const RandomSrc = Math.floor(Math.random() * (supportArray.length-1));
function showImage(src) {
    let image = document.createElement("img");
    if (src === ""){
        image.src = supportArray[RandomSrc]
    } else { image.src = src};
    const container = document.getElementById("chat__avatar");
    container.append(image);
}


formUser.addEventListener("submit", (event) => {
    event.preventDefault();

if (yes.checked) {
UIName.textContent = formatName(inpName.value)}
else { UIName.textContent = "username"
}

showImage(imagelink.value);


UIText.textContent = checkSpam(text.value);


date.textContent = new Date

formUser.reset()
});

console.log(UIName.textContent)
