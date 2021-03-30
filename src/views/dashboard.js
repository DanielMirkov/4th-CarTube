import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllCars } from '../api/data.js';
import { itemTemplate } from './common/item.js';


export async function homePage(ctx) {
    const data = await getAllCars();

    ctx.render(homeTemplate(data));
}


const homeTemplate = (data) => html `
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
        <!-- Display all records -->
        ${data.length == 0 ? html`<p class="no-cars">No cars in database.</p>` : Object.values(data).map(itemTemplate)}
        <!-- Display if there are no records -->
    </div>
</section>
`;