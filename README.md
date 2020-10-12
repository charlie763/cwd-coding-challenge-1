# Welcome to the CWD Coding Challenge!

After cloning make sure to run `npm install` and then `npm start` to install the dependencies and to laungh the server.

The Dependencies this package contains other than the defaults are
* "node-sass": "^4.14.1"
* "react-router-dom": "^5.2.0"

The first is to use Sass/Scss instead of CSS, but you can also install your own dependency to use a styling library such as Semantic, Bulma, Bootstrap, etc...

The second is to use react-router for the Nav Bar. If you prefer an alternative, that is fine as well.

The purpose of this Code Challenge isn't simply to test you on your abilities but also to show you the structure and hygiene we prefer and expect from our developers within our projects so that we don't have multiple different structures for each project.

# Objectives

## Main Page/ Main Objective

![main card][main-card]

[main-card]: https://github.com/alinan-vn/cwd-coding-challenge-1/blob/master/read-me-images/main-card.PNG "main-card"

* Day or Night Image
* Temperature
* Weather Text
* Update Time

### Day or Night

The image should either be the Sun or the Moon depending on the time of day set by this api

![specific api][spec-api]

[spec-api]: https://github.com/alinan-vn/cwd-coding-challenge-1/blob/master/read-me-images/specific-api.PNG "spec-api"

Looking at the API, the best way to do this is using the "IsDayTime" value.

### Temperature

Looking at the above API, the best way to do this is using the "Temperature" value.

### Weather Text

This will be slightly less forward and depends on the two values "HasPrecipitation" and "WeatherText" both seen in the API above. 

Essentially, if "HasPrecipitation" is `true`, the first part of the text will say 'It is currently raining...' and if `false` it would say 'It is currently not raining...'

### Update Time

This depends on the value "LocalObservationDateTime" also in the API above. Notice that the vallue isn't in a time format, therefore you will need to filter and translate it to the appropriate format. Furthermore, the time format is NOT in the 24 hour format BUT in the 12 hour AM or PM format.

## Finished Version

![finished-version][finished-version]

[finished-version]: https://github.com/alinan-vn/cwd-coding-challenge-1/blob/master/read-me-images/finished-version.PNG "Finished-Version"

This is what the end product should look like
* Nav Bar
* Footer
* Styling

### Nav Bar

The Nav Bar should be functional and should switch components when click on. These are what the other two components should look like when clicked on.

![about-view][about]

[about]: https://github.com/alinan-vn/cwd-coding-challenge-1/blob/master/read-me-images/about.PNG "About"

![contact-view][contact]

[contact]: https://github.com/alinan-vn/cwd-coding-challenge-1/blob/master/read-me-images/contact.PNG "Contact"

Note that that all you need to do is make sure that the component changes. This is verified visually through the text and later verified through code.
Also Note that the Footer is also always displayed beneath the page component.

### Footer

The Footer can be viewed in the above two images and must always be in view at the bottom of the content displayed.

### Styling

You can use a styling library, or pure CSS, or pure Sass/Scss if you want, but note a few items.

First, the Nav Bar items should be arranged so the first item is to the left and the rest are to the right. Note that the left and right padding of the Nav Bar are even.

Second, the Home card view of the weather info is displayed in the center of the page.

Third, note that the Footer and Nav Bar font colors are different.
Fourth, note that the images of the Sun and Moon are different file sizes but should seen as the same size when rendered.

## Info and Links

* API http://dataservice.accuweather.com/currentconditions/v1/348308?apikey=BL84oxFsikLXeqZkAcPefEG8okzzcGzu&language=en-us
* Color 1 #1e947a
* Color 2 #dd9494

## Final Notes

The purpose of this code challenge is test your React knowledge and styling capabilities based off of images along. It is also to test your functions and methodologies with manipulating, translating, and displaying fetch data. Please note the file structure as well and try to adhere to it as much as possible without destroying and restructuring the folders.

The For the sake of time and priority, the Main Page weather card info is the top priority with the rest of the Nav Bar and Footer objectives to be left for last.