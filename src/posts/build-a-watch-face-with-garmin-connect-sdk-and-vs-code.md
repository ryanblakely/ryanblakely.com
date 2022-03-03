<section>
# How To Build a Watch Face Using Garmin Connect IQ SDK and VS Code

March 2, 2022

![Garmin Connect IQ](https://res.cloudinary.com/dccqw6mij/image/upload/v1646323780/l0signwtigkdpgyfkwfl.png)

Ready to build your own watch face for your Garmin watch? The first step is to set up your development environment. This involves setting up the Garmin IQ SDK and pairing it with VS Code.

I'll walk you through each step so you can start building your own Garmin apps.

</section>

<section>
## Download the Garmin SDK

[Download the Garmin Connect IQ SDK](https://developer.garmin.com/connect-iq/sdk/)

</section>

<section>
## Install the VS Code Monkey C Extension

Once you've installed the SDK manager, you can set up the Monkey C extension in VS code.

Monkey C is the Garmin-developed language used to build Connect IQ apps. It's similar to C and Java.

I found the Garmin Developer Forum to be helpful in solving any problems I encountered.

To install the Monkey C Extension in VS Code:

1. In VS Code, go to View > Extension
2. In the Extensions Marketplace, search for "Monkey C"
3. Select the Monkey C Extension from Garmin
4. Click Install
5. Restart VS Code
6. Launch the command palette by pressing: Command + Shift + P
7. Type "Verify Installation" and select "Monkey C: Verify Installation"
 </section>

 <section>
## Generate a Developer Key

Connect IQ uses a developer key to sign apps when building for the App Store. The Monkey C Extension makes this easy.

1. Launch the command palette by pressing: Command + Shift + P
2. Type "Generate a developer key" and select "Monkey C: Generate a Developer Key"
3. Select the directory to save your developer key
 </section>

 <section>
## Install Oracle Java Runtime Environment 8

[Download Java for Mac OS X](https://java.com/en/download/)

 </section>

## To be continued ...
