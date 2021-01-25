import { useEffect, useState } from "react";
import getData from "../api";
import "./table.css";

function Table() {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    let Response = await getData();
    console.log(Response);
    setUsers(Response.results);
  }, []);
  const headers = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "height",
      label: "Height",
    },
    {
      key: "mass",
      label: "Mass",
    },
    {
      key: "hair_color",
      label: "Hair Colour",
    },
    {
      key: "skin_color",
      label: "skin Colour",
    },
    {
      key: "eye_color",
      label: "Eye Color",
    },
    {
      key: "birth_year",
      label: "Birth year",
    },
    {
      key: "gender",
      label: "Gender",
    },
    {
      key: "homeworld",
      label: "HomeWorld",
    },
    {
      key: "films",
      label: "Films",
    },
    {
      key: "species",
      label: "Species",
    },
    {
      key: "vehicles",
      label: "Vehicles",
    },
    {
      key: "starships",
      label: "Starships",
    },
  ];
  return (
    <div className="ApiTable">
      <input type="checkbox" id="nav-toggle" />
      {/* <!-- Sidebar --> */}
      <section class="sidebar">
        <div class="sidebar-brand">
          <h2>
            <span>
              <i class="fab fa-font-awesome-alt"></i>
            </span>
            <span>DATINFI</span>
          </h2>
        </div>

        <div class="sidebar-menu ">
          <ul>
            <li>
              <a href="#" class="active">
                <span>
                  <i class="fas fa-tachometer-alt"></i>
                </span>
                <span></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <i class="fas fa-home"></i>
                </span>
                <span></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <i class="fas fa-book-reader"></i>
                </span>
                <span></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <i class="fas fa-laptop-code"></i>
                </span>
                <span></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <i class="far fa-bell"></i>
                </span>
                <span></span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- Sidebar End Here -->

    <!-- Main Content --> */}
      <div class="main-content">
        {/* <!-- Navbar Header --> */}
        <header>
          <div class="header-title">
            <h2>
              <label for="nav-toggle">
                <i class="fas fa-bars"></i>
              </label>
            </h2>
          </div>

          <div class="search-wrapper">
            <i class="fas fa-search"></i>
            <input type="search" placeholder="Search Here" />
          </div>

          <div class="user-wrapper">
            <img
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
              alt="person"
            />
            <div>
              <h4>John</h4>
            </div>
          </div>
        </header>
        {/* <!-- Navbar Header End Here -->

            <!-- Main Content --> */}
        <main>
          <div class="container">
            <h2>PEOPLES LIST</h2>
            <ul class="responsive-table">
              <li class="table-header">
                {headers.map((item) => (
                  <div class="col col-1">{item.label}</div>
                ))}
              </li>
              {users.map((user) => (
                <li class="table-row">
                  {headers.map((item) => (
                    <div class="col col-1" data-label={item.label}>
                      {user[item.key]}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </main>
        {/* <!-- Main Content End Here --> */}
      </div>
      {/* <!-- Main Content End Here --> */}
    </div>
  );
}

export default Table;
