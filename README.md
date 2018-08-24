# Yeoman Generator for React projects
[![Build Status](https://travis-ci.org/yurikrupnik/generator-mussia.svg?branch=master)](https://travis-ci.org/yurikrupnik/generator-mussia)

> Yeoman generator for creating Client or Fullstack applications,
 using ES2017, MongoDB, Express, React, and Node - built upon modules 
 from [React Boilerplate](https://github.com/yurikrupnik/react-boilerplate) 
 
[Yeoman](http://yeoman.io/learning/) is a generic scaffolding system allowing the creation of any kind of app. It allows for rapidly getting started on new projects and streamlines the maintenance of existing projects.

## Get started

Install `yo` and `generator-mussia`
```
npm i -g yo generator-mussia
```
This will install yo and our generator on your local machine.

## Usage
Run `mussia` generator:
```
yo mussia [your-app-name]
```
This will create your-app-name folder in your pwd.  
Generate your selected project.  
Install node_modules

**Please Note:** Incase of bcrypt installation, see [bcrypt](https://www.npmjs.com/package/bcrypt) Version Compatibility table.  
Package version depends from node version, adjust package.json accordanceץ
```
cd your-app-name
```
Run MongoDB
```
npm run start:mongo
```
Run project:
```
npm start
```

And build what ever you desire.
[For more information about the boilerplate](https://github.com/yurikrupnik/react-boilerplate)

## License
Copyright © Yuri Krupnik  |  The MIT License

