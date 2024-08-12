// Get elements
const loading_slide = document.querySelector('.loading');
const text_glitch = document.querySelector('#text-glitch');
const text_welcome = document.querySelector('#text-welcome');
const bar_loading = document.querySelector('#bar-loading');

let num_bar = null;
let num_bar_string = '';
let count = 0;

// Creating method sleep
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

text_welcome.textContent = '';

// Vars
const especial_chars = ['!', '@', '#', '&', '%'];
const message_complete = 'Welcome.';
const msgConstructor = '';

const constructor = async(text, loopNum) => {
    for (let i=0; i<text.length; i++){
        let temp_especial_chars = especial_chars;

        for (let c=0; c<loopNum; c++){
            if(temp_especial_chars.length <= 1){
                temp_especial_chars = ['!', '@', '#', '&', '%'];
            }

            let randomIndex = Math.floor((Math.random()*
            (temp_especial_chars.length-1)+0));
            const randomChar = temp_especial_chars[randomIndex];

            // console.log(`lenght: ${temp_especial_chars}, random: ${randomIndex}, choose: ${temp_especial_chars[randomIndex]}`);
            // console.log(temp_especial_chars[randomIndex]);

            // Discart repeated chars
            temp_especial_chars.splice(randomIndex, 1);
            await sleep(20);
            text_glitch.textContent = randomChar;

            // console.log(count += 1);
            // Add bar percentage
            num_bar += 0.834;
            num_bar_string = num_bar.toString() + '%';
            // console.log(num_bar_string);

            bar_loading.style.width = num_bar_string;
        }
        text_welcome.textContent += text[i];

    }
    text_glitch.textContent = '';
    bar_loading.classList.add('complete');

    loading_slide.classList.add('fadeOut');
}

constructor(message_complete, 15);