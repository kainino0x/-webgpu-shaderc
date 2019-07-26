module.exports = {};
module.exports.instantiate = () => {
  const Module = {};
  const promise = new Promise(res => {
    Module.onRuntimeInitialized = () => {
      res(Module);
    };
  });
  {
