# udpating magfinder

the first design of magfinder was a success - i created an application that helped me discover new independent magazines. Each week I receive an email with the latest magazine releases.

This has worked well, but I'm ready to refine this even further.

Right now, when you click a magazine on Magfinder, you're directed to the webstie for the magazine. I'd like to learn more about a website, quickly, before leaving magfinder and opening a new tab.

When I click a magazine, I'd like to see a list of articles the magazine has published recently. This will allow me to gain a better understanding of the content each magazine produces. I can read a couple articles, and if interested, follow the link to the magazines store where I can buy it.

This would also allow for a natural progression to building a "favorite magazines" list, which I can use to customize the newsletter I receive. Instead of a general list of magazine releases, it would be great if I could know if any of my favorite magazines have a new release or published new articles.

This would allow for deeper engagement with the newsletter.

## refactoring api calls

optimize the number of data calls

-   retrive 25 magazines on initial load
-   retrieve parent magazine and 3 articles on magazine click
-   store magazines and parent magazine in context

### benefits of using netlify functions (lambdas) for api calls vs calling api from front end

-   server-side code that works as API endpoints
-   can trigger directly from frontend through JavaScript or call from other services via webhooks
-   centralized location for api
-   if i build the api inside the front end react code, i'll have to duplicate code to call endpoints from backend python methods
-   pay per execution pricing: only pay for how long my function code takes to run
-   scalability: load balancing, security patches, logging are handled by Netlify
