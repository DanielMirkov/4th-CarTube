import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOfMyCars } from '../api/data.js';
import { itemTemplate } from './common/item.js';

const myTemplate = (data) => html `
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        <!-- Display all records -->

        ${data.length == 0 ? html`<p class="no-cars"> You haven't listed any cars yet.</p>` :
        Object.values(data).map(itemTemplate)}
        <!-- Display if there are no records -->
        
    </div>
</section>        
`;

export async function myPage(ctx) {
    const userId = sessionStorage.getItem('userId');
   
    const data = await getAllOfMyCars(userId);

    ctx.render(myTemplate(data));
}