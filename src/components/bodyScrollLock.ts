export function lockBodyScroll() {
  const body = document.body;
  const previousOverflow = body.style.overflow;
  const previousPaddingRight = body.style.paddingRight;
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  if (scrollbarWidth > 0) {
    const computedPaddingRight = Number.parseFloat(
      window.getComputedStyle(body).paddingRight,
    ) || 0;

    body.style.paddingRight = `${computedPaddingRight + scrollbarWidth}px`;
  }

  body.style.overflow = "hidden";

  return () => {
    body.style.overflow = previousOverflow;
    body.style.paddingRight = previousPaddingRight;
  };
}
