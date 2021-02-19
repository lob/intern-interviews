# Intern Interviews
## Directions
- Please duplicate this respository as a private repo in your own GitHub account.
- Write your profile page (see details under [Profile Page](#profile-page))
- Author your code (see details under [Code Challenge](#code-challenge))
- Submit a pull request to your repo's `main` branch with your changes.
- On github, please add [Alex Strachan](https://github.com/metalsheep/), [Sasha Ashpis](https://github.com/sasha-ashpis), [Roman Kofman](https://github.com/rkofman-lob), and [Nina Hwang](https://github.com/nihwang) to have write permissions.
- Tag [Alex Strachan](https://github.com/metalsheep/), [Sasha Ashpis](https://github.com/sasha-ashpis), [Roman Kofman](https://github.com/rkofman-lob), and [Nina Hwang](https://github.com/nihwang) as reviewers on your PR.

## Profile Page
Make a folder for yourself with your name inside `/src/interns/`.

Make the page your own, including a picture meaningful to you (it doesn't have to be of you, but it can be!) and a paragraph about what you want to learn during an internship.  Make sure to cover what makes you want to be a software engineer and what sorts of software you'd like to create.

If you need inspiration for you `about me` page, you can view Larry Lobster's in the `/src/interns/` folder.

## Code Challenge
In the `/src/challenge` folder open up index.html in your preferred browser.  You'll find a combo lock that doesn't work.  Your job is to make the lock work & when the secret combo is entered, send us to your `about me` page.

To do this, open `/src/challenge/lock-logic.js` and read the instructions there to complete the changeDialValue function.  When the combo entered matches, you should use the redirect() function to send us to your `about me` page.

Be sure to lint your code - you can do that by running
```sh
npm install
npx eslint .
# or
# > npx eslint . --fix
# to automatically fix simple issues
```
