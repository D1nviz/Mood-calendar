import { FC, MouseEvent } from "react";

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
    isModalOpened && (
      <div
        className="absolute z-30 backdrop-blur-sm top-0 left-0 w-full h-full flex justify-center items-center modal-bg"
        onClick={handleModalBg}
      >
        <div className="w-1/4 h-3/4 bg-dark-primary border border-dark-tertiary rounded-lg">
          <div className="flex justify-end p-2">
            <button
              onClick={handleModal}
              className="text-white text-lg cursor-pointer"
            >
              x
            </button>
          </div>
          {/* Add your modal content here */}
        </div>
      </div>
    )
  );
};

export default Guidance;