# Joe's RideTandem take-home developer assessment

## How to run:

- Clone to your local
  - (e.g. `git clone https://github.com/joe-dev-public/ridetandem-developer-assessment.git`)
- `cd ridetandem-developer-assessment`
- (Make sure you've got yarn installed)
- To start the backend/API:
  - `cd api`, `yarn install`, `yarn dev`
- To start the frontend (you'll probably need a new shell/console/terminal):
  - `cd web`, `yarn install`, `yarn dev`
- Visit http://localhost:8080/ in a web browser.
  - You can also try visiting http://localhost:8080/176, http://localhost:8080/185 or http://localhost:8080/193 (depending on the day of the week :¬)


## Known issues, unfinished parts, ideas for improvement

- No frontend (FE) error handling. Some would be nice!
- Patchy types? (Some maybe missing, some could maybe be improved/more robust.)
- Styling: I followed the mockup, but a little extra ~refinement would've been nice :¬)
- Accessibility: Lighthouse seems happy with this (but performance is another matter!).
- Better structuring of logic in backend.

There might also be code comments (likely `Todo: ...` or `Note: ...`), or comments in [issues](https://github.com/joe-dev-public/ridetandem-developer-assessment/issues?q=is%3Aissue), covering similar ideas. 😌


## Planning

At the start of this task, I created a couple of lists (and some [issues](https://github.com/joe-dev-public/ridetandem-developer-assessment/issues?q=is%3Aissue)) to help me plan and complete the work.

### Initial tasks:

- [x] Carefully read supplied README
- [x] Clone supplied repo to local
- [x] Move supplied README to new file
- [x] Create new README
- [x] Start writing this plan! :¬)
- [x] Create repo on GitHub
- [x] Remove current remotes (`git remote remove origin`)
- [x] Add new remotes
  - `git remote add origin git@github.com-joe-dev-public:joe-dev-public/ridetandem-developer-assessment.git`
- [x] Create GitHub issues for supplied user stories (required features)


### Implementation plan:

- [x] Check supplied code
  - [x] `yarn install` and `yarn dev` in both `/api` and `/web`.
- [x] Work through implementing each user story!
  - For each user story I've created, work out what needs to be added/changed.
  - Ideally use feature branch per story, where possible.
  - (But given time and scope constraints, they might proceed in parallel, so some overlapping is OK.)
- [ ] Add stretch user stories (improvements/extensions), if time.
  - (During implementation, or when supplied user stories are completed.)
- [x] Update the supplied user stories or this plan as you go, if required :¬)
