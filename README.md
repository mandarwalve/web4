# SAI MANDAR CHINESE CORNER

A premium static restaurant website built for GitHub Pages, Netlify, or Vercel.

## Project structure

- `index.html` – main website markup
- `style.css` – visual styling and responsive layout
- `app.js` – WhatsApp ordering, popup, and review interactions
- `images/` – local food photos used by the menu cards and hero section

## Customization guide

1. **Change food images**
   - Replace the image files inside the `images/` folder with your own photos.
   - Keep the same file names or update the `src` values in `index.html`.

2. **Change prices**
   - Edit the price values inside the menu card markup in `index.html`.
   - Each `menu-card` entry has the dish name and price text.

3. **Change phone number**
   - Update the `href` values for WhatsApp and phone links in `index.html`.
   - Also update the `whatsAppNumber` value in `app.js` if you change the WhatsApp number.

4. **Change address**
   - Edit the address text in the contact section inside `index.html`.
   - Update the Google Maps embed URL if needed.

5. **Add new menu items**
   - Copy an existing `<article class="menu-card">` block in `index.html`.
   - Update the image path, dish name, and price text.

## Deployment

Open `index.html` directly in VS Code or deploy the `c:\web4` folder as a static site on GitHub Pages.
