import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { welcomePage } from './views/welcome.js';
import { loginPage } from './views/login.js';
import { homePage } from './views/dashboard.js';
import { registerPage } from './views/register.js';
import { logout } from './api/data.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { myPage } from './views/myProfile.js';
import { editPage } from './views/edit.js';


const main = document.querySelector('main');

page('/', decorateContext, welcomePage);
page('/welcome', decorateContext, welcomePage);
page('/index.html', decorateContext, welcomePage);
page('/dashboard', decorateContext, homePage);
page('/myList', decorateContext, myPage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);

document.querySelector('.logout').addEventListener('click', async() => {

    await logout();
    page.redirect('/');
    setUserNav();
});

setUserNav();
//start app
page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}


function setUserNav() {

    const username = sessionStorage.getItem('username');

    if (username != null) {
        document.getElementById('profile').children[0].textContent = `Welcome ${username}`;
        document.getElementById('profile').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}
/*


*/