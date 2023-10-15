### MindsDB Takehome Assessment

Completed by William Schutte.

(View this project here)[https://minds-db-interview.vercel.app/]

- https://github.com/William-Schutte/minds-db
- https://www.linkedin.com/in/william-Schutte
- https://www.wschutte.com/

## Getting Started

This app is a Next JS app running via pnpm. To install/run:

- `pnpm i`
- `pnpm dev`

## Notes

I spent a majority of the time on the `addDatasource` page. I stored the data source items
in a Redux Slice and used the input field as a text query and the dropdown input as a
basic filter (created an arbitrary field to filter by). Selecting a data source updates
the Redux store with the id of the item. In the second page, `credentials`, the data
source item is retrieved using the selected id and the name/icon is displayed. I did not
get to the form on this page, but it would involve creating a reuseable input field
component, connecting formik (or another form library) for validation, and sending the
form data to the next page or the API.

Navigation is somewhat functional. For simplicity, the back buttons just return to the
previous page, not necessarily the page that came before in the workflow.

Due to the reuse of so many specific colors, I created a theme that is accesible by any
styled component via `props.theme.colors`. This allowed me to reference all the shades of
zinc throughout the app.

The app is organized as such:

- `pages/` Directory of Next required setup files, the home page (index.tsx), add datasource page (addDatasource.tsx), and credentials page (credentials.tsx)
- `components/` Folder for subcomponents of the pages
- `components/addDataSource` Components used on the addDataSource page
- `components/credentials` Components used on the credentials page
- `components/navbars` Navbar compoents (used in layout)
- `components/page` General components used throughout the app
