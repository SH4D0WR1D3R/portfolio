# Portfolio website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# NOTES:
## setup:
To deploy to github pages, in master branch under portfolio directory, I ran:
- ng add angular-cli-ghpages
- ng deploy --base-href=/portfolio/ : same as ng build --base-href=/portfolio/
What this did is it created the gh-pages branch which this is running from I believe. 
The idea behind running this command is deploy does all the work. We don't have to manually build or commit those files
Only the output contents are committed to the repository rather than whole application. Will use root folder to get files that can be hosted

local host and github deployed site look different
Make sure pages on github is set to deploy from gh-pages branch and /docs folder

Components should focus on presenting data
Services should fetch and save data

index.html needs to reference the app component

ERROR RangeError: Maximum call stack size exceeded - had index.html and app.component.html calling <app-root> which isn't allowed

Link for live site: https://sh4d0wr1d3r.github.io/portfolio/

Page navigation: https://stackoverflow.com/questions/48277721/angular-how-to-make-link-to-jump-for-certain-section-in-the-same-page

Solution for scrolling is anchors
https://dev.to/ayyash/anchor-scrolling-in-angular-1om1