<header>
# How I Built Magfinder Using React and Python
March 12th, 2022 by Ryan Blakely

<div>
![Maginfer.com](https://res.cloudinary.com/dccqw6mij/image/upload/v1647128824/f4eay3s3sn2903nmilca.png)
</div>

</header>

<section>
## Problem

I enjoy reading independent magazines, but they're difficult to find. Not many bookstores carry them. And there aren't many websites promoting new releases.

</section>

<section>
## Solution

Create a weekly newsletter of new independent magazine releases.

</section>

<section>
## Strategy

Build a web crawler to search online magazine stores daily and save new releases to a database. Use this database to automate a weekly newsletter.

</section>

<section>
## Tech Stack

React, Python, Replit, Postmark, Fauna

I use [React](https://reactjs.org) to build the display new magazine releases on a website. And Python to search the web for new magazines daily and email newsletters.

I signed up for a [Replit](https://replit.com/) pro account because they offer a server that is constantly active for $7/mo.

![Replit Pro Account](https://res.cloudinary.com/dccqw6mij/image/upload/v1647129011/kji4pouufnzppkbx2zqt.png)

I use [Postmark](https://postmarkapp.com) to deliver the newsletter to users.

I use [Fauna](https://fauna.com) to store the data. I chose Fauna because they have [excellent documentation](https://docs.fauna.com/fauna/current/) and an active online community that made it easy to learn.

Their free tier is super generous and I'm able to use it to power this entire operation.

![Fauna's Free Tier](https://res.cloudinary.com/dccqw6mij/image/upload/v1647129090/mzvlijtqusajrmgesey4.png)

</section>

<section>
## Design

For the front end, I decided to use a grid layout of the latest magazine covers as the main UI. This felt similar to browsing magazines in the real world.

![Magfinder home page](https://res.cloudinary.com/dccqw6mij/image/upload/v1647129152/xcce9hf14fha2spgeazt.png)

Clicking a cover links to the magazine's website where you can learn more about it (or buy it).

I soon realized many of these magazines also have RSS feeds available. I leveraged my Replit account to process all the available RSS feeds I could find.

Next I created a /feeds route that shows the latest articles from various magazines.

![Magfinder /feeds route](https://res.cloudinary.com/dccqw6mij/image/upload/v1647129280/whmt6l8bwj4ya64ptqdm.png)

The newsletter template would also be really simple. I decided to create a single column with magazines as the rows.

![Magfinder newsletter UI](https://res.cloudinary.com/dccqw6mij/image/upload/v1647129405/phfqufcmrzujznjjh2ig.png)

I use Replit to retrieve the newsletter subscribers from Fauna, generate the email using an html file in the repl directory, and then emailing the magazine to subscribers using the built-in [SMTP python library](https://docs.python.org/3/library/smtplib.html) Python module and [Postmark](https://postmarkapp.com).

</section>

<section>
## Next Steps

[I created an instagram account](https://www.instagram.com/himagfinder) (@himagfinder) where I promote magazines by posting a short video flipping through them along with some music.

Over a period of about 5 months, I was able to build a following of about 1,200 people.

My next goal is to grow the number of newsletter subscribers to a point where I can charge for features.

But this is not a big priority for me. I'm just happy to have built something that makes it easy to find independent magazines.

</section>
