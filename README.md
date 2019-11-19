This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites
- Node, Yarn
- PHP, MySQLi
- MySQL

## Running on local machine
- Install project by running `yarn` in project root folder
- Start MySQL server using default port 3306 (e.g. `mysql -u root -p`)
- Start PHP server `php -S 127.0.0.1:8080`
- Set up MySQL database either with command-line or GUI of your choice (e.g. MySQLWorkbench)
    1. `CREATE DATABASE ReactPhpDemo;`
    2. `CREATE TABLE Email (
            id INT(11) PRIMARY_KEY NOT NULL AUTO_INCREMENT
            email VARCHAR(100) NOT NULL UNIQUE
        );`
- Start React app `yarn start`

## Design of Form component
I have designed the Form component (./Component/Form) to be one form field (./Component/InputField) and one single button (./Component/ActionButton) with the intent that it should be reusable. On click of the ActionButton, the app will: 1. validate the user's input and 2. perform an API call to the back end if user has entered a valid input. For ease of reusability and to support additional validation functions, I put the validateEmail function in ./Helpers/Regex. To illustrate how I intend to reuse this component, I created SubscribePage using a High-Order Component (./HOC/withMaxMediumContainer) that wraps around the Form component and pass it some props (field: 'Email', validation: validateEmail and action: 'Subscribe'). I try to use PropTypes where I can to validate data structure as well as provide context regarding functionalities of each component.

### InputField
This component is a wrapper around Material UI's TextField. Default styling is set up so InputField can be reused to achieve a consistent look across the app. Default browser behaviour is disabled. I chose to use uncontrolled text field to improve app performance. In SubscriptionPage example, it accepts 'field' prop from the Form component, but it can also directly accept the field prop to change its label text.

### ActionButton
This component is a wrapper around Material UI's Button. Design rationale is similar to InputField with a focus on easy reusability. Default browser behaviour is disabled. In SubscriptionPage example, it accepts 'action' prop from the Form component. Changing the 'action' prop changes its label.

### FullWidthFormWrapper
This is a wrapper component that separates each of its children (components between its <> tags) into its own row using Material UI's Grid. Its children are required to be JSX nodes.

### Text
This component shows the result of Form component's 'validation' prop as well as server's response if an API call was made to the server. As such, this component accepts a string as its child. Default text color is green. To render errors in red text, it accepts an 'error' prop which should be a boolean.