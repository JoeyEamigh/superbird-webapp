export const getBacktraceUuid = chunk => {
  const values = { '/static/js/main.js.map': '2F73C162-5F7B-F8A0-F68F-E549046E5C0E' };
  let uuid = values[chunk];
  if (uuid === undefined) uuid = values[Object.keys(values)[0]];
  return uuid;
};
