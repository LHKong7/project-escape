import React from 'react';
import './index.scss';

export const PickThemeComp = () => {
    const root = document.documentElement 
    const themeBtns = document.querySelectorAll('.theme > button')

    themeBtns.forEach((btn) => {
        btn.addEventListener('click', handleThemeUpdate)
    })

    function handleThemeUpdate(e) {
        switch(e.target.value) {
            case 'dark': 
            root.style.setProperty('--bg', 'black')
            root.style.setProperty('--bg-text', 'white')
            break
            case 'calm': 
            root.style.setProperty('--bg', '#B3E5FC')
            root.style.setProperty('--bg-text', '#37474F')
            break
            case 'light':
            root.style.setProperty('--bg', 'white')
            root.style.setProperty('--bg-text', 'black')
            break
        }
    }

    return (
        <div>
            <div className="theme">
                <button value="dark">dark</button>
                <button value="calm">calm</button>
                <button value="light">light</button>
            </div>

            <article>
            <h1>Hello World</h1>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean v
            
            <h2>Can the world hear?</h2>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean v
            </article>
        </div>
    )
}