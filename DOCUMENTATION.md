# Lilly Technical Challenge Documentation Template

## Approach

i approached this challenge by breaking it down into logical steps,

1.  enviroment setup, 2. read operations (get): my priority was to establish a connection between frontend and backend, i implemented the fetch logic first to ensure i could see the data, 3. once data was visible i dealt with what i would call dirty data where some parts are missing. 4. write operations (post) i built the input form and createmedicine logic, verified api endpoints by analysing main.py
    ui/ux improvement, used css to improve usability.

## Objectives - Innovative Solutions

Objective 1, starting now i plan to use the js fetch api to retrieve data from http://localhost:8000/medicines and render it into the dom, in index.html

objective 2, api returns some medicines with empty names or null prices, ill add conditional logic to check for the values, if a name is missing ill display unknown medicine, if price missing i will display price tbc

objective 3, added event listener to the "add medicine form, implemented a createMedicine function that intercepts the submit event, reads input values and sends post request to backend. after successful add it refreshes list

objective 4, i improved ux by centering the content on the screen and styling the list items as cards. makes individual items clearer than plain text list

## Problems Faced

initially my fetch function returned undefined when trying to map over the data, my solution was logging the response to the console, i realised the backend returns an object rather than a direct array, i then adjusted my code to access data.medicines before looping

i encountered a TypeError: Cannot read properties of null, when adding the event listener, my solution was i realised i had not added the id="add-medicine-form" to the html form element, adding the id allowed js to locate the element and attach the listener

## Evaluation

overall i felt the challenge went well, successuflly meeting all core functional requirements
