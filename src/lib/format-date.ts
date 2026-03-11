/** SSR-safe date formatter. Uses UTC to avoid server/client timezone mismatch. */
const MONTHS_FULL = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTHS_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatDateFull(iso: string): string {
  const d = new Date(iso.includes("T") ? iso : `${iso}T00:00:00Z`);
  const day = d.getUTCDate();
  const month = MONTHS_FULL[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  return `${month} ${day}, ${year}`;
}

export function formatDateShort(iso: string): string {
  const d = new Date(iso.includes("T") ? iso : `${iso}T00:00:00Z`);
  const day = d.getUTCDate();
  const month = MONTHS_SHORT[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  return `${month} ${day}, ${year}`;
}
