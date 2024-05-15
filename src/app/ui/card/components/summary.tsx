import { formatCurrency, formatDateToString } from "../../../lib/utils";
import { inter, work_sans } from "../../fonts";

export default function Summary({
    cash,
    months,
}: {
    cash: number;
    months: number;
}) {
    const totalCash = cash
        ? `$${formatCurrency((cash * months).toString())}`
        : "$0";

    const cashToString = cash ? `$${formatCurrency(cash.toString())}` : "$0";
    return (
        <div className="flex gap-[24px] flex-col border-inactive-border border-[1px] border-solid md:border-0">
            <div className="flex gap-[8px] items-center pt-[24px] md:pt-0 px-[16px] ">
                <h3
                    className={`${work_sans.className} flex-1 text-[16px] md:text-[20px] leading-[19.2px] md:leading-[24px] font-medium text-summary-color`}
                >
                    Total amount
                </h3>
                <h2
                    className={`${inter.className} flex-1 text-[24px] md:text-[32px] leading-[28.8px] md:leading-[38.4px] font-bold text-purple-gray flex justify-end`}
                >
                    {totalCash}
                </h2>
            </div>
            <div className="px-[16px] py-[24px] rounded-[5px] items-center bg-info-box ">
                <p
                    className={`${inter.className} text-[12px] leading-[16.8px] font-normal text-summary-color text-center md:text-left`}
                >
                    You will be sending <b>{cashToString}</b> every month, until{" "}
                    <b>{formatDateToString(months)}.</b> Thank you!
                </p>
            </div>
        </div>
    );
}
