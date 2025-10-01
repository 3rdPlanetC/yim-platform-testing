# finno-market-info-web

![node](https://img.shields.io/badge/node-v18.12.0-blue) ![nuxt](https://img.shields.io/badge/nuxt-v3.0.0-green)
![pnpm](https://img.shields.io/badge/yarn-v8.x.x-orange)

Finnomena Market Info Website like Stock etc.

- [Setup](#setup)
  - [Build Setup](#build-setup)
  - [Port Forwarding](#port-forwarding)
  - [Environment Variables](#environment-variables)
- [Contributing](#contributing)
  - [Project Structure](#project-structure)
  - [Frontend Guidelines](#frontend-guidelines)
    - [Styling](#styling)
    - [Naming](#naming)
    - [Breakpoints](#breakpoints)
    - [Data Tagging](#data-tagging)
    - [Recommended](#recommended)

## Setup

### Build Setup

``` bash
# install dependencies
$ pnpm install

# serve with hot reload at localhost:3000
$ pnpm dev

# build for production and launch server
$ pnpm build

# generate static project
$ pnpm generate
```

### Port Forwarding

This project require some service to call. Before run this project in development. Must port forwarding services in below, or you can run `./forward-services.sh` too.

| Service | Namespace |
|--|--|
| finno-stock-service-v2 | knowledge-hub |
| finno-watchlist-service | knowledge-hub |
| finno-fund-service | knowledge-hub |
| finno-unleash-proxy | internal |
| finno-global-search-service-proxy | knowledge-hub |
| finno-cms-service | knowledge-hub |

### Environment Variables

See in `.env.example`

## Contributing

### Project Structure

```
finno-market-info-web
├──assets/
├──components/
│   ├──atoms/
│   │    ├── button/
│   │    ├── card/
│   │    ├── ...
│   ├──molecules/
│   ├──organisms/
│   ├──templates/
├──composables/
├──content/
├──layouts/
├──middleware/
├──pages/
├──plugins/
├──sever/
├──types/
├──utils/
├──package.json
├──nuxt.config.ts
│...

```

#### Assets directory `/assets`

The `assets/` directory is used to add all the website's assets that the build tool (webpack or Vite) will process.

The directory usually contains the following types of files:

- Stylesheets (CSS, SASS, etc.)
- Fonts
- Images that won't be served from the public/ directory.

> Learn more about the [**assets directory**](https://nuxt.com/docs/guide/directory-structure/assets)

#### Components directory `components/`

The `components/` directory is where you put all your Vue components which can then be imported inside your pages or other components.

Nuxt automatically imports any components in your `components/` directory (along with components that are registered by any modules you may be using).

> Learn more about the [**components directory**](https://nuxt.com/docs/guide/directory-structure/components)

For this project we setup interface design systems by Atomic Design Methodology.

The Atomic design methodology is composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner

For Example

```
├──components/
│   ├──atoms/
│   │    ├── button/
│   │    │      └── Button.vue
│   │    └── card/
│   │           └── ...
│   ├──molecules/
│   ├──organisms/
│   ├──templates/

```

> Learn more about the [**Atomic Design Methodology**](https://atomicdesign.bradfrost.com/chapter-2/)

**Component Names**

If you have a component in nested directories such as:

```
| components/
--| atoms/
----| foo/
------| Button.vue
```

... then the component's name will be based on its own path directory and filename, with duplicate segments being removed. Therefore, the component's name will be:

```vue
<AtomsFooButton />
```

**Component Prefix**
and we config component prefix in `nuxt.config.ts`
```
export default defineNuxtConfig({
...
components: [
    {
      path: '@/components/atoms',
      prefix: 'a'
    },
    {
      path: '@/components/molecules',
      prefix: 'm'
    },
    {
      path: '@/components/organisms',
      prefix: 'o'
    },
    {
      path: '@/components/templates',
      prefix: 't'
    }
  ],

```

So we can use them shortly.

```
<AFooButton />
```


#### Composables Directory `composables/`

Nuxt 3 uses the `composables/` directory to automatically import your Vue composables into your application using auto-imports!

Under the hood, Nuxt auto generates the file `.nuxt/imports.d.ts` to declare the types.

Be aware that you have to run `nuxi prepare`, `nuxi dev` or `nuxi build` in order to let Nuxt generate the types. If you create a composable without having the dev server running, TypeScript will throw an error, such as `Cannot find name 'useBar'`.

> Learn more about the [**composables directory**](https://nuxt.com/docs/guide/directory-structure/composables)


#### Content directory `content/`

The Nuxt Content module reads the `content/` directory in your project and parses `.md`, `.yml`, `.csv` and `.json` files to create a file-based CMS for your application.

> Learn more about the [**content directory**](https://nuxt.com/docs/guide/directory-structure/content)


#### Layouts directory `layouts/`

Nuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.

> Learn more about the [**layouts directory**](https://nuxt.com/docs/guide/directory-structure/layouts)


#### Middleware Directory `middleware/`

Nuxt provides a customizable **route middleware** framework you can use throughout your application, ideal for extracting code that you want to run before navigating to a particular route.

> Learn more about the [**middleware directory**](https://nuxt.com/docs/guide/directory-structure/middleware)

#### Pages directory `pages/`

Nuxt provides a file-based routing to create routes within your web application using Vue Router under the hood.

> Learn more about the [**pages directory**](https://nuxt.com/docs/guide/directory-structure/pages)

#### Plugins directory `plugins/`

Nuxt automatically reads the files in your plugins directory and loads them at the creation of the Vue application. You can use `.server` or `.client` suffix in the file name to load a plugin only on the server or client side.

> Learn more about the [**plugins directory**](https://nuxt.com/docs/guide/directory-structure/plugins)


### Server Directory `server/`

Nuxt automatically scans files inside the `~/server/api`, `~/server/routes`, and `~/server/middleware` directories to register API and server handlers with HMR support.

Each file should export a default function defined with `defineEventHandler()`.

The handler can directly return JSON data, a `Promise` or use `event.node.res.end()` to send response.

> Learn more about the [**server directory**](https://nuxt.com/docs/guide/directory-structure/server)


### Types Directory `types/`

Use the `types/` directory declare interface data for client or server side.
### Utils Directory `utils/`

Nuxt 3 uses the `utils/` directory to automatically import helper functions and other utilities throughout your application using auto-imports!

> Learn more about the [**utils directory**](https://nuxt.com/docs/guide/directory-structure/utils)


### Frontend Guidelines

For developer, we recommend you consider these guidelines:

#### Styling

- We adopted the **BEM** naming style for my css class names and you can follow [this link](https://getbem.com/naming/).
- We use [Tailwind CSS](https://tailwindcss.com/docs/installation) for main UI Styling.
- We use [Preline UI](https://preline.co/docs/index.html) for help you quickly design and customize.

For Example

**HTML**

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

**CSS**

```css
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }
```

- Avoid arbitrary colors and magic numbers. Favor defined units and have your colors be or descend from defined colors.

```css
/* Not so good */
.cabinet {
  background: #BADA55;
  padding-bottom: 27px;
}
  
/* Much better */
.cabinet {
  background-color: $color_black;
  padding-bottom: $gutter;
}
```

**Tailwind CSS**

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with zero-runtime.

For customization, you can config them in the `tailwind.config.ts` file. [See config](https://tailwindcss.com/docs/configuration)

Usage

- Start using Tailwind in your HTML

```html
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
```

- Use `@apply`

```html
<div>
  <h1 class="title">
    Hello world!
  </h1>
</div>

<style>
.title {
  @apply text-3xl font-bold underline;
}
</style>
```

#### Naming

- Use **camelCase** for function, variables and whatever in .js, .ts file.
- Use **PascalCase** for `.vue` file name in `components/` directory.
- Use **kebab-case** for `.vue` file name in `pages/` directory.
- Use **kebab-case** for `.js`, `.ts` file name.
- Use **PascalCase** for declare interface data.
- Use **SCREAMING_SNAKE_CASE** when define the <ins>constant variable</ins>.

#### Breakpoints

- Mobile-S `(min-width: 320px)`
- Mobile `(min-width: 480px)`
- Phablet `(min-width: 768px)`
- Tablet `(min-width: 1024px)`
- Desktop `(min-width: 1200px)`


#### Data Tagging

**GTM**

`data-fn-action` = action name

`data-fn-location` = location name

`data-fn-params` = tagging params (optional)

**Example** - basic tagging
```html
<div data-fn-location="stock-section">
  <button data-fn-action="stock_open" data-fn-params="{ 'name' : 'ORI' }">View</button>
</div>
```
**Example 2** - Send tagging to reuse component eg. list, button group

use props `tagging-action` `tagging-params-key`  `tagging-params-value`

```html
<!-- Parent.vue -->
<template>
    <ATabNavigate 
      data-fn-location="stock-navigation" 
      tagging-params-key="mode" 
      tagging-params-value="mode" 
      :items="navMenu" 
    />
</template>

...
<script >
  ...
  const navMenu: ObjectString[] = [
    { label: 'จัดอันดับหุ้น', to: '/stock', mode: 'hit' },
    { label: 'ติดตาม', to: '/stock/followed', mode: 'follow' }
  ]
</script>

<!-- Navigate.vue -->
<template>
	<nav aria-label="Tabs">
		<NuxtLink
			v-for="(item, idx) in items"
			:key="idx"
			:to="item.to"
			data-fn-action="navigation_change"
			:data-fn-params="sendFnParams({ [taggingParamsKey]: item[taggingParamsValue] })"
		>
			{{ item.label }}
		</NuxtLink>
	</nav>
</template>

<script setup lang="ts">
defineProps({
  items: { type: Array<ObjectString>, default: () => [] },
  taggingParamsKey: { type: String, default: 'mode' },
  taggingParamsValue: { type: String, default: 'mode' }
})
</script>
```

```
OUPUT : params = { "mode" : "hit"}
```
 
**Example 3** - Send tagging to reuse component for multiple params

In `tagging-params-key` can use value option by
- `:` for option eg. `exchange:lower` (can implement in `/utils/tagging.ts`)

In `tagging-params-value` attribute we can use params value option by 

- `|` for split params
- `[...]` for fixed specific value
- `*` for set data to param key (when data is not object type) eg. `[th]|*`

```html
<!-- Parent.vue -->
<template>
    <AGraphPeriod 
      tagging-action="period_change"
      tagging-params-key="exchange:lower|period"
      :tagging-params-value="`[TH]|*`"
      :items="list" 
    />
</template>


<!-- Period.vue -->
<template>
  <div
    v-for="(period, index) in range"
    :data-fn-action="taggingAction"
    :data-fn-params="sendFnParams(createFnParams(taggingParamsKey, taggingParamsValue, period)"
    >
    {{ item.label }}
    </div>
</template>

```

```
OUPUT : params = { "exchange" : "th", "period" : "1M"}
```


#### Recommended

- Enable ESlint for better Javascript code patterns.
- For git commit message style we sugguest `<FEATURE,HOTFIX> | <MESSAGE>`.

```
NEXT-1234 | Add new README.md 

If you want to explain more details, please put them in this body
1
2
3
```