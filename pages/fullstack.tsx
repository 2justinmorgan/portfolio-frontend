import React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const typography = (content: JSX.Element): JSX.Element => (
  <div style={{ padding: "0 0 20px 0" }}>
    <Typography component="span" variant="body2">
      {content}
    </Typography>
  </div>
);

const title = (content: string): JSX.Element => (
  <div>
    <b>{content}</b>:
  </div>
);

const strike = (content: JSX.Element): JSX.Element => (
  <span style={{ textDecoration: "line-through" }}>{content}</span>
);

const link = (text: string): JSX.Element => (
  <Link href={"/" + text.toLowerCase()}>
    <a>
      <b>{text}</b>
    </a>
  </Link>
);

const Fullstack: React.FunctionComponent = () => {
  return (
    <>
      {typography(
        <>
          {title("This App")}
          JustinLeeMorgan.com is a Python Flask app, with a React JavaScript
          front end, served by Apache via WSGI.
          {strike(
            <>
              The web app is hosted on a Raspberry Pi, running Arch Linux ARM
              OS, and connected to the network by redirecting ports through a
              home router.
            </>
          )}
          The DNS, administered by GoDaddy, forwards all domain requests to
          {strike(<>the home router&apos;s IP address.</>)}
        </>
      )}
      <div style={{ padding: "0 40px 0 40px" }}>
        {typography(
          <>
            {title("Update")}
            This app has been migrated to a CentOS 7 AWS instance. The reason is
            because my new home ISP blocks all incoming port 80 requests.
          </>
        )}
      </div>
      {typography(
        <>
          {title("Web Scraping")}
          Static content was scraped from web pages using the Python request
          library,{" "}
          <a
            href="https://docs.python-requests.org/"
            target="_blank"
            rel="noreferrer"
          >
            <b>requests</b>
          </a>
          . Because this server is limited to a single core processor using 1GB
          of memory, a web browser based driver is far too heavy for viewing JS
          mutated DOMs. This is why scraping is currently limited to only static
          pages. Upgrading this AWS instance will enable web scraping of dynamic
          pages.
        </>
      )}
      {typography(
        <>
          {title("Database")}
          This app&apos;s server has a database of international locations (see
          the {link("Database")} page). The server uses CentOS&apos;s RDBMS
          implementation of MySQL, MariaDB. All of the location data was
          gathered by using various APIs and web scrapers. For more information
          about the database, please contact me (see the {link("Links")} page).
        </>
      )}
    </>
  );
};

export default Fullstack;
