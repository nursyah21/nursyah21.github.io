---
layout: ../../layouts/PostLayout.astro
title: Finance app android
author: nursyah
date: 31-12-2022
last_update: 31-12-2022
description: A simple finance app android with dark theme
--- 
<p align="center">
  <img src="/finance_app_android/icon.png" width="140px" />
</p> <br>

**A simple finance app android with dark theme**

<!-- [download in playstore](https://play.google.com/store/apps/details?id=com.nursyah.finance) -->

<br>
screenshots application

<p class="flex overflow-auto justify-between m-2">
  <img src="/finance_app_android/finance_ss1.png" width="200p"/>
  <img src="/finance_app_android/finance_ss2.png" width="200p" class="mx-2"/>
  <img src="/finance_app_android/finance_ss3.png" width="200p"/>
</p>

source-code: https://github.com/nursyah21/financeapp-android <br><br>

Update:
now application can be download in [playstore](https://play.google.com/store/apps/details?id=com.nursyah.finance)

---
<br><br>

The first time I made this application was because I wanted to have an Android application that could record my spending using money.

Previously I recorded my expenses using the built-in application on my phone (note application). I keep track of my allowance and expenses and then do manual calculations every time I spend money or earn money.
<br><br>

**story development**

at the start of development, i want to build a simple android finance app with applying modern android development like jetpack compose, hilt dependencies, and baseline profiles.
<br><br>
In the first stage, I use [Jetpack Compose](https://developer.android.com/jetpack/compose/why-adopt), Jetpack Compose is an Android modern toolkit to build native UI. It simplifies and accelerates UI development on Android bringing your apps to life with less code, powerful tools, and an intuitive Kotlin API. It makes building Android UIs faster and easier. 
<br><br>
in the next stage, after the display is successful, the application needs a storage area to store data, in this case, android can use [Room](https://developer.android.com/training/data-storage/room). In particular, Room provides the following benefits:
<div class="mx-4">

- Compile-time verification of SQL queries.

- Convenience annotations that minimize repetitive and error-prone boilerplate code.

- Streamlined database migration paths.

</div>
<br>

As Android apps grow in size, it's important to define an [architecture](https://developer.android.com/topic/architecture) that allows the app to scale, increases the app's robustness, and makes the app easier to test.
there are quite a lot of architectures that can be used in application development such as [MVC, MVI, MVP and MVVM](https://academy.realm.io/posts/mvc-vs-mvp-vs-mvvm-vs-mvi-mobilization-moskala/). in this case we use MVVM design pattern. [read Duolingo refactors on Android with MVVM](https://developer.android.com/stories/apps/duolingo-excellence)
<br><br>

Classes in your app depend on other classes in order to function properly, from the android developer suggests following the dependency injection pattern and using the [Hilt](https://developer.android.com/training/dependency-injection/hilt-android) library in Android apps.
<br><br>

**after development**

until here the application has been completed however, what things can we do to improve the application even better. We can use [Baseline Profiles](https://developer.android.com/topic/performance/baselineprofiles/overview), it can improve code execution speed by around 30% from the first launch by avoiding interpretation and just-in-time (JIT) compilation steps for included code paths.
<br><br>

**play store**

Marketing android applications, the most famous way is through the playstore however, to market it Google charge $25 to open a developer account
and we also have to create a privacy policy even though the application does not collect any data, the privacy policy must be accessible via the internet.

if successful the application will appear in the playstore but if it fails we will get an email from google as below

![image](/finance_app_android/rejected.png)

to fix it, we can follow the advice given in the email we received, then resubmit an updated application in hopes of being accepted.
<br><br>

but not all applications have to be marketed through the playstore, one of the applications that I use quite often namely [newpipe](https://github.com/TeamNewPipe/NewPipe) market it via github and f-droid.
but we will get an error message: **"Play Protect doesn't recognise this app's developer. Apps from unknown developers can sometimes be unsafe"**. The solution itself can be seen here

<div class="mx-4">

- [installation-app-blocked-by-play-protect](https://stackoverflow.com/questions/51080755/installation-app-blocked-by-play-protect)

- [play-protect-does-not-recognize-this-apps-developer](https://stackoverflow.com/questions/51835819/play-protect-does-not-recognize-this-apps-developer)

</div>

but the application can still be installed by using **"installing anyway"**.
