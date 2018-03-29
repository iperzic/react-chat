class TestStore {
  static createMessagesStore(loading = false, error = '', messages = []) {
    return ({
      loading,
      error,
      messages,
    });
  }
}

export default TestStore;
