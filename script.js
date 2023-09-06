console.log("JS is running")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display = "inline"
        document.querySelector('.cross').style.display = "none"
    }
    else{
        document.querySelector('.ham').style.display = "none"
        setTimeout(() =>{
        document.querySelector('.cross').style.display = "inline"
        },350);
    }
})

// TypeScript code for the text animation
const textElement = document.querySelector('.animated-text');
const text = textElement.textContent || '';
const delay = 80;

function animateText() {
    let index = 0;
    textElement.textContent = '';

    function addNextCharacter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(addNextCharacter, delay);
        }
    }

    addNextCharacter();
}

animateText();
