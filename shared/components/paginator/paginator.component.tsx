import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';

type Props = {
  skip?: number;
  range: number[];
  handlePaginationChange: (number: number) => any;
};
const PaginatorComponent: FunctionComponent<Props> = ({
  skip,
  range,
  handlePaginationChange
}) => {
  skip = skip ? skip : 0;

  const [page, setPageNumber] = useState(1);

  useEffect(() => {
    return setPageNumber(skip);
  }, [skip]);

  const moveToNextPage = () => {
    if (page > 1) {
      handlePaginationChange(page - 1);
      return setPageNumber(page - 1);
    }

    return null;
  };

  const moveToPreviousPage = () => {
    if (page < range[range.length - 1]) {
      handlePaginationChange(page + 1);
      return setPageNumber(page + 1);
    }

    return null;
  };

  const moveToPage = (pageNumber: number) => {
    handlePaginationChange(pageNumber);
    return setPageNumber(pageNumber);
  };

  const renderPageIndicators = (num, index) => (
    <span key={index} onClick={() => moveToPage(num)}>
      {num}
    </span>
  );

  return (
    <Fragment>
      <div>
        {range.length > 1 ? (
          <button onClick={moveToNextPage}>
            <span>{'<'}</span> <span> Previous </span>
          </button>
        ) : null}

        {range.map(renderPageIndicators)}

        {range.length > 1 ? (
          <button onClick={moveToPreviousPage}>
            <span> Next</span> <span>{'>'}</span>
          </button>
        ) : null}
      </div>
    </Fragment>
  );
};

export default PaginatorComponent;
