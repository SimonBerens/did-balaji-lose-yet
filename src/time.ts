export function getTimeStr() {
  const endDateMs = 1686875400000;
  const curMs = Date.now();
  let timeLeftMs = (endDateMs - curMs) /  1000;
  const s = Math.floor(timeLeftMs % 60);
  timeLeftMs /= 60;
  const m = Math.floor(timeLeftMs % 60);
  timeLeftMs /= 60;
  const h = Math.floor(timeLeftMs % 24);
  timeLeftMs /= 24;
  const d = Math.floor(timeLeftMs);
  return `${d}d ${h}h ${m}m ${s}s`;
}

export interface TimeProps {
  time: string;
}