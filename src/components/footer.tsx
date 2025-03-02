import React from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, Link } from "react-router-dom";
import parse from "html-react-parser";
import { FooterRes } from "../typescript/response";
import { Link as LinkRef } from "../typescript/pages";

export default function Footer({
  footer,
  navMenu,
}: {
  footer: FooterRes;
  navMenu: LinkRef[];
}) {
  return (
    <footer>
      <div className="max-width footer-div">
        <div className="col-quarter">
          <Link to="/">
            {footer.logo ? (
              <img
                {...(footer?.logo?.$?.url as {})}
                src={footer.logo.url}
                alt="contentstack logo"
                title="contentstack"
                className="logo footer-logo"
              />
            ) : (
              <Skeleton width={100} />
            )}
          </Link>
        </div>
        <div className="col-half">
          <nav>
            <ul className="nav-ul">
              {navMenu.length ? (
                navMenu?.map((link) => (
                  <li key={link.title} className="footer-nav-li">
                    <NavLink {...(link.$?.title as {})} to={link.href}>
                      {link.title}
                    </NavLink>
                  </li>
                ))
              ) : (
                <li className="footer-nav-li">
                  <Skeleton width={200} />
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="col-quarter social-link"></div>
      </div>
      {footer.copyright ? (
        <div className="copyright" {...(footer.$?.copyright as {})}>
          {parse(footer.copyright)}
        </div>
      ) : (
        <div className="copyright">
          <Skeleton width={500} />
        </div>
      )}
    </footer>
  );
}
