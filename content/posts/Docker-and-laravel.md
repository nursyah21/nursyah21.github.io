---
title: "Docker, Laravel and React"
date: 2022-04-21T21:39:10+07:00
draft: false
---

i want to build web application, and the requirement my application is:
- backend: php (laravel)
- frontend: reactjs

and i want to try docker, for deploy my application.

first install composer, this composer we used to install php framework like laravel. 
```bash
curl -Ss getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```
here you will get information regarding how to install composer in each platform:
- [Linux/Unix](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)
- [macOs](https://pilsniak.com/install-composer-mac-os/)
- [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)

make folder for web application, and install laravel in that folder

```
mkdir reactLaravel && cd reactLaravel
composer create-project --ignore-platform-reqs  --prefer-dist laravel/laravel .
```
we use *--ignore-platform-reqs* for avoid error

we check if laravel success to deploy
```
php artisan serve
```

[![image](../../images/Docker-and-laravel/ss1.png)](../../images/Docker-and-laravel/ss1.png)


success to create first website with laravel, and now we want to install react in this website

```bash
npm install react react-dom @babel/preset-react @babel/plugin-syntax-jsx browser-sync-webpack-plugin@latest
```

after we already install all depencies, we create new test page for webpage with react.
so we create new file in *resources/views/testReact.blade.php*
```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel React</title>

    <script src="{{ asset('js/app.js') }}" defer></script>
</head>
<body>
    <div id="hello-react"></div>
</body>
</html>
```
and we add route for this page in *resources/routes/web.php*

```php
<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return view('testReact');
});

```

we need to make react file, create *resources/js/components/HelloReact.jsx*

```jsx
// resources/js/components/HelloReact.jsx

import React from 'react';
import ReactDOM from 'react-dom';

export default function HelloReact() {
    return (
        <h1>Hello React !</h1>

    );
}

if (document.getElementById('hello-react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
}
```

and we update *resources/js/app.js*
```js
require('./bootstrap');

require('./components/HelloReact')
```

for webpage to hot reload, we update *webpack.mix.js*
```js
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({
    proxy: 'localhost:8000',
    //open: true,
})

mix.js('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

```

and we run webpage with, and dont forget the address is *http://localhost:8000/test* for testing webpage with react

```bash
npm run watch
``` 

[![image](../../images/Docker-and-laravel/ss2.png)](../../images/Docker-and-laravel/ss2.png)
just edit *resources/js/components/HelloReact.jsx* to edit this webpage

so the last, is we create Dockerimage

we need to make *Dockerfile* in root webapplication directory
```Dockerfile
#Dockerfile
FROM php:8.1.2-cli

RUN apt-get update
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo

WORKDIR /app
COPY . /app

RUN composer install

EXPOSE 8000
CMD php artisan serve --host=0.0.0.0 --port=8000
```

after that we build dockerimage with this command
```
docker build -t reactjs-taskapp .
```
and we run dockerimage
```
docker run -it reactjs-taskapp 
```
unfortunately if we run webapp with this dockerimage , that web app is not hot reload so if we want to design we should use *npm run watch* and finally if app is complete we can use docker.

cool, now we know to make web application with laravel, reactjs, and docker. 