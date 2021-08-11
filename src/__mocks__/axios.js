export default {
  /* jest.fn() is like a faked out mock version of a function */
  get: jest.fn().mockResolvedValue({ data: {} }),
};
