import React from 'react'
import LedgerBalance from './Ledgerbalance'

export default function Accountbalance() {
  return (
    <div className="w-full mt-[80px] px-4 lg:px-[140px] flex flex-col md:flex-row justify-between gap-[32px]">
      {/* ==== Left Section (Total Balance + Withdraw) ==== */}
      <div className="flex flex-col lg:w-[462px] gap-[16px]">
        {/* Balance + Withdraw stacked on small screens */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Available Text + Amount */}
          <div className="flex flex-col">
            <h3 className="font-degular font-medium text-[14px] leading-[16px] tracking-[-0.2px] text-gray-400">
              Available Balance
            </h3>

            <h2 className="font-degular font-bold text-[32px] sm:text-[36px] leading-[48px] tracking-[-1.5px] text-black mt-3">
              USD 120,500.00
            </h2>
          </div>

          {/* Withdraw Button */}
          <button className="w-full sm:w-[167px] h-[52px] bg-black text-white font-degular font-medium text-[16px] leading-[20px] tracking-[-0.3px] rounded-full hover:opacity-90 transition">
            Withdraw
          </button>
        </div>

        {/* Graph Placeholder */}
        <div className="mt-4">
          <h4 className="text-gray-500 text-sm">Graph</h4>
        </div>
      </div>

      {/* ==== Right Section (Ledger Balance) ==== */}
      <div className="w-full lg:w-[271px]">
        <LedgerBalance />
      </div>
    </div>
  )
}
