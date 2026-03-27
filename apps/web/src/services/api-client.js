const API_BASE_URL =
  globalThis.process?.env?.WEB_API_BASE_URL ??
  globalThis.WEB_API_BASE_URL ??
  'http://localhost:4000';

const getJson = async (path) => {
  const response = await fetch(`${API_BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }
  return response.json();
};

const apiClient = {
  health: () => getJson('/health')
};

export { apiClient, API_BASE_URL };
