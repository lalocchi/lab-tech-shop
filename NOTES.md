# Notes: my design log

**Live URL (Vercel):** https://lab-tech-shop-rho.vercel.app/


## 1. Route and storage choice

- What route did you create for the payment page, and why that name/location?
I created the payment page at `/premium`, inside `app/premium/page.js`, because the navbar already has a button for Premium.

- Where did you store the "this user is premium" flag (`localStorage`,
  `sessionStorage`, a cookie, something else)?
  
I stored the premium flag in `localStorage` as `isPremium = true`.

- Why that one? What would have broken or felt wrong with the alternatives?

I chose `localStorage` because the premium status needs to stay after refresh and even after closing the tab. (but i have different opinion about that,but in that case i had to use local.)

## 2. Server vs Client Components

- List the components/files you touched. For each, mark it **Server** or
  **Client**.

Files I touched:
- `app/premium/page.js` — Client Component
- `app/premium/premium.css` — CSS file
- `app/components/AdBanner.js` — Client Component

- Which ones were *forced* to be Client Components, and what forced them?
  (state, event handlers, browser-only APIs like `localStorage`...)

`PremiumPage` had to be a Client Component because it uses `useState`, controlled inputs, a submit event handler, and `localStorage`.

`AdBanner` also had to become a Client Component because it needs to read `localStorage`, which only exists in the browser.

- What did you gain by keeping the rest on the server?
If I'm being honest,I don't know I just used "if it works don't touch it" mindset...
Though I asked AI,it said:The rest of the app can stay as Server Components because they do not need browser state or event handlers. This keeps the app simpler and avoids making everything run on the client unnecessarily.


## 3. The first-render problem

- Did you hit a hydration mismatch or a "localStorage is not defined" error?
  Describe what happened.
I got a error after converting AdBanner into a Client Component.
The error happened because I placed the "use client" directive below other code in the file.

- How did you fix it? (e.g. render a known state first, then read storage after
  the component mounts.)
I fixed the issue by moving "use client" to the top of AdBanner.js 

- How do you know it's actually fixed? (what you checked in the console/UI)
After that, the application compiled successfully and the ads stayed hidden after a refresh.

## 4. How the pieces connect

- Walk through one full flow in 2-3 sentences: user submits the form, then what
  happens, ending with the ads disappearing and staying gone after a refresh.

The user fills out the mock pay form and clicks the Pay button. The submit handler saves a premium flag in localStorage and displays a payment confirmation message.

The AdBanner component checks the premium flag from localStorage. If the flag is true, the ads are not rendered, and they remain hidden even after the page is refreshed.

## 5. If I had another hour

- One thing you'd change, add, or clean up, and why.
I wouldn't use localStorage.Because in that case,even if you give your device to someone they still have premium type.
I think it would be better to have an account and then have the premium connected to your account in the back,not your local.But it would take so much time to do now and also lab didn't require such thing.

Also , it only removes ad after you refresh it. 
And also, you can keep the form empty that's a problem but since I have to deliver the lab I don't have the time (sorry)