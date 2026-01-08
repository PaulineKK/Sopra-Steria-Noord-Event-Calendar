Using this project;

1. clone the project
2. Use command npm i to install packages
3. Use command npm run start to run the project
4. open http://localhost:4200 to see the homepage

Setup:
I have added two routes that route to two pages.

1. Homepage -> This will be shown on the tv's. It shows the 5 upcoming events, with 2 of them featured. When you open on http://localhost:4200 you will this homepage.
2. Admin page -> Here is a list of all the events. It also has a button to add new events. You can access this page by opening http://localhost:4200/admin.

For as long as there no real BE to work with, I have used HTTP Interceptors to mock the data. I have added an events mock json with 5 events. When you add an event it will be added, but only temporary, when you refresh the app it will be gone.

This is an unfinished project, I will work on it in the coming weeks.
Unittests do not work as of yet.
