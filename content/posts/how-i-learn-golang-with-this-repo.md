---
title: "How I Learn Golang With This Repo"
date: 2022-04-08T20:26:59+07:00

draft: false
---

<!--i start learn from April 06, 2022 -->

<!--# how i learn golang with this repo-->
Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.
—Golang.org

If you want to develop faster, perhaps because you have many different services to write, or you have a large team of developers, then Go is your language of choice. Go gives you concurrency as a first-class citizen, and does not tolerate unsafe memory access (neither does Rust), but without forcing you to manage every last detail. Go is fast and powerful, but it avoids bogging the developer down, focusing instead on simplicity and uniformity. If on the other hand, wringing out every last ounce of performance is a necessity, then Rust should be your choice.
—Andrew Lader

find more about go vs rust, in this link [https://bitfieldconsulting.com/golang/rust-vs-go](https://bitfieldconsulting.com/golang/rust-vs-go)


----------------------------
link to learn, please fork and clone to your local [Golang Training](https://github.com/nursyah21/GolangTraining)

after we clone repo, we need install tools for golang
{{<figure src="../../images/how-i-learn-golang-with-this-repo/ss1.png" >}}

dont forget to create new branch so we keep originals untouch
```bash
git checkout -b exercise
```
and we move all exercise like 01, 02, .. to clone folder
```bash
mkdir clone
mv 0* 1* 2* clone
```

and we create folder to organize all code
```bash
mkdir 01_getting_started
touch 01_getting_started/main.go
```
----------------------
----------------------
### exercise


**first we learn get_started**

we learn some basics like, decimal, binary, hexadecimal, and loop

**we learn packages**

Go programs are organized into packages. A package is a collection of source files in the same directory that are compiled together. Functions, types, variables, and constants defined in one source file are visible to all other source files within the same package.

A repository contains one or more modules. A module is a collection of related Go packages that are released together. A Go repository typically contains only one module, located at the root of the repository. A file named go.mod there declares the module path: the import path prefix for all packages within the module. The module contains the packages in the directory containing its go.mod file as well as subdirectories of that directory, up to the next subdirectory containing another go.mod file (if any). 

we create some folder,to structure code

we need to use go mod init, to install module, if we want to import local package
```bash
mkdir hello # Alternatively, clone it if it already exists in version control.
cd hello
go mod init example/user/hello
go: creating new go.mod: module example/user/hello
cat go.mod
module example/user/hello

```

Note that you don't need to publish your code to a remote repository before you can build it. A module can be defined locally without belonging to a repository. However, it's a good habit to organize your code as if you will publish it someday. 

by default, in this repository module is import in remote repository but for this exercise we import local module

please refer to this link [https://go.dev/doc/code](https://go.dev/doc/code)


-------------------
my summary for chapter 1, you will find some code similiar with c/c++ you can create "* *pointer*" and  "& *address*" in this chapter, if you find trouble to try import module in local, please refer to this video [https://www.youtube.com/watch?v=Nv8J_Ruc280](https://www.youtube.com/watch?v=Nv8J_Ruc280)

{{<figure src="../../images/how-i-learn-golang-with-this-repo/ss2.png">}}

this is sample code of 13_excercise-solutions
```go
package main

import (
	"fmt"
)

func main(){
	// go will check your code
	// for safety this good
	var numOne, numTwo  = 10, 12
	var name string
	fmt.Print("Please enter your name: ")
	fmt.Scan(&name)
	fmt.Println("Hello", name)

	fmt.Println(numOne%numTwo) // modulo

	fmt.Println("Hello"[1]) //utf

	if true && false {
		fmt.Println("not run")
	}
}
```

--------------------
in chapter 13-16 you will find some concept similiar with c/c++

{{<figure src="../../images/how-i-learn-golang-with-this-repo/ss3.png">}}

sample code of 16_exercise
```go
package main

import "fmt"

func half(n int) (float64, bool) {
	return float64(n) / 2, n%2 == 0
}

func foo(numbers ...int){
	fmt.Println(numbers)
}

func main() {
	half2 := func(n int) (float64, bool) {
		return float64(n) / 2, n%2 == 0
	}

	h, even := half2(5)
	fmt.Println(h, even)
	
	foo(1,2,3,4)
}
```

but in chapter 17 and later, you will find the exercise getting hard, you will learn some syntax and function in go

sample code in 25_code_walk
```go
// Copyright 2011 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package main

import (
	"fmt"
	"math/rand"
)

const (
	win            = 100 // The winning score in a game of Pig
	gamesPerSeries = 10  // The number of games per series to simulate
)

type score struct {
	player, opponent, thisTurn int
}

type action func(current score) (result score, turnIsOver bool)

func roll(s score) (score, bool) {
	outcome := rand.Intn(6) + 1 // A random int in [1, 6]
	if outcome == 1 {
		return score{s.opponent, s.player, 0}, true
	}
	return score{s.player, s.opponent, outcome + s.thisTurn}, false
}

func stay(s score) (score, bool) {
	return score{s.opponent, s.player + s.thisTurn, 0}, true
}

type strategy func(score) action

func stayAtK(k int) strategy {
	return func(s score) action {
		if s.thisTurn >= k {
			return stay
		}
		return roll
	}
}

func play(strategy0, strategy1 strategy) int {
	strategies := []strategy{strategy0, strategy1}
	var s score
	var turnIsOver bool
	currentPlayer := rand.Intn(2) // Randomly decide who plays first
	for s.player+s.thisTurn < win {
		action := strategies[currentPlayer](s)
		s, turnIsOver = action(s)
		if turnIsOver {
			currentPlayer = (currentPlayer + 1) % 2
		}
	}
	return currentPlayer
}

func roundRobin(strategies []strategy) ([]int, int) {
	wins := make([]int, len(strategies))
	for i := 0; i < len(strategies); i++ {
		for j := i + 1; j < len(strategies); j++ {
			for k := 0; k < gamesPerSeries; k++ {
				winner := play(strategies[i], strategies[j])
				if winner == 0 {
					wins[i]++
				} else {
					wins[j]++
				}
			}
		}
	}
	gamesPerStrategy := gamesPerSeries * (len(strategies) - 1) // no self play
	return wins, gamesPerStrategy
}

func ratioString(vals ...int) string {
	total := 0
	for _, val := range vals {
		total += val
	}
	s := ""
	for _, val := range vals {
		if s != "" {
			s += ", "
		}
		pct := 100 * float64(val) / float64(total)
		s += fmt.Sprintf("%d/%d (%0.1f%%)", val, total, pct)
	}
	return s
}

func main() {
	strategies := make([]strategy, win)
	for k := range strategies {
		strategies[k] = stayAtK(k + 1)
	}
	wins, games := roundRobin(strategies)

	for k := range strategies {
		fmt.Printf("Wins, losses staying at k =% 4d: %s\n",
			k+1, ratioString(wins[k], games-wins[k]))
	}
}
```
because in some exercise you will find chan (channel) ,maybe you will need to know what about is this, [https://golangdocs.com/channels-in-golang](https://golangdocs.com/channels-in-golang)


----------------------------
total of exercise in this repo is 99, but we will stop in chapter 26_questions-from-students

{{<figure src="../../images/how-i-learn-golang-with-this-repo/ss4.png">}}
{{<figure src="../../images/how-i-learn-golang-with-this-repo/ss5.png">}}

at least for now we have some basics of go and we ready to start learn another project in go.


<!--link to learn [Golang Training](https://github.com/nursyah21/GolangTraining)-->

