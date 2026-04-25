## Search Engine Optimization
In this folder, we are going to learn the basics of SEO and how to optimize the SEO score for our React application. Then, we are going to learn how to create meta tags for easier integration on various social media sites.

# Optimizing Application
Search engines work by storing information about websites in an index. The index contains the location, content, and meta information of websites. Adding or updating pages in the index is called indexing and done by a crawler. A crawler is an automated software that fetches websites and indexes them. It is called a crawler because it follows further links on the website to find more websites.
More advanced crawlers, such as the Googlebot, can also detect whether JavaScript is required to render the contents of a website and even render it.
If your website still does not get indexed, this might be because it is improperly configured. First, you need to create a robots.txt file to specify whether search engines are allowed to crawl parts of your website, and which parts they are allowed to crawl.
First, let’s ensure that crawlers are explicitly allowed to access our app and index all pages on it. To do so, we need to create a robots.txt file, which crawlers will read to find out which pages they are allowed to access (if any).

# Using Meta tags
Meta tags, as the name tells us, contain meta information about a page. Besides the title, we can set meta information such as a short description, or information on how the browser should render a website. In this section, we will cover the most important SEO-relevant meta tags, starting with the description meta tag.
In exploring meta tag we will demonstrate in in the meta.jsx file to see how it works

# Creating a sitemap
A sitemap contains a list of URLs that are part of an app, so that crawlers can easily detect new content and crawl the app more efficiently.
Usually, sitemaps are provided in XML format. They are not mandatory for SEO, but will make it easier and faster for crawlers to pick up content on your app.

First, we are going to need a base URL for our (deployed) frontend to prefix all paths on our sitemap with. For now, we are simply going to set this to our localhost URL, but in production, this environment variable should be changed to the proper base URL of the app. Edit .env in the root of our project and add a FRONTEND_URL environment variable:
In the .env add the following(see .env file) Create a new generateSitemap.js file in the root of our project, start by importing the slug function and dotenv:
In the server,js we will import generateSitemap.js and use it there

# Open graphs meta tags
The Open Graph (OG) meta tags have four generic properties that every page can have:
• og:type: Describes the type of the page; specific types may have additional properties
• og:title: Describes the title of the page as it should appear on embeds
• og:image: An URL to an image that should be used for the embed
• og:url: An URL to a link that should be used for the embed

The og:type meta tag describes the type of content available on the page. It tells the social media
sites how the embed should be formatted. Among others, the following values are possible:
• website: The default value, a basic embed
• article: This is for news and blog posts, and has additional parameters for published_time, modified_time, author, section, and tag
• profile: For user profiles, with additional parameters for first_name, last_name, username, and gender
• book: For books, with additional parameters for author, isbn, release_date, and tag
• music types: This includes music.song, music.album, music.playlist, and music.radio_station, each of them having different additional parameters
• video types: This includes video.movie, video.episode, video.tv_show, and video.other, each of them having different additional parameters
A full description of the OG meta tags and all possible values can be found on their official
website: https://ogp.me/.