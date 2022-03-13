<header>
# How I Built Magfinder Using React and Python
March 12th, 2022 by Ryan Blakely

<div>
![Maginfer.com](https://res.cloudinary.com/dccqw6mij/image/upload/v1647128824/f4eay3s3sn2903nmilca.png)
</div>

</header>

<section>
## Problem 🛑

I enjoy reading independent magazines, but they're difficult to find. Not many bookstores carry them. And there aren't many websites promoting new releases. I want to make it easy to find new independent magazines.

</section>

<section>
## Solution 💡

Create a weekly newsletter of new independent magazine releases.

</section>

<section>
## Strategy 💭

Build a web crawler to search online magazine stores and save new releases to a database. Use this database to power a front end and automated newsletter.

</section>

<section>
## Tech Stack 🧰

[React](https://reactjs.org), [Python](https://www.python.org), [Replit](https://replit.com/), [Postmark](https://postmarkapp.com), and [Fauna](https://fauna.com).

I use React and Fauna to power the front end.

I chose Fauna because they have [excellent documentation](https://docs.fauna.com/fauna/current/) and an active online community that made it easy to learn.

They also have a super-generous free tier that powers the entire operation.

Python is the engine that powers the data retrieval processes for the application. I built web crawlers to search the web hourly for new magazines.

I use Replit to retrieve the newsletter subscribers from Fauna, generate the email using custom html, and deliver it to users via Postmark using the built-in [SMTP python library](https://docs.python.org/3/library/smtplib.html) Python module.

I signed up for a Replit pro account because they offer a server that is constantly active for $7/mo.

![Replit Pro Account](https://res.cloudinary.com/dccqw6mij/image/upload/v1647129011/kji4pouufnzppkbx2zqt.png)

</section>

<section>
## Design 🧑🏽‍🎨

I decided to use a grid layout of magazine covers as the main web interface. This felt similar to browsing magazines in the real world.

![Magfinder home page](https://res.cloudinary.com/dccqw6mij/image/upload/v1647129152/xcce9hf14fha2spgeazt.png)

Clicking a cover links to the magazine's website where you can learn more about it (or buy it).

I soon realized many of these magazines also have RSS feeds available. I leveraged my Replit account to process all the available RSS feeds I could find and created a /feeds route to show the latest articles.

![Magfinder /feeds route](https://res.cloudinary.com/dccqw6mij/image/upload/v1647129280/whmt6l8bwj4ya64ptqdm.png)

The newsletter template is also simple. It's a single column with magazines as the rows.

![Magfinder newsletter UI](https://res.cloudinary.com/dccqw6mij/image/upload/v1647129405/phfqufcmrzujznjjh2ig.png)

</section>

<section>
## Next Steps 🔮

[I created an instagram account](https://www.instagram.com/himagfinder) where I promote magazines by posting a short video flipping through them.

Over a period of ~5 months, I was able to build a following of more than 1,200 people.

My next goal is to grow the number of newsletter subscribers to a point where I can charge for features.

But this is not a big priority for me. I'm just happy to have built something that makes it easy to find independent magazines.

</section>
