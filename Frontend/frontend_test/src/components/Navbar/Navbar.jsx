import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

function Navbar(){
    return (
        <>
        <div class="container-md pb-1 mb-2">
            <nav class="navbar navbar-expand-md navbar-dark fixed-top primaryColor navbarText">
                <div class="container-fluid">
                    <a class="navbar-brand navbarText" href="#">eShop</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- dropdown start --> */}
                    <div class="dropdown">
                        <button class="btn btn-outline-light primaryColor dropdown-toggle " type="button" id="dropdownMenuButton"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Kategorie
                        </button>
                        <ul class="dropdown-menu dropdownMenu1" aria-labelledby="dropdownMenuButton">
                            <li><button class="dropdown-item btn-light " type="button">Elektronika</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Moda</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Dom i ogród</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Dziecko</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Usługi</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Kolekcje</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Rękodzieło</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Supermarket</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Uroda</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Kultura i rozrywka</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Sport i Turystyka</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Motoryzacja</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Nieruchomości</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Kolekcje i Sztuka</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Firma i usługi</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Sprzedaj Lokalnie</button></li>
                        </ul>
                    </div>
                    {/* <!-- dropdown koniec--> */}

                    {/* <!-- User Details Dropdown start--> */}
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <a class="nav-link " href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control" type="search" placeholder="Czego potrzebujesz ?" aria-label="Search"/>
                            <button type="submit" class="btn btn-primary me-3 ">Wyszukaj</button>
                        </form>
                    <div class="dropdown">
                        <button class="btn btn-outline-light primaryColor dropdown-toggle m-3" type="button" id="dropdownMenuButton"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Witaj XYZ
                        </button>
                        <ul class="dropdown-menu dropdownMenu1" aria-labelledby="dropdownMenuButton">
                            <li><button class="dropdown-item btn-light " type="button">Twoje Konto</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Zakupy</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Ulubione</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Płatności</button></li>
                            <li><button class="dropdown-item btn-light " type="button">Usługi</button></li>
                        </ul>
                    </div>
                    </div>
                    {/* <!-- User Details Dropdown stop--> */}
                </div>
            </nav>
        </div>
        </>
    );
}

export default Navbar;