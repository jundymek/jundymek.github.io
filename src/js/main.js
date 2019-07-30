"use strict";

// place your code below

const project = document.querySelector('.project-list-wrapper--js');

const getRepos = () => {
    fetch(`https://api.github.com/users/jundymek/repos?sort=updated&direction=desc`)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.message && resp.message.includes("Not Found")) {
                userNotFound(username);
            } else {
                console.log(resp)
                listRepos(resp);
            }
        })
        .catch((error) => {
            console.log(error)
        });
}

const listRepos = (data) => {
    if (data.length) {
        for (let i = 0; i < data.length; i++) {
            const name = data[i]["name"];
            const path = data[i]["html_url"];
            const live = data[i]["homepage"];
            const description = data[i]["description"];
            project.innerHTML += `
            <section class="project">
                <div class="project__content">
                    <img class="project__logo" src="/assets/img/github_project_icon.png" alt="Github logo.">
                    <h3 class="project__title">${name}</h3>
                    <p class="project__description">${description}</p>
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


