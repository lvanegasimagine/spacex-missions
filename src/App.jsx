import { useEffect, useState } from "react";
import * as API from "./services/Launches";
import logo from "./assets/SpaceX-Logo.png";

import { Heading, Box, Image, Flex, Text, Spacer, Tag } from "@chakra-ui/react";

import "dayjs/locale/es";
import LaunchItem from "./components/LaunchItem";

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then((data) => setLaunches(data));
  }, []);

  return (
    <>
      <Image m={4} src={logo} width={300} alt="logo de Space X" />
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch}/>
        ))}
      </section>
    </>
  );
}
