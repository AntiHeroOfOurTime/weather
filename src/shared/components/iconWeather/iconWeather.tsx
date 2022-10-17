import React from 'react';
import { weatherCode } from 'shared/constants';

interface IProps {
  className?: string;
  name: number;
}

export const IconWeather = ({ className, name }: IProps) => {
  return <>{weatherCode.find((el) => el.code === name)?.icon(className) || ''}</>;
};
