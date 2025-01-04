
//ChatGPT Spørgsmål:
// how would i change a variables value to an id name when an anchor is clicked on in js?
// sorry i meant change to the href of the anchor
// can we change the event listener to only include "a" elements that start with # in the href?



// Declare the variable
        let currentHref = "";

        // Function to handle click events
        function handleClick(event) {
            event.preventDefault(); // Prevent default link behavior
            currentHref = event.target.href; // Set the variable to the href of the clicked anchor
            console.log(`Current HREF is now: ${currentHref}`);
            window.location.replace(currentHref); //replaces the current window location in history
        }

        // Get all anchor elements where href starts with #
        const anchors = Array.from(document.querySelectorAll('a')).filter(anchor => 
            anchor.getAttribute('href').startsWith('#')
        );

        // Attach event listeners to filtered anchors
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleClick);
        });


