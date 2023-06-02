# PROJECT

## TASKS

- [x] Convert the entire project to React

  - [x] New project : pnpm create vite app-test-npm --template react-ts
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
  - [x] Create Page
    - [x] use React-Hook-Form and Zod schema
    - [x] Customized Input component
    - [x] Customized Select component
    - [x] Modal window
    - [x] Datepicker component
  - [x] Employees list Page : Table Component
    - [x] Display headers
    - [x] Display rows
    - [x] Sort Table
    - [x] Button sort table
    - [x] Search Input
    - [x] Number of entries
    - [x] Pagination
  - [x] Error Page
  - [x] Add a state management system : useContext

- [x] Convert one JQuery plugins to React. The other in React or Library.
  - [x] Guidelines only the UI code. Functional programming. Comments.
  - [ ] [date picker](https://github.com/xdan/datetimepicker) : html
  - [x] [modal](https://github.com/kylefox/jquery-modal)
  - [x] [select menu](https://github.com/jquery/jquery-ui/blob/main/ui/widgets/selectmenu.js)
  - [x] [Data table](https://github.com/DataTables/DataTables)
- [x] Performance tests with Lighthouse
  - [x] Test the older version
  - [x] Build and test the new one
- [x] Post the React component on npm as a package https://www.npmjs.com/package/ja-react-table
- [x] Unit tests and manual tests
- [ ] Deliverables

## Reports - resume

Les tests sont effectués avec la configuration suivante :

- Mobile
- Aucune limitation réseau (Sensiblement identiques)
- Chrome désactivation de toutes ls extension
- Outils de diagnostic: Chrome extension Lighthouse (LH), https://validator.w3.org/ (html) + https://jigsaw.w3.org/css-validator/ (css)
- Sur serveur Apache : activation du cache et de la compression gzip, et résolution du mode navigabilité de Lighthouse (htaccess)
- Nouvelle version : Vite (minify), React, avec le module vite-plugin-compression, Lazy Loading (code splitting), lazy image, font css, responsive tailles texte/buttons, optimize svg, contrast, meta description, tailwind minify
- Deux pages: Add an employee, View employees. Un peu plus de différences sur Add an employee

Nouvelle version (Add):

- Performance : 99%
- Accessibilité : 100%
- Bonnes pratiques : 100%
- SEO : 100%

dist/index.html 0.66 kB │ gzip: 0.37 kB
dist/assets/noto-serif-v21-latin-regular-25475d82.woff2 23.95 kB
dist/assets/View-5c5c6d90.css 7.58 kB │ gzip: 2.29 kB
dist/assets/index-58cef8be.css 11.70 kB │ gzip: 3.30 kB
dist/assets/CTA-1a66bc4e.js 0.21 kB │ gzip: 0.19 kB
dist/assets/NotFound-cfd9260f.js 0.40 kB │ gzip: 0.29 kB
dist/assets/Home-7049606a.js 0.78 kB │ gzip: 0.44 kB
dist/assets/View-5121776a.js 6.15 kB │ gzip: 2.67 kB
dist/assets/Add-17a6e8ec.js 82.30 kB │ gzip: 23.38 kB
dist/assets/index-2f8f5a03.js 198.85 kB │ gzip: 64.62 kB

Ancienne version (Add):

- Performance : 92% - FCP/LCP 2.7s
  - Ressources qui bloquent le rendu : jquery.min.js (1.1s), jquery.ui.js(0.9s)
  - Réduisez les ressources JavaScript
  - images plus grandes que leurs tailles affichées
- Accessibilité : 95%
  - Aria ui-selectmenu-button
  - Pas lang attribute
- Bonnes pratiques : 83%
  - La page n'a pas d'attribut doctype HTML, ce qui déclenche le mode quirks
  - La déclaration de charset est manquante ou intervient trop tard dans le code HTML
- SEO : 67%
  - pas de meta viewport
  - Les tailles de police utilisées dans le document ne sont pas lisibles
  - Les éléments tactiles ne sont pas dimensionnés correctement
  - pas d'attribut "meta description"

app.css 1kB
app.js 6kB
employee-list.html 1kB
employee-list.js 1kB
index.html 3kB
jquery.datetimepicker.css 19kB
jquery.datetimepicker.full.min.js 61kB
README.md 1kB

## Reports - details

Comparer le poids

- Old - Add : 92 | 95 | 83 | 67 : FCP/LCP 2.7s

  - PERF:
    - Éliminez les ressources qui bloquent le rendu : 1.87s
      - 121,7 KiB jquery.ui.js 900ms
      - 30.4KiB jquery.min.js 1100ms
      - 1.8KiB jquery.modal.min.css 840ms
    - Réduisez les ressources JavaScript inutilisées : 0.48s
      - jquery.ui.js
    - Réduisez la taille des ressources JavaScript : 0.19s
    - La page n'utilise pas d'écouteurs d'événements passifs pour améliorer les performances de défilement
    - Aucune balise <meta name="viewport"> ayant l'attribut width ou initial-scale n'est configurée
  - ACC:
    - Les champs de saisie ARIA n'ont pas de noms accessibles : ui-selectmenu-button
    - L'élément <html> n'a pas d'attribut [lang]
  - BONNES PRATIQUES
    - La page n'a pas d'attribut doctype HTML, ce qui déclenche le mode quirks
    - La déclaration de charset est manquante ou intervient trop tard dans le code HTML
  - SEO
    - pas de meta viewport
    - Les tailles de police utilisées dans le document ne sont pas lisibles
    - Les éléments tactiles ne sont pas dimensionnés correctement
    - Le document ne contient pas d'attribut "meta description"

- Old - View : 97 | 98 | 75 | 58 : FCP/LCP 2.1s

  - PERF. Éliminez les ressources qui bloquent le rendu : 1.18s
    - 30.9KiB jquery.min.js 1090ms
    - 2.1KiB jquery.dataTables.min.css 770ms
    - 28.4KiB jquery.dataTables.min.js 300ms
  - SEO/BONNES :
    - pas meta viewport
    - pas meta description
    - pas html attribute lang
    - pas charset
    - Des problèmes ont été enregistrés dans le panneau Issues des outils de développement Chrome
      - dataTable css/js + images flèches
      - pas de DOCTYPE Page layout may be unexpected due to Quirks Mode
      - A form field element should have an id or name attribute : input type=search
    - Les tailles de police utilisées dans le document ne sont pas lisibles
    - Les éléments tactiles ne sont pas dimensionnés correctement
    - Les liens ne peuvent pas être explorés : pas de href sur les boutons a de la pagination
  - VALIDATOR
    - Error de tag: <h1>Current Employees</h3>

- New - Add : 99 | 100 | 100 | 100 : FCP/LCP 1.4s
- New - View : 100 | 100 | 100 | 100 : FCP/LCP 1.4s

## ⚔️ Journey

(issues with tailwind+formik+yup... = to React-Hook-Form + Zod)
Issues Types... Workflow with third party

????

// Use valueAsNumber for number type and valueAsDate for date type
valueAsDate

?? default value for date... value={defaultValues?.dateOfBirth?.toISOString().split('T')[0]}
value={value}

- yud+formik ? tailwind..
- ? tailwind : config.... extend/theme!!
- API constraint + Regex ? > Zod ?
- eslint ?
- STANDARD+REGEX VS ZOD+REACT HOOK FORM

- isoler select : generic type + register

?? doc rhf ?
// doc : React.forwardRef<HTMLSelectElement, { label: string } & ReturnType<UseFormRegister<IFormValues>>

?? zod required ??

???
Ref+onChange
In the context of form validation, react-hook-form primarily relies on the ref to register form inputs, establish the connection between form state and DOM elements, and handle form submission. The onChange event handler complements the ref by updating the form state based on user interactions, ensuring that the form state is accurate and up-to-date with the user's selections.

Voir sur la doc : How to share ref usage?
React Hook Form needs a ref to collect the input value. However, you may want to use ref for other purposes (e.g. scroll into the view, or focus).
https://react-hook-form.com/faqs/

?? Table generic!!!
// with arrow function <T,>
// with function :
// function TableData<TItem>(props: TableDataProps<TItem>) {
// Ref: https://www.totaltypescript.com/tips/use-generics-in-react-to-make-dynamic-and-flexible-components

type TableDataProps<TItem extends Record<string, any>> = {
data: TItem[];
};

/_
The constraint TItem extends Record<string, any> ensures that TItem
is an object type with string keys and any values.
This allows TypeScript to infer the correct type when using data.map() and accessing item[key].
_/

type ItemValue = number | string | Date;

type TableDataProps<TItem extends Record<string, ItemValue>> = {
data: TItem[];
};

// const TableData = <TItem,>({ data }: TableDataProps<TItem>) => {
// const TableData = <TItem extends Record<string, any>>({
const TableData = <TItem extends Record<string, ItemValue>>({ data }: TableDataProps<TItem>) => {

/\*

      { {(Object.values(item) as Array<string | number>).map((value, index) => (
        <td key={index}>{value}</td>
      ))}

<td>{item.startDate.toLocaleDateString('en-US')}</td>
      <td>{item.dateOfBirth.toLocaleDateString('en-US')}</td>

      */




      Sort : 		- https://www.youtube.com/watch?v=EaxC_kOG03E
    	- https://www.smashingmagazine.com/2020/03/sortable-tables-react/
    	- https://blog.logrocket.com/creating-react-sortable-table/

WARNING. zod.date ou zod.coerce.date
input type=date += valueAsDate: true
The specified value "Mon Jan 01 1900 00:09:21 GMT+0009 (heure normale d\u2019Europe centrale)" does not conform to the required format, "yyyy-MM-dd".

?? est-ce que ça marche directement avec TypeScript ?

solution zod en string ???
startDate: z
// .string()
// .refine((value) => {
// const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
// return dateRegex.test(value);
// }, 'Invalid date format ssssss')
// .refine((value) => {
// const date = new Date(value);
// return !isNaN(date.getTime());
// }, 'Invalid date ssssssss'),
// .min(new Date('2000-01-01')),

OLD TABLE DATA
//import { EmployeeType, EmployeeHeaderType } from '../types';
// import TableData from '../components/TableData/TableData';
// <TableData<EmployeeType, EmployeeHeaderType> data={employees} headers={headers} />

https://www.copycat.dev/blog/react-lazy/
https://leanylabs.com/blog/react-pagespeed-optimizations/

- Problem Tailwind + React Lazy loading
  - juste avec les font-size:inherit qui écrase les règles @apply text-5xl
- problem avec background input type=submit, ça marche sans lazy. Avec lazy ça marche avec 'button type=submit!!!'
- https://github.com/tailwindlabs/tailwindcss/discussions/8521
- https://github.com/tailwindlabs/tailwindcss/issues/1460
- Environment variables ok, mais pas dans viteconfig.js,: ne marche pas ?
  - https://main.vitejs.dev/config/#using-environment-variables-in-config
  - solution avec `export PUBLIC_URL=https://<mysite>/<repo>/ tsc && vite build ...`
- Warning with date and input date avec zod/react-hook-form:

  - The specified value "Tue Jan 01 1980 01:00:00 GMT+0100 (heure normale d\u2019Europe centrale)" does not conform to the required format, "yyyy-MM-dd".

CHROME sans extensions activées!

- Build react app for audit .... Issue with routing react-router for /add /view urls === APACHE SERVER + build + htaccess
- ou alors avec HashRouter ?? mais le plus simple est de déployer sur un service comme Netlify ou Vercel

- Jsdoc : > oc-p14-hrnet@0.0.0 docs > jsdoc -c jsdoc.conf.json. ERROR: Unable to parse

- vite typescript setup for npm ppublish my component!!!!!!

sortkey keyofItem

- throw Error err.message type dans le try catch

- With button state of the sort (TableHeadCell). Too much time!
- With Sort data, with types like always ...

- date with zop + input type as date

JSODC

- jsdoc setup :
  - ERROR: Unable to parse AddEmployeeForm.tsx: Missing semicolon. (30:4) ??
  - - add @module : every file that exports something, because jsdoc does not generate modules based on path properly:
  - ?Move module definition comment below imports and type definitions:
  - include pattern ?
  - https://gist.github.com/DeruiDENG/074b15de1ebc23ee8d307c14198c1231
  - https://tomaszs2.medium.com/how-to-generate-jsdoc-documentation-for-a-typescript-react-project-694c66f0496a
  - https://marketsplash.com/tutorials/typescript/typescript-how-to-add-inline-documentation/

## Optimization

- Choix plugin : date = non!, select

- ? select: add success/warning/error visuals :- type AlertType = "error" | "warning" | "success";
- ? enum select
- https://tailwindcss.com/docs/optimizing-for-production

https://codesandbox.io/s/react-hook-form-typescript-xnb1u?file=/src/App.tsx
https://www.thisdot.co/blog/how-to-create-reusable-form-components-with-react-hook-forms-and-typescript/
https://blog.bitsrc.io/react-form-validation-5aa06193bec4
https://www.youtube.com/watch?v=4zt1eadehKQ
https://excalidraw.com/#room=b6e2c1c8479b64e16921,-o-Hr5YMA56buUPlDXXMWw
https://www.totaltypescript.com/tutorials/zod/zod-section/number

## Resources

- tailwind : https://tailwindcomponents.com/cheatsheet/
- form : https://formik.org/docs/examples/async-submission
- npm : https://github.com/aladin002dz/simple-component-library, https://github.com/fabiandeneuville/FabianDeneuville_14_22042023_Datepicker/tree/main

zup : "strictNullChecks": true,
"strictFunctionTypes": false

## DELIVERABLES

projet14_Nom_Prenom_042023.zip :

- Nom_Prénom_1_code_mmaaaa.txt, links:
  - github project
  - github plugin
  - plugin npm
- Nom_Prénom_2_rapport_performance_mmaaaa.pdf : avant et après la conversion de la bibliothèque
