export const enviomentProvider = (
  key: string,
  defaultValue: null | string = null
): string => {
  return process.env[key] ?? (defaultValue as string) // as we know ?? is coalesing opeator return first not null value
}
