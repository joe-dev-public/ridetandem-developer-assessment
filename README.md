# Joe's RideTandem take-home developer assessment

This repo is my submission for the RideTandem technical test/developer assessment.

(It's a response to [this repo](https://github.com/ridetandem-co/developer-assessment), as accessed on Fri 22 Mar 2024.)

## How to run

- Clone to your local: `git clone https://github.com/joe-dev-public/ridetandem-developer-assessment.git`
- `cd ridetandem-developer-assessment`
- (Make sure you've got `yarn` installed)
- Install and start the backend/API first:
  - `cd api`, `yarn install`, `yarn dev`
- Then install and start the frontend (probably in a new terminal):
  - `cd web`, `yarn install`, `yarn dev`
- Visit http://localhost:8080/ in a web browser.
- You can also try visiting:
  - http://localhost:8080/176
  - http://localhost:8080/185
  - http://localhost:8080/193
  - (You might get different results, depending on the day of the week :¬)


## Planning

When starting this task, I created a couple of lists (below) to help me plan and complete the work, then updated this README as I worked through them. They helped keep me focused on the key goals, and complete them in the time given! ✨

### 1. Initial tasks:

- [x] Carefully read supplied README
- [x] Clone supplied repo to local
- [x] Move supplied README to new file ([take-home-assessment.md](https://github.com/joe-dev-public/ridetandem-developer-assessment/blob/main/take-home-assessment.md))
- [x] Create new README (this file)
- [x] Start writing this plan! :¬)
- [x] Create repo on GitHub
- [x] Remove current remotes (`git remote remove origin`)
- [x] Add new remotes
  - `git remote add origin git@github.com-joe-dev-public:joe-dev-public/ridetandem-developer-assessment.git`
- [x] Create GitHub [issues](https://github.com/joe-dev-public/ridetandem-developer-assessment/issues?q=is%3Aissue+is%3Aclosed) for supplied user stories (required features)


### 2. Implementation plan:

- [x] Check supplied code
  - [x] `yarn install` and `yarn dev` in both `/api` and `/web`.
- [x] Work through implementing each user story!
  - For each user story I've created, work out what needs to be added/changed.
  - Ideally use feature branch and [pull request](https://github.com/joe-dev-public/ridetandem-developer-assessment/pulls?q=is%3Apr+is%3Aclosed) per story, where possible.
    - (But given time and scope constraints, they might proceed in parallel, so some overlapping is OK.)
- [ ] Add stretch user stories (improvements/extensions), if time.
  - (During implementation, or when supplied user stories are completed.)
- [x] Update the supplied user stories or this plan as you go, if required :¬)


## What I completed

### In the time given:

- The five requirements supplied in [the original README](https://github.com/joe-dev-public/ridetandem-developer-assessment/blob/main/take-home-assessment.md) ([#1](https://github.com/joe-dev-public/ridetandem-developer-assessment/issues/1), [#2](https://github.com/joe-dev-public/ridetandem-developer-assessment/issues/2), [#3](https://github.com/joe-dev-public/ridetandem-developer-assessment/issues/3), [#4](https://github.com/joe-dev-public/ridetandem-developer-assessment/issues/4), [#5](https://github.com/joe-dev-public/ridetandem-developer-assessment/issues/5)).
- A sixth requirement implicit in the supplied mockup ([#6](https://github.com/joe-dev-public/ridetandem-developer-assessment/issues/6)).
- One stretch goal which I thought of while completing the other requirements ([PR #12](https://github.com/joe-dev-public/ridetandem-developer-assessment/pull/12)).

### Outside the time given:

- I decided to explore one improvement in [PR #13](https://github.com/joe-dev-public/ridetandem-developer-assessment/pull/13).
- (I kept that PR unmerged to make it clear it was completed in "extra time" :¬)

## Ideas for improvement

### General

- ⁉️ Basic frontend (FE) error handling (e.g. if `fetch` fails).
- 🟦 Improved/more robust types? (Some might be missing/defaulting to `any`?)
- 🎨 Styling: I followed the mockup, but some small improvements to spacing, typography, responsive layout etc. could go a long way to improving clarity/readability.
- :accessibility: Accessibility: [Lighthouse seems happy](https://github.com/joe-dev-public/ridetandem-developer-assessment/issues/5#issuecomment-2015545109), but there might be better choices re semantic HTML, use of ARIA attributes, etc. (Also, performance looks like it needs work!)
- 🔧 Better structuring of logic in backend (e.g. using a new module rather than the app module, separating service helper functions into other files).

### Features

- The stretch goal I implemented could provide toggle buttons above the arrivals list to show/hide available routes.[^1]
  - This would allow users to choose multiple routes at once, in any combination (whereas the current `/busId` URL route param approach is limited to just one route).
- There could be some indication for the user of which routes don't serve the stop on the current day.

### Other ideas I had can be found...

- In some code comments (beginning `Todo:` or `Note:`).
- In some issue comments (e.g. [here](https://github.com/joe-dev-public/ridetandem-developer-assessment/issues/2#issue-2202173806) and [here](https://github.com/joe-dev-public/ridetandem-developer-assessment/issues/3#issue-2202178113)).

[^1]: I ended up exploring this in my "extra time" PR: https://github.com/joe-dev-public/ridetandem-developer-assessment/pull/13
