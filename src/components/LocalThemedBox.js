import React,{ useContext,useEffect,useState}from 'react';
import {ThemeContext}from'./ThemeProvider';



const LocalThemedBox = () => {
    const{theme}= useContext(ThemeContext);
    const[localTheme,setLocalTheme]=useState(theme);
    useEffect(()=>{
        setLocalTheme(theme);
        let ini=theme ==='dark'?'Toggle local theme to light':'Toggle local theme to dark';
        setLocalBtn(ini);
    };[theme])
    const[localBtn,setLocalBtn]=useState(initial)
    let local themefn =()=>{
        if(localBtn ==='Toggle local theme to dark'){setLocalTheme('dark');setLocalBtn('Toggle local theme to light');
                                                    }
        else{
            setLocalTheme('light');
            setLocalBtn('Toggle local theme to dark');
        }
    }
            

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box"
    className={'big-'+localTheme}>
        {/* Write code below this line */}
<p
id="local-themed-text-container"
    className={'text-'+localTheme}>
hello</p>
<button id="local-themed-toggler"onClick={localThemefn}

    className={`btn btn-${localTheme}txt-${localTheme}`}>{localBtn}</button>
    

        
    </div>
)
}

export { LocalThemedBox }
