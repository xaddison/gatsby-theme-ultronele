# Gatsby Theme UltronEle

GTU, one of components of UltronEle product, is a UltronEle Gatsby Theme which can be installed as package in your own Gatsby site.

See the [live demo](https://ultronele.netlify.com), more info about this product is [here](http://ultronele.com)


## How to use GTU

Two options:

* start from a [UltronEle Starter](https://github.com/runbytech/ultronele-starter)
* integrated to your existing gatsby site while you're familiar to Gatsby development

## GTU Installation to your existing gatsby site

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme
    ```sh
    npm install --save gatsby-theme-ultronele
    ```

2.  Add the theme to your `gatsby-config.js`:
    ```js
    module.exports = {
      plugins: [
        'gatsby-theme-ultronele'
      ]
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Checklist to integrate GTU

* create `content` folder to hold your .md files
* define `contentPath` property in your site gatsby-config.js under plugins section, if you dont use `content` folder to hold your .md files
* create `category` folder to hold course category and tutorials content


## Content structure by convention

    
    ├── content
      ├── assets
        ├── imagefoldera
        ├── imagefolderb
      ├── category
        ├── coursetypea
          ├── tutoriala
            ├── 1-section.md
            ├── 2-section.md
            ├── 3-section.md
            ├── x-section.md
            ├── test.md    # this file hold tutorial quiz questions
          ├── tutorialb
          ├── tutorialc
        ├── coursetypeb
        ├── coursetypec
      ├── pagea.md    # first level navigation page of your site
      ├── pageb.md
      ├── pagec.md
      ├── paged.md

