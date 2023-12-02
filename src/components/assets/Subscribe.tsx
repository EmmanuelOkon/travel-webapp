import { FaRegEnvelope } from 'react-icons/fa6';

import { Input } from './Input';
import { Button } from './Button';
import { NewsletterTexts } from '../../utils/staticData';

const Subscribe = () => {
  return (
    <form className="flex flex-col items-stretch gap-2 md:flex-row">
      <Input
        containerClass="relative"
        inputClass="border-none rounded-lg outline-none w-[300px] h-[50px] focus:outline-none text-color3 pr-4 pl-9 py-1"
        type="email"
        placeholder={NewsletterTexts.placeholderText}
      >
        <div className="text-color3/80 absolute left-3 top-4">
          <FaRegEnvelope size={18} color="currentColor" weight="fill" />
        </div>
      </Input>
      <Button
        type="submit"
        className="bg-color1 rounded-lg border-none px-6 py-2 text-base font-light text-white outline-none"
      >
        {NewsletterTexts.buttonText}
      </Button>
    </form>
  );
};

export default Subscribe;
