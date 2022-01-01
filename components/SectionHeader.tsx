import clsx from "clsx";

export const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const { title, className = "", headerClassName = "", id = "" } = props;
  return (
    <div id={id} className={clsx("w-full flex", className)}>
      <h2
        className={clsx(
          "block  w-10/12 md:w-3/12 text-2xl lg:w-2/12 font-medium border-b text-gold after:flex-1 after: border-gold ",
          headerClassName
        )}
      >
        {title}
      </h2>
    </div>
  );
};

interface SectionHeaderProps {
  title: string;
  className?: string;
  headerClassName?: string;
  id?: string;
}
