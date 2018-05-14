# CoolState 
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/) [![Build Status](https://travis-ci.org/alegorico/coolstate.svg?branch=master)](https://travis-ci.org/alegorico/coolstate)

jQuery library for persistence static data tag, (can later be retrieves and processes)

## Install

```shell
    npm i coolstate
```
or
```shell
    bower install coolstate

```

## Use
```html
	<script src="jquery.min.js"></script>
	<script src="coolstate.min.js"></script>
```

```js
    // in your script
    // get values (string array)
    $(selector).coolState("property");

    // set string value
    $(selector).coolState("property", "value");
```


