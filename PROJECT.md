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
  - [ ] Create Page
    - [x] use React-Hook-Form and Zod schema
    - [x] Customized Input component
    - [x] Customized Select component
    - [x] Modal window
    - [ ] Datepicker component
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
- [ ] Unit tests and manual tests
- [ ] Deliverables

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
