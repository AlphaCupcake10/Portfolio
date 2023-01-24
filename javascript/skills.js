const allSkills = 
{
    "3D DESIGN":{
        "3D MODELLING":40,
        "LIGHTING & COMPOSITION":70,
        "ANIMATION":85
    },
    "WEB DEVELOPMENT":{
        "HTML":70,
        "CSS":60,
        "JAVASCRIPT":30
    }
}
function AddSkillModule(title,progressObj)
{
    function createElement(tag,className,parent)
    {
        const temp = document.createElement(tag);
        temp.classList.add(className);
        if(parent != undefined)
        {
            parent.appendChild(temp);
        }
        return temp;
    }
    
    const moduleObj = createElement("div","skill-module",skillsContainer);
    createElement("div","skill-title",moduleObj).innerHTML = title;
    for(const key of Object.keys(progressObj))
    {
        const skillBar = createElement("div","skill-bar",moduleObj);
        createElement("div","skill-bar-title",skillBar).innerHTML = key;
        const fill = createElement("div","skill-bar-meter-fill",createElement("div","skill-bar-meter",skillBar));
        fill.classList.add("repeat");
        fill.style.width = `${progressObj[key]}%`;
    }
}

const skillsContainer = document.querySelector(".skills-container");
for(const key of Object.keys(allSkills))
{
    AddSkillModule(key,allSkills[key]);
}
