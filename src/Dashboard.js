import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

const navigate = [
  { name: "Dashboard ", href: "/", current: true },
  { name: "Region ", href: "region", current: false },
  { name: "Country ", href: "country", current: false },
  { name: "Location ", href: "location", current: false },
  { name: "Department ", href: "department", current: false },
  { name: "Employee ", href: "employee", current: false },
  { name: "Job ", href: "job", current: false },
  { name: "Product ", href: "product", current: false },
];
export default function Dashboard() {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {navigate.map((item) => {
                return (
                  <a class="nav-link" key={item.name} href={item.href}>
                    {item.name}
                  </a>
                );
              })}
              <li class="nav-item">{navigate.name}</li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
