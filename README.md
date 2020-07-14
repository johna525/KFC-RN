KFC 1010 App
===

This application has been developed to facilitate the giving and receiving of recognition for KFC employees. Further background can be found on google drive.

## Table of Contents

- [KFC 1010 App](#kfc-1010-app)
  - [Table of Contents](#table-of-contents)
  - [Stack](#stack)
  - [Client](#client)
    - [Installation](#installation)
    - [Client Commands](#client-commands)
    - [`yarn start`](#yarn-start)
      - [`npm test`](#npm-test)
      - [`react-native run-ios`](#react-native-run-ios)
      - [`react-native run-android`](#react-native-run-android)
        - [Using Android Studio's `adb`](#using-android-studios-adb)

## Stack
The **client** for the application is built using React Native. Instructions for local development can be found below.

The **backend** is built on AWS, utilising a number of services. These are outlined below.

## Client

### Installation
This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

To install the application locally for development, clone the project locally and run `yarn install`. Once complete, you can move onto running the application locally. A list of the project can be found in `./package.json`. A detailed explanation of each package and why we are using it can also be found below.

### Client Commands

The following commands can be used to run a number of client related tasks for local development.

### `yarn start`

Runs your app in development mode.

If 

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `react-native run-ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `react-native run-android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select -> Use custom Android SDK tools -> and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).