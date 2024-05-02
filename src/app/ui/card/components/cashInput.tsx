"use client";

import Image from "next/image";
import { rubik, work_sans } from "../../fonts";
import { ChangeEvent, useState } from "react";
import { formatCurrency, currencyToString } from "../../../lib/utils";

export default function CashInput({
    onChangeCash,
}: {
    onChangeCash: (arg0: number) => void;
}) {
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const newValue = formatCurrency(value);

        onChangeCash(currencyToString(newValue));
        setValue(newValue);
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
                    className={`${rubik.className} rounded-[4px] p-[15px] pl-[40px] text-[24px] leading-[28px] font-medium focus-within:border-solid border-[1px] border-inactive-border focus-within:border-midnight-purple text-purple-gray outline-none w-full placeholder:text-just-gray`}
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
            </div>
        </div>
    );
}
