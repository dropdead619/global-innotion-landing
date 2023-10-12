export function scrollToElement(id: string) {
  if (process.client) {
    if (!id)
      return;
    const element = document.querySelector(`#${id}`) as HTMLElement;

    if (element)
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
