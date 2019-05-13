# React Europe 2019 Expo Web Workshop

## What is Expo for web

Web support in Expo means that you can run the majority of your project on iOS, Android, and Web. Using React Native for Web, the core primitives used in React Native like `View`, `Text`, and `Image` are aliased to web elements like `div`, `span`, and `img`.

Expo takes this a step further by providing a managed workflow for babel and webpack, as well as a suite of advanced primitives like `Camera`, `ImagePicker`, `SVG`, etc...

### Beta support

Expo for web is not fully supported as web is part of the SDK 33 alpha release. This means that native and web cannot run at the same time, since the native version of SDK 33 is not released on the App Store and Play Store just yet.

Getting full support for all of the popular React Native packages is also going to take some time. You can check out a lot of the supported features here: [Web Features](https://github.com/expo/web-examples/blob/master/docs/FEATURES.md)

## Adding web support

In the future expo projects will be bootstrapped with web support. Until then you need to install the web libraries and the alpha release of Expo manually.

In a new Expo project:

```sh
yarn add expo@next react-native-web react-dom
```

### Migration

If you are adding support to an older React Native project, ensure you have an `app.json`, `babel.config.js`, `App.js` and your `package.json` main is pointing to `node_modules/expo/AppEntry.js`. You will also need `babel-preset-expo@^5.1.1`.

## Usage

To start your web project simply run the following command, there are a few flags you can use to alter how webpack runs.

```sh
expo start

expo start --web

expo start --web-only

expo start --https
```

## Building

To generate a static React website that you can deploy and share anywhere, simply use expo-cli to bundle your project files together.

```sh
expo build:web

expo build:web --no-polyfill --no-pwa
```

**You can check the build report by adding:**

[**`app.json`**](./app.json)

```js
{
    "expo": {
        "web": {
            "build": {
                "report": true
                }
            }
        }
    }
}
```

Then running `expo build:web` again. You can run `open web-report/report.html` to examine it.

## Deploying

You can use the serve package to test the production build locally.

> This will make lighthouse scores much lower than if the project was actually deployed.

```sh
serve web-build
```

You can use any web hosting service, just point the static build folder to `web-build` as opposed to the usual `build` folder.

```sh
netlify deploy
```

## Profiling

When the build is deployed or running somewhere you can profile with the "audits" tab or by using the `lighthouse-cli` with `lighthouse https://expomanaged.netlify.com --view`.
