// Select elements correctly with the dot (.)
let links = document.querySelectorAll('.about');
let tabs = document.querySelectorAll('.tab-contents');

// Add event listener to each 'about' tab
document.querySelectorAll('.about').forEach(item => {
    item.addEventListener('click', function() {
        tabOpen(this.textContent.toLowerCase());  // Passes 'skills', 'experience', or 'education'
    });
});

function tabOpen(tabSelected) {
    // Remove active class from all links
    links.forEach((link) => {
        link.classList.remove('active-section');
    });

    // Remove active class from all tabs
    tabs.forEach((tab) => {
        tab.classList.remove('active-tab');
    });
    const currLink = document.querySelector(`.${tabSelected}`)
    currLink.classList.add('active-section') 
    const currTab = document.getElementById(tabSelected)
    currTab.classList.add('active-tab')
}

function openMenu(){
    const hamburger = document.querySelector('.fa-bars')
    const rightMenu = document.querySelector('header nav ul')
    hamburger.style.display = 'none'
    rightMenu.style.right = "0"
}
function closeMenu(){
    const hamburger = document.querySelector('.fa-bars')
    const rightMenu = document.querySelector('header nav ul')
    hamburger.style.display = 'block'
    rightMenu.style.right = "-200px"
}


//dark theme
function darkMode(){
    document.body.classList.toggle("dark-mode")
    const icon = document.querySelector(".dark-icon")
    const logo = document.querySelector('header .logo > span')
    if(document.body.classList.contains("dark-mode")){
        icon.src = "elements/sun.png"
        logo.style.color = "#fff";
    }
    else{
        icon.src = "elements/moon.png"
        logo.style.color = "black";
    }
}

// auto typing effect
const staticText = "I am Pintu Sharma, a passionate "; // Fixed part
const words = ["developer", "designer", "creator", "coder"]; // Words to change
const typingSpeed = 100; // Speed of typing
const deletingSpeed = 50; // Speed of deleting
const delayBetweenWords = 1500; // Delay after typing a word
const delayAfterFullSentence = 1000; // Delay after full sentence is typed

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isTypingFullSentence = true; // Flag to check if full sentence is typing

const typingText = document.querySelector(".typing-text");

function typeEffect() {
    if (isTypingFullSentence) {
        // Typing the full sentence initially
        if (charIndex < staticText.length) {
            typingText.textContent = staticText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            // Full sentence typed, now move to last word
            isTypingFullSentence = false;
            charIndex = 0; // Reset for word typing
            setTimeout(typeEffect, delayAfterFullSentence); // Pause before switching words
        }
    } else {
        // Typing and deleting words dynamically
        let currentWord = words[wordIndex];
        let displayText = staticText + currentWord.substring(0, charIndex);

        typingText.textContent = displayText;

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, deletingSpeed);
        } else {
            // Switching between typing and deleting
            if (!isDeleting) {
                setTimeout(() => {
                    isDeleting = true;
                    typeEffect();
                }, delayBetweenWords);
            } else {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Move to the next word
                setTimeout(typeEffect, typingSpeed);
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// gmail

function sendEmail() {
    window.location.href = "mailto:ipintu4143@gmail.com";
}

