[![](https://repository-images.githubusercontent.com/653971957/a63f11cb-aa1e-41f2-8418-e4e7580f3c31)](https://npmjs.com/package/dynamic-colors "Dynamic Colors from KPVERSE")

# Dynamic Colors

**Dynamic Colors** is a JavaScript library that can dynamically generate color palette from a single HEX color and it provides a range of useful APIs for creating, managing, and manipulating color palettes such as [_create()_](#create), [_remove()_](#remove), [_setAutoTheme()_](#setautotheme), [_setDarkTheme()_](#setdarktheme), [_setLightTheme()_](#setlighttheme), [_themeCycle()_](#themecycle), [_isInstance()_](#isinstance).

## Installation

[![npm (scoped)](https://img.shields.io/npm/v/dynamic-colors)](https://www.npmjs.com/package/dynamic-colors)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/dynamic-colors)](https://bundlephobia.com/package/dynamic-colors@1.1.5)
[![npm](https://img.shields.io/npm/dy/dynamic-colors)](https://www.npmjs.com/package/dynamic-colors)
[![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/gh/hy/patelka2211/dynamic-colors)](https://cdn.jsdelivr.net/gh/patelka2211/dynamic-colors@1.1.5/)

To install Dynamic Colors using npm, run the following command:

```sh
npm i dynamic-colors
```

Alternatively, you can include [Dynnamic Colors's IIFE file](https://cdn.jsdelivr.net/gh/patelka2211/dynamic-colors@1.1.5/DynamicColors.js) in your website using a `<script>` tag:

```html
<script src="https://cdn.jsdelivr.net/gh/patelka2211/dynamic-colors@1.1.5/DynamicColors.js"></script>
```

## Available APIs

### create()

The [create()](#create) function creates a new instance of the [DynamicColors class](#dynamiccolors-class), which is used to manage color palettes.

|         | Available as           |
| :------ | :--------------------- |
| in ESM  | create()               |
| in IIFE | DynamicColors.create() |

### remove()

The [remove()](#remove) function is used to unsubscribe an instance of the [DynamicColors class](#dynamiccolors-class) from all available DynamicColors instances. By calling this function with the desired instance as an argument, you can effectively remove the instance's association with the color palettes managed by Dynamic Colors.

|         | Available as           |
| :------ | :--------------------- |
| in ESM  | remove()               |
| in IIFE | DynamicColors.remove() |

### setAutoTheme()

The [setAutoTheme()](#setautotheme) function subscribes all instances of the [DynamicColors class](#dynamiccolors-class) to automatically change the theme based on the user's operating system theme.

|         | Available as                 |
| :------ | :--------------------------- |
| in ESM  | setAutoTheme()               |
| in IIFE | DynamicColors.setAutoTheme() |

### setDarkTheme()

The [setDarkTheme()](#setdarktheme) function changes all instances of the [DynamicColors class](#dynamiccolors-class) to a dark theme.

|         | Available as                 |
| :------ | :--------------------------- |
| in ESM  | setDarkTheme()               |
| in IIFE | DynamicColors.setDarkTheme() |

### setLightTheme()

The [setLightTheme()](#setlighttheme) function changes all instances of the [DynamicColors class](#dynamiccolors-class) to a light theme.

|         | Available as                  |
| :------ | :---------------------------- |
| in ESM  | setLightTheme()               |
| in IIFE | DynamicColors.setLightTheme() |

### themeCycle()

The [themeCycle()](#themecycle) function cycles through different themes based on the current theme:

|         | Available as               |
| :------ | :------------------------- |
| in ESM  | themeCycle()               |
| in IIFE | DynamicColors.themeCycle() |

-   If the current theme is `Auto`, the next theme will be `Light`.
-   If the current theme is `Light`, the next theme will be `Dark`.
-   If the current theme is `Dark`, the next theme will be `Auto`.

### isInstance()

Determines whether the given object is an instance of [`DynamicColors`](#dynamiccolors-class). Returns `true` if the object is an instance of [`DynamicColors`](#dynamiccolors-class), otherwise `false`.

## Internally used functionalities

### DynamicColors class

The [DynamicColors class](#dynamiccolors-class) is used internally by Dynamic Colors to manage the color palettes it generates. It has the following characteristics:

The [DynamicColors class](#dynamiccolors-class) is created using the [create()](#create) function and can only be removed using the [remove()](#remove) function.

### Material Dynamic Colors

Dynamic Colors leverages the power of [Material Dynamic Colors](https://github.com/leonardorafael/material-dynamic-colors) internally to generate color palettes. It builds upon the functionality provided by [Material Dynamic Colors](https://github.com/leonardorafael/material-dynamic-colors) and offers additional features. With Dynamic Colors, you can go beyond the basic color generation and enjoy advanced functionalities tailored to your specific needs, enabling you to create dynamic visual experiences for your web applications.

## License

[![NPM](https://img.shields.io/npm/l/react)](./LICENSE)

This project is licensed under the [MIT License](./LICENSE), which permits you to use, copy, modify, merge, publish, distribute, and sublicense the software, subject to the conditions stated in the [LICENSE file](./LICENSE).
