// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, PrivateSet, Private } from '@redwoodjs/router'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import BlogLayout from 'src/layouts/BlogLayout'

import { useAuth } from './auth'
import NavBarLayout from './layouts/NavBarLayout/NavBarLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      {/* </Router> <Router> */}
      <PrivateSet unauthenticated='login'>
        <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
          <Route path="/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/users" page={UserUsersPage} name="users" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Roles" titleTo="roles" buttonLabel="New Role" buttonTo="newRole">
          <Route path="/roles/new" page={RoleNewRolePage} name="newRole" />
          <Route path="/roles/{id:Int}/edit" page={RoleEditRolePage} name="editRole" />
          <Route path="/roles/{id:Int}" page={RoleRolePage} name="role" />
          <Route path="/roles" page={RoleRolesPage} name="roles" />
        </Set>

        <Set wrap={NavBarLayout} title="Orders" titleTo="orders" buttonLabel="New Order" buttonTo="newOrder">
          <Route path="/orders/new" page={OrderNewOrderPage} name="newOrder" />
          <Route path="/orders/{id:Int}/edit" page={OrderEditOrderPage} name="editOrder" />
          <Route path="/orders/{id:Int}" page={OrderOrderPage} name="order" />
          <Route path="/orders" page={OrderOrdersPage} name="orders" />
          <Route path="/home" page={HomePage} name="home" />
        </Set>
        <Set wrap={NavBarLayout} title="Details" titleTo="details" buttonLabel="New Detail" buttonTo="newDetail">
          <Route path="/details/new" page={DetailNewDetailPage} name="newDetail" />
          <Route path="/details/{id:Int}/edit" page={DetailEditDetailPage} name="editDetail" />
          <Route path="/details/{id:Int}" page={DetailDetailPage} name="detail" />
          <Route path="/details" page={DetailDetailsPage} name="details" />
        </Set>
        <Set wrap={NavBarLayout} title="Drivers" titleTo="drivers" buttonLabel="New Driver" buttonTo="newDriver">
          <Route path="/drivers/new" page={DriverNewDriverPage} name="newDriver" />
          <Route path="/drivers/{id:Int}/edit" page={DriverEditDriverPage} name="editDriver" />
          <Route path="/drivers/{id:Int}" page={DriverDriverPage} name="driver" />
          <Route path="/drivers" page={DriverDriversPage} name="drivers" />
        </Set>
        <Set wrap={NavBarLayout} title="Trucks" titleTo="trucks" buttonLabel="New Truck" buttonTo="newTruck">
          <Route path="/trucks/new" page={TruckNewTruckPage} name="newTruck" />
          <Route path="/trucks/{id:Int}/edit" page={TruckEditTruckPage} name="editTruck" />
          <Route path="/trucks/{id:Int}" page={TruckTruckPage} name="truck" />
          <Route path="/trucks" page={TruckTrucksPage} name="trucks" />
        </Set>
        <Set wrap={NavBarLayout} title="Companies" titleTo="companies" buttonLabel="New Company" buttonTo="newCompany">
          <Route path="/companies/new" page={CompanyNewCompanyPage} name="newCompany" />
          <Route path="/companies/{id:Int}/edit" page={CompanyEditCompanyPage} name="editCompany" />
          <Route path="/companies/{id:Int}" page={CompanyCompanyPage} name="company" />
          <Route path="/companies" page={CompanyCompaniesPage} name="companies" />
        </Set>
        <Set wrap={NavBarLayout} title="Cars" titleTo="cars" buttonLabel="New Car" buttonTo="newCar">
          <Route path="/cars/new" page={CarNewCarPage} name="newCar" />
          <Route path="/cars/{id:Int}/edit" page={CarEditCarPage} name="editCar" />
          <Route path="/cars/{id:Int}" page={CarCarPage} name="car" />
          <Route path="/cars" page={CarCarsPage} name="cars" />
        </Set>
      </PrivateSet>
      <Route path="/" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
      <PrivateSet unauthenticated="login">
        <Set wrap={NavBarLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </PrivateSet>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
