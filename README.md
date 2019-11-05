A hospital management web application built with react, redux, redux-form and django

The main server runs on 127.0.0.1:8000 after your build, localhost:3000 only runs to show you the frontend design.

This application aims at allowing a hospital properly collect data of their patients by registrating them through the patient registration portal in order to properly manage and monitor their progress, it also helps hospital management to monitor details about various departments and manage their staff

The registration and login portal links are only supposed to be made available to staff of the organization who will need to be authenticated before other private links are made available to them.

But for testing purposes, the links have been added to the navbar.

Because this application was deployed to heroku, the cloned project you will get will have both django apps and react apps and utilities all in the root folder.

Your folder structure will look like this

    accounts   --->Django
    Dashboard   --->Django
    Departments   --->Django
    media --->Django
    Patients --->Django
    public ---> React
    ReactDjango ---Django
    src    --->React
    .gitignore
    manage.py --->Django
    package.json --->React
    Procfile   --->For heroku
    READMe.md
    requirememts.txt ---> Django
    runtime.txt   --->For heroku
    yarn.lock     --->React

In any instance where you are only interested in the react design, you can create a named folder of your choice and drag all the react components inside it which will leave you with a folder structure like this

     accounts
    Dashboard
    Departments
    Frontend -- public
                src
                package.json
                yarn.lock
    media
    Patients
    ReactDjango
    manage.py
    Procfile
    requirememts.txt
    READMe.md
    runtime.txt

To run this application

    You must have Python and Node installed on your local machine
    Create a folder and inside the folder create a virtual environment and activate it
    clone this project inside your main folder. By now you should have 2 folders 1: Your virtual environment folder and 2: Folder housing this cloned project
    cd into the cloned folder and run
        pip install -r requirements.txt
        python manage.py makemigrations
        python manage.py migrate
        python manage.py createsuperuser
        npm install
        npm run-script build
        python mange.py runserver
        npm start

    whenever you make a change in the react components, remember to run "npm run-script build"
    
Demo : http://purityclinic.herokuapp.com/

You are welcomed to improve on this version if you so wish and submit a PR.
