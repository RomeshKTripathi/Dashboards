import React from "react";

function MyTooltip({ active, payload, label }) {
  if (active && payload && payload.length)
    return (
      <div
        className={`w-fit h-fit p-2 border dark:bg-black/50 dark:border-white/30 dark:text-white/80 bg-white/50 border-white rounded-md text-black`}
      >
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  return null;
}

export default MyTooltip;
