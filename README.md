make a madlibs game.
To get the text to ad-lib I'd like to make a select box in an html form that would choose between separate apis like https://whatdoestrumpthink.com/api-docs/index.html or Icanhazdadjoke etc etc (or maybe if I can figure out Oauth some stuff off the reddit api) to pull down a random text block.

After getting the random text, create a function to randomly remove words, to become the blanks. The words pulled from the text would then be searched in a dictionary api to ascertain whether they are a noun, verb, adj , etc and present that to the user.

The user would then get a form back with the textfield blanks having the placeholder of type. There should be a submit button, clear form button, place random, and get new form button.


Anywho when the user submits the form it should return them the text as a string concatenated and presented nicely.
Id also like to implement a feature where the user can use checkboxes and text fields to set all nouns to a set word, or verbs to a set word etc, etc.

it should remove all instances of a selected word. ignore articles and pronouns.

Stretch: Allow user to post their creations to social media (as an image????)
Far Stretch: let users choose which words they want to make the blanks.
