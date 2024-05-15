"use client";

import Image from "next/image";
import { rubik, work_sans } from "../../fonts";
import { ChangeEvent, useState } from "react";
import { formatCurrency, currencyToString } from "../../../lib/utils";

export default function CashInput({
    onChangeCash,
    onChangeCurrency,
    defaultCurrency,
}: {
    onChangeCash: (arg0: number) => void;
    onChangeCurrency: (arg0: string) => void;
    defaultCurrency: string;
}) {
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const newValue = formatCurrency(value);

        onChangeCash(currencyToString(newValue));
        setValue(newValue);
    };

    const onChangeCurrencyElement = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        onChangeCurrency(value);
    };

    return (
        <div className="flex flex-col gap-[6px]">
            <p
                className={`${work_sans.className} font-medium text-[14px] leading-[18px] text-midnight-grey`}
            >
                I can donate
            </p>
            <div className="relative">
                <input
                    className={`${rubik.className} rounded-[4px] p-[15px] pl-[40px] pr-[110px] text-[24px] leading-[28px] font-medium focus-within:border-solid border-[1px] border-inactive-border focus-within:border-midnight-purple text-purple-gray outline-none w-full placeholder:text-just-gray`}
                    placeholder="0.00"
                    type="text"
                    value={value}
                    pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                    onChange={onChange}
                ></input>
                <div className="absolute h-[24px] w-[24px] left-[8px] top-[18px] flex justify-center items-center">
                    <Image
                        className="text-midnight-grey"
                        src="/dolar.svg"
                        alt="Dolar sign"
                        height={18}
                        width={9.35}
                    />
                </div>

                <select
                    className={`${rubik.className} font-medium absolute text-purple-gray right-[16px] top-[18px] text-[16px] leading-[28px] border-l-[1px] px-[16px] outline-none`}
                    defaultValue={defaultCurrency}
                    onChange={onChangeCurrencyElement}
                >
                    <option>USD</option>
                    <option>PLN</option>
                </select>
            </div>
        </div>
    );
}
