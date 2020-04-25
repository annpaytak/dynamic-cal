let creatingElement = (tag) => document.createElement(tag);
let root = document.getElementById('root');
let content = document.getElementById('content');
let selectFont, valueFont, selectSize, valueSize;
selectFont = document.getElementById("fontText");
selectSize = document.getElementById("sizeText");
let signInBollean = false;
let buttons_header_editor = document.getElementById("buttons-header-editor");
buttons_header_editor.style.display = 'none';
let buttons_header_main = document.getElementById("buttons-header-main");
let content_editor = document.getElementById("content_editor");
let contentInner=content.innerHTML;
content_editor.innerText=contentInner;
content_editor.style.display = 'none';
//Opening editor


//if you are sign up its hiding one div and shoving the other else alert error
function editorRedirect() {
    if (signInBollean == true) {
        buttons_header_editor.style.display = 'flex';
        content_editor.style.display = 'flex';
        buttons_header_main.style.display = 'none';
        content.style.display = 'none';
    } else if (signInBollean == false) {
        alert("Please Sign In");
    }
}

//saving changes
function saveChanges() {
    buttons_header_editor.style.display = 'none';
    content_editor.style.display = 'none';
    buttons_header_main.style.display = 'flex';
    content.style.display = 'block';
    content.innerHTML=content_editor.innerText;
}

//text color picker.
let pallete = document.getElementById('pallete'),
    textColorPicker = document.getElementById('pallete_block'),
    textColorPicker_header = document.getElementById('pallete_block_header'),
    textColorPicker_colors = document.getElementById('pallete_block_colors');
let textColorPicker_escButton = document.getElementById('pallete_block_escButton');
textColorPicker_escButton.onclick = () => textColorPicker.style.visibility = 'hidden';

let textColorPicker_massive = [];
creatingColorsBlock(textColorPicker_massive, textColorPicker_colors, 'textColor');
pallete.onclick = () => textColorPicker.style.visibility = 'visible';


//back color picker
let picture = document.getElementById('picture'),
    backColorPicker = document.getElementById('picture_block'),
    backColorPicker_header = document.getElementById('picture_block_header'),
    backColorPicker_colors = document.getElementById('picture_block_colors');
let backColorPicker_escButton = document.getElementById('picture_block_escButton');
backColorPicker_escButton.onclick = () => backColorPicker.style.visibility = 'hidden';

let backColorPicker_massive = [];
creatingColorsBlock(backColorPicker_massive, backColorPicker_colors, 'backgroundColor');
picture.onclick = () => backColorPicker.style.visibility = 'visible'

//function for changing background color
function backgroundColorChooser(color) {
    content.style.backgroundColor = color;
}

//function for changing text color
function textColorChooser(color) {
    content.style.color = color;
}

/*
  1 argument its massive of the div's color,2 argument its the main block where you choosing color,
  3 argument you should write a string (backgroundColor or textColor),depending on the string function would choose what function to use
*/
function creatingColorsBlock(massive, colorPicker, styleType) {
    let chooser;
    if (styleType == 'backgroundColor') {
        chooser = backgroundColorChooser;
    }
    if (styleType == 'textColor') {
        chooser = textColorChooser;
    }
    for (let i = 0; i < 9; i++) {
        massive[i] = creatingElement('div');
        colorPicker.appendChild(massive[i]);
        massive[i].className = `textColor${i}`;
    }
    colorPicker.onclick = function () {
        for (let i = 0; i < colorPicker.children.length; i++) {
            colorPicker.children[i].onclick = function () {
                switch (i) {
                    case 0:
                        chooser("red");
                        break;
                    case 1:
                        chooser("blue");
                        break;
                    case 2:
                        chooser("yellow");
                        break;
                    case 3:
                        chooser("pink");
                        break;
                    case 4:
                        chooser("white");
                        break;
                    case 5:
                        chooser("orange");
                        break;
                    case 6:
                        chooser("black");
                        break;
                    case 7:
                        chooser("green");
                        break;
                    case 8:
                        chooser("silver");
                        break;
                }
            }
        }
    }

}



//login

let adminLogin = "admin",
    adminPassword = "admin",

    login = document.getElementById('login'),
    singin_block = document.getElementById('singin_block'),
    singin_block_form = document.getElementById('singin_block_form'),
    singin_block_login = document.getElementById('singin_block_login'),
    singin_block_password = document.getElementById('singin_block_password');
singin_block_escButton = document.getElementById('singin_block_escButton');
singin_block_escButton.onclick = () => singin_block.style.visibility = 'hidden';
login.onclick = () => singin_block.style.visibility = 'visible';

//checking if login and password equal 'admin' also there are a boolean variable which equals false(signInBollean) but if you signIn signInBollean=true and you can use editor page
function formSubmit(event) {
    event.preventDefault();
    singin_block_loginValue = singin_block_login.value;
    singin_block_passwordValue = singin_block_password.value;
    if ((singin_block_loginValue == adminLogin) && (singin_block_passwordValue == adminPassword)) {
        signInBollean = true;
    } else signInBollean = false;
    singin_block.style.visibility = 'hidden'
}

function bold() {
    addClass(content, "bold");
}

function cursive() {
    addClass(content, "cursive");
}

function underline() {
    addClass(content, "underline");
}

function strikethrough() {
    addClass(content, "strikethrough");
}

let alignM = ["alignLeft", "alignCenter", "alignRight"]

function alignLeft() {
    addClass(content, "alignLeft", alignM);
}

function alignCenter() {
    addClass(content, "alignCenter", alignM);
}

function alignRight() {
    addClass(content, "alignRight", alignM);
}
/*At first it check if function has argument font(its massive of object for example different type of fonts) 
then she call a function removingClass which check if the object containing class of the massive font and if its true 
remove class and then function add new class.Because it cant add new class if there were old class 
for example if there were class 'arial' i cant add 'verdana' thats why i was using removingClass.
Also i use method toggle if you click one more on button its would delete this class
*/
function addClass(el = content, className_, font) {
    if (font) {
        removingClass(el, font);
    }
    el.classList.toggle(className_);
}

function removingClass(el, massive) {
    for (let i = 0; i < massive.length; i++) {
        if (el.classList.contains(massive[i])) {
            el.classList.remove(massive[i]);
        }
    }
}

//massive of the fonts
let fontM = ["arial", "georgia", "impact", "tahoma", "tnr", "verdana"];
//massive of the font size
let sizeM = ["twelve", "fourteen", "sixteen", "eighteen", "twenty", "twentyTwo", "twentyFive", "thirty"];

//just taking the choosen options and set it as a second argument
function changeFont() {
    valueFont = selectFont.options[selectFont.selectedIndex].value;
    addClass(content, `${valueFont}`, fontM);
}

function changeSize() {
    valueSize = selectSize.options[selectSize.selectedIndex].value;
    addClass(content, `${valueSize}`, sizeM);
}

