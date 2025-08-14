const myImage = document.querySelector('img');

myImage.addEventListener('click', () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/freedom.png') {
        myImage.setAttribute('src', 'images/freedom2.png');
    } else {
        myImage.setAttribute('src', 'images/freedom.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');

    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
    }

    myHeading.textContent = `Welcome to Freedom Profile, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName} in Freedom Profile`
}

myButton.addEventListener('click', () => {
    setUserName();
})