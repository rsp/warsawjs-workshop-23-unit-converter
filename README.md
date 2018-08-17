Unit Converter
=
Project for WarsawJS Workshop 23 Group 1
-
[![Build Status](https://travis-ci.org/rsp/warsawjs-workshop-23-unit-converter.svg?branch=master)](https://travis-ci.org/rsp/warsawjs-workshop-23-unit-converter)
[![CircleCI](https://circleci.com/gh/rsp/warsawjs-workshop-23-unit-converter.svg?style=svg)](https://circleci.com/gh/rsp/warsawjs-workshop-23-unit-converter)

This project is based on the project from Workshop 22:

* https://github.com/rsp/warsawjs-workshop-22-unit-converter

During Workshop 22 we developed a project that converts
currencies using NBP exchange rates and temperature units
and we added several unit tests.

Special thanks to
**[Ela Mościcka](https://github.com/ElaMoscicka)** 🏅🏆🌹
for greatly improving the frontend appearance!
([PR #1](https://github.com/rsp/warsawjs-workshop-22-unit-converter/pull/1))

This time we will focus on end-to-end tests for this project
and we will add a few more features in the process.

Getting Started
-
1. Fork the project on GitHub:

![Click the Fork button](fork.png)

2. Clone your fork:

```sh
git clone git@github.com:YOUR_USERNAME/warsawjs-workshop-23-unit-converter.git
```

3. Enter the project:

```sh
cd warsawjs-workshop-23-unit-converter
```

4. Install dependencies:

```sh
npm i
```

5. Go to the workshop

6. Have fun!

How To Create a Pull Request
-
See my tutorial:
[How to create a Pull Request on GitHub](https://gist.github.com/rsp/8e565895df24c46ee80cfaac68d05e64)

---

Author
-
Rafał Pocztarski - https://github.com/rsp

---

License
-
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

---

Useful resources:

Editors
=
https://github.com/rsp/info/blob/master/text-editors.md

Classic
-
### Vim
http://www.vim.org/

### Emacs
https://www.gnu.org/software/emacs/

Modern
-
### Sublime Text
https://www.sublimetext.com/

### Atom
https://atom.io/

### Brackets
http://brackets.io/

### Visual Studio Code
https://code.visualstudio.com/

---

Style guides
=

Airbnb JavaScript Style Guide
-
https://github.com/airbnb/javascript#readme

JavaScript Standard Style
-
https://standardjs.com/

JavaScript Semi-Standard Style
-
https://github.com/Flet/semistandard#readme

Idiomatic JavaScript
-
https://github.com/rwaldron/idiomatic.js#readme

Google JavaScript Style Guide
-
https://google.github.io/styleguide/jsguide.html

---

Linters
=

ESLint
-
https://eslint.org/

JSHint
-
http://jshint.com/

JSLint
-
http://www.jslint.com/

---

ESLint Configs
=

Airbnb JavaScript Style Guide
-
(3M/month)

https://www.npmjs.com/package/eslint-config-airbnb-base

JavaScript Standard Style
-
(1.5M/month)

https://www.npmjs.org/package/eslint-config-standard

JavaScript Semi-Standard Style
-
(100k/month)

https://www.npmjs.com/package/eslint-config-semistandard

Idiomatic JavaScript
-
(4k/month)

https://www.npmjs.com/package/eslint-config-idiomatic

More ESLint Configs:
-
https://www.npmjs.com/browse/keyword/eslintconfig

---

General Testing
=

Mocha
=

https://mochajs.org/

Jest
-

https://jestjs.io/

Jasmine
-

https://jasmine.github.io/

Tape
-

https://github.com/substack/tape

Tap
-

https://www.node-tap.org/

End-to-end testing
=

TestCafe
-

https://devexpress.github.io/testcafe/

CasperJS
-

http://casperjs.org/

Nightwatch.js
-

http://nightwatchjs.org/

CodeceptJS
-

https://codecept.io/

WebdriverIO
-

http://webdriver.io/

Puppeteer
-

https://developers.google.com/web/tools/puppeteer/

Protractor
-

http://www.protractortest.org/

Nightmare
-

http://www.nightmarejs.org/

PhantomJS
-

http://phantomjs.org/

Selenium
-

https://www.seleniumhq.org/

---

CI
=

Travis CI
-
* https://travis-ci.com/
* https://travis-ci.org/

CircleCI
-
* https://circleci.com/

Codeship
-
* https://codeship.com/

AppVeyour
-
* https://www.appveyor.com/

---

Virtualization
=

VirtualBox
-
https://www.virtualbox.org/

Vagrant
-
https://www.vagrantup.com/

---

Workshop 22 Tasks
=

Here are the original tasks from Workshop 22:

Temperature conversion
-

Temperatures need to be converted between
degrees Celsius, Fahrenheit and Kelvin.

You need to find the correct formulas and:

1. Add converter functions in the `converters` directory

2. Add tests in the `tests` directory

Currency conversion
-

Currencies need to be converted between
EUR, PLN and USD
using th eaverage NBP exchange rate as for the day 2018-01-02.

You need to find a way to connect to query the NBP API for the exchange rates and:

1. Add converter functions in the `converters` directory

2. Add tests in the `tests` directory

The API documentation is available on:

* http://api.nbp.pl/en.html

Continuous Integration
-

Configure one of the CI systems to run your tests automatically
and add correct build status badges to the README.

Workshop 23 Tasks
=

Here are the new tasks that we will focus on during this workshop:

End-to-end tests
-

* Add end-to-end tests that make sure that all required information is present

* Add end-to-end tests that make sure that all required text fields are present

* Add end-to-end tests that make sure that all required buttons are present

* Add end-to-end tests that make sure that clicking buttons result in populating appropriate fields

* Add end-to-end tests that make sure that clicking buttons give correct results

* Add end-to-end tests for the project using the same test strategy as the unit tests present in the project

* Add end-to-end tests that test that calcuation still work after clicking buttons many times

* Create failing end-to-end tests for nonexistent functionality of length conversion

* Make sure that you cover everything needed to make sure that the length conversion works correctly when implemented

* Implement the weight conversion to pass the tests

* Implement the length units conversion with no end-to-end tests

* Add end-to-end tests for the length units conversion after it is implemented

* Decide if you think it's better to start with tests or the implementation and implement a new conversion of your choice with end-to-end tests using the order that you prefer

Extra tasks
=

For anyone who finished early there are some additional tasks
in no particular order:

End-to-end tests
-

* Refactor the end-to-end tests in the Warmup project to cover all possible calculations:
  * https://github.com/rsp/warsawjs-workshop-23-warmup

* Refactor the implementation of the Warmup project to use a different UI and still pass the end-to-end tests

* Refactor the implementation of the Warmup project to use a different logic and still pass the end-to-end tests

Linter
-

* Make sure that all of the code complies with the linter with provided configuration or change the linter configuration for the style guide of your choice

Unit tests
-

* Add unit tests for the new features added during this workshop using the framewok of your choice
* Add unit tests using at least two different test frameworks
* Try to maximize the test coverage

Caching
-

* Make a request for every currency only once and cache the value in program memory

* Make a request for every currency only once and cache the value in Redis database

Dates
-

* Add functionality to select a specific date for the exchange rate

Frontend
-

* Make the frontend more convenient to use

* Add a simple chart for currency exchange rates using the `converter` functions

* Display a table of temperatures in degrees C, F and K computed using the `converter` functions

Deployment
-

* Deploy your application to Heroku

* Deploy your application to a VPS on Digital Ocean ([promo link](https://m.do.co/c/64b6b577b3de) for free 10 USD)

* Deploy your application to a VPS on Vultr ([promo link](https://www.vultr.com/?ref=7107329) for free 10 USD)

* Add a domain name ([promo link](http://www.dynadot.com/?s8w657UD6gy7z6h) for free 5 USD)
