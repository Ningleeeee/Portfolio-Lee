import { Form } from "@/components";
import { socials } from "../constants";

export function Contact() {
  return (
    <div
      className={`grid sm:grid-cols-1 gap-5 md:grid-cols-2 items-center text-center py-[30px] bg-[#cfdee9]`}
      id="_contact"
    >
      <div>
        <h3 className="font-bold text-2xl pb-[30px]">
          Happy to hearing from you!
        </h3>
        <div className="flex gap-6 justify-center items-center sm:pb-[30px]">
          {socials.map((s, index) => (
            <a href={s.link}>
              <img
                key={index}
                alt={s.name}
                src={s.url}
                className="w-[50px] h-[50px] object-contain cursor-pointer fill-black hover:bg-[#fbdada] hover:rounded"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="rounded justify-center items-center flex px-3">
        <Form />
      </div>
    </div>
  );
}
