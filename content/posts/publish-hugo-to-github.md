---
title: "Publish Hugo to Github"
date: 2022-04-06T14:18:14+07:00
description: 'create blog with hugo and host with github'
omit_header_text: false
#featured_image : ' '
draft: false
---

# create blog with hugo and host with github

Hugo is a static HTML and CSS website generator written in Go. It is optimized for speed, ease of use, and configurability. Hugo takes a directory with content and templates and renders them into a full HTML website.

Hugo relies on Markdown files with front matter for metadata, and you can run Hugo from any directory. This works well for shared hosts and other systems where you don’t have a privileged account.

Hugo renders a typical website of moderate size in a fraction of a second. A good rule of thumb is that each piece of content renders in around 1 millisecond.

Hugo is designed to work well for any kind of website including blogs, tumbles, and docs.

requirement
- go
- hugo extended
- theme hugo
- repo github

## step 1 install golang and hugo extended
### install golang

{{< figure src="../../images/publish-hugo-to-github/ss1.png" title="">}}

[download latest golang](https://go.dev/)

in linux, you can install golang like this
```zsh
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.18.linux-amd64.tar.gz

```

in my computer, i use zsh for terminal, so add the following line in $HOME/.zshrc

```
export PATH=$PATH:/usr/local/go/bin
```

check your go version

```
go version
```
--------------

### install hugo
{{< figure src="../../images/publish-hugo-to-github/ss2.png" title="">}}

[download hugo extended](https://github.com/gohugoio/hugo/releases)

because i use debian linux, so i install deb version

```zsh
sudo dpkg --install /path/hugo_extended_0.96.0_Linux-64bit.deb

```

check your hugo version
```zsh
hugo version
```
------------------
## step 2 build blog with hugo

create new site 
``` zsh
hugo new <name-site> && cd <name-site>
```

install theme

first init git in your site folder
``` zsh
git init
```

create new repository for your hugo site
{{<figure src="../../images/publish-hugo-to-github/ss3.png">}}

 initiate the hugo module system if you haven't already
```zsh
hugo mod init github.com/<your_user>/<your_project>
```

i use theme [ananke](https://github.com/theNewDynamic/gohugo-theme-ananke) for my site

add theme`s repo to config.toml
```
theme = ["github.com/theNewDynamic/gohugo-theme-ananke"]
```
and edit your baseURL in config.toml to your site, because we use host github so..
```
baseURL = 'https://<username-github>.github.io/<name-repository>/'
```

create your first post in hugo
```
hugo new posts/my-first-post.md
```

edit "draft: true -> draft: false" in content/posts/my-first-post

```md
---
title: "My First Post"
date: 2022-04-06T14:18:14+07:00
draft: false
---
```

check your local site with
```zsh
hugo server
```
{{<figure src="../../images/publish-hugo-to-github/ss4.png">}}

-------------

## step 3 adding workflow github and host to github


create file in .github/workflows/gh-pages.yml
```yml
name: github pages

on:
  push:
    branches:
      - main  # Set a branch to deploy
  pull_request:

jobs:
  deploy:
    runs-on: ubuntu-20.04
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true  # Fetch Hugo themes (true OR recursive)
          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

remote your repository with new repository you create before
```zsh
git remote add origin git@github.com:nursyah21/nursyah-blog.git
```
your branch must in main, check with
```
git branch
```
if your branch not in main, create branch main and move to branch main
```
git checkout -b main
```

and push your repository
```
git add .
git commit -m 'first commit'
git push -u origin main
```

check action workflow github in your repository
{{<figure src="../../images/publish-hugo-to-github/ss5.png">}}

after that action workflow is finish, branch gh-pages will show in your repository

{{<figure src="../../images/publish-hugo-to-github/ss6.png">}}
move to github pages in your repository, and change your source to branch: gh-pages, and folder /

your site will show in https://\<username-github>.github.io/\<name-repository>/

