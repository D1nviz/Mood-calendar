import { AnimatePresence, motion } from "framer-motion";
import { FC, MouseEvent } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface GuidanceProps {
  isModalOpened: boolean;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Guidance: FC<GuidanceProps> = ({ isModalOpened, setIsModalOpened }) => {
  const handleModalBg = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains("modal-bg")) {
      setIsModalOpened(false);
    }
  };

  const handleModal = () => {
    setIsModalOpened(false);
  };

  return (
    <AnimatePresence>
      {isModalOpened && (
        <motion.div
          initial={{ opacity: 0.25, x: 100, y: "-35%", scale: 0.2 }}
          animate={{ opacity: 1,x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100,  y: "-35%", scale: 0.2 }}
          transition={{ duration: 0.4 }}
          className="absolute z-30 backdrop-blur-sm top-0 left-0 w-full h-full flex justify-center modal-bg"
          onClick={handleModalBg}
        >
          <div className="w-[450px] h-3/4 mt-16 bg-dark-primary border border-dark-tertiary rounded-lg">
            <div className="flex justify-end p-2">
              <button
                onClick={handleModal}
                className="text-white text-lg cursor-pointer"
              >
                <IoCloseSharp size={23} />
              </button>
            </div>
            <div className=" max-w-[85%] h-5/6 mx-auto overflow-y-auto px-2">
              <h3 className="text-center text-xl font-semibold">
                Hello, Friend!
              </h3>
              <p className="py-3">
                A calendar is a powerful tool for organizing your schedule,
                events, and tasks. <br />
                <br /> Adding emotions to specific dates can provide a visual
                representation of your moods and feelings over time.
                <br />
                <br />
                This guide will walk you through the steps of using a calendar
                to navigate to a date, add an emotion, and associate it with
                that date.
              </p>
              <ul>
                <li className="text-center font-bold">
                  In order to add an emotion, you need:
                </li>
                <li className="py-1">1. Hover over the date.</li>
                <li className="py-1">
                  2. A plus sign should appear in the cell, click on it.
                </li>
                <li className="py-1">
                  3. In the pop-up window, select an emotion.{" "}
                </li>
              </ul>
              <div className="flex justify-center m-4">
                <p
                  onClick={handleModal}
                  className="font-semibold text-xl cursor-pointer duration-300  hover:scale-110 hover:drop-shadow-lg"
                >
                  All is ready!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Guidance;
