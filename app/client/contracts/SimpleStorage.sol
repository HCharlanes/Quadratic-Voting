contract SimpleStorage {
  uint public storedData;

  event ValueSet(uint newValue);

  function SimpleStorage(uint initialValue) {
    storedData = initialValue;
  }

  function set(uint x) {
    storedData = x;
    ValueSet(storedData);
  }
  function get() constant returns (uint retVal) {
    return storedData;
  }
}
