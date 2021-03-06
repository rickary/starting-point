starting-point
=============

My starting point for most non-[perch](https://grabaperch.com/) php projects.

**updated: 10/10/18**

## Getting up and running


* **[gulpfile.js](http://gulpjs.com/)**: my gulp taskrunner setup. Edit the defaults in package.json and run `npm install` to grab the dependencies (you'll need gulp as well)
* for gulp we’re using autoprefixer, set to flex & grid by default
* supports sass-glob so no need to add loads of files to master.scss



### _dev/

If you're using gulp then everything in this folder is just used for development. The taskrunners will compile the contents to smaller files for use in production.

#### scripts

* **app.js** –just to get you started

#### styles



* **Settings**

First up, set some variables like colours, fonts & things.


* **Tools**

Next, some useful bits and pieces. It’s up to you if you use them, add them or remove them. Take care removing some mixins and placeholders though, they might be needed elsewhere.

  **_mixins**-A few mixins I use regularly for you to @include at will.
  
  **_utils**-Just another few (small) helpful classes

  **_reset**-Eric Meyer’s css reset.
  
  **_set**-Box-Sizing and Clearfix

  
* **Base**

Default styling for basic elements

  **_site**
  
  **_typography**

  
  
* **Bits**

Styles for content that spans one or more modules. Some are optional and have self-contained variables. Be careful making changes.

  **_container**-keep content in the middle and not a stupid width

  **_grid**-a simple but solid grid system

  **_forms**-form fields as a list

  **_buttons**-button classes
  
  **_media**-the media object, uses flexbox

  **_embeds**-responsive iframe/object embedding

  **_navigation**-simple nav styling
  
  **_breadcrumbs**-simple breadcrumb navigation

  **_quotes**-blockquote and inline quote styling


* **Pieces**
 
Styles for individual UI elements. Use prefixes to group. 


### assets/

* **js/**–whre your taskrunner compiled js ends up

* **css/**–where your taskrunner compiled css ends up


## What's missing?

Depends on how you like to work. For me, this is pretty much where I start every project from. 

I'll add/remove/change bits as my workflow changes.


## Ta

Credits are littered throughout the `.scss` files for various snippets.
