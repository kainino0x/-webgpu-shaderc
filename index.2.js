';
  return fetch(wasmData).then(res => res.arrayBuffer()).then(fromBinary);
};

const fromBinary = (wasmBinary) => {
  const Module = { wasmBinary };
  const promise = new Promise(res => {
    Module.onRuntimeInitialized = () => {
      res(Module);
    };
  });
  {
