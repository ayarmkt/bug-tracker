# React Bug Tracker App

## Overview

This Bug Tracker App can be used to manage and keep track of the bugs in a project you are working on. It had an authentication functions (login, signup, logout) as well as bug data management functions (read, add, edit, delete).

## Tech Stack
Tech Stack: React (including React Context) | Redux | CSS | Firebase<br>
Platform: Firebase

## Final Product

**Live Site:** https://bug-tracker-app-75bd0.firebaseapp.com

### Authentication
- Utilized Firebase Authentication to Login and Sign Up.
- Basic form validation is done by using a custom hook. The form cannot be submitted while the form is invalid. 
- Notification displayed on form submition (pending, error). If the submition succeeded, the page is redirected to the dashboard page.
- Authentication is managed by React Context. Upon login, the token and its expiration date are stored in localStorage and a logout timer is set. When it expires, the user is automatically logged out.

<img src="https://user-images.githubusercontent.com/82935527/133928109-5e72ebc4-2ddb-4ad8-97ef-d50cc844cb65.gif" alt="authentication" title="authentication">

### Dashboard (Bugs List)
- All bugs are listed in order of priority.
- The data is managed using Redux. 

### Bugs Detail Page
- Clicking on individual bug item will redirect to the detail page of the selected bug.

<img src="https://user-images.githubusercontent.com/82935527/133928424-8270bd7f-bd35-4d94-b52f-caa62a697c3b.gif" alt="bug-detail" title="bug-detail">

### Adding New Bugs
- New bugs can be added to the list from the "Add New Bug" menu.

<img src="https://user-images.githubusercontent.com/82935527/133928578-3b077fcd-5b64-489b-9f19-00cf21cb63a5.gif" alt="add-new-bug" title="add-new-bug">

### Editing Bugs
- Bugs can be updated from either the dashboard (bugs list page) or the bug detail page.

<img src="https://user-images.githubusercontent.com/82935527/133929174-c8ea1447-caeb-47a7-891e-057820945dbb.gif" alt="edit-bug" title="edit-bug">

### Deleting Bugs
- Bugs can be deleted from either the dashboard (bugs list page) or the bug detail page.

<img src="https://user-images.githubusercontent.com/82935527/133929345-31d53b58-ec34-435e-92e9-8f98db418cd0.gif" alt="delete-bug" title="delete-bug">


## Further Information About the Code

1. React Context is used to manage Authentication. Firebase Authentication is used behind the scenes. 
2. Redux is used to manage the data. bug-slice manages bug-related state and ui-slice manages the UI state (menu, modal, notification). 
3. Bugs data are stored in Firebase Realtime Database.
4. 
5. Custom components (h1 title, buttons, Card) are used for cleaner and easy-to-read code

## Getting Started

1. Fork and then clone this repository
2. Install npm with `npm install`
3. Create a .env file based on .env.example. Start a project on Firebase and obtain your API key etc.
4. Run `npm start` to start the server in development
5. For deployment, follow the Firebase Hosting instruction.
