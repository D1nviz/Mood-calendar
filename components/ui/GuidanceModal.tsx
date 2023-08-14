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
          initial={{ opacity: 0.25, x: "-50%", scale: 0.2 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, y: -350 }}
          transition={{ duration: 0.4 }}
          className="absolute z-30 backdrop-blur-sm top-0 left-0 w-full h-full flex justify-center items-center modal-bg"
          onClick={handleModalBg}
        >
          <div className="w-1/4 h-3/4 bg-dark-primary border border-dark-tertiary rounded-lg">
            <div className="flex justify-end p-2">
              <button
                onClick={handleModal}
                className="text-white text-lg cursor-pointer"
              >
                <IoCloseSharp size={23} />
              </button>
            </div>
            <div>
              <h3 className="text-center text-xl font-semibold">Hey, Gey!</h3>
              <p>
                
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Guidance;
