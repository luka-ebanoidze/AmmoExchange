import { Card } from "../../components/Card";

import scale from "./images/scale.png";
import WhyAmmoNow from "./images/WhyAmmoNow.png";
import WhatDrivesTheAmmoMarket from "./images/WhatdrivesTheAMMOMarket.png";
import AmmoMarket from "./images/AmmoMarket.svg";
import TheUS from "./images/TheU.S.png";
import TheMassive from "./images/THE MASSIVE CIVILIAN AMMO MARKET.png";
import Distrupt from "./images/A DISRUPTIVE NEW PLATFORM.png";
import Volatility from "./images/VOLATILITY CREATES OPPORTUNITY.png";
import Shortages from "./images/shortages cause significant price volatility making ammo AN asset class ripe for trading.png";
import Vector from "./images/Vector 6.png";
import AmmoTrading from "./images/AMMO TRADING HAS HISTORICALLY BEEN LIMITED TO INSIDERS.png";
import AmmoHasBeen from "./images/Ammo has been a difficult product to buy, sell, and trade in large volumes for the average person.png";
import Usae from "./images/USAE has removed the hassle of FINDING, PURCHASING, inspecting, STORING, and selling AMMO.png";
import Introducing from "./images/INTRODUCING ONE-CLICK AMMO TRADING.png";
import ItsLike from "./images/IT'S LIKE A STOCK MARKET BUT FOR AMMO.png";
import AmmoInvesting from "./images/Ammo investing is now possible for everyone because of USAE’s powerful combination of storage and trading platform.png";
import Powerful from "./images/SPEED.png";
import Prices from "./images/Safari.svg";

export function WhyAmmoView() {
  return (
    <main className="w-full">
      <div className="bg-[#212B39] w-full flex justify-center">
        <Card>
          <div className="flex flex-col justify-evenly items-start w-[563px]">
            <img className="ml-[50px]" src={WhyAmmoNow} alt="Why Ammo Now" />
            <p className="text-[12px] leading-[18px] font-normal text-[#FFFFFF]">
              The US civilian ammunition industry is currently experiencing
              record supply shortages amidst all-time high demand.
              <br />
              <br />
              Behind this dynamic is the rapid number of new gun owners since
              2012, which is now estimated to be over 70 million.
              <br />
              <br />
              The recent spike in ammo demand was naturally followed by price
              volatility, and historical data now proves that the true drivers
              of the recent increase in both ammo demand and ammo pricing are
              the anticipated and unanticipated geo-political events.
              <br />
              <br />
              For example, in the three months leading up to the last four US
              presidential elections, there was an increase in price of over
              100% on all major civilian ammo calibers.
              <br />
              <br />
              Moreover, in the 60 days leading up to President Biden’s
              inauguration, most major civilian ammo prices increased over 300%.
              if only there was a simple, safe, and reliable way to take
              advantage of this potential investment opportunity.
            </p>
          </div>
          <img src={scale} alt="Scale" />
        </Card>
      </div>
      <section className="w-full flex justify-center gap-[95px] py-[100px] pl-[100px] pr-[160px]">
        <div className="w-[630px] flex flex-col items-start justify-end gap-[30px]">
          <img
            src={WhatDrivesTheAmmoMarket}
            alt="What Drives The Ammo Market"
          />
          <p className="text-[12px] leading-[18px] font-normal text-[#000000] w-[586px]">
            There were no civilian ammo shortages in the US from the end of
            World War II until 2008. However, that year witnessed the onset of
            smart phones, social media, and access to news and information on
            both real and dramatized threats igniting fear and uncertainty.
            Since then, ammo demand has spiked significantly with anticipated
            and unanticipated geo-political events (i.e. elections, pandemics,
            protests, etc.). These events have been more frequent and are likely
            to continue.
          </p>
          <img src={AmmoMarket} alt="Ammo Market" />
        </div>
        <div className="w-[462px] h-[622px] rounded-[2px] border-solid border-[1px] border-black flex flex-col items-center justify-center text-center gap-5">
          <h2 className="text-[#a4a4a4] leading-[31.2px] text-[24px] font-bold tracking-[0.9px]">
            Ammo Demand Drivers
          </h2>
          <h2 className="text-[#1E2A39] leading-[36.4px] text-[28px] font-bold tracking-[0.9px]">
            Political Unrest
            <br />
            Social Unrest
          </h2>
          <h2 className="text-[#a4a4a4] leading-[31.2px] text-[24px] font-bold tracking-[0.9px]">
            Looking Ahead
          </h2>
          <h2 className="text-[#1E2A39] leading-[36.4px] text-[28px] font-bold tracking-[0.9px]">
            China | TAIWAN <br /> Civil Unrest <br /> US Elections
          </h2>
        </div>
      </section>
      <section className="w-full flex justify-center gap-[80px] py-[132px]">
        <img className="w-[346px]" src={TheUS} alt="" />
        <span className="w-[1px] bg-[#D1D1D1]"></span>
        <div className="flex flex-col justify-center gap-[30px]">
          <div className="w-[671px] flex flex-col items-start gap-[30px]">
            <img src={TheMassive} alt="" />
            <p className="text-[#a4a4a4] text-[16px] text-normal leading-[20.8px] tracking-[0.9px]">
              The U.S. gun and ammo industry is rapidly expanding. The country
              has over 80 million gun owners -- twenty million were added since
              2012, and seven million added in just the last two years. In fact,
              last year, sports shooting become the 2nd fastest growing
              recreational activity in the U.S., and today it's estimated that
              over $30 billion in ammo is being privately held by US citizens.
            </p>
          </div>
          <hr className="bg-[#D1D1D1]" />
          <div className="w-[676px] flex flex-col items-start gap-[30px]">
            <img src={Distrupt} alt="" />
            <p className="text-[#a4a4a4] text-[16px] text-normal leading-[20.8px] tracking-[0.9px]">
              The U.S. Ammo Exchange (USAE) is a powerful new trading platform
              that will disrupt the U.S. ammo industry. Our all-in-one trading
              website allows users to safely and securely buy, hold, sell, and
              ship with just a few clicks. It’s part E*Trade, part Amazon, but
              all ammo.
            </p>
          </div>
        </div>
      </section>
      <section className="py-[130px] px-[95px]">
        <div className="w-full flex justify-center gap-[80px]">
          <div className="w-[670px] flex flex-col items-start gap-[30px]">
            <img className="w-[390px]" src={Volatility} alt="" />
            <p className="max-w-[670px]">
              In the three months leading up to the last four US presidential
              elections, the retail price of popular civilian ammo shot up over
              100%. In fact, in the 60 days leading up to President Biden’s
              inauguration, the price increased over 300%.
              <br />
              <br />
              Historical data shows that the primary drivers of ammo demand and
              ammo pricing is fear (both real and unsubstantiated) and
              geo-political events. Global events, local elections, civil
              polarization, 2nd amendment rhetoric, and uncertainty have and
              will continue to directly influence ammo prices. The USAE is a
              simple, safe, and reliable way to take advantage of this
              opportunity.
            </p>
          </div>
          <span className="w-[1px] bg-[#D1D1D1]"></span>
          <img className="w-[420px]" src={Shortages} alt="" />
        </div>
        <img src={Vector} alt="" />
      </section>
      <section className="w-full flex justify-center gap-[88px] px-[95px] py-20">
        <div className="w-[662px] flex flex-col items-start gap-[30px]">
          <img className="w-full" src={AmmoTrading} alt="" />
          <p className="max-w-[463px] text-[#a4a4a4] text-[16px] text-normal leading-[20.8px] tracking-[0.9px]">
            Few Americans have profited from the massive price increases of the
            past few years. Instead, these gains have been reaped by a small
            handful of specialized insiders. Much of this is due to the nature
            of ammo. Buying large quantities requires specialized shipping and a
            large secure facility. Then you must unpack, inspect, and safely
            store it. Finally, when the price goes up, a similar process must be
            implemented in reverse. You must find the buyers who want your
            specific caliber, then pack, verify, ship, and provide customer
            support, not to mention insurance and licenses.
          </p>
        </div>
        <span className="w-[1px] bg-[#D1D1D1]"></span>
        <img className="w-[420px]" src={AmmoHasBeen} alt="" />
      </section>
      <section className="w-full flex justify-center gap-[160px] px-[100px] py-[125px]">
        <img className="w-[578px]" src={Usae} alt="" />
        <div className="max-w-[502px] flex flex-col items-start gap-8">
          <img className="w-[347px]" src={Introducing} alt="" />
          <p className="text-[#a4a4a4] text-[16px] text-normal leading-[20.8px] tracking-[0.9px]">
            USAE is the one-stop-shop where ammo can by bought, stored, and sold
            at a later date, just like investing in a stock. And like any common
            stock trading website, USAE will also provide various trading tools,
            such as historical pricing data to help users make educated
            decisions. However, unlike stock trading websites, the USAE also
            serves as an e-commerce marketplace where members can buy and take
            possession of high demand ammo with its fulfillment and shipping
            options.
          </p>
        </div>
      </section>
      <section className="w-full flex justify-center gap-[63px] py-[150px]">
        <div className="w-[510px] flex flex-col items-start gap-8">
          <img src={ItsLike} alt="" />
          <p className="text-[#a4a4a4] text-[16px] text-normal leading-[20.8px] tracking-[0.9px]">
            The USAE has sourced, inspected and is now storing millions of
            rounds of certified new ammo in its secure armories. Unlike when
            buying a stock, every ammo purchase is backed round-for-round by
            actual ammunition located in USAE’s armories. For example, a USAE
            user may purchase $1,000 worth of 9mm Luger rounds for .50
            cents/round on day one, have their ammo stored in the USAE armory
            (storage is free until 2023), and then sell their “ammo portfolio”
            three months later at .55 cents/round for a quick 10% profit. Of
            course, profits and timing are never guaranteed because they are
            subject to actual buyers and sellers.
          </p>
        </div>
        <img className="w-[675px]" src={AmmoInvesting} alt="" />
      </section>
      <section className="w-full flex justify-center py-[150px]">
        <div
          className="w-[80%] bg-[#F8F8F8] flex flex-col items-center gap-[60px] pt-[60px] pb-[168px] rounded-[20px]"
        >
          <img src={Powerful} alt="" />
          <div className="w-ful flex gap-[55px] items-start">
            <ul>
              <li className="w-[480px] rounded-[10px] border-solid border-[1px] border-[gray] flex flex-col justify-center px-[25px] pt-[20px] pb-[14px] gap-[20px] relative">
                <h3 className="text-[#3988F6] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                  TRANSPARENT PRICING
                </h3>
                <p>
                  The USAE shows no favoritism among its traders. Everyone sees
                  the same price at the same time for every trade.
                </p>
                <div className="absolute left-[-17px] bottom-[55px] w-[34px] h-[34px] rounded-full bg-[#3988F6] flex justify-center items-center text-white">
                  1
                </div>
              </li>
              <li className="w-[480px] rounded-[10px] flex flex-col justify-center px-[25px] pt-[20px] pb-[14px] gap-[20px] relative opacity-[50%]">
                <h3 className="text-[#000000] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                  BUY/SELL ORDER BOOKS
                </h3>
                <p>
                  Real-time order books give you full transparency into where
                  other traders are setting buy and sell prices.
                </p>
              </li>
              <li className="w-[480px] rounded-[10px] flex flex-col justify-center px-[25px] pt-[20px] pb-[14px] gap-[20px] relative opacity-[50%]">
                <h3 className="text-[#000000] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                  FREE LIMIT ORDERS
                </h3>
                <p>
                  Whether you're buying or selling, USAE's limit orders put you
                  in the driver's seat. Set your preferred price and your trade
                  executes only when the price matches.
                </p>
              </li>
              <li className="w-[480px] rounded-[10px] flex flex-col justify-center px-[25px] pt-[20px] pb-[14px] gap-[20px] relative opacity-[50%]">
                <h3 className="text-[#000000] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                  HISTORICAL INSIGHTS
                </h3>
                <p>
                  Historical price trends can indicate the future direction of a
                  market. The USAE provides up to 90 days of free pricing data
                  for every product.
                </p>
              </li>
            </ul>
            <img src={Prices} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
