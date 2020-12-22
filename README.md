# torretasks

## Technical setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run unit tests
```
npm run test:unit
```

### Run end-to-end tests
```
npm run test:e2e
```

## Product documentation

### Solution
The idea behind torre tasks is to create a tool for both RH and candidates to generate a list for the skills that someone required to be the best fit for a job, RH can send emails to the candidate with the list and the comparative lists can be store for further loading and usage.

Follow the steps specified in the page footer to use the tool! You can also found all the steps through the collapsible nav bar

### Architecture
Front end Vue2 + Typescript + Jest(unit testing) + Cypress(e2e)
Backend, I decided to finally use firebase, even though a simple crud can bec reated using Node + Express + Mongoose + MongoAtlas I had only the weekend to finish so mounting the whole backend required too much effort and I can explain this whole architecture.

### Project Improvements
- Create login and tables per user, currently only one collection exists for all users
- If required mount the whole MEVN stack using MEVN cli
- Specific design for different sizes, only desktop and mobile supported
- Store granularity
- Class inheritance for JobCard and CandidateCard based on Card class
- Create specific folders for components and views, since my focus was effectivenes and speed didn't focus in big project perks
- Usage of mixins, only one service was created and I based it on es5 imports, no injection required
- Include fallbacks for 0 elements found in both Candidates and Jobs view
- Create search for candidate and opportunity, still this already exist and I didn't require a redefinition as always: "don't reinvent the wheel"
- Specific css for product, all design was based on vuetify framework focused on a low code solution
- Refactor for big clases using utils and more services
