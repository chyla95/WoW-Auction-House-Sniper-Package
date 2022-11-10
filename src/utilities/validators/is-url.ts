export const isUrl = (value: string) => {
  let isValid = false;
  try {
    const url = new URL(value);
    isValid = url.protocol === "http:" || url.protocol === "https:";
  } catch (error) {
    return false;
  }
  return isValid;
};
