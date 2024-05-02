"use client";

import Image from "next/image";
import { rubik, work_sans } from "../../fonts";
import { Months } from "../../../lib/months";
import { useState } from "react";

export default function MonthSelector({
    onChangeMonth,
}: {
    onChangeMonth: (arg0: number) => void;
}) {
    const dateWithNextMonthFromToday = () => {
        const newDate = new Date();
        newDate.setMonth(newDate.getMonth() + 1);

        return newDate;
    };
    const [date, setDate] = useState<Date>(dateWithNextMonthFromToday());

    function setNewDate(param: number) {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() + param);

        if (newDate.getTime() >= new Date().getTime()) {
            setDate(newDate);

            //count months
            let months_counter = newDate.getMonth() - new Date().getMonth();

            //add 12 for every year
            months_counter +=
                (newDate.getFullYear() - new Date().getFullYear()) * 12;

            onChangeMonth(months_counter);
        }
    }

    return (
        <div className="flex flex-col gap-[6px]">
            <p
                className={`${work_sans.className} font-medium text-[14px] leading-[18px] text-midnight-grey`}
            >
                Every month until
            </p>
            <div className="flex gap-[6px] justify-center items-center px-[10px] p-[6px] h-[60px] rounded-[4px] border-[1px] border-inactive-border w-full">
                <button
                    onClick={() => setNewDate(-1)}
                    className="w-[24px] h-[24px] rounded-[5px] hover:bg-gray-hover active:bg-gray-pressed"
                >
                    <Image
                        className="text-midnight-grey"
                        src="/chevronLeft.svg"
                        alt="left arrow"
                        height={24}
                        width={24}
                    />
                </button>
                <div className="flex flex-1 flex-col justify-center items-center">
                    <h3
                        className={`${rubik.className} text-purple-gray text-[16px] font-medium leading-[20px]`}
                    >
                        {Months[date.getMonth()]}
                    </h3>
                    <p
                        className={`${work_sans.className} text-purple-gray text-[12px] font-normal leading-[16px]`}
                    >
                        {date.getFullYear()}
                    </p>
                </div>
                <button
                    onClick={() => setNewDate(+1)}
                    className="w-[24px] h-[24px] rounded-[5px] hover:bg-gray-hover active:bg-gray-pressed"
                >
                    <Image
                        className="text-midnight-grey"
                        src="/chevronRight.svg"
                        alt="right arrow"
                        height={24}
                        width={24}
                    />
                </button>
            </div>
        </div>
    );
}
