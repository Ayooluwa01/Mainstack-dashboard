import React from "react";
import InfoIcon from "../../assets/Svgs/info.svg"; 

export default function LedgerBalance() {
  const balances = [
    { label: "Ledger Balance", amount: "USD 0.00" },
    { label: "Total Payout", amount: "USD 55,080.00" },
    { label: "Total Revenue", amount: "USD 175,580.00" },
    { label: "Pending Payout", amount: "USD 0.00" },
  ];

  return (
    <div
      className="flex flex-col w-[271px] h-[360px] gap-[32px] opacity-100 lg:right-[140px] absolute"
      style={{ transform: "rotate(0deg)" }}
    >
      {balances.map((item, index) => (
        <div key={index} className="flex flex-col gap-[8px]">
          {/* Label Row */}
          <div className="flex items-center justify-between">
            <h3 className="font-degular font-medium text-[14px] leading-[16px] tracking-[-0.2px] text-[#56616B]">
              {item.label}
            </h3>
            <img src={InfoIcon} alt="info" className="w-[16px] h-[16px]" />
          </div>

          {/* Amount */}
          <h2 className="font-degular font-bold text-[24px] leading-[28px] tracking-[-0.5px] text-[#131316]">
            {item.amount}
          </h2>
        </div>
      ))}
    </div>
  );
}
