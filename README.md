# Muse Navigation System - Basic Search Funcionality

The purpose of this application is to allow users to search for a product category based on input into a search field. If there is a partial or direct match, matching results are returned to the user and they can select the desired result to navigate to that category's page. If there are no direct matches, OpenAI's API is called to recommend an appropriate category to the user.
This project is trial work for Muse Inc. to support a broader Navigation System UI to be displayed on a robot. Users can enter desired product or category and the robot will guide the user to the target destination.

## Project Demo (as of 04/21/2024)

https://github.com/chrismcanulty/muse-navigation-system/assets/108088437/c642d6f8-2db0-4b8f-bc20-28744d7a85f8

## Tech Stack

- Frontend: React, TypeScript, Material UI
- Backend: N/A
- Testing: React Testing Library
- Other: OpenAI API (for AI suggestions)

## Notes

- OpenAI API is called with an API key, this key is not present in the GitHub repository. If you try to call the API on your device it will fail unless you add your own key.
- Please note, due to the simplicity of the application there is currently no global state management (e.g. Context, Redux, etc.). As the application grows in scale, it would be recommended to refactor the code to implement some type of global state management.
- This application can be built upon to accommodate a greater variety of user input methods such as voice recognition, cross platform input (e.g. mobile device), etc.
