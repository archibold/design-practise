import { work_sans } from "../../fonts";

export default function Actions() {
    return (
        <div className={`${work_sans.className} flex gap-[11px]`}>
            <button className="hidden md:flex m-[8px] px-[24px] py-[16px] w-full rounded-[5px] flex-1 text-[16px] leading-[20px] font-semibold purple-gray-border hover:bg-button-hover active:bg-button-pressed outline-none">
                <span className="purple-gray-text-color">Cancel</span>
            </button>
            <button className="m-[8px] px-[24px] py-[16px] w-full rounded-[5px] flex-1 text-[16px] leading-[20px] font-semibold text-white hover:bg-midnight-purple-hover active:bg-midnight-purple-pressed bg-midnight-purple outline-none">
                Continue
            </button>
        </div>
    );
}
