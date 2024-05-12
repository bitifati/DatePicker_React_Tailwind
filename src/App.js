import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./util/calendar";
import cn from "./util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { AiTwotoneCalendar } from "react-icons/ai";

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className=" h-screen relative justify-center flex-col gap-10 sm:divide-x  sm:w-1/2 mx-auto  h-screen items-center sm:flex-row flex-col">
      <div className="flex items-center">
        <input
          value={selectDate.toDate().toDateString()}
          className=" p-2 my-2 w-full bg-neutral-0 border border-neutral-200 rounded-lg dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-0"
        />
        <button onClick={toggleVisibility}>
          <div className="text-4xl text-neutral-300">
            <AiTwotoneCalendar />
          </div>
        </button>
      </div>
      {isVisible && (
        <div className="w-97 h-97 shadow-lg absolute ">
          <div className="flex justify-between items-center">
            <h1 className="select-none font-semibold">
              {months[today.month()]}, {today.year()}
            </h1>
            <div className="flex gap-10 items-center ">
              <GrFormPrevious
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
              <h1
                className=" cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                Today
              </h1>
              <GrFormNext
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-7 ">
            {days.map((day, index) => {
              return (
                <h1
                  key={index}
                  className="text-sm text-center h-14 w-14 grid place-content-center text-neutral-500 select-none"
                >
                  {day}
                </h1>
              );
            })}
          </div>

          <div className=" grid grid-cols-7 ">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                  >
                    <h1
                      className={cn(
                        currentMonth ? "" : "text-neutral-400",
                        today ? "bg-red-600 text-neutral-0" : "",
                        selectDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                          ? "bg-darkBlue text-neutral-0"
                          : "",
                        "h-10 w-10  grid place-content-center hover:bg-darkBlue hover:text-neutral-0 transition-all cursor-pointer select-none"
                      )}
                      onClick={() => {
                        setSelectDate(date);
                      }}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
}
