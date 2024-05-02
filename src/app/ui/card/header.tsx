import Image from "next/image";
import { inter, work_sans } from "../fonts";

export default function Header() {
    return (
        <div className="h-[193px] md:h-[128px] bg-salmon px-[24px] pt-[24px] md:pt-0 md:px-[40px] flex items-center gap-[16px] md:gap-[20px] flex-col md:flex-row relative">
            <Image
                src="/givingBlock.svg"
                alt="Giving block"
                height={72}
                width={72}
            />
            <div className="text-midnight-purple flex flex-col gap-[4px] flex-1 md:items-start items-center">
                <h2
                    className={`${work_sans.className} text-[24px] leading-[28.8px] md:text-[32px] font-semibold md:leading-[38.4px]`}
                >
                    The giving block
                </h2>
                <h3
                    className={`${inter.className} text-[16px] leading-[20px] font-normal text-purple-gray`}
                >
                    Set up your donation goal!
                </h3>
            </div>
            <div className="visible md:invisible absolute rounded-[5px] top-[8px] right-[8px] active:bg-close-active">
                <button className="p-[8px]">
                    <Image
                        src="/close.svg"
                        alt="Close button"
                        height={24}
                        width={24}
                    />
                </button>
            </div>
        </div>
    );
}
