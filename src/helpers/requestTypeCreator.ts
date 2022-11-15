interface OptionalObject {
  [key: string]: string;
}

const requestTypeCreator = (base: string, optional?: OptionalObject): OptionalObject => {
  if (optional) {
    Object.keys(optional).forEach((key) => {
      if (optional[key]) {
        // eslint-disable-next-line no-param-reassign
        optional[key] = `${base}_${key}`;
      }
    });
  }

  return {
    ...optional,
    ERROR: `${base}_ERROR`,
    REQUEST: `${base}_REQUEST`,
    SUCCESS: `${base}_SUCCESS`
  };
};

export default requestTypeCreator;
