const allSkills = 
{
    'LIBRARIES & FRAMEWORKS':{
        "REACT":30,
        "REACT THREE FIBER | THREEJS":55,
        "TAILWIND CSS":80
    },
    'DESIGN':{
        "CSS":70,
        "UI | UX":60,
        "GRAPHIC DESIGN":80
    },
    "3D DESIGN":{
        "3D MODELLING":50,
        "LIGHTING & COMPOSITION":70,
        "ANIMATION":85
    },
    'OTHER':{
        "VIDEO EDITING":50,
        "MOTION GRAPHICS":75,
        "GAME | VR  DEVELOPMENT":70
    },
}
let skillCount = 1;
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
    
    const moduleObj = createElement("div","card",skillsContainer);
    moduleObj.classList.add("animate");
    moduleObj.classList.add(`delay-${skillCount++}`);
    moduleObj.classList.add(`shadow`);
    createElement("div","card-title",moduleObj).innerHTML = title;
    for(const key of Object.keys(progressObj))
    {
        const skillBar = createElement("div","skill-bar",moduleObj);
        createElement("div","skill-bar-title",skillBar).innerHTML = key;
        const fill = createElement("div","skill-bar-meter-fill",createElement("div","skill-bar-meter",skillBar));
        fill.classList.add("repeat");
        fill.style.width = `${progressObj[key]}%`;
    }
}

const skillsContainer = document.querySelector("#skills-container");
for(const key of Object.keys(allSkills))
{
    AddSkillModule(key,allSkills[key]);
}
