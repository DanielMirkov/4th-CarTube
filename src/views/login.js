import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';



export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username').trim();
        const pass = formData.get('password').trim();

        if (username == '' || pass == '') return alert('All fields are requred')

        await login(username, pass);
        ctx.setUserNav();
        ctx.page.redirect('/dashboard');
    }
}

const loginTemplate = (onSubmit) => html `
<section id="login">
    <div class="container">
        <form @submit=${onSubmit} id="login-form" action="#" method="post">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>
`;