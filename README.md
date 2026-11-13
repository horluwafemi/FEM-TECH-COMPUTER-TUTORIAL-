# Femtech Computer Training – one-page website

Static site (HTML, CSS, JS). No build step.

## Deploy to Vercel
**Option A – drag and drop:** go to vercel.com/new, choose "Upload", and drop this folder.
**Option B – CLI:** run `npm i -g vercel`, then `vercel --prod` inside this folder.
**Option C – GitHub:** push the folder to a repo, import it in Vercel, leave the framework as "Other" and the build command and output directory empty.

## Update the booking link
Open `config.js` and replace `bookingUrl` with your Google Form link. Every "Book" button uses it.

## Other edits
- Business name: search `Femtech Computer Training` in `index.html`.
- Phone, email and WhatsApp: `index.html` (contact section and footer). The WhatsApp number is also in `config.js`.
- Courses: edit the tabs and the panels in the courses section of `index.html`.
