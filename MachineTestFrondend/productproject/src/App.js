// import logo from './logo.svg';
// import './App.css';

import { Route, Routes } from "react-router-dom";
import ProductForm from "./Product/ProductForm";
import Mainpage from "./Product/Mainpage";
import ProductView from "./Product/ProductView";
import ProductEdit from "./Product/ProductEdit";
import CategoriesView from "./Product/CategoriesView";
import CategorieAdd from "./Product/CategorieAdd";
import SubCategoriesView from "./Product/SubCategoriesView";
import SubCategoryAdd from "./Product/SubCategoryAdd";
import CustomerNav from "./Product/CustomerNav";
import CustomerViewCategorie from "./Product/CustomerViewCategorie";
import CustomerViewSubcategorie from "./Product/CustomerViewSubcategorie";
import CustomerProductView from "./Product/CustomerProductView";
import LoginForm from "./Product/LoginForm";
import Register from "./Product/Register";
import CustomerWishlist from "./Product/CustomerWishlist";
import CustomerHome from "./Product/CustomerHome";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <Routes>
        <Route path="/adminhome" element={<Mainpage/>} />
        <Route path="/addproduct" element={<ProductForm/>} />
        <Route path="/productview" element={<ProductView/>} />
        <Route path="/productedit" element={<ProductEdit/>} />
        <Route path="/categoriesview" element={<CategoriesView/>} />
        <Route path="/categoriesadd" element={<CategorieAdd/>} />
        <Route path="/subcategoriesview" element={<SubCategoriesView/>} />
        <Route path="/addsubcategory" element={<SubCategoryAdd/>} />

        <Route path="/cusnav" element={<CustomerNav/>} />
        <Route path="/cushome" element={<CustomerHome/>} />
        <Route path="/viewcustomercategorie" element={<CustomerViewCategorie/>} />
        <Route path="/cussubcategoriesview" element={<CustomerViewSubcategorie/>} />
        <Route path="/cusproductview" element={<CustomerProductView/>} />


        <Route path="/" element={<LoginForm/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/wishlist" element={<CustomerWishlist/>} />
      </Routes>
      
    </div>
  );
}

export default App;
