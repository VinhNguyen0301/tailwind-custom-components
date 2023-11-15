import { ReactNode } from "react";

export interface JobProps {
  title: string;
  icon: ReactNode;
  bgColor: string;
}

const Job: React.FC<JobProps> = ({ title, icon, bgColor }) => {
  return (
    <div
      className={` ${bgColor} flex aspect-square flex-col items-center justify-center rounded-lg p-4 text-[#281A51]`}
    >
      {icon}
      <p className="pt-2 font-popi">{title}</p>
    </div>
  );
};

export default Job;
