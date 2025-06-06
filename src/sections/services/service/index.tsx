import { ReactElement } from 'react';
import { TbCode } from 'react-icons/tb';

type servie_props = {
  icon: ReactElement;
  title: string;
  description: string;
};

function Service({ icon, title, description }: servie_props) {
  return (
    <div className="flex gap-4">
      <div className="h-12 flex items-center justify-center">{icon}</div>
      <div className="flex flex-col gap-2">
        <div className="h-6 text-lg font-semibold">{title}</div>
        <div className="h-6 text-sm">{description}</div>
      </div>
    </div>
  );
}
export default Service;
