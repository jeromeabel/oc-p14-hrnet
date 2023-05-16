# PROJECT

**WealthHealth** is a large financial company that uses an in-house employee management application: **HRnet**.
My goal is to update HRnet and convert it to React.

## Stack

- Vite
- React
- TS
- Tailwind
- React-Hook-Form
- Zod

## TASKS

- [ ] Convert the entire project to React

  - [x] New project : pnpm create vite . (react+ts)
  - [x] Palette : #93AD18, #5a7003, #fcfdfa, #0C0F06, #690ABD, #420174 : colorpicker + coolors.co
  - [x] Logo HRnet + Noto Serif
  - [x] Add React router and basic routing : layout, home, error404
  - [x] Add Tailwind :
    - [x] pnpm install -D tailwindcss postcss autoprefixer
    - [x] npx tailwindcss init -p
    - [x] tailwing.config.js : theme:font+container, extend:colors
    - [x] index.css : apply base h1,h2,h3,h4,h5
  - [x] Home page
    - [x] Header
    - [x] Footer
    - [x] Content : two CTA links create + view
  - [x] Add routing to create and view pages
  - [ ] Create Page
  - [x] use React-Hook-Form and Zod schema
    - [x] Add Customized Input component
    - [x] Select component
  - [ ] Modal window
    - [ ] Datepicker component
  - [ ] Employees list Page
    - [ ] Table Component / pagination
  - [ ] Error Page
  - [ ] Add a state management system : useContext
  - [ ] Responsive
  - [ ] Unit tests and manual tests

- [ ] Convert one JQuery plugins to React. The other in React or Library.
  - [ ] Guidelines only the UI code. Functional programming. Comments.
  - [ ] [date picker](https://github.com/xdan/datetimepicker) : html
  - [ ] [modal](https://github.com/kylefox/jquery-modal)
  - [ ] [select menu](https://github.com/jquery/jquery-ui/blob/main/ui/widgets/selectmenu.js)
  - [ ] [Data table](https://github.com/DataTables/DataTables)
- [ ] Export NPM
- [ ] Performance tests with Lighthouse
  - [ ] Test the older version
  - [ ] Build and test the new one
  - [ ] Post the React component on npm as a package
- [ ] Deliverables

## Journey

(issues with tailwind+formik+yup... = to React-Hook-Form + Zod)
Issues Types... Workflow with third party

????

- yud+formik ? tailwind..
- ? tailwind : config.... extend/theme!!
- API constraint + Regex ? > Zod ?
- eslint ?
- STANDARD+REGEX VS ZOD+REACT HOOK FORM

- isoler select : generic type + register

## Resources

- tailwind : https://tailwindcomponents.com/cheatsheet/
- form : https://formik.org/docs/examples/async-submission
- npm : https://github.com/aladin002dz/simple-component-library, https://github.com/fabiandeneuville/FabianDeneuville_14_22042023_Datepicker/tree/main

zup : "strictNullChecks": true,
"strictFunctionTypes": false

## DELIVERABLES

projet14_Nom_Prenom_042023.zip :

- Nom_Prénom_1_code_mmaaaa.txt : links main project github, plugin github, plugin npm
- Nom_Prénom_2_rapport_performance_mmaaaa.pdf : avant et après la conversion de la bibliothèque
