# Voyger-Client??

## Usage
### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

### Installation
1. Clone the repository: `git clone https://github.com/catcApollo/voyager-client.git`
2. Install the NodeJS dependencies: `npm install`.
3. Install the Bower dependencies: `bower install`.
4. Run the gulp build task: `gulp build`.
5. Run the gulp default task: `gulp webserver`. This will build any changes made automatically, and also run a live reload server on [http://localhost:3003](http://localhost:3003).

Ensure your preferred web server points towards the `dist` directory.

### Development
Continue developing the product(Voyger-Client) by editing the `app/components` directory. With the `gulp bulid` command, any file changes made will automatically be compiled into the specific location within the `dist` directory.

#### Modules & Packages
By default, Voyger-Client includes [`ui.bootstrap`](http://angular-ui.github.io/bootstrap/), [`ui.router`](https://github.com/angular-ui/ui-router) and [`ngCookies`](https://docs.angularjs.org/api/ngCookies). 

If you'd like to include any additional modules/packages not included with Voyger-Client, add them to your `bower.json` file and then update the `app/index.html` file, to include them in the minified distribution output.

