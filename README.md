# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Angular Book App

| **Objectives** |
| :---- |
| Get practice building an Angular client side |
| Use $http to access a RESTful API |
| Practice routing in Angular using `ngRoute` |

In this lab, you'll be creating a simple library app to keep track of books.

When a user goes to `/`, they should see a list of all of the books in the API. When a user goes to `/books/:id`, they should see a single book. On the `/books/:id` page a user should be able to edit or delete a book.

Your data (a list of books) is available at `https://super-crud.herokuapp.com/books`. You and your classmates will all be working with this database, so things might get a little crazy. If there are no books left or far too many books, feel free to reset the database by clicking [the reset button](http://super-crud.herokuapp.com/reset). Don't do this without warning your classmates though, otherwise they might be puzzled why their newly created book resources aren't appearing in the database.

## Expectations

Your finished product will

  1. The successfully route the user to an index page at `/`. That page will:
    * display all of the books.
    * show the image, title, author, and release date of each book.
    * include a link to the show book page on the title of each book.
  2. Successfully route the use to a show book page (`/books/:id`). The show page will:
    * display all of the data about the specific book.
    * have a delete button that deletes the specific book from the database and, when successfully deleted, redirects the user to the home page.
    * have an edit button that reveals a form for the user to edit the attributes of the book.  
    * The form will have a save button that sends the edits to the database and, when successfully updated, redirects the user to the home page.
    * have a cancel button that does not save any of the changes the user just made.

## Getting Started

1. Clone this into your `wdi` folder on your local machine.
2. Change directories into `angular-routing-lab`.
3. Run `budo -P --host=localhost --open` from the Terminal to start your server and open your app in the browser.
1. Include `ngRoute`:
  * Add the CDN for `ngRoute` in `index.html`.
  * Add the `ng-view` directive inside the Bootstrap `.col-md-6` in `index.html`

2. Configure your routes, build your templates, build your controllers, win.

## Stretch Challenges

2. **Allow the user to edit the book image:** allow the user to change the URL for the book image.
3. **Add filters to organize the books index page:** add a search bar to filter the books by your search, or buttons to sort them alphabetically by author name or book title.

## Submission

Make a pull request with a 0 - 5 rating of your comfort of the assignment, a 0 - 5 rating of your completeness on the assignment, and a note on your experience completing the lab. Make sure your pull request is going to `sf-wdi-27-28/angular-routing-lab`. *Check the base fork before you submit!*
