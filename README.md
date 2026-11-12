# Kadeřnictví MT

One-page website for a hair salon, hosted on GitHub Pages.

Non-Head Spa service names and prices in `index.html` were synced from the
[Notino salon profile](https://www.notino.cz/salony/kadernictvi-mt_1/) on
2026-11-12, including the women's, men's, and children's tabs. Rates marked
`/ hod.` are hourly, as specified in the Notino service descriptions.
Consultation uses the listed booking price of 10 CZK, although its description
says it is free. Head Spa content and prices were left unchanged.
Polish translations are maintained in `js/language.js`. Updates are manual.

The seasonal Christmas Head Spa voucher promotion is the `#christmas-gift`
modal in `index.html`, with styling in `css/style.css`, Polish copy in
`js/language.js`, and behavior in `js/christmas-gift.js`. It opens on every page
load and can be dismissed with the close button or Escape. Dismissal is not
saved; refresh the page to show it again. Previously saved dismissals are ignored.

The modal links to the existing Slevomat offer without advertising a specific
price, discount, or deadline. Remove the modal and its script after the Christmas
campaign; it is not automatically date-gated.
