export const upToScroll = (scrollTo: number) => {
  return () => {
    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  };
};
