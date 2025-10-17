import React from 'react'
import Mainstacklogo from '../../assets/Svgs/mainstack-logo.svg'
import Homelogo from '../../assets/Svgs/home.svg'
import Analyticslogo from '../../assets/Svgs/insert_chart.svg'
import Revenuelogo from '../../assets/Svgs/payments.svg'
import Crmlogo from '../../assets/Svgs/group (1).svg'
import Appslogo from '../../assets/Svgs/widgets.svg'
import Chartlogo from '../../assets/Svgs/chat.svg'
import Notificationlogo from '../../assets/Svgs/Notification.svg'
import menulogo from '../../assets/Svgs/menu.svg'
import namelogo from '../../assets/Svgs/Name.svg'

const navbaritems = [
  { label: 'Home', icon: Homelogo },
  { label: 'Analytics', icon: Analyticslogo },
  { label: 'Revenue', icon: Revenuelogo, bg: 'black' },
  { label: 'CRM', icon: Crmlogo },
  { label: 'Apps', icon: Appslogo },
]

export default function Navbar() {
  return (
    <div className=" my-[16px] flex items-center justify-between w-full px-6 py-3 bg-white shadow-sm  overflow-hidden z-50 relative">
      {/* (Logo) */}
      <div className="flex items-center">
        <img src={Mainstacklogo} alt="Mainstack Logo" className="h-8" />
      </div>

      {/* Center Navigation */}
      <div className="flex items-center gap-5">
        {navbaritems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center space-x-2 transition-colors pt-[8px] pr-[18px] pb-[8px] pl-[14px] ${
              item.bg === 'black'
                ? 'bg-black text-white rounded-full '
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <img src={item.icon} alt={item.label} className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Notification */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition">
          <img src={Notificationlogo} alt="Notification" width={24} height={24} />
        </button>

        {/* Chat */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition">
          <img src={Chartlogo} alt="Chat" width={22} height={22} />
        </button>

        {/* Profile */}
        <div className="flex items-center bg-[#EFF1F6] rounded-full px-3 py-1 gap-2">
          <img src={namelogo} alt="Name" width={28} height={28} />
          <img src={menulogo} alt="Menu" width={20} height={20} />
        </div>
      </div>
    </div>
  )
}
