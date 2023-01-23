var root = document.querySelector(':root');
var rootStyle = getComputedStyle(root);

let darkTheme = true;

let white = rootStyle.getPropertyValue('--white-color'); 
let accent = rootStyle.getPropertyValue('--accent-color'); 
let dark = rootStyle.getPropertyValue('--dark-color'); 


function toggleTheme()
{
    darkTheme = !darkTheme;
    root.style.setProperty('--white-color', (darkTheme)?white:dark);
    root.style.setProperty('--dark-color', (darkTheme)?dark:white);
    
    return darkTheme;
}
document.getElementById("theme-btn").addEventListener("click",function()
{
    toggleTheme();
});

function setAccentColor(color) {
    if(color == undefined)
    {
        var letters = '0123456789ABCDEF';
        color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    }
    root.style.setProperty('--accent-color', color);
}
