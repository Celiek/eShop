import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

library.add(faFacebook, faGithub, faTwitter);

function Footer() {
  return (
    <MDBFooter
      className="text-center text-lg-start text-muted primary-Footer-Color w-100 font-white"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block font-white">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset ">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 ">
                <MDBIcon icon="gem" className="me-3 font-white" >
                eShop
                </MDBIcon>
              </h6>
              <p className="font-white">
                eShop to internetowy sklep oferujący możliwość sprzedaży i
                zakupu przedmiotów na rynku lokalnym.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 font-white">
              <h6 className="text-uppercase fw-bold mb-4">Przydatne Linki</h6>
              <p>
                <a href="#!" className="text-reset">
                  Strona główna
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Twoje Konto
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  O nas
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 font-white">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Wystaw przedmiot
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Twoje zakupy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Regulamin
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pomoc
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 font-white">
              <h6 className="text-uppercase fw-bold mb-4">Twórcy</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Celiek https://www.github.com/Celiek
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Matio http://www.github.com/Matio
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> Kontakt do Celiek
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> Kontakt do Matio
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4 secondary-Footer-Color">
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="#">
          eShop.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
