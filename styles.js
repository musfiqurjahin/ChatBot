//style element
const style = document.createElement('style');
style.innerHTML = `
 /* Basics */
 :root{
    --primary-color: #343541;
    --secondary-color: #444654;
    --text-color: #fff;
    --bot-color: #839683;
}

#light{
    --primary-color: #ffffff;
    --secondary-color: #e2e2e2;
    --text-color: #000;
}

*{
    font-family: sans-serif;
    color: var(--text-color);
}

body {
    background-color: var(--primary-color);
}

h1 {
    text-align: center;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.hero-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.verified-badge {
    width: 30px;
    height: 30px;
    margin-left: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;
    vertical-align: middle;
    transform: translateY(1px); 
}

.verified-badge:active {
    animation: bounce 0.5s ease;
}

@keyframes bounce {
    0%, 100% {
        transform: scale(1) translateY(2px);
    }
    50% {
        transform: scale(1.2) translateY(2px);
    }
}
#submit {
    font-size: 1rem;
    background-color: transparent;
    padding: 8px 12px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}
#submit i {
    color: rgb(255, 255, 255);
}

#submit:hover i {
    color: rgb(255, 255, 255);
}

#submit:hover {
    background-color: #878787;
    border: 2px solid rgb(103, 103, 103);
}

#submit:active {
    transform: scale(0.9);
}

.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.qus-ans {
    padding-bottom: 200px;
    overflow: auto;
    width: 100%;
}
.question, .answer {
    min-height: 50px;
    max-width: 60vw;
    width: fit-content;
    position: relative;
    padding: 20px;
    margin: 50px auto;
    display: flex;
    align-items: center;
    border-radius: 20px;
    transition: transform 0.2s, box-shadow 0.2s;
    word-wrap: break-word;
}
.answer {
    background: linear-gradient(135deg, #3a3a3a, #474747);
    border-radius: 20px 20px 20px 0px; 
    justify-content: flex-start; 
    margin-right: auto; 
    margin-left: 10px;
    animation: fadeInLeft 0.5s;
}
.question {
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: #fff; 
    border-radius: 20px 20px 0px 20px; 
    justify-content: flex-end; 
    margin-left: auto; 
    margin-right: 10px; 
    animation: fadeInRight 0.5s;
    display: block;
}

.logo {
    height: 40px;
    width: 40px;
    margin-right: 10px; 
    border-radius: 50%; 
    position: relative; 
    flex-shrink: 0; 
}
img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
}

.question:hover, .answer:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-10px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(10px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
.ask-form {
    position: fixed;
    bottom: 50px;
    width: 50vw;
    height: 50px;
    z-index: 99;
    background-color: var(--secondary-color);
    border-radius: 25px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

#ask-here {
    background-color: var(--secondary-color); 
    border: none;
    height: 100%;
    width: 100%;
    font-size: 1rem;
    border-radius: 20px;
    padding: 0 15px;
    flex-grow: 1;
    transition: box-shadow 0.2s;
}

#ask-here::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

#ask-here:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    transition: box-shadow 0.3s;
}

#submit {
    font-size: 1rem;
    background-color: var(--primary-color);
    color: #fff;
    padding: 10px 15px;
    border-radius: 20px; 
    border: none;
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.3s, transform 0.2s;
}

#submit:hover {
    background-color: var(--primary-color-dark);
    transform: scale(1.05);
}

#submit:active {
    transform: scale(0.95);
}

@media (max-width: 600px) {
    .ask-form {
        width: 90vw;
    }

    #submit {
        padding: 8px 12px;
    }
}


.typing-indicator {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    animation: typing 1s infinite;
}

.typing-indicator:nth-child(2) {
    animation-delay: 0.3s;
}

.typing-indicator:nth-child(3) {
    animation-delay: 0.6s;
}
.commands-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    justify-content: center;
    margin-top: 10px;
}

.command-tile {
    background-color: white;
    height: max-content;
    width:max-content;
    color: black;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    transition: background-color 0.3s ease, color 0.3s ease;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.command-text {
    flex: 1;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.arrow-symbol {
    margin-left: 10px;
    font-size: 18px;
    color: black;
}

.command-tile:hover {
    background-color: black;
    color: white;
}

.command-tile:hover .command-text {
    color: white;
}

.command-tile:hover .arrow-symbol {
    color: white;
}


@keyframes typing {
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
}


@media only screen and (max-width: 600px) {
    /*.question, .answer {
        width: 80vw;
    }*/

    .ask-form {
        width: 80vw;
    }
}

`;
document.head.appendChild(style);