type DiskUsage = {
    available: number;
    free: number;
    total: number;
}

export default function checkSync(path: string): DiskUsage;
