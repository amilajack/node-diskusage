export type DiskUsage = {
  available: number;
  free: number;
  total: number;
}

export function getDiskUsage(path: string): DiskUsage;
