// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import BlogLayout from 'src/layouts/BlogLayout'

import { useAuth } from './auth'
import NavBarLayout from './layouts/NavBarLayout/NavBarLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={NavBarLayout} title="Cars" titleTo="cars" buttonLabel="New Car" buttonTo="newCar">
        <Route path="/cars/new" page={CarNewCarPage} name="newCar" />
        <Route path="/cars/{id:Int}/edit" page={CarEditCarPage} name="editCar" />
        <Route path="/cars/{id:Int}" page={CarCarPage} name="car" />
        <Route path="/cars" page={CarCarsPage} name="cars" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
      <PrivateSet unauthenticated="home">
        <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </PrivateSet>
      <Set wrap={NavBarLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
