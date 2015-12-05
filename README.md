# Personal Assistant - Final mini-Project #1
---

Links:

- Instructions:
    - https://github.com/ga-students/wdi_lettuce_students/blob/master/schedule.md

- Project:
    - GitHub
        - https://github.com/madhat5/Personal-Assitant_appProject
    - Wireframes
        - https://moqups.com/#!/edit/madhat5/jR69snL3
    - Trello link
        - https://trello.com/b/79qQIpKD/wdi-project-4a-jmny
    - Heroku
        - 

---
Technical Requirements:

- Use Mongo & Express to build an API and a front-end that consumes it
- Create an API using at least 2 related models, one of which should be a user
- Include all major CRUD functions in a RESTful API for at least one of those models
- Consume your own API by making your front-end with HTML, Javascript, & jQuery
- Add authentication to your API to restrict access to appropriate users
- Layout and style your front-end with clean & well-formatted CSS
- Deploy your application online so it's publically accessible

---
Timeline goals: (start by)

- Wed 12/2 --x--
    - Start planning mini-app (Rails or Mean) today
- Sat 12/5 --o--
    - 1st mini-app finished during the weekend
- Sun 12/6 --o--
    - Start planning 2nd mini-app 
- Wed 12/9
    - 2nd app finished 
- Thu 12/10
    - Final project planning
- Thu 12/17 
    - Final project finished

--
Deployment flow: (WORK WITH KRYSTEN)

- Create development branch
    - from master
        - git checkout -b development       
- Pull @ beginning of day
    - from development
        - git pull origin master
        - (npm install) if needed
- Create 1 branch per file feature
    - from development
        - git checkout -b file_feature
- By end of day 
    - from branch
        - git add .
        - git commit -m "update details"
        - git push origin file_feature
        - (gitHub
            - Pull request)
        - OR
        - (git push origin development)
        - git checkout development
    - from development
    - (gitHub
        - Pull request)
    - OR
    - (git push origin master)

---
MVP

Models:

- user
    - stormpath
    - goal (embed or ref)
    - score/points?
        - (sum of goal.score)
- goal
    - title: String
    - objectives: 
        - description: String, 
        - completed: boolean,
        - date added to daily events
    - score: Number 
        - (3pts for completing day1, 1pt day2; 0 pts and dropped day3)
        - (each goal has score)

User story:
(MOAR MODALS!!!)

- landing page:
    - log in button
        - > opens stormpath login form as modal
    - register form
    - tutorial button
    - register buton
        - > opens stormpath register form as modal
    - # of goals and # of goals completed

- user page
    - user edit button
        - > opens stormpath register form as modal
    - logout button
    - tutorial button
    - (circular) divs, click to:
        - > open goal form to:
                - add goal and steps
                - redirect to user page (close modal)

+features:

- change div colors per goal/objective status
    - green: active
    - yellow: missed 1 day

- make each div HWR specific?

- share to social media? (Passport?)

- integrate into calendar (finds empty time slots and injects objective)


---
---
App Build Steps:

- touch server.js --x--

- npm init --x--
	-'enter' through all the prompts

- express setup (npm install --save express) --x--
	- server.js
		- var express = require('express');
		- var app = express();

- set app port --x--
	- server.js
		- var port = process.env.PORT || 3000;

- packages setup --x--
	- npm install --save morgan mongoose cookie-parser express-stormpath
	- server.js
		- morgan
			- var morgan = require('morgan');
			- app.use(morgan('dev'));
		- mongoose
			- var mongoose = require('mongoose');
			- mongoose.connect('mongodb://localhost/db_name');
		- cookie-parser
			- var cookieParser = require('cookie-parser');
			- app.use(cookieParser());
		- storm-path
			- var stormPath = require('express-stormpath');
			- app.use(stormpath.init(app, {
	  			website: true,
				expand: {
			    	customData: true
				}
			}));

- mkdir public --x--
	- server.js
		- app.use(express.static('public'));
	- touch public/index.html
	- touch public/app.js
	- touch public/style.css

- middleware setup --x--

- listener setup --x--
	- server.js
		- app.on('stormpath.ready',function(){
  			console.log('Stormpath Ready');
  			app.listen(3000);
		});

- mkdir views --x--
	- server.js
		- app.use(express.static('views'));
	- touch views/home.html
	- touch views/profile.html

- stormpath link --x--
	- terminal
		- export STORMPATH_CLIENT_APIKEY_ID=xxxx
		- export STORMPATH_CLIENT_APIKEY_SECRET=xxxx
		- export STORMPATH_APPLICATION_HREF=xxxx

- test connection --o--
    - setup basic route
    - setup basic index.html/app.js
    - launch server (nodemon)    

- views build --o--
	- ?views/index.html?
	- views/home.html
	- views/profile.html

- models build --o--
    - mkdir models
        - touch models/user.js
        - touch models/goal.js
    - server.js
        - var User = require('./models/user');
        - var Goal = require('./models/goal');

- CDN --o--
    - js-cookie URL 
    - Angular
        
- model build --o--
    - user.js
        - var mongoose = require('mongoose');
        - var userSchema = new mongoose.Schema({ ... });
            - link taskSchema (embed or ref)
        - var User = mongoose.model('User', userSchema);
        - module.exports = User;
        - embed tasks (ref Complaints)
    - task.js
        - var mongoose = require('mongoose');
        - var taskSchema = new mongoose.Schema({ ... });
        - var Task = mongoose.model('Task', taskSchema);
        - module.exports = Task;
        	- ?embed/ref users?

- Story build --o--
    - server: 
        - server.js 
            - TEST 
    - client: --o--
        - TEST
        - index.html
        - app.js
            - user
            - task

- CSS --o--
	- bootstrap

- node server.js


---
---
Reference

- Git merging
    - https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d02/INSTRUCTOR/git_solo.md

- User auth (Stormpath)
    - https://stormpath.com/blog/build-nodejs-express-stormpath-app/



---
---
Comments/Notes:

- 


---
---
User Research:

Rnd.1

- User questions (min 5 users):
    - do you set goals?
    - do you find it difficult to achieve these?
    - what kind of goals do you set?
    - how do you set your goals? (break them down?)
    - do you use tools to help you achieve goals? such as?
    - how many goals do you attempt at any given time?
    - what do you feel is the ideal number of goals to attempt at a time?
    - what is your ideal timeframe for accomplishing goals?
    - anything to add?
    - build test

user1 (KZ):

- do you set goals?
    - yes, abstract
- do you find it difficult to achieve these?
    - yes, but should be or else not a goal
- what kind of goals do you set?
    - abstract
- how do you set your goals? (break them down?)
    - ideally break it down, but not usually
- do you use tools to help you achieve goals? such as?
    - write them down in notes app (phone, comp)
- how many goals do you attempt at any given time?
    - n/a
- what do you feel is the ideal number of goals to attempt at a time?
    - no
- what is your ideal timeframe for accomplishing goals?
    - no. depends on the category. Short term goal: couple weeks, longterm: min 1yr
- anything to add?
- build test

user2 (MD):

- do you set goals?
    - yes
- do you find it difficult to achieve these?
    - no?
- what kind of goals do you set?
    - professional, health, "me being a more efficient person" goals, life goals, financial goals
- how do you set your goals? (break them down?)
    - big idea, then Why, break it down. Do things in measurable process. Have to be tangible/achievable
- do you use tools to help you achieve goals? such as?
    - calendar, clear app 
- how many goals do you attempt at any given time?
    - 1 goal per category. New years on avg 2-3
- what do you feel is the ideal number of goals to attempt at a time?
    - don't feel 
- what is your ideal timeframe for accomplishing goals?
    - depends on goal
- anything to add? 
- build test
    - cancel button on join us form?
    - back to goals button on objectives form
    - reference Mint for usability
    - change language to more intuitive
    - prompt user for goals and objectives
        - after login, better prompt (mini intro)

user3 (JJ):

- do you set goals?
    - of course
- do you find it difficult to achieve these?
    - should be difficult
- what kind of goals do you set?
    - financial, personal growth, by category, health, physical, etc
- how do you set your goals? (break them down?)
    - varies
- do you use tools to help you achieve goals? such as?
    - trello, personal audit by seasons
- how many goals do you attempt at any given time?
    - multiple (avg 5ish)
- what do you feel is the ideal number of goals to attempt at a time?
    - no
- what is your ideal timeframe for accomplishing goals?
    - doesn't matter
- anything to add?
    - "Make rules just to break em - habitual line stepper"
- build test
    - difference btw login and join us?
    - repeat password confirmation
    - faq button/getting started
        - modal opens with picture walkthrough
        - if user no cookie, runs auto

user4 (KB):

- do you set goals?
    - yes
- do you find it difficult to achieve these?
    - no
- what kind of goals do you set?
    - learning, exercise, career, daily
- how do you set your goals? (break them down?)
    - by category. weekly goal and long term goal (no overlap). 1 small goal to achieve big goal
- do you use tools to help you achieve goals? such as?
    - notepad computer
- how many goals do you attempt at any given time?
    - 2
- what do you feel is the ideal number of goals to attempt at a time?
    - 2
- what is your ideal timeframe for accomplishing goals?
    - weekly, longterm could 3+ years
- anything to add?
    - cool to know that everyone is always working on goals behind the scenes
- build test
    - 2 logins repetitive
    - prefer login form first
    - join us weird - too much commitment
    - hates username (prefers email)
        - option to set username if want
    - password confirm
    - ignore button on tutorial if want
    - logout on the right
    - if no HWR, set on goal:objective to start
    - click goal and prompted with goal form:
        - goal
        - step
        - +add step
    - goals and steps vs goals and objectives
    - add click out events

user5 (TP):

- do you set goals?
    - yes
- do you find it difficult to achieve these?
    - no
- what kind of goals do you set?
    - short, medium, long
- how do you set your goals? (break them down?)
    - depends on type of goal, breaks down
- do you use tools to help you achieve goals? such as?
    - planning software (scrivener), excel spreadsheet
- how many goals do you attempt at any given time?
    - "constellation"
- what do you feel is the ideal number of goals to attempt at a time?
    - depends on scale; 3 major/time
- what is your ideal timeframe for accomplishing goals?
    - goals typically take years
- anything to add?
     - don't filter life through goals, life first goals along the way
     - recreation is goal oriented
- build test
    - doesn't like not being able to see anything
        - little description or user interactivity on landing
    - visalize all goals 



