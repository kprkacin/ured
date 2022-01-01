export const smoothScroll = (id?: string) => {
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
