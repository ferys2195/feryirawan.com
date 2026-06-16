const BASE_URL = "https://ferys2195.github.io/portfolio-data";

export async function fetcher<T>(
  endpoint: string,
  locale?: string,
): Promise<T> {
  const path = locale ? `/lang/${locale}${endpoint}` : endpoint;
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.statusText}`);
  }
  return res.json();
}
