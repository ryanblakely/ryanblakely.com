<section>
# Getting Started With Garmin Connect IQ and VSCode

March 3, 2022

<!-- ![Garmin Connect IQ](https://res.cloudinary.com/dccqw6mij/image/upload/v1646323780/l0signwtigkdpgyfkwfl.png) -->
</section>

<section>
## Download the Garmin SDK

[Download the Garmin Connect IQ SDK](https://developer.garmin.com/connect-iq/sdk/)

</section>

<section>
## Install the VS Code Monkey C Extension

In VS Code, go to View > Extensions.

Search for "Monkey C".

Select the Monkey C Extension from Garmin.

Click Install.

Restart VS Code.

Launch the command palette by pressing: Command + Shift + P.

Type "Verify Installation" and select "Monkey C: Verify Installation".

 </section>

 <section>
## Generate a Developer Key

Launch the command palette by pressing: Command + Shift + P.

Type "Generate a developer key" and select "Monkey C: Generate a Developer Key".

Select the directory to save your developer key.

 </section>

 <section>
## Install Oracle Java Runtime Environment 8

[Download Java for Mac OS X](https://java.com/en/download/)

 </section>

 <section>
## Set Up the Command Line

Launch the terminal.

Type the commands below to open `.bash_profile` in a text editor

`$ touch ~/.bash_profile`

`$ open ~/.bash_profile`

Add the line below to the file and save the changes

`export PATH=$PATH:`cat $HOME/Library/Application\ Support/Garmin/ConnectIQ/current-sdk.cfg`/bin`

 </section>

<!-- ## To be continued ... -->
