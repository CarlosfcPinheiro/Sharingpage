const lang_data = {
    en:{
        linkedin: "Conect with me!",
        github: "Explore my projects",
        cv: "Check my CV",
        copy: "Copy to clipboard area."
    },
    
    pt_br:{
        linkedn: "Conecte-se comigo!",
        github: "Explore meus projetos",
        cv: "Confira meu CV",
        copy: "Copiado para área de transferêrncia."
    }
}

// Storing the object values into array
const pt_br_Arr = Object.values(lang_data.pt_br);
const en_Arr = Object.values(lang_data.en);

console.log(pt_br_Arr);