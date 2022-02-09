import {
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

function DashboardTableRow({ name, budget, userName, date, time }) {
  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        ps='0px'
        borderBottomColor='#56577A'>
        <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
            {name}
          </Text>
        </Flex>
      </Td>
      {budget && (
        <Td borderBottomColor='#56577A'>
          <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
            {budget}%
          </Text>
        </Td>
      )}
      {userName && (
        <Td borderBottomColor='#56577A'>
          <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
            {userName}
          </Text>
        </Td>
      )}
      {date && (
        <Td borderBottomColor='#56577A'>
          <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
            {date}
          </Text>
        </Td>
      )}
      {time && (
        <Td borderBottomColor='#56577A'>
          <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
            {time}
          </Text>
        </Td>
      )}
    </Tr>
  );
}

export default DashboardTableRow;