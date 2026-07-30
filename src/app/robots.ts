import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

// Explicitly welcome AI/GEO crawlers. These feed ChatGPT, Perplexity, Claude,
// Copilot and Google's AI Overviews — if they cannot crawl the site, it cannot
// be cited in AI-generated answers.
const AI_CRAWLERS = [
    "GPTBot", // OpenAI index
    "OAI-SearchBot", // ChatGPT search results
    "ChatGPT-User", // ChatGPT browsing on a user's behalf
    "PerplexityBot",
    "Perplexity-User",
    "ClaudeBot",
    "Claude-User",
    "Claude-SearchBot",
    "anthropic-ai",
    "Google-Extended", // gates Gemini / AI Overviews grounding
    "Applebot", // Siri / Spotlight
    "Applebot-Extended",
    "Amazonbot",
    "meta-externalagent",
    "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: "*", allow: "/" },
            { userAgent: ["Googlebot", "Bingbot"], allow: "/" },
            ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
        ],
        host: SITE_URL,
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
