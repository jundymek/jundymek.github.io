"use strict";

// place your code below

const project = document.querySelector('.project-list-wrapper--js');
const buttonMore = document.querySelector('.more--js');

const getRepos = () => {
    fetch(`https://api.github.com/users/jundymek/repos?sort=updated&direction=desc`)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.message && resp.message.includes("Not Found")) {
                userNotFound(username);
            } else {
                console.log(resp)
                localStorage.setItem('allData', JSON.stringify(resp))
                listRepos(resp.slice(0, 4));
            }
        })
        .catch((error) => {
            console.log(error)
        });
}

const listRepos = (data) => {
    if (data.length) {
        let tempData = data;
        project.innerHTML = ''
        let more = data.length + 4;
        buttonMore.addEventListener('click', () => {
            let tempData = JSON.parse(localStorage.getItem('allData')).slice(0, more)
            if (more >= JSON.parse(localStorage.getItem('allData')).length) {
                buttonMore.style.display = 'none';
            }
            listRepos(tempData)
        }
        )
        for (let i = 0; i < tempData.length; i++) {
            const name = tempData[i]["name"];
            const path = tempData[i]["html_url"];
            const live = tempData[i]["homepage"];
            const description = tempData[i]["description"];
            project.innerHTML += `
            <section class="project">
                <div class="project__content">
                    <img class="project__logo" src="/assets/img/github_project_icon.png" alt="Github logo.">
                    <h3 class="project__title">${name}</h3>
                    <p class="project__description">${description ? description : 'No description for this project'}</p>
                </div>
                <div class="project__links-wrapper">
                <img src="/assets/img/demo_icon.png" alt="Demo button." class="project__link-icon"><a href="${live}"
                    class="project__link">Demo</a>
                <span class="project__link-separator"></span>
                <img src="/assets/img/code_icon.png" alt="Code button." class="project__link-icon"><a href="${path}"
                    class="project__link">Github</a>
                </div>
            </section>
            `;
        }
    }
}

getRepos();


