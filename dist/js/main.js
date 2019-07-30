!function(I){var g={};function c(n){if(g[n])return g[n].exports;var C=g[n]={i:n,l:!1,exports:{}};return I[n].call(C.exports,C,C.exports,c),C.l=!0,C.exports}c.m=I,c.c=g,c.d=function(I,g,n){c.o(I,g)||Object.defineProperty(I,g,{enumerable:!0,get:n})},c.r=function(I){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})},c.t=function(I,g){if(1&g&&(I=c(I)),8&g)return I;if(4&g&&"object"==typeof I&&I&&I.__esModule)return I;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:I}),2&g&&"string"!=typeof I)for(var C in I)c.d(n,C,function(g){return I[g]}.bind(null,C));return n},c.n=function(I){var g=I&&I.__esModule?function(){return I.default}:function(){return I};return c.d(g,"a",g),g},c.o=function(I,g){return Object.prototype.hasOwnProperty.call(I,g)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\n// place your code below\n\nconst project = document.querySelector(\'.project-list-wrapper--js\');\n\nconst getRepos = () => {\n    fetch(`https://api.github.com/users/jundymek/repos?sort=updated&direction=desc`)\n        .then(resp => resp.json())\n        .then(resp => {\n            if (resp.message && resp.message.includes("Not Found")) {\n                userNotFound(username);\n            } else {\n                console.log(resp)\n                listRepos(resp);\n            }\n        })\n        .catch((error) => {\n            console.log(error)\n        });\n}\n\nconst listRepos = (data) => {\n    if (data.length) {\n        for (let i = 0; i < data.length; i++) {\n            const name = data[i]["name"];\n            const path = data[i]["html_url"];\n            const live = data[i]["homepage"];\n            const description = data[i]["description"];\n            project.innerHTML += `\n            <section class="project">\n                <div class="project__content">\n                    <img class="project__logo" src="/assets/img/github_project_icon.png" alt="Github logo.">\n                    <h3 class="project__title">${name}</h3>\n                    <p class="project__description">${description}</p>\n                </div>\n                <div class="project__links-wrapper">\n                <img src="/assets/img/demo_icon.png" alt="Demo button." class="project__link-icon"><a href="${live}"\n                    class="project__link">Demo</a>\n                <span class="project__link-separator"></span>\n                <img src="/assets/img/code_icon.png" alt="Code button." class="project__link-icon"><a href="${path}"\n                    class="project__link">Github</a>\n                </div>\n            </section>\n            `;\n        }\n    }\n}\n\ngetRepos();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEtBQUs7QUFDdEQsc0RBQXNELFlBQVk7QUFDbEU7QUFDQTtBQUNBLDhHQUE4RyxLQUFLO0FBQ25IO0FBQ0E7QUFDQSw4R0FBOEcsS0FBSztBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdC13cmFwcGVyLS1qcycpO1xuXG5jb25zdCBnZXRSZXBvcyA9ICgpID0+IHtcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9qdW5keW1lay9yZXBvcz9zb3J0PXVwZGF0ZWQmZGlyZWN0aW9uPWRlc2NgKVxuICAgICAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwLm1lc3NhZ2UgJiYgcmVzcC5tZXNzYWdlLmluY2x1ZGVzKFwiTm90IEZvdW5kXCIpKSB7XG4gICAgICAgICAgICAgICAgdXNlck5vdEZvdW5kKHVzZXJuYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcClcbiAgICAgICAgICAgICAgICBsaXN0UmVwb3MocmVzcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KTtcbn1cblxuY29uc3QgbGlzdFJlcG9zID0gKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZGF0YVtpXVtcIm5hbWVcIl07XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZGF0YVtpXVtcImh0bWxfdXJsXCJdO1xuICAgICAgICAgICAgY29uc3QgbGl2ZSA9IGRhdGFbaV1bXCJob21lcGFnZVwiXTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGF0YVtpXVtcImRlc2NyaXB0aW9uXCJdO1xuICAgICAgICAgICAgcHJvamVjdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwcm9qZWN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2plY3RfX2xvZ29cIiBzcmM9XCIvYXNzZXRzL2ltZy9naXRodWJfcHJvamVjdF9pY29uLnBuZ1wiIGFsdD1cIkdpdGh1YiBsb2dvLlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwcm9qZWN0X190aXRsZVwiPiR7bmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3RfX2Rlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RfX2xpbmtzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2RlbW9faWNvbi5wbmdcIiBhbHQ9XCJEZW1vIGJ1dHRvbi5cIiBjbGFzcz1cInByb2plY3RfX2xpbmstaWNvblwiPjxhIGhyZWY9XCIke2xpdmV9XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9qZWN0X19saW5rXCI+RGVtbzwvYT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3RfX2xpbmstc2VwYXJhdG9yXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvY29kZV9pY29uLnBuZ1wiIGFsdD1cIkNvZGUgYnV0dG9uLlwiIGNsYXNzPVwicHJvamVjdF9fbGluay1pY29uXCI+PGEgaHJlZj1cIiR7cGF0aH1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2plY3RfX2xpbmtcIj5HaXRodWI8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICBgO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5nZXRSZXBvcygpO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);