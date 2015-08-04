Backbone Battleships
===================

A basic battleship game written in Backbone.

## Getting Started

To get you started you need install the dependencies:

### Prerequisites


This project will require a number of node.js tools to initialize and run the project on your machine. You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

It will also require the gulp, this is ideally installed globally with the following commands: 

```
npm install gulp -g
```
note: sudo or admin rights may be required.

### Install Dependencies

There is two kinds of dependencies in this project: node tools and JavaScript libraries. 

* You get the tools the project depend upon via `npm`, the [node package manager].

  So we can simply do:

```
npm install
```
 You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need



### Run the Application

A server Task have been preconfigured, so just run 

```
$ gulp
```

and  browse to the app at `http://localhost:8080/index.html`.

### Development

IF you want to make changes on the visuals, I have created a grunt task for watching the Less  that will:
* Listen to the changes on the css/style.less file 
* Complile the css onto build/style.css file. 

To start this run:

```
$ gulp
```

### Compatibly

This app was developed mainly  in chrome althought I have tested (not in a exhaustive way) on Firefox and IE.

I have also tested on Mobile decvices using the Chrome  developer tools.
