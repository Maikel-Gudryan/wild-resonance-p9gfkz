const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api-prefeitura-04sh.onrender.com';

export function setAuthToken(token) {
  if (token) {
    localStorage.setItem('auth_token', token);
  } else {
    localStorage.removeItem('auth_token');
  }
}

export function getAuthToken() {
  return localStorage.getItem('auth_token');
}

export function extractAuthToken(response) {
  if (!response) return null;
  if (typeof response === 'string') return response;
  if (typeof response === 'object') {
    return response.token || response.accessToken || response.access_token || response.data?.token || response.data?.accessToken || null;
  }
  return null;
}

export function isAuthenticated() {
  return !!getAuthToken();
}

async function apiFetch(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  const token = getAuthToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, { ...options, headers });
  const text = await response.text();
  let data;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!response.ok) {
    const message = typeof data === 'string' ? data : data?.message || data?.error || response.statusText;
    throw new Error(message);
  }

  return data;
}

export async function loginUsuario(email, senha) {
  return await apiFetch('/usuarios/login', {
    method: 'POST',
    body: JSON.stringify({ email, senha }),
  });
}

export async function cadastrarUsuario(nome, email, senha) {
  return await apiFetch('/usuarios/', {
    method: 'POST',
    body: JSON.stringify({ nome, email, senha }),
  });
}

export async function fetchUsuarios() {
  return await apiFetch('/usuarios');
}

export async function fetchDepartamentos() {
  return await apiFetch('/departamentos');
}

export async function fetchDenuncias() {
  return await apiFetch('/denuncias');
}

export async function createDenuncia(data) {
  return await apiFetch('/denuncias', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function confirmarDenuncia(id) {
  return await apiFetch(`/denuncias/${id}/confirmar`, {
    method: 'POST',
  });
}

export async function comentarDenuncia(id, texto) {
  return await apiFetch(`/denuncias/${id}/comentarios`, {
    method: 'POST',
    body: JSON.stringify({ texto }),
  });
}

export async function fetchTiposDenuncia() {
  return await apiFetch('/tipo-denuncia');
}