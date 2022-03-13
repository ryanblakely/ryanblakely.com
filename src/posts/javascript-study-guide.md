<header>
# JavaScript Study Guide

March 9th, 2022 by Ryan Blakely

</header>

<section>
#### XSS

What is a XSS? It's about Executing JavaScript code on other users devices.
[YouTube Video](https://www.youtube.com/watch?v=oEFPFc36weY)

#### Examples

Use script tags in an input form

Using an input form to pass harmful code to access a database

Use an image url input form to pass JS via an onerror tag

#### How to Defend

Sanitize all user input. Parse all user input before it's stored in a database. One example is sanitize-html library which will remove all keys from a plain object that are not `String`, `Integer`, or `Boolean`.

Use npm-audit to audit 3rd party libraries in your project for known vulnerabilities.

<!-- Use HTTP only flag on client cookies to prevent front end code from reading or writing to the cookie header information. -->

</section>

<section>
#### CSRF

What is CSRF? CSRF is Cross-site Request Forgery

"An attack that forces a user to execute unwanted actions on a web application in which they're currently authenticated ... an attacker may trick the users of a web application into executing actions of the attacker's choosing..." - OWASP

This type of attack is specific to cookies.

#### Examples

A hacker sends you a link to a malicious website that is impersonating a trusted website. In a situation like this, the hacker would forge a request to the trusted site using a session token from your browser (which should not require the user to login again).

CSRF is possible when the hacker can use established session tokens of the user without any additional verification.

#### How to Defend

If possible, don't use cookies.

Use Captcha or reenter password for sensitive requests.

Make unique form tokens generated on every POST, PUT, and DELETE request. Include token in both cookie header and body.

Use libraries which include built-in CSRF protection

</section>

<section>
### Prototypal Inheritance

`__proto__` is a property of every variable thats pointing to the parent object that it's inherititing from

`prototype` is a property on the constructor function that contains all the stuff that will be inherited by its instance

<div>
![](https://res.cloudinary.com/dccqw6mij/image/upload/v1646927474/jg9fcx2cs9579daadfec.png)
</div>

<div>
![](https://res.cloudinary.com/dccqw6mij/image/upload/v1646928684/xevq8fkawhdjwqf3yd5m.png)
</div>

When you look up a property on an object, if it can't find it there, it will look on its prototype. If it can't find it on its first proto, it will look on the proto of the proto. And it will keep going down the chain of prototypes until it finds it. If it doesnt exist, it will return undefined.

When you create a new object, JavaScript engine puts hidden properties into an object and attaches it to your original object. This gives you access to various properties and methods.

`array.__proto__` is the prototype object created by JavaScript engine.

Each and every object in JavaScript has a prototype, so that means `array.__proto__` also has it's own prototype

Ultimately all arrays, strings, integers are inheriting from the Object prototype constructor.

</section>

<section>
### DOM API & Manipulation

</section>

<section>
### CSS Manipulation
</section>

<section>
### Browser / DOM Events & Event Handling
</section>

<section>
### XHR Requests & HTTP Headers
</section>

<section>
### JavaScript Closures

-   [3 common JavaScript closure questions](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)
-   [Frontend developer roadmap](https://roadmap.sh/frontend)

Closures remember the outer function scope even after creation time.

<div>
![](https://res.cloudinary.com/dccqw6mij/image/upload/v1646936705/rztx2wm7udzc1d2mjtyx.png)
</div>

</section>
