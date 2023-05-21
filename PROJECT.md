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
    - [x] Customized Input component
    - [x] Customized Select component
    - [x] Modal window
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

- Nom_Prénom_1_code_mmaaaa.txt : links main project github, plugin github, plugin npm
- Nom_Prénom_2_rapport_performance_mmaaaa.pdf : avant et après la conversion de la bibliothèque
