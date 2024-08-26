export const SectionTitle = ({ text, bg }) => {
  return (
    <div className={`border-b border-blue-100 ${bg}`}>
      <h2 className="text-4xl font-medium tracking-wider capitalize text-center text-blue-200 mb-7">
        {text}
      </h2>
    </div>
  );
};
