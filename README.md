# React Bug Tracker App

## Overview

This CRUD Bug Tracker App can be used to manage and keep track of bugs in the project you are working on. It has authentication features (login, sign up, log out) and bug data management features (read bugs data, add new bugs, edit bugs, delete bugs).

## Tech Stack
Tech Stack: React (including React Context) | Redux | CSS | Firebase<br>
Platform: Firebase

## Final Product

**Live Site:** https://bug-tracker-app-75bd0.firebaseapp.com

### Authentication
- Enter the form corretly to login or sign up.
- A notification is displayed when the form is submitted. If the submission is successful, you will be redirected to the dashboard page.
- Click on "Log in as a guest" and click "Log In" to use this app as a guest without signing up.

<img src="https://user-images.githubusercontent.com/82935527/133928109-5e72ebc4-2ddb-4ad8-97ef-d50cc844cb65.gif" alt="authentication" title="authentication">

### Dashboard (Bugs List)
- All bugs are listed in order of priority.
- The data is managed by Redux and stored in Firebase Realtime Database. 

### Bugs Detail Page
- Click on each bug item to go to the detail page of the selected bug.
- The detailed data of the bug are the title, details, steps, priority, status, assigned person, and creator.

<img src="https://user-images.githubusercontent.com/82935527/133928424-8270bd7f-bd35-4d94-b52f-caa62a697c3b.gif" alt="bug-detail" title="bug-detail">

### Adding New Bugs
- New bugs can be added to the list from the "Add New Bug" menu.

<img src="https://user-images.githubusercontent.com/82935527/133928578-3b077fcd-5b64-489b-9f19-00cf21cb63a5.gif" alt="add-new-bug" title="add-new-bug">

### Editing Bugs
- Bugs can be updated either from the dashboard (bugs list page) or from the bug details page.

<img src="https://user-images.githubusercontent.com/82935527/133929174-c8ea1447-caeb-47a7-891e-057820945dbb.gif" alt="edit-bug" title="edit-bug">

### Deleting Bugs
- Bugs can be deleted either from the dashboard (bugs list page) or from the bug details page.

<img src="https://user-images.githubusercontent.com/82935527/133929345-31d53b58-ec34-435e-92e9-8f98db418cd0.gif" alt="delete-bug" title="delete-bug">


## Further Information About the Code

1. React Context and Firebase Authentication are used to manage the authentication. Upon login, the token and its expiration date are stored in localStorage and a logout timer is set. When the expiration time expires, the user is automatically logged out.
2. For basic form validation for Authentication, custom hook is used. While the form is invalid, the form cannot be submitted.
4. Redux and Firebase Realtime Database are used to manage and store the data.
5. Redux also manages the UI state (menus, modals, notifications). 
6. Custom components (h1 titles, buttons, cards) for cleaner, more readable code.

## Getting Started

1. Fork and then clone this repository
2. Install npm with `npm install`
3. Create a .env file based on .env.example. Start a project on Firebase and obtain your API key etc.
4. Run `npm start` to start the server in development
5. For deployment, follow the Firebase Hosting instruction.
