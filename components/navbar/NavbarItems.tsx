export const NavbarItems: React.FC<NavbarItemsProps> = (props) => {
  const { scrollIntoElement } = props;

  return (
    <>
      <a
        className="my-1 font-medium cursor-pointer text-md lg:mx-4 lg:my-0 text-gold"
        onClick={scrollIntoElement()}
      >
        Početna
      </a>
      <a
        className="my-1 font-medium cursor-pointer text-md lg:mx-4 lg:my-0 hover:text-gold"
        onClick={scrollIntoElement("work")}
      >
        Čime se bavimo
      </a>
      <a
        className="my-1 font-medium cursor-pointer text-md lg:mx-4 lg:my-0 hover:text-gold"
        onClick={scrollIntoElement("about")}
      >
        O nama
      </a>
      <a
        className="my-1 font-medium cursor-pointer text-md lg:mx-4 lg:my-0 hover:text-gold"
        onClick={scrollIntoElement("contact")}
      >
        Kako do nas
      </a>
    </>
  );
};

interface NavbarItemsProps {
  scrollIntoElement: (id?: string) => () => void;
}
