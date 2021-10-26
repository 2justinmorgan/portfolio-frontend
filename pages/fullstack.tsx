import React from "react";
import Paragraph from "../components/Paragraph/Paragraph";
import Title from "../components/Title/Title";
import Strike from "../components/Strike/Strike";
import Link from "../components/Link/Link";

const Fullstack: React.FunctionComponent = () => {
  return (
    <>
      <Paragraph>
        <Title>This App</Title>
        JustinLeeMorgan.com is a Python Flask app, with a React JavaScript front
        end, served by Apache via WSGI.
        <Strike>
          The web app is hosted on a Raspberry Pi, running Arch Linux ARM OS,
          and connected to the network by redirecting ports through a home
          router.
        </Strike>
        The DNS, administered by GoDaddy, forwards all domain requests to
        <Strike>the home router&apos;s IP address.</Strike>
      </Paragraph>
      <Paragraph padding={{ top: 0, right: 40, bottom: 20, left: 40 }}>
        <Title>Update</Title>
        This app has been migrated to a CentOS 7 AWS instance. The reason is
        because my new home ISP blocks all incoming port 80 requests.
      </Paragraph>
      <Paragraph>
        <Title>Web Scraping</Title>
        Static content was scraped from web pages using the Python request
        library,{" "}
        <Link uri="https://docs.python-requests.org/" isExternal={true}>
          requests
        </Link>
        . Because this server is limited to a single core processor using 1GB of
        memory, a web browser based driver is far too heavy for viewing JS
        mutated DOMs. This is why scraping is currently limited to only static
        pages. Upgrading this AWS instance will enable web scraping of dynamic
        pages.
      </Paragraph>
      <Paragraph>
        <Title>Database</Title>
        This app&apos;s server has a database of international locations (see
        the <Link uri="database">Database</Link> page). The server uses
        CentOS&apos;s RDBMS implementation of MySQL, MariaDB. All of the
        location data was gathered by using various APIs and web scrapers. For
        more information about the database, please contact me (see the{" "}
        <Link uri="links">Links</Link> page).
      </Paragraph>
    </>
  );
};

export default Fullstack;
