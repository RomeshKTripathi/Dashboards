import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { switchActiveLink } from "../../store/appSlice";

function SidebarLink({ icon, text, links, style }) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleCollapse = () => {
        setShow((prev) => !prev);
    };

    const handleMenuSelection = (e) => {
        e.stopPropagation();
        if (links) return;
        dispatch(switchActiveLink(text.toLowerCase()));
    };

    return (
        <div
            onClick={handleMenuSelection}
            className={`dark:first:border-t dark:text-white/80 text-white last:border-b-0 group/links border-white/20 border-b ${style}`}
        >
            <div
                onClick={handleCollapse}
                className="hover:bg-white/5 cursor-pointer duration-100 group flex gap-2 *:self-center  justify-start py-2"
            >
                {icon && <img className="size-6 m-2" src={icon} alt="" />}
                <span
                    className={`${
                        !links ? "group-hover:translate-x-2" : ""
                    } duration-100 text-xs uppercase first-letter:text-lg first-letter:select-none`}
                >
                    {text}
                </span>

                {/* show expand icon if links are present */}
                {links && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`size-5 self-center ml-auto mr-2  duration-200 ${
                            show
                                ? "rotate-180 group-hover:-translate-y-1"
                                : "group-hover:translate-y-1"
                        }`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                )}
            </div>

            {/* show links if present */}
            {links && (
                <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                        show ? "max-h-96" : "max-h-0"
                    }`}
                >
                    {links.map((link) => (
                        <SidebarLink key={link.id} {...link} style={"pl-12"} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default SidebarLink;
