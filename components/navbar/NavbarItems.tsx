import { Dispatch, SetStateAction } from "react";

export const NavbarItems: React.FC<NavbarItemsProps> = (props) => {
  const { setShowMenu } = props;
  const scrollIntoElement = (id?: string) => () => {
    if (setShowMenu) {
      setShowMenu(false);
    }
    if (!id) {
      window.scrollTo({ behavior: "smooth", top: 0 });
      return;
    }
    const e = document.getElementById(id);
    if (!e) {
      return;
    }
    window &&
      window.scrollTo({
        behavior: "smooth",
        top: e.offsetTop - 100,
      });
  };

  return (
    <>
      <a
        className="my-1 font-medium text-md lg:mx-4 lg:my-0 text-gold"
        onClick={scrollIntoElement()}
      >
        Početna
      </a>
      <a
        className="my-1 font-medium text-md lg:mx-4 lg:my-0 hover:text-gold"
        onClick={scrollIntoElement("about")}
      >
        O nama
      </a>
      <a
        className="my-1 font-medium text-md lg:mx-4 lg:my-0 hover:text-gold"
        onClick={scrollIntoElement("work")}
      >
        Čime se bavimo
      </a>

      <a
        className="my-1 font-medium text-md lg:mx-4 lg:my-0 hover:text-gold"
        onClick={scrollIntoElement("contact")}
      >
        Kontakt
      </a>
    </>
  );
};

interface NavbarItemsProps {
  setShowMenu?: Dispatch<SetStateAction<boolean>>;
}
