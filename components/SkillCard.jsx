export const SkillCard = ({ id, title, icon, text }) => {
  return (
    <section className="flex flex-col justify-center items-center text-center">
      <div>{icon}</div>
      <h3 className="text-blue-100">{title}</h3>
      <p className="text-blue-200">{text}</p>
    </section>
  );
};
