# IsometricSass

[![IsometricSass](screenshot.png)](https://morgancaron.github.io/IsometricSass/)

*Sass library of isometric functions*

![Travis CI](https://img.shields.io/travis/com/MorganCaron/IsometricSass.svg?style=flat-square)
![GitHub](https://img.shields.io/github/license/MorganCaron/IsometricSass.svg?style=flat-square)

## Goals

- Responsive
- Good code quality
- Good browser support
- Beautiful
- No JavaScript

## Why

The use of 3D graphic contexts in JavaScript is often to the detriment of the performance and support of some browsers.

IsometricSass is a SASS framework that requires no JavaScript.
It was created to be able to fully use the CSS 3D transformations to create 3D scenes.

## Who

You may want to use IsometricSass if you want to display some 3D animations to illustrate your site without losing performance.

You probably don't want to use it to display hundreds of 3D elements like in some browser games. It's just not made for this kind of content.

## How

Just stick this in your style.sass file:
```scss
@import isometric
```

You can create your own 3D objects by using or extending the SASS classes in the `_isometric.sass` file.

Oh, you want a demo you say? Well, here's your demo: [Demo & Documentation](https://morgancaron.github.io/IsometricSass/)

## Contributing

IsometricSass becomes better for everyone when people like you help make it better!

Have any questions or concerns? Did I forget an element or selector? Does something look ugly? Feel free to submit an issue or pull request.

If you decide to contribute, after downloading a copy of the repository make sure to `npm install` to install dependencies useful for development. Then, you can just run the following to start a server of the demo with live reloading and automatic Sass compiling.

`npm run dev`

Thanks for taking the time to contribute :)
