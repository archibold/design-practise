import { Months } from "./months";

function formatNumber(value: string): string {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatCurrency(value: string): string {
    if (value.indexOf(".") >= 0) {
        // get position of first decimal
        // this prevents multiple decimals from
        // being entered
        var decimal_pos = value.indexOf(".");

        // split number by decimal point
        var left_side = value.substring(0, decimal_pos);
        var right_side = value.substring(decimal_pos);

        // add commas to left side of number
        left_side = formatNumber(left_side);

        // validate right side
        right_side = formatNumber(right_side);

        // Limit decimal to only 2 digits
        right_side = right_side.substring(0, 2);

        // join number by .
        value = left_side + "." + right_side;
    } else {
        // no decimal entered
        // add commas to number
        // remove all non-digits
        value = formatNumber(value);
    }
    return value;
}

export function currencyToString(currency: string): number {
    console.log(currency.replaceAll(",", ""));
    return parseFloat(currency.replaceAll(",", ""));
}

export function isEmptyString(text: string): boolean {
    return /^$/.test(text);
}

export function formatDateToString(months: number): string {
    const newDate = new Date();
    newDate.setMonth(newDate.getMonth() + months);
    return `${Months[newDate.getMonth()]} ${newDate.getFullYear()}`;
}
