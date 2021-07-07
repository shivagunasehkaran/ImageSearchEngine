# ImageSearchEngine

The following requirement fullfilled.

### Screen 1:
Screen 1 has the following two functionalities:

1. Displaying a random GIF:
    * Upon opening the app, it should connect to the Giphy random API and display a random GIF as displayed.
    * The random GIF displayed on this screen should be animated.
    * Every 10 seconds a new random GIF should replace the previous loaded one. This should continue as long as the user has no search results displayed.
    * should also display the GIF title, link and an age restriction badge.
2. Search Bar:
    * Upon clicking the search bar, we start a live search after characters have been entered. This means that once the user has typed two characters, the search API should be called and not wait until the user pressed search.
    * The returning results should be displayed as shown. The GIFs’ in the search results do not have to be animated and the list doesn’t have to include infinite scrolling.
    * Tapping one of the list items should navigate the user to **Screen 2**.
    * This screen should be able to retain its state, in case the user navigates back to it from **Screen 2**.
    * On canceling the search, the screen should go back to displaying the random GIF.

### Screen 2:
Screen 2 only has the following functionality:
1. Displaying the GIF that was tapped:
    * On **Screen 2** the tapped GIF should be displayed animated along with the title, link and age restriction badge as displayed.
    * Upon tapping the back button, the user should be taken back to **Screen 1**.

### Used API's:
* API Documentation: https://developers.giphy.com/docs/
* Use the following API Key: `dc6zaTOxFJmzC`

### Grading Criteria:
Following criteria has been fullfilled.

* Architecture and approach
* Execution
* Testability
* Code readability and style
* Usage of git - (Not committed frequently)

### Used packages :

* react-native-fast-image : "^8.3.4",
* react-native-size-matters : "^0.4.0"

### Used tools :

* JEST
* Enzyme

