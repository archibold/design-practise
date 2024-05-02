"use client";

import { useState } from "react";
import Actions from "./components/actions";
import MonthSelector from "./components/monthSelector";
import CashInput from "./components/cashInput";
import Summary from "./components/summary";

export default function Content() {
    const [cash, setCash] = useState(0);
    const [months, setMonths] = useState(1);

    const onChangeCash = (cash: number) => {
        setCash(cash);
    };

    const onChangeMonth = (months: number) => {
        setMonths(months);
    };

    return (
        <div className="mx-[24px] md:mx-[40px] my-[32px] flex flex-col gap-[40px] md:gap-[32px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                <CashInput onChangeCash={onChangeCash} />
                <MonthSelector onChangeMonth={onChangeMonth} />
            </div>
            <Summary cash={cash} months={months} />
            <Actions />
        </div>
    );
}
