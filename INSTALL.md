# Installation

## Prerequisites

You need [Git](https://git-scm.com/downloads) and [NodeJS](https://nodejs.org/en/download/) installed on your computer.
You also need [Python](https://www.python.org/downloads/), this is required by the node-gyp dependency used by node-sass.

## Installation

Create a new folder for the project and open a terminal there to execute the following commands.

```console
npm init
npm install isometricsass --save-dev
```

Now just paste this in your style.sass file:
```sass
@import isometric
```

Now you can create your own 3D objects by using or extending the Sass classes in the `_isometric.sass` file.
