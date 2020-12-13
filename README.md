<img src="./.readme/noroff-light.png" width="160" align="right">

# Semester project 2

To create an e-commerce website that has an Admin and Front-End respectively. The Front-End should be responsive and the website is to be populated by an API supplied by Noroff. 
## Report 

#### Q.1 - How the project went?
This project has been a really fun and challenging assignment. I feel like I get more and more understanding of JS and what it does (scraping the top of the iceberg). Especially when it's working as intended. Overall I'm pleased with the result even though there are plenty of things I could have done better or differently. As you progress on the site new stuff and ideas pop up but time is a limit. I also feel like I shot myself in the foot not going for any CSS frameworks, or creating a better structure for it. Maybe it's because I wanted to learn more and explore deeper with just regular CSS and not tweak on pre-made components.. Anyways, the CSS files might be a big mess, but most of it is working I'm sure..

### Q.2 - What was difficult?
Many issues and struggles were made throughout this project. Having a great structure and overview of all the files and components is really important as the files keep stacking up towards the end of the project. When it comes to the JS part, most of the stuff required are stuff we have been doing previously but perhaps not as advanced where on our own, we have to figure out the next steps to make it work. Another difficult thing is the heartbreak of seeing bugs after bugs pop up without the slightest idea of why and not knowing how to fix it or where to add a line/function etc. Many console logs were made and some of the bugs got exterminated.

### Q.3 - What was easy?
Nothing was particularly easy but I would say following the video tutorials and creating the different simple components required wasn't too hard. On the other hand, converting some of these functions and using them differently wasn't that easy. Still it was a great tool to understand more of these methods and I feel like after going through them several times, I get a better and better understanding of how it works. 

### Q.4 - What I enjoyed the most?
Seeing results as I progress. It's not all fun and games when youre struggling with the code but as you see it bit by bit come to pieces it's a wonderful feeling. I also enjoyed the creative freedom of what we could choose for our own theme. Working on products you have interest in or like will probably boost your motivation especially when you look at images of these products for hours and hours. I don't have any big interests in leather shoes but I got an idea for a logo and went from there. Also enjoyed designing the layout even though I could have structured it a lot better with the CSS. I've learned my mistakes (hopefully).

### Q.5 - What I still think I need to learn or focus on more?
Plenty of things. To learn: more JS ofcourse! Being able to add other bonus functions to improve the site structure and playfullness. But sometimes "less is more" works fine when youre not that experienced. I need to learn to be more structured when it comes to time management. I'd rather be done a few days before than having some really hectic last days but it's easier said than done.
I would focus more on options and perhaps "shortcuts" like for instance different CSS frameworks. I could have saved a lot of time going for one instead of tweaking and messing up big chunks of code. Also by experiencing this projects progress, I will hopefully next time be more prepared for better scheduling knowing what takes more time than anticipated.

Overall a really fun assignment even though it tingled with my insanity sometimes.
Happy holidays!
-Erik Harmens


## Brief

You are to build an e-commerce website. You can choose the theme of your website. It should follow the site architect described below. 

You must design it using your favourite tool. Build the front-end and admin pages to update and delete products.

You must apply all that you have learned in:

- Interaction Design, 
- Design 2.
- JavaScript 2

It must have a good user experience and a good ui design, following today's trends and design patterns.

Build a front-end with a homepage, product category list page and product detail page. 

Build admin pages to update and delete products. 

> Building a checkout and payment system is not a part of the project.

### Level 1 is required.

### Level 2 and 3 are optional. 

# Level 1 Process (Required)

## Customer pages

### Home page

The home page must include:
- A hero banner with an image that is uploaded to Strapi.
- A list of featured products.
    - In Strapi each product must have a featured flag that can be turned on or off. When the flag is on, the product shall be displayed on the homepage.

### Products page

The products page must include:
- A list of all products added to Strapi. Each product must display its title, price and image. The product shall link to its products detail page.
- A search text box.  When searching, the products   that include the searched text in their **title** or **description** shall be listed.

### Product details page

The product details page must include:
- the product title,
- the product description,
- the product image,
- the product’s price,
- an add to cart button.

### Cart/Basket page 

The cart/basket page must display a list of all products added to cart.  Load the items that have been added to local storage and display them on the page.

Each product in the cart must display:
- the product title,
- the product’s price,
- a link to the product view page, and optionally display the product image,

After the list of products, display the total price of all the products in the cart.

> **Important:** the cart page is not a checkout page. No payments or user details are required to be taken.

## Admin section
The admin section must include the following features.

### Login/Logout 

Create an admin login form that allows administrator users to login.

- Use localStorage to keep the user logged in.
- When logged in, display a logout button in the layout the logs the user out.
- Logging out should not clear items not related to login from localStorage.

### Add/edit products

Create form(s) that allow products to be added and edited.  The form must allow the user to toggle whether a product is featured.

#### Product images

For adding/editing product images use either of these 2 methods:

1. Use a file upload field to upload images to Strapi, or
2. Use a text input that allows a URL to be entered. This allows an image from CDN to be used as the product image.

### Delete existing product

Allow products to be deleted. Before a product is deleted you must display a confirmation. The product should only be deleted if the user confirms. If the user cancels, the product must not be deleted.

## Level 2

- Category filters & price filter (on product list page)
- Product page image gallery

## Level 3

- Customer Registration
- Customers must not have access to admin section
- Customers will be able to create a list of favourites products

# Rules

- The website must be responsive on all devices.
- Use vanilla (regular) JavaScript for the project and split your code up using modules (imports/exports).
- No JavaScript frameworks (Vue.Js, React.js).
- You can use small JS libraries to perform tasks such as formatting dates with Moment.js
- You may choose a CSS framework but your design must override the basic framework styles. Your UI must appear indistinguishable from the framework base styles.
- Data must be updated from the pages and API calls you create. You are not allowed to edit the API content through the front end of the strapi admin website found at http://localhost:1337/.
- Copying and sharing of any code will result in your project being failed.

# Marking criteria

- All functionality in Level 1 should be implemented.
- The design should be coherent and provide a good user experience.
- All the customer-facing and admin pages must be fully responsive.
- Use appropriate names for Sass classes and folders.
- All code should be properly formatted and arranged with sensible variable and function names. Use modules (imports/exports) to organise your code.
Rules


## Strapi API

You will need Node.js v14.

To start the API change directory to `api` install the npm dependecies and then run `npm run develop`

```bash
$ cd api/
> npm install
> npm run develop
```

### User credentials

```bash
email: admin@admin.com
username: admin
password: Pass1234
```

## Submission

### Week 1

- Gant chart or KanBan board with todos in appropriate lanes(Trello or Notion). 
- Wireframes.

### Week 2

- XD or Figma prototype.

### Final submission

- Push all changes to Github Classroom Repository
- To Moodle submit PDF with a GitHub Repository URL inside of it. If Moodle forces you to put a ZIP, put the PDF inside the ZIP.
- No deployment is required, It will be tested on a local development environment.

## Time 

5 Weeks

> Deadline: 11 December 2020 at 23:59.

