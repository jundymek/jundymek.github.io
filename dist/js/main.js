!function(I){var g={};function c(n){if(g[n])return g[n].exports;var t=g[n]={i:n,l:!1,exports:{}};return I[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=I,c.c=g,c.d=function(I,g,n){c.o(I,g)||Object.defineProperty(I,g,{enumerable:!0,get:n})},c.r=function(I){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})},c.t=function(I,g){if(1&g&&(I=c(I)),8&g)return I;if(4&g&&"object"==typeof I&&I&&I.__esModule)return I;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:I}),2&g&&"string"!=typeof I)for(var t in I)c.d(n,t,function(g){return I[g]}.bind(null,t));return n},c.n=function(I){var g=I&&I.__esModule?function(){return I.default}:function(){return I};return c.d(g,"a",g),g},c.o=function(I,g){return Object.prototype.hasOwnProperty.call(I,g)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\n// place your code below\n\nconst project = document.querySelector(\'.project-list-wrapper--js\');\nconst buttonMore = document.querySelector(\'.projects__more--js\');\nwindow.addEventListener("scroll", scroll);\n\nconst getRepos = () => {\n    fetch(`https://api.github.com/users/jundymek/repos?sort=updated&direction=desc`)\n        .then(resp => resp.json())\n        .then(resp => {\n            localStorage.setItem(\'allData\', JSON.stringify(resp))\n            listRepos(resp.slice(0, 4));\n        }\n        )\n        .catch((error) => {\n            console.log(error)\n        });\n}\n\nconst listRepos = (data) => {\n    if (data.length) {\n        let tempData = data;\n        project.innerHTML = \'\'\n        let moreData = data.length + 4;\n        buttonMore.addEventListener(\'click\', () => {\n            let tempData = JSON.parse(localStorage.getItem(\'allData\')).slice(0, moreData)\n            if (moreData >= JSON.parse(localStorage.getItem(\'allData\')).length) {\n                buttonMore.style.display = \'none\';\n            }\n            listRepos(tempData)\n        }\n        )\n        for (let i = 0; i < tempData.length; i++) {\n            const name = tempData[i]["name"];\n            const path = tempData[i]["html_url"];\n            const live = tempData[i]["homepage"];\n            const description = tempData[i]["description"];\n            project.innerHTML += `\n            <section class="project">\n                <div class="project__content">\n                    <img class="project__logo" src="/assets/img/github_project_icon.png" alt="Github logo.">\n                    <h3 class="project__title">${name}</h3>\n                    <p class="project__description">${description ? description : \'No description for this project\'}</p>\n                </div>\n                <div class="project__links-wrapper">\n                ${live ? `<img src="/assets/img/demo_icon.png" alt="Demo button." class="project__link-icon"><a href="${live}"\n                class="project__link">Demo</a><span class="project__link-separator"></span>` : \'\'}\n                <img src="/assets/img/code_icon.png" alt="Code button." class="project__link-icon"><a href="${path}"\n                    class="project__link">Github</a>\n                </div>\n            </section>\n            `;\n        }\n    }\n}\n\nfunction scroll() {\n    const arrow = document.querySelector(".arrow-up--js")\n    if (scrollY > 0) {\n        arrow.style.display = \'block\'\n    } else {\n        arrow.style.display = \'none\'\n    }\n}\n\ngetRepos();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3RELHNEQUFzRCw4REFBOEQ7QUFDcEg7QUFDQTtBQUNBLGtCQUFrQixzR0FBc0csS0FBSztBQUM3SDtBQUNBLDhHQUE4RyxLQUFLO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdC13cmFwcGVyLS1qcycpO1xuY29uc3QgYnV0dG9uTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fbW9yZS0tanMnKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbCk7XG5cbmNvbnN0IGdldFJlcG9zID0gKCkgPT4ge1xuICAgIGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2p1bmR5bWVrL3JlcG9zP3NvcnQ9dXBkYXRlZCZkaXJlY3Rpb249ZGVzY2ApXG4gICAgICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbERhdGEnLCBKU09OLnN0cmluZ2lmeShyZXNwKSlcbiAgICAgICAgICAgIGxpc3RSZXBvcyhyZXNwLnNsaWNlKDAsIDQpKTtcbiAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KTtcbn1cblxuY29uc3QgbGlzdFJlcG9zID0gKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHRlbXBEYXRhID0gZGF0YTtcbiAgICAgICAgcHJvamVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBsZXQgbW9yZURhdGEgPSBkYXRhLmxlbmd0aCArIDQ7XG4gICAgICAgIGJ1dHRvbk1vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGVtcERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxEYXRhJykpLnNsaWNlKDAsIG1vcmVEYXRhKVxuICAgICAgICAgICAgaWYgKG1vcmVEYXRhID49IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbERhdGEnKSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uTW9yZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlzdFJlcG9zKHRlbXBEYXRhKVxuICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRlbXBEYXRhW2ldW1wibmFtZVwiXTtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSB0ZW1wRGF0YVtpXVtcImh0bWxfdXJsXCJdO1xuICAgICAgICAgICAgY29uc3QgbGl2ZSA9IHRlbXBEYXRhW2ldW1wiaG9tZXBhZ2VcIl07XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRlbXBEYXRhW2ldW1wiZGVzY3JpcHRpb25cIl07XG4gICAgICAgICAgICBwcm9qZWN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInByb2plY3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdF9fbG9nb1wiIHNyYz1cIi9hc3NldHMvaW1nL2dpdGh1Yl9wcm9qZWN0X2ljb24ucG5nXCIgYWx0PVwiR2l0aHViIGxvZ28uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInByb2plY3RfX3RpdGxlXCI+JHtuYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdF9fZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9uID8gZGVzY3JpcHRpb24gOiAnTm8gZGVzY3JpcHRpb24gZm9yIHRoaXMgcHJvamVjdCd9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X19saW5rcy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgJHtsaXZlID8gYDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvZGVtb19pY29uLnBuZ1wiIGFsdD1cIkRlbW8gYnV0dG9uLlwiIGNsYXNzPVwicHJvamVjdF9fbGluay1pY29uXCI+PGEgaHJlZj1cIiR7bGl2ZX1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvamVjdF9fbGlua1wiPkRlbW88L2E+PHNwYW4gY2xhc3M9XCJwcm9qZWN0X19saW5rLXNlcGFyYXRvclwiPjwvc3Bhbj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9jb2RlX2ljb24ucG5nXCIgYWx0PVwiQ29kZSBidXR0b24uXCIgY2xhc3M9XCJwcm9qZWN0X19saW5rLWljb25cIj48YSBocmVmPVwiJHtwYXRofVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvamVjdF9fbGlua1wiPkdpdGh1YjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctdXAtLWpzXCIpXG4gICAgaWYgKHNjcm9sbFkgPiAwKSB7XG4gICAgICAgIGFycm93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJyb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cbn1cblxuZ2V0UmVwb3MoKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);