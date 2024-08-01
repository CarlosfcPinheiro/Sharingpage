// Refer elements -------
const name_copy = document.querySelector('#username-copy');
const popUp_coppied = document.querySelector('#coppied');
const status_el = document.querySelector('#status-text');
const status_ball = document.querySelector('#status-ball');
const btn_lang = document.querySelector('#button-lang');

// Setting collors
const collors_arr = [
    ['dnd', '#da4d4d'],
    ['idle', '#e3e65d'],
    ['online' ,'#5fe65f'],
    ['offline', '#1a1a1a'],
]

// Events ------
name_copy.addEventListener('click', () => {
    const showCoppied = async() => {
        navigator.clipboard.writeText(name_copy.textContent);
        popUp_coppied.classList.add('showCoppied');
        const callRemoveClass = () => {
            setTimeout(() => {
                popUp_coppied.classList.remove('showCoppied');
    
            }, 3000);
        }
        callRemoveClass();
    }
    showCoppied();
});

async function getDatas(){
    const p_fetch = await fetch('https://api.lanyard.rest/v1/users/426869130142941194');
    console.log(p_fetch);

    // Taking a response (js object) stream from the promise
    const general_obj = await p_fetch.json();
    // console.log(general_obj);
    // Get the data from the user
    const user_data = general_obj.data;
    console.log(user_data);

    const discord_username = user_data.discord_user.display_name;
    const discord_status = user_data.discord_status;

    name_copy.textContent = discord_username;
    status_el.textContent = (discord_status == 'dnd'? 'occuped' : discord_status);

    for (let i=0; i<4; i++){
        if (discord_status == collors_arr[i][0]){
            status_ball.style.background = collors_arr[i][1];
            // console.log(collors_arr[i][1]);
        }
    }
}

getDatas();

// Text elements
const linkedin_text = document.querySelector('#linkedin-text');
const github_text = document.querySelector('#github-text');
const cv_text = document.querySelector('#cv-text');
const coppied_text = document.querySelector('#coppied-text');

const current_lang = document.querySelector('#current-lang');

var text_elements = [
    linkedin_text,
    github_text,
    cv_text,
    coppied_text
];

btn_lang.addEventListener('click', () => {
    async function changeText(current_arr){
        current_lang.textContent = (current_lang.textContent == 'en'? 'pt-br' : 'en');
        for (let i=0; i<text_elements.length; i++){
            text_elements[i].textContent = current_arr[i];
            console.log(text_elements[i]);
        }
    }
    
    if(current_lang.textContent === 'en'){
        changeText(en_Arr);
    } else{
        changeText(pt_br_Arr);
    }
});
