import urllib.request
import re
import json

url = "https://www.youtube.com/@cureinfertility"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # YouTube stores the initial data in a variable ytInitialData
    match = re.search(r'ytInitialData\s*=\s*({.*?});</script>', html)
    if match:
        data = json.loads(match.group(1))
        # Extract some video titles and IDs
        # This structure can be complex, so we'll just regex the HTML for basic watch?v= and titles
except Exception as e:
    pass

# Simpler regex approach on HTML for watch?v=...
video_ids = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)
titles = re.findall(r'"title":\{"runs":\[\{"text":"([^"]+)"\}\]', html)

# Deduplicate and zip
videos = []
seen = set()
for vid, title in zip(video_ids, titles):
    if vid not in seen and len(title) > 5 and 'youtube' not in title.lower():
        videos.append({"id": vid, "title": title})
        seen.add(vid)

print(json.dumps(videos[:10], indent=2))
