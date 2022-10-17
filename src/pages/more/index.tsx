import React, { useEffect } from 'react';
import { More } from './more';
import { useSearchParams } from 'react-router-dom';
import { dispatch, RootState } from 'store/store';
import { getWeatherMore } from 'store/more';
import { useSelector } from 'react-redux';
import { useDebounce } from 'shared/hooks';
import { SEARCH_QUERY_PARAMS } from 'shared/constants';

export const MorePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const debounce = useDebounce(searchParams.get(SEARCH_QUERY_PARAMS.SEARCH) || '', 1000);
  const { city, isLoading, error, weather } = useSelector((state: RootState) => state.more);
  useEffect(() => {
    dispatch(getWeatherMore(searchParams.get(SEARCH_QUERY_PARAMS.SEARCH) || ''));
  }, [debounce]);
  const onChangeInput = (value: string) => {
    setSearchParams(`${SEARCH_QUERY_PARAMS.SEARCH}=${value}`, { replace: true });
  };

  return (
    <More
      isLoading={isLoading}
      error={error}
      city={city}
      weather={weather}
      searchValue={searchParams.get(SEARCH_QUERY_PARAMS.SEARCH) || ''}
      onChangeInput={onChangeInput}
    />
  );
};
