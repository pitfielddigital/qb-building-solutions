# Projects / Behold feed

`src/components/InstagramFeed.astro` embeds the supplied widget feed `bY5dIY1GaF0IzoqbvDg3` and loads `https://w.behold.so/widget.js` once, only on the Projects page. No Instagram token, Behold admin key or dependency is needed. Change `feedId` in that component if the feed is replaced.

The surrounding section uses the existing QB spacing, colours, typography and contact links. A full-width container allows the widget to respond to its available width. The widget's internal layout and post styling are managed in the Behold dashboard, rather than by the site's CSS. The supplied feed currently uses a gallery-wall layout, which renders live project photos. For the closest match to the earlier sample grid, use the flexible grid with square images, 5px corners, 24px gaps and three/two/one columns for desktop/tablet/mobile. Behold breakpoints use container width: the site's 90%-width section corresponds to approximately 900px and 432px at its existing 999px and 480px viewport breakpoints. Review these settings with the live feed in the dashboard. See https://behold.so/docs/widget/.

If a domain whitelist is enabled in Behold, include the actual preview hostname. Behold always allows localhost. Keep the feed's Instagram connection and post selection up to date in Behold. With JavaScript disabled or the feed unavailable, the page still offers a contact route for work examples.

The privacy notice now describes Behold requests and external Instagram links, and attributes the no-cookie/no-tracking statement to Behold: https://behold.so/widgets/. No analytics or advertising code was added. The existing preview/noindex and publication settings are unchanged; no deployment is authorised by connecting the feed.

The privacy notice retains `status: review`. Before production approval, the business must verify its legal controller identity and postal contact address, division relationships, providers, retention and transfer arrangements against the notice.
