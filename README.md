# silvvr

**v0.3.2**

#### Front-End Gulp build system and boilerplate.

Automate your web development process with ease! When changes are made to your code, **silvvr** automatically sets up a browsersync server, compiles SASS, bundles & uglifies JavaScript, minifies images & SVGs -- all in seconds!

## Features
* Run *Development*, *Staging*, or *Production* build environments:
    * By default, *Development* mode will compile your app with unminified JavaScript & CSS (making things easier to debug).
    * By default, *Staging* and *Production* modes will compile your app with minified and bundled JavaScript & CSS (optimized for performance).
* Build **configuration file** to change development server port numbers, build destinations, and other build options.
* Starts up a **browsersync server**, so changes are immediately apparent on your browser.
* **SASS** w/ **autoprefixer**, and other helpful plugins.
* **JavaScript bundling and uglify**.
* **Image minification** for SVGs, PNGs, JPGs, and GIFs.
* **HTML minification**.
* **Favicons generator**.
* Watches all asset folders and automatically copies those files to their corresponding destination folders.
* Includes **Bourbon and Neat** -- http://bourbon.io/

## Requirements
**NodeJS 5.5 or greater is recommended** -- http://nodejs.org/ for **silvvr** to operate. It is preferable that you install NodeJS via Homebrew -- http://brew.sh/

## Install
To install **silvvr**, simply clone this repo and create your own repo instance. 

1. Open terminal and cd to a location where you'd like to keep your project files:

        cd ~/where/i/want/my/project

2. Clone **silvvr** and cd to it:

        git clone https://github.com/keezoid/silvvr.git
        cd silvvr

3. Install node modules:

        npm install

4. Run `gulp generate-favicons` to generate favicons from `app/assets/favicon.png`.

5. Now run `gulp` --this will start **silvvr** in development mode.

6. Navigate to http://localhost:8000 and you should see a default index page. You are now ready to start coding!

## Commands

* `gulp`
    Start **silvvr** in *development* mode. This will launch a node server on port 8000.

* `gulp --stage`
    Start **silvvr** in *staging* mode. This will launch a node server on port 8000.

* `gulp --prod`
    Start **silvvr** in *production* mode. This will launch a node server on port 8000.

* `gulp <--env> --build`
    Start **silvvr** in build-only mode. Files are only generated. No file watching or server is initiated.

## Recommendations
* It is recommended that you update properties on the `package.json` file to reflect your current project.
* If you are using git on your project, you can remove the hidden .git folder and run `git init` to start your own repository.
* You should update `/app/humans.txt` with your information.

## Warnings
* Never, ever, add new files or make changes to anything within the destination folder `dist`. **This folder is removed and regenerated when silvvr starts**.

## Contact Me
If you have questions, comments or concerns, feel free to reach me as follows:

**Website** --- [keenanstaffieri.com](http://keenanstaffieri.com)

**Twitter** --- [@keenode](https://twitter.com/keenode)
