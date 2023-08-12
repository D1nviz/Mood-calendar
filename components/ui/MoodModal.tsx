import { FC } from "react";

interface IMoodModal {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const MoodModal: FC = () => {
  return (
    <>
      <div className="w-56 h-16 bg-dark-primary rounded-md hidden absolute z-20 -inset-x-1/2 -top-12 group-hover:block">
      </div>
    </>
  );
};

export default MoodModal;
