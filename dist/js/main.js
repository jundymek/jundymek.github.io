!function(I){var g={};function t(C){if(g[C])return g[C].exports;var c=g[C]={i:C,l:!1,exports:{}};return I[C].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=I,t.c=g,t.d=function(I,g,C){t.o(I,g)||Object.defineProperty(I,g,{enumerable:!0,get:C})},t.r=function(I){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})},t.t=function(I,g){if(1&g&&(I=t(I)),8&g)return I;if(4&g&&"object"==typeof I&&I&&I.__esModule)return I;var C=Object.create(null);if(t.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:I}),2&g&&"string"!=typeof I)for(var c in I)t.d(C,c,function(g){return I[g]}.bind(null,c));return C},t.n=function(I){var g=I&&I.__esModule?function(){return I.default}:function(){return I};return t.d(g,"a",g),g},t.o=function(I,g){return Object.prototype.hasOwnProperty.call(I,g)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\n// place your code below\n\nconst project = document.querySelector(\'.project-list-wrapper--js\');\nconst buttonMore = document.querySelector(\'.more--js\');\n\nconst getRepos = () => {\n    fetch(`https://api.github.com/users/jundymek/repos?sort=updated&direction=desc`)\n        .then(resp => resp.json())\n        .then(resp => {\n            if (resp.message && resp.message.includes("Not Found")) {\n                userNotFound(username);\n            } else {\n                console.log(resp)\n                localStorage.setItem(\'allData\', JSON.stringify(resp))\n                listRepos(resp.slice(0, 4));\n            }\n        })\n        .catch((error) => {\n            console.log(error)\n        });\n}\n\nconst listRepos = (data) => {\n    if (data.length) {\n        let tempData = data;\n        project.innerHTML = \'\'\n        let more = data.length + 4;\n        buttonMore.addEventListener(\'click\', () => {\n            let tempData = JSON.parse(localStorage.getItem(\'allData\')).slice(0, more)\n            if (more >= JSON.parse(localStorage.getItem(\'allData\')).length) {\n                buttonMore.style.display = \'none\';\n            }\n            listRepos(tempData)\n        }\n        )\n        for (let i = 0; i < tempData.length; i++) {\n            const name = tempData[i]["name"];\n            const path = tempData[i]["html_url"];\n            const live = tempData[i]["homepage"];\n            const description = tempData[i]["description"];\n            project.innerHTML += `\n            <section class="project">\n                <div class="project__content">\n                    <img class="project__logo" src="/assets/img/github_project_icon.png" alt="Github logo.">\n                    <h3 class="project__title">${name}</h3>\n                    <p class="project__description">${description ? description : \'No description for this project\'}</p>\n                </div>\n                <div class="project__links-wrapper">\n                <img src="/assets/img/demo_icon.png" alt="Demo button." class="project__link-icon"><a href="${live}"\n                    class="project__link">Demo</a>\n                <span class="project__link-separator"></span>\n                <img src="/assets/img/code_icon.png" alt="Code button." class="project__link-icon"><a href="${path}"\n                    class="project__link">Github</a>\n                </div>\n            </section>\n            `;\n        }\n    }\n}\n\ngetRepos();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RCxzREFBc0QsOERBQThEO0FBQ3BIO0FBQ0E7QUFDQSw4R0FBOEcsS0FBSztBQUNuSDtBQUNBO0FBQ0EsOEdBQThHLEtBQUs7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcblxuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3Qtd3JhcHBlci0tanMnKTtcbmNvbnN0IGJ1dHRvbk1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9yZS0tanMnKTtcblxuY29uc3QgZ2V0UmVwb3MgPSAoKSA9PiB7XG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvanVuZHltZWsvcmVwb3M/c29ydD11cGRhdGVkJmRpcmVjdGlvbj1kZXNjYClcbiAgICAgICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcC5tZXNzYWdlICYmIHJlc3AubWVzc2FnZS5pbmNsdWRlcyhcIk5vdCBGb3VuZFwiKSkge1xuICAgICAgICAgICAgICAgIHVzZXJOb3RGb3VuZCh1c2VybmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3ApXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbERhdGEnLCBKU09OLnN0cmluZ2lmeShyZXNwKSlcbiAgICAgICAgICAgICAgICBsaXN0UmVwb3MocmVzcC5zbGljZSgwLCA0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KTtcbn1cblxuY29uc3QgbGlzdFJlcG9zID0gKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHRlbXBEYXRhID0gZGF0YTtcbiAgICAgICAgcHJvamVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBsZXQgbW9yZSA9IGRhdGEubGVuZ3RoICsgNDtcbiAgICAgICAgYnV0dG9uTW9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB0ZW1wRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbERhdGEnKSkuc2xpY2UoMCwgbW9yZSlcbiAgICAgICAgICAgIGlmIChtb3JlID49IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbERhdGEnKSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uTW9yZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlzdFJlcG9zKHRlbXBEYXRhKVxuICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRlbXBEYXRhW2ldW1wibmFtZVwiXTtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSB0ZW1wRGF0YVtpXVtcImh0bWxfdXJsXCJdO1xuICAgICAgICAgICAgY29uc3QgbGl2ZSA9IHRlbXBEYXRhW2ldW1wiaG9tZXBhZ2VcIl07XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRlbXBEYXRhW2ldW1wiZGVzY3JpcHRpb25cIl07XG4gICAgICAgICAgICBwcm9qZWN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInByb2plY3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdF9fbG9nb1wiIHNyYz1cIi9hc3NldHMvaW1nL2dpdGh1Yl9wcm9qZWN0X2ljb24ucG5nXCIgYWx0PVwiR2l0aHViIGxvZ28uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInByb2plY3RfX3RpdGxlXCI+JHtuYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdF9fZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9uID8gZGVzY3JpcHRpb24gOiAnTm8gZGVzY3JpcHRpb24gZm9yIHRoaXMgcHJvamVjdCd9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X19saW5rcy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9kZW1vX2ljb24ucG5nXCIgYWx0PVwiRGVtbyBidXR0b24uXCIgY2xhc3M9XCJwcm9qZWN0X19saW5rLWljb25cIj48YSBocmVmPVwiJHtsaXZlfVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvamVjdF9fbGlua1wiPkRlbW88L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0X19saW5rLXNlcGFyYXRvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2NvZGVfaWNvbi5wbmdcIiBhbHQ9XCJDb2RlIGJ1dHRvbi5cIiBjbGFzcz1cInByb2plY3RfX2xpbmstaWNvblwiPjxhIGhyZWY9XCIke3BhdGh9XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9qZWN0X19saW5rXCI+R2l0aHViPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZ2V0UmVwb3MoKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);