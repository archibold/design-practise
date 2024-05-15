import { work_sans } from "../../fonts";

export default function Actions({ canContinue }: { canContinue: boolean }) {
    return (
        <div className={`${work_sans.className} flex gap-[11px]`}>
            <button className="hidden md:block m-[8px] px-[24px] py-[16px] w-full rounded-[5px] flex-1 text-[16px] leading-[20px] font-semibold border-purple-gray border-[1px] border-solid hover:bg-button-hover active:bg-button-pressed outline-none">
                <span className="text-purple-gray">Cancel</span>
            </button>
            <button
                disabled={!canContinue}
                className="m-[8px] px-[24px] py-[16px] w-full rounded-[5px] flex-1 text-[16px] leading-[20px] font-semibold text-white hover:bg-midnight-purple-hover active:bg-midnight-purple-pressed bg-midnight-purple outline-none disabled:bg-button-disabled"
            >
                Continue
            </button>
        </div>
    );
}
