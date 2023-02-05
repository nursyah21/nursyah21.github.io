---
layout: ../../layouts/PostLayout.astro
title: YTDL Desktop App
author: nursyah
date: 06-02-2023
last_update: 06-02-2023
description: Desktop app youtube downloader with jetpack compose 
--- 

![img](https://github.com/nursyah21/ytdlDesktop/raw/main/assets/icon.png)

## Description

ytdlDesktop is youtube downloader app, this app can download video from youtube or another website like ([bilibili.com](https://www.bilibili.com/) and etc.) build with jetpack compose and ktor. extractor video using [ytdl](https://github.com/ytdl-org/youtube-dl)
<br><br>

## Screenshot Application

![img](https://github.com/nursyah21/ytdlDesktop/raw/main/assets/ytdl.png)
<br>

source code: [https://github.com/nursyah21/ytdlDesktop](https://github.com/nursyah21/ytdlDesktop)
<br><br>

## story

I created this application with the aim of downloading video from youtube, this application underwent several changes in the development

- first, this application was originally made for mobile and desktop but in the end I decided to focus on dekstops to make it easir to design and test it, even though from code itself it is possible to create one source code for desktop and mobile because it uses [multiplatform compose](https://github.com/JetBrains/compose-jb)

- secondly I tried to understand the deciper cignature on [ytdl](https://github.com/ytdl-org/youtube-dl) so that this application does not need to use api, but finally I decided to make an api using ytdl but finally I decided to make an api using ytdl I did this so that my application can finish faster and the url signature decipher can continue to update

because I decided to use api, I create web api using python this is because ytdl is a python application then this web api runs on cloud run google and I use cloud build google to make it easier if I update the web api
<br><br>

some new things that I learned while making this application

- [ktor](https://ktor.io/) async client and server
- [guava](https://github.com/google/guava) core libraries for java
- [gson](https://github.com/google/gson) java serialization / deserialization
- [log4j](https://github.com/apache/logging-log4j2) logging api
- [bytedeco ffmpeg](https://github.com/bytedeco/javacpp-presets) java distribution of native c++ libraries
- [composejb](https://github.com/JetBrains/compose-jb) compose multiplatform, modern ui framework for kotlin
<br><br>

and also I learned that without classes in the program code it makes making this application easier

one of them is a variable that can be updated from any source code so it doesn't require dependency injection
