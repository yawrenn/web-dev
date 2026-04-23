let darkOn=document.getElementById("dark-on")
let darkOff=document.getElementById("dark-off")
let isDark=false;


function changeDarkMode(event){
  
  //Change background color
  
  if (isDark) document.body.style.backgroundColor="white";
  else document.body.style.backgroundColor="black";
  
  //Change text color
  if(isDark) document.body.style.color="black";
  else document.body.style.color=" white";
  
  
  
  //Change mode text
  if (isDark) mode.innerHtML="<p>Dark Mode off</p>";
  else mode.innerHTML="<p>Dark Mode on</p>";
  //Toggle isDark
  //if(isDark) isDark=false;
 // else isDark=true;
  isDark=!isDark
}
//if (darkOn.style.display=="white") background.style.display="none";
