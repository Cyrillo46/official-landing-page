export const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-blue-100 bg-slate-600">
      <h2 className="text-4xl font-medium tracking-wider capitalize text-center text-blue-200 mb-7">
        {text}
      </h2>
    </div>
  );
};
