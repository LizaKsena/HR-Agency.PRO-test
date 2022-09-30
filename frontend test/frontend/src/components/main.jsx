/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addDays, subDays } from 'date-fns';
import { allArtThunk } from '../redux/actions/allArticleAction';
import Pagination from './pagination';
import Add from './Article/addArticle';
import Article from './Article/article';
import Loader from './loader';
import DateRangeFilter from './DateRange/DateRangeFilter';

export default function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage] = useState(3);
  const [input, setInput] = useState('');
  const [date, setDate] = useState('');
  //   {
  //     startDate: subDays(new Date(), 7),
  //     endDate: addDays(new Date(), 1),
  //     key: 'selection',
  //   },
  // ]);
  const art = useSelector((store) => store.art);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allArtThunk());
    // setLoading(false);
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const lastIndex = currentPage * rowPerPage;
  const firtsIndex = lastIndex - rowPerPage;
  const current = art.slice(firtsIndex, lastIndex);

  const onChange = (ranges) => {
    setDate(ranges);
  };

  return (
    <div className="d-flex justify-content-center m-5">

      <div className="flex-column w-100 ">
        <input
          className="form-control w-25 mb-2"
          value={input}
          type="text"
          placeholder="поиск по названию"
          onChange={changeHandler}
        />

        <DateRangeFilter onChange={onChange} />

        <Pagination
          rowPerPage={rowPerPage}
          totalRows={art.length}
          paginate={paginate}
        />
        {<Loader /> && (input ? (art.filter(((el) => el.title
          .toLowerCase()
          .includes(input.toLowerCase())))
          .map((el) => (
            <Article title={el.title} id={el.id} key={el.id} date={el.date} />
          )))
          : (current
            .map((el) => (
              <Article title={el.title} id={el.id} key={el.id} date={el.date} />
            ))
          ))}

      </div>
      <Add />
    </div>

  );
}
