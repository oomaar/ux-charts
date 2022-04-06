import { useEffect, useState } from "react";
// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

// Styles for the circular progressbar
import "react-circular-progressbar/dist/styles.css";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import * as GradientProgress from "@delowar/react-circle-progressbar";
import { SearchBar } from "components/Navbars/SearchBar/SearchBar";
import dashboardData from "../../data/dashboardData.json";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [deviceSearchTerm, setDeviceSearchTerm] = useState("");
  const devicesTable = dashboardData.devicesTable;

  const appPerformance = dashboardData.chartsData;
  console.log(
    "🚀 ~ file: Dashboard.js ~ line 32 ~ Dashboard ~ appPerformance",
    appPerformance
  );

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr", "2xl": "1fr 1fr" }}
        my="26px"
        gap="18px"
      >
        {/* Referral Tracking */}
        {appPerformance.map((app) => (
          <Card gridArea={{ md: "2 / 2 / 3 / 3", "2xl": "auto" }}>
            <Flex direction="column">
              <Flex justify="space-between" align="center" mb="40px">
                <Text color="#fff" fontSize="lg" fontWeight="bold">
                  {app.applicationName}
                </Text>
              </Flex>
              <Flex direction={{ sm: "column", md: "row" }}>
                <Flex
                  direction="column"
                  me={{ md: "6px", lg: "52px" }}
                  mb={{ sm: "16px", md: "0px" }}
                >
                  <Flex
                    direction="column"
                    p="22px"
                    pe={{ sm: "22e", md: "8px", lg: "22px" }}
                    minW={{ sm: "220px", md: "140px", lg: "220px" }}
                    bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                    borderRadius="20px"
                    mb="20px"
                  >
                    <Text color="gray.400" fontSize="sm" mb="4px">
                      Success
                    </Text>
                    <Text color="#fff" fontSize="lg" fontWeight="bold">
                      {app.successRate}%
                    </Text>
                  </Flex>
                  <Flex
                    direction="column"
                    p="22px"
                    pe={{ sm: "22px", md: "8px", lg: "22px" }}
                    minW={{ sm: "170px", md: "140px", lg: "170px" }}
                    bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                    borderRadius="20px"
                  >
                    <Text color="gray.400" fontSize="sm" mb="4px">
                      Failure
                    </Text>
                    <Text color="#fff" fontSize="lg" fontWeight="bold">
                      {app.failerRate}%
                    </Text>
                  </Flex>
                </Flex>
                <Box mx={{ sm: "auto", md: "0px" }}>
                  <GradientProgress
                    percent={app.successRate}
                    viewport
                    size={
                      window.innerWidth >= 1024
                        ? 200
                        : window.innerWidth >= 768
                        ? 170
                        : 200
                    }
                    isGradient
                    gradient={{
                      angle: 90,
                      startColor: "rgba(5, 205, 153, 0)",
                      stopColor: "#05CD99",
                    }}
                    emptyColor="transparent"
                  >
                    <Flex direction="column" justify="center" align="center">
                      <Text
                        color="#fff"
                        fontSize={{ md: "36px", lg: "50px" }}
                        fontWeight="bold"
                        mb="4px"
                      >
                        {app.successRate}%
                      </Text>
                    </Flex>
                  </GradientProgress>
                </Box>
              </Flex>
            </Flex>
          </Card>
        ))}
      </Grid>
      <Grid templateColumns={{ sm: "1fr", md: "1fr", lg: "1fr" }} gap="24px">
        {/* Projects */}
        <Card p="16px" overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="12px 0px 28px 0px">
            <Flex direction="column">
              <Text fontSize="lg" color="#fff" fontWeight="bold" pb="8px">
                All The Applications
              </Text>
              <Flex align="center">
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  <SearchBar setSearchTerm={setSearchTerm} />
                </Text>
              </Flex>
            </Flex>
          </CardHeader>
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px">
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Application Name
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Failure Percentage
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {appPerformance
                .filter((row) => {
                  if (searchTerm == "") {
                    return row;
                  } else if (
                    row.applicationName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return row;
                  }
                })
                .map((row) => {
                  return (
                    <DashboardTableRow
                      name={row.applicationName}
                      budget={row.failerRate}
                    />
                  );
                })}
            </Tbody>
          </Table>
        </Card>
        <Card p="16px" overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="12px 0px 28px 0px">
            <Flex direction="column">
              <Text fontSize="lg" color="#fff" fontWeight="bold" pb="8px">
                Devices
              </Text>
              <Flex align="center">
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  <SearchBar setSearchTerm={setDeviceSearchTerm} />
                </Text>
              </Flex>
            </Flex>
          </CardHeader>
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px">
                <Th
                  ps="0px"
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Application Name
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Username
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Date
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Time
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {devicesTable
                .filter((row) => {
                  if (deviceSearchTerm == "") {
                    return row;
                  } else if (
                    row.applicationName
                      .toLowerCase()
                      .includes(deviceSearchTerm.toLowerCase())
                  ) {
                    return row;
                  }
                })
                .map((row) => {
                  return (
                    <DashboardTableRow
                      name={row.applicationName}
                      userName={row.deviceUserName}
                      date={row.Date}
                      time={row.Time}
                    />
                  );
                })}
            </Tbody>
          </Table>
        </Card>
      </Grid>
    </Flex>
  );
}
