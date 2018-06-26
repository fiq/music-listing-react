# Overview from the candidates perspective

In order to complete this piece given my surrounding 
time constraints, I've had to incurr some debt in completing this 
solution. Points worth noting, in no particularly order;
although ordering would aid in prioritising such debt.

* Started with create-react-app in a separate 'prototype'
* Had inteneded to reimplement and would usually insist on not copying over a prototype
* Copied over prototype due to time constraints. Would typically address outstanding issues.
* Would typically start with strict linting and babel config
* Would typically write test first at each tier of the pyramid
* I've introduced state in components to handle toggle functionality.
* While it is normal to avoid local state with redux, this was an expediency due to timing again.
* I would also argue to avoid polluting global state with non-business concerns in complex apps.
* I have a recurring set of patterns around lists and toggle behaviour.
* Ideally I'd have taken the time to wrap this in a higher order component.
* I should have tests on all my reducer behaviours. I REALLY should.
* I have a branch titled BRANCH_WITH_BROKEN_BABEL_PRESETS where I was trying to pollyfill for IE11
* Due to issues the spread operator and babel, I've left this on a branch. 
* I considered using Obect.assign, however it's better to fix the problem and did not would to give a false impression of my appraoch
 