import './App.css';

function App() {
  return ( 
    <>
   
    {/* babel compiles jsx 
    Single page vs Multipage application

    In single page application, first time the requets is made to browser, it loads all html, css and js files, after which js takes over the task of changing content of website without reloading, by making api calls and fetching only data
    In multi page 
    */}
    {/* // This entire part below is called as JSX -> it contains html wherein javascript can also be used, in html we use class, whereas in jsx we use className because class is reserved keyworkd
    // Similarly for in jsvascript Fis used for looping and in html is used for lable tag, hence in jsx we use htmlFor in labels insetaed of for
    // Jsx return only one tag
    // return () is written because js=avascript can insert ; at the end, which is not required for our jsx, optional to add () */}
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Text Utils</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">About</a>
        </li>
      
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}

export default App;
