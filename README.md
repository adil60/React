Food Delivery add

-> Header
  - Logo on left
  - Navbar on right(Home,AboutUs)

-> Body
  - Search filed
  - RestaurantContainer
    - RestaurantCards with Name,Image,Address

-> Footer
  - Contact Us
  - T&C
  - Locations



Two types of import/export

  1. Default
     export default Component
     import Component from "./Component.js"

  2. Named (use while exporting many things from one js file)
    export const component // while declaring and initializing
    import {Component } from "./Component.js"
  
  We can use named export with named export.