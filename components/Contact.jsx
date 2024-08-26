import ContactImg from "../assets/ContactImg.svg";
import ContactForm from "./ContactForm";
import { SectionTitle } from "./SectionTitle";

export const Contact = () => {
  return (
    <>
      <section className="bg-slate-500 py-20 px-10" id="contact">
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
          <img src={ContactImg} className="w-full h-96" />
          <article>
            <SectionTitle text="Contact Me" bg="bg-slate-500" />
            <p className="text-blue-200 mt-8 leading-loose text-2xl">
              I constantly seek new experiences as well as expanding my network,
              creating memories along the way. Feel free to reach out!
            </p>
            <ContactForm />
          </article>
        </div>
      </section>
    </>
  );
};
