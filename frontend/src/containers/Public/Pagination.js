import React, { useEffect, useState } from "react";
import PageNumber from "./PageNumber";
import { useSelector } from "react-redux";

const Pagination = ({ page }) => {
  const { count, posts } = useSelector((state) => state.post);

  const [arrPage, setArrPage] = useState([]);

  const [currentPage, setCurrentPage] = useState(+page || 1);

  const [isHideEnd, setIsHideEnd] = useState(false);

  const [isHideStart, setIsHideStart] = useState(false);

  useEffect(() => {
    let max = Math.floor(count / posts.length);
    let end = currentPage + 1 > max ? max : currentPage + 1;
    let start = currentPage - 1 <= 0 ? 1 : currentPage - 1;

    let temp = [];

    for (let i = start; i <= end; i++) {
      temp.push(i);
    }
    setArrPage(temp);

    currentPage >= (max - 1) ? setIsHideEnd(true) : setIsHideEnd(false);
    currentPage <= 2 ? setIsHideStart(true) : setIsHideStart(false);

    // if (currentPage >= max - 1) {
    //   setIsHideEnd(true);
    // } else {
    //   setIsHideEnd(false);
    // }

    // if(){

    // }
    // let arrayNumber = [];
    // for (let i = 0; i < max; i++) {
    //   arrayNumber.push(i);
    // }
    // return arrayNumber.length > 3 ? arrayNumber.filter(i => i < 3) : arrayNumber;
  }, [count, posts, currentPage]);

  // const handdlePageNumber = () => {
  //   let max = Math.floor(count / posts.length);
  //   let arrayNumber = [];
  //   for (let i = 0; i < max; i++) {
  //     arrayNumber.push(i);
  //   }
  //   return arrayNumber.length > 3
  //     ? arrayNumber.filter((i) => i < 3)
  //     : arrayNumber;
  // };

  return (
    <div className="flex items-center justify-center gap-2 py-5 overflow-hidden">
      {!isHideStart && (
        <PageNumber
          icon={"<<"}
          type="end"
          setCurrentPage={setCurrentPage}
          text={1}
        />
      )}
      {!isHideStart && <PageNumber text={"..."} />}
      {arrPage.length > 0 &&
        arrPage.map((item) => {
          return (
            <PageNumber
              key={item}
              text={item}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          );
        })}
      {!isHideEnd && <PageNumber text={"..."} />}
      {!isHideEnd && (
        <PageNumber
          icon={">>"}
          type="end"
          setCurrentPage={setCurrentPage}
          text={Math.floor(count / posts.length)}
        />
      )}
    </div>
  );
};

export default Pagination;
