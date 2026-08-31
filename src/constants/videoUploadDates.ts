/**
 * Real YouTube upload dates, keyed by video ID.
 *
 * Google Search Console rejects a VideoObject whose `uploadDate` is a bare
 * date: it reports "Datetime property 'uploadDate' is missing a time zone"
 * and "Invalid datetime value for 'uploadDate'". The value has to be full
 * ISO 8601 including a UTC offset, and it should be the video's actual
 * publication date — a placeholder that contradicts YouTube is worse than
 * useless, since Google can compare the two.
 *
 * These were read from each video's own page metadata. Add an entry here when
 * a new video is embedded; videoObject() in lib/schema.ts looks it up and
 * omits the property entirely rather than emitting something invalid.
 */
export const VIDEO_UPLOAD_DATES: Record<string, string> = {
  h8pBhvxheVI: '2023-04-28T06:00:07-07:00', // IVF process explained
  nOiQspt6VWI: '2026-03-31T05:30:46-07:00', // Twins after repeated disappointment
  SxTcuQ7KL1c: '2026-03-24T05:30:44-07:00', // 5-year wait ends
  aTwR2M7pCMw: '2025-01-03T02:30:06-08:00', // PGT explained
  K_KZMhaL9dY: '2026-02-24T04:30:27-08:00', // Motherhood after 4 years
  '3XH4BmNM-Fo': '2024-06-12T08:25:46-07:00', // Hysteroscopy before IVF
  YvvciOHrnec: '2025-09-12T05:30:55-07:00', // ICSI step by step
  ypvbBToaFY4: '2024-05-22T06:01:03-07:00', // Surgical sperm retrieval
  PaH8yCIq29Y: '2026-02-17T04:30:37-08:00', // 9 years to parenthood
  nmkvMS2at_0: '2023-04-15T05:30:09-07:00', // IUI vs IVF
  me6DoNl7tsk: '2026-01-17T04:30:06-08:00', // 6-year dream fulfilled
  rux07h3arf0: '2022-05-14T05:49:42-07:00', // Ovulation date calculation
  lQqd21cAGHE: '2025-02-14T04:30:46-08:00', // ERA test and IVF success
  vCpsAUiHm38: '2024-06-26T06:30:07-07:00', // Truth about the HSG test
};
