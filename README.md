# WebDriverIO Tests for WestWing

# Framework
The test is located at

.test/specs/wishliste2e.js 

.test/pageobjects/* contains the elements stored in page object format

# Run Test
To run the test execute following commands
Download the Repo

```docker
cd westwingwditests
docker-compose build
docker-compose up

docker-compose.yml file contains command that executes the test only for file wishliste2e.js.
In order to be able to run more tests this command can be modified to run suites or can be replaced with "npm test" to run all the available tests.

