import { Button, HStack, Select, Text } from "@chakra-ui/react";
import { HiMiniChevronDoubleLeft, HiMiniChevronDoubleRight, HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { useNavigate, useSearchParams } from "react-router-dom";
import useBooks from "../hooks/useBooks";
import useBookQueryStore from "../store";



const Pagination = () => {
  const { data } = useBooks();
  const { bookQuery: { page, limit }, setPage, setLimit } = useBookQueryStore();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  if (!data) return null;

  console.log('Total Items: ', data.totalItems);

  const totalPages = Math.ceil((data.totalItems) / limit);
  const currentPage = page;


  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    setPage(newPage);

    const paramsUrl = new URLSearchParams(params.toString());
    paramsUrl.set('page', newPage.toString());
    navigate(`?${paramsUrl.toString()}`);
  };


  return (
    <HStack spacing={{ base: 1, md: 3 }} mt={10} justifyContent="flex-start">
      <Text display={{ base: 'none', md: 'inline-block' }}>
        Page {currentPage} of {totalPages}
      </Text>
      <Button
        isDisabled={currentPage === 1}
        onClick={() => changePage(1)}
      >
        <HiMiniChevronDoubleLeft />
      </Button>
      <Button
        isDisabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <HiMiniChevronLeft />
      </Button>
      <Button
        isDisabled={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
      >
        <HiMiniChevronRight />
      </Button>

      <Button
        isDisabled={currentPage === totalPages}
        onClick={() => changePage(totalPages)}
      >
        <HiMiniChevronDoubleRight />
      </Button>
      <Select
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))} // Change the limit dynamically
        width="80px"
        ml={{ base: 0, md: 3 }}
        _focusVisible={{ boxShadow: 'none' }}
      >
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
        <option value={16}>16</option>
      </Select>

    </HStack>
  );
};

export default Pagination;
