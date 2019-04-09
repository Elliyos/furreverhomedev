import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { GithubCircle } from "mdi-material-ui";

const Footer = props => {
  return (
    <>
      <Divider style={{ marginTop: "48px", marginBottom: "24px" }} />
      <footer
        style={{ marginBottom: "24px", whiteSpace: "nowrap" }}
        id="footer"
      >
        <div style={{ textAlign: "center" }}>
          <Typography variant="caption" component="span">
            ©{new Date().getFullYear()} Furrever Homes{" "}
            <Hidden only={["xs", "sm"]}>–</Hidden>
            <Hidden only={["xl", "lg", "md"]}>
              <br />
            </Hidden>{" "}
            kylemccaw15@augustana.edu
          </Typography>
          <a
            href="https://github.com/elliyos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GithubCircle />
            </IconButton>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
