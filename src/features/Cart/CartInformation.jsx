import { CiLock } from "react-icons/ci";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { PiVan } from "react-icons/pi";

function CartInformation() {
  return (
    <>
      <div className="w-full lg:w-[35%]">
        <div className="bg-[#fafafa]">
          <div className="border-b border-[#dcdcdc] p-6">
            <h4 className="uppercase">The orange box</h4>
          </div>
          <div className="flex gap-4 p-6">
            <img
              src="https://assets.hermes.com/is/image/hermesedito/orange-box?name=orange-box&end"
              alt="The orange box"
              width="100"
              height="100"
              className="h-[80px] w-[80px]"
            />
            <p className="text-xs font-normal">
              All orders are delivered in an orange box tied with a Bolduc
              ribbon, with the exception of certain items
            </p>
          </div>
        </div>
        <div className="mt-3 bg-[#fafafa]">
          <div className="border-b border-[#dcdcdc] p-6">
            <h4 className="uppercase">Customer Service</h4>
          </div>
          <div className="border-b border-[#dcdcdc] p-6">
            <p className="text-xs">
              Monday to Friday 9am - 9pm EST, Saturday 10am - 9pm
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#dcdcdc] p-6">
            <div className="flex max-w-[120px] flex-col items-center">
              <PiVan size="2rem" />
              <span className="text-center text-xs">
                Free standard delivery
              </span>
            </div>
            <div className="flex max-w-[110px] flex-col items-center">
              <FaArrowRightLong />
              <FaArrowLeftLong />
              <span className="text-center text-xs">Return & exchanges</span>
            </div>
            <div className="flex max-w-[120px] flex-col items-center">
              <CiLock size="2rem" />
              <span className="text-center text-xs">Shop securely</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartInformation;
