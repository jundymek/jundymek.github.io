!function(g){var I={};function c(n){if(I[n])return I[n].exports;var C=I[n]={i:n,l:!1,exports:{}};return g[n].call(C.exports,C,C.exports,c),C.l=!0,C.exports}c.m=g,c.c=I,c.d=function(g,I,n){c.o(g,I)||Object.defineProperty(g,I,{enumerable:!0,get:n})},c.r=function(g){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})},c.t=function(g,I){if(1&I&&(g=c(g)),8&I)return g;if(4&I&&"object"==typeof g&&g&&g.__esModule)return g;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:g}),2&I&&"string"!=typeof g)for(var C in g)c.d(n,C,function(I){return g[I]}.bind(null,C));return n},c.n=function(g){var I=g&&g.__esModule?function(){return g.default}:function(){return g};return c.d(I,"a",I),I},c.o=function(g,I){return Object.prototype.hasOwnProperty.call(g,I)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\n// place your code below\n\nconst project = document.querySelector(\'.project-list-wrapper--js\');\n\nconst getRepos = () => {\n    fetch(`https://api.github.com/users/jundymek/repos?sort=updated&direction=desc`)\n        .then(resp => resp.json())\n        .then(resp => {\n            if (resp.message && resp.message.includes("Not Found")) {\n                userNotFound(username);\n            } else {\n                console.log(resp)\n                listRepos(resp);\n            }\n        })\n        .catch((error) => {\n            console.log(error)\n        });\n}\n\nconst listRepos = (data) => {\n    if (data.length) {\n        for (let i = 0; i < data.length; i++) {\n            const name = data[i]["name"];\n            const path = data[i]["html_url"];\n            const live = data[i]["homepage"];\n            const description = data[i]["description"];\n            project.innerHTML += `\n            <section class="project">\n                <div class="project__content">\n                    <img class="project__logo" src="/assets/img/github_project_icon.png" alt="Github logo.">\n                    <h3 class="project__title">${name}</h3>\n                    <p class="project__description">${description ? description : \'No description for this project\'}</p>\n                </div>\n                <div class="project__links-wrapper">\n                <img src="/assets/img/demo_icon.png" alt="Demo button." class="project__link-icon"><a href="${live}"\n                    class="project__link">Demo</a>\n                <span class="project__link-separator"></span>\n                <img src="/assets/img/code_icon.png" alt="Code button." class="project__link-icon"><a href="${path}"\n                    class="project__link">Github</a>\n                </div>\n            </section>\n            `;\n        }\n    }\n}\n\ngetRepos();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEtBQUs7QUFDdEQsc0RBQXNELDhEQUE4RDtBQUNwSDtBQUNBO0FBQ0EsOEdBQThHLEtBQUs7QUFDbkg7QUFDQTtBQUNBLDhHQUE4RyxLQUFLO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XG5cbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0LXdyYXBwZXItLWpzJyk7XG5cbmNvbnN0IGdldFJlcG9zID0gKCkgPT4ge1xuICAgIGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2p1bmR5bWVrL3JlcG9zP3NvcnQ9dXBkYXRlZCZkaXJlY3Rpb249ZGVzY2ApXG4gICAgICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3AubWVzc2FnZSAmJiByZXNwLm1lc3NhZ2UuaW5jbHVkZXMoXCJOb3QgRm91bmRcIikpIHtcbiAgICAgICAgICAgICAgICB1c2VyTm90Rm91bmQodXNlcm5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwKVxuICAgICAgICAgICAgICAgIGxpc3RSZXBvcyhyZXNwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pO1xufVxuXG5jb25zdCBsaXN0UmVwb3MgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkYXRhW2ldW1wibmFtZVwiXTtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBkYXRhW2ldW1wiaHRtbF91cmxcIl07XG4gICAgICAgICAgICBjb25zdCBsaXZlID0gZGF0YVtpXVtcImhvbWVwYWdlXCJdO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkYXRhW2ldW1wiZGVzY3JpcHRpb25cIl07XG4gICAgICAgICAgICBwcm9qZWN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInByb2plY3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdF9fbG9nb1wiIHNyYz1cIi9hc3NldHMvaW1nL2dpdGh1Yl9wcm9qZWN0X2ljb24ucG5nXCIgYWx0PVwiR2l0aHViIGxvZ28uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInByb2plY3RfX3RpdGxlXCI+JHtuYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdF9fZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9uID8gZGVzY3JpcHRpb24gOiAnTm8gZGVzY3JpcHRpb24gZm9yIHRoaXMgcHJvamVjdCd9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X19saW5rcy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9kZW1vX2ljb24ucG5nXCIgYWx0PVwiRGVtbyBidXR0b24uXCIgY2xhc3M9XCJwcm9qZWN0X19saW5rLWljb25cIj48YSBocmVmPVwiJHtsaXZlfVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvamVjdF9fbGlua1wiPkRlbW88L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0X19saW5rLXNlcGFyYXRvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2NvZGVfaWNvbi5wbmdcIiBhbHQ9XCJDb2RlIGJ1dHRvbi5cIiBjbGFzcz1cInByb2plY3RfX2xpbmstaWNvblwiPjxhIGhyZWY9XCIke3BhdGh9XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9qZWN0X19saW5rXCI+R2l0aHViPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZ2V0UmVwb3MoKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);