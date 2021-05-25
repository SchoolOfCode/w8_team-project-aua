# On This Day Project

## Planning

- Initially, we planned to make an API which would display news local to Birmingham, but after some (lots of) research and playing around with APIs, we realised that none of them allowed us to reduce the search down to Birmingham, and even when they were displaying articles few and far between.
- our next idea, and the one we settled on, was to create a historical news searcher, which would provide you with the news from any historical date you searched (this was later restricted to the year 2000 as not many articles were available from our API before then).
- We cereated our wireframe on paint so adjustments could be made easily. Once we had actually created the site, we decided we did not really like how it looked and we ended up completely rehashing it.

## Initial coding

- Created HTML skeleton with title and datepicker
- Used multiple pages provisionally (this ended up getting removed later)
- Some basic CSS to give us a feel of how we wanted the website to look (this was also completely overhauled later)
- Created JS async function to fetch initial API from NewsAPI

## Problems

- We ran into a number of problems initially:
- one of our teammates dropped out
- NewsAPI wasn't allowing us to use the API without paying. It needed a Chrome Extension to work and would only display on a local server. even after we fixed this issue, we could still not use the API due to licensing issues (they wanted us to pay )
- We bounced from API to API, constantly running into issues like the APIs being too inflexible, only providing us links (and not articles), and a myriad of licensing issues. We eventually stumbled across the Guardian's API which gave us (almost) everything we needed
- Unfortunately we were unable to find another suitable API which we could integrate in seamlessly, so we decided to just use the Guardian's one for the main News on the site, and just used another API to provide us with some aesthetics.

## We got it Working!

- We eventually managed to get the guardian API giving us articles by the date we selected which was a great feeling. Our main functionality was done and all we really had to do now was make it display and look good.
- We decided to have ten articles displaying on a page at a time, with the main body of the article hidden. This article can then be fully read by pressing a Read More button.
- We relied heavily on google for much of our skeletal code, copying it in and adjusting it so that it would function in the way that we wanted to, in true SoC fasion.
- et Voila, clone down our repo to see our finished project!
