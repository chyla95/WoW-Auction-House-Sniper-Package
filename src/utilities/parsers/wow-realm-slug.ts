export const parseSlug = (value: string) => {
  return value.toLocaleLowerCase().replace(/\s/g, "-").replace(/'/g, "");
};
