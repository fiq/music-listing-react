# Overview from the candidates perspective

## Overview
In order to complete this piece given my surrounding 
time constraints, I've had to incur some debt in completing this 
solution. Points worth noting, in no particular order;
although ordering would aid in prioritising such debt.

* Started with create-react-app in a separate 'prototype'
* Had intended to reimplement and would usually insist on not copying over a prototype
* Copied over prototype due to time constraints. Would typically address outstanding issues.
* Would typically start with strict linting and babel config
* Would typically write the test first at each tier of the pyramid
* I've introduced state in components to handle toggle functionality.
* While it is normal to avoid local state with redux, this was an expediency due to timing again.
* I have a recurring set of patterns around lists and toggle behaviour.
* Ideally I'd have taken the time to wrap this in a higher order component.
* I should have tests on all my reducer behaviours. I REALLY should.
* I have a branch titled BRANCH_WITH_BROKEN_BABEL_PRESETS where I was trying to polyfill for IE11
* Due to issues the spread operator and babel, I've left this on a branch. 
* I considered using Obect.assign, however, it's better to fix the problem and did not would to give a false impression of my approach
* I seem to have created the project using node 6; have typically been using 8, but it only seems to run with 6 currently
* Would investigate and upgrade otherwise.
* In terms of language I chose to go with 'Artist' over 'Band'
* Changes in business language are things I would discuss with the business; the underlying reason was extensibility of business domain, mindset and model. This would usually involte PO and team discussion.

## Tools

* ./build.sh to build a container an alpine container at node 6
* ./setup.sh to flip to the correct node version with nvm (assumes you are using nvm)
* ./startServer.sh - wrapper for nvm use && npm start

