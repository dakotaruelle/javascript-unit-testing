- Create a folder called mocha-testing
  - Run `npm init -y`
  - Run `npm install --save-dev mocha chai`
  - Create a file called Todos.js and paste in this code

        function ToDosContainer(){
            this.todos = [];
        }

        ToDosContainer.prototype.addTodo = function(item) {
            this.todos.push(item)
        }

        ToDosContainer.prototype.getItems = function() {
            return this.todos;
        }

  - Create a file called Todos.test.js and paste in this code

        const expect = chai.expect;

        describe('Tests for TodosContainer', () => {
            it('addTodo() should add an item', () => {
                const todosContainer = new ToDosContainer();
            
                const item = {
                    title: "get milk",
                    complete: false
                };

                todosContainer.addTodo(item);
                const todos = todosContainer.getItems();
                expect(todos.length).to.equal(1);
            });
        });

  - Create a file called TestRunner.html and paste in this code

        <!DOCTYPE html>
        <html>
        <head>
            <title>Mocha Tests</title>
            <link rel="stylesheet" href="node_modules/mocha/mocha.css">
        </head>
        <body>
            <div id="mocha"></div>
            <script src="node_modules/mocha/mocha.js"></script>
            <script src="node_modules/chai/chai.js"></script>
            <script>mocha.setup('bdd')</script>

            <!-- load code you want to test here -->

            <!-- load your test files here -->

            <script>
            mocha.run();
            </script>
        </body>
        </html>

  - Add this line right after the line "load code you want to test here"

        <script src="Todos.js"></script>

  - Add this line right after the line "load your test files here"

        <script src="Todos.test.js"></script>

  - Open TestRunner.html in a browser and the test will run

- Create a folder called jest-testing
  - Run `npm init -y`
  - Run `npm install -g express-generator`
  - Run `express --view=pug . --force`
  - In the routes directory, create a new directory called components
  - In the newly created components directory, create a file called myComponent.js
    - Paste in this code 

            var myComponent = {
                getSum: function(x, y) {
                    return x + y;
                }
            };

            module.exports = myComponent;

  - In routes/index.js
    - Paste in the line `var myComponent = require('./components/myComponent');` after the line `var router = express.Router();`
    - Replace the line `res.render('index', { title: 'Express' });`

            var sum = myComponent.getSum(5, 6);
            res.render('index', { title: 'Express', sum: sum });

  - In views/index.pug, add the line `div The sum is #{sum}` after the line `p Welcome to #{title}`
  - Run the command `npm start` and open the browser to localhost:3000, the sum will be printed out on the screen
  - Run `npm install --save-dev jest`
  - In routes/components, create a file called myComponent.test.js and paste in this code

            var myComponent = require('./myComponent');

            test('adds 1 + 2 to equal 3', () => {
                expect(myComponent.getSum(1, 2)).toBe(3);
            });

  - In package.json, add a script called "test" with the command "jest"
  - Run `npm run test`
  - Run `npm install --save-dev webpack webpack-cli`
  - In public/javascripts create a file called message.js and paste in this code

            export default function getMessage(name) {
                return 'Hello ' + name;
            }

  - In public/javascripts create a file called index.js and paste in this code

            import getMessage from './message';

            const message = getMessage('person');
            console.log(message);

  - In the root of the jest-testing directory, create a file called webpack.config.js and paste in this code

            const path = require('path');

            module.exports = {
            entry: './public/javascripts/index.js',
            output: {
                path: path.resolve(__dirname, 'public/dist'),
                filename: 'index.bundle.js'
            }
            };

  - In views/index.pug, add the line `script(src='/dist/index.bundle.js')` after the line `div The sum is #{sum}`
  - In package.json, add a script with the name "build" and the command "webpack"
  - Run `npm run build`
  - Run `npm start` and open the browser to localhost:3000 and open the console to see the message
  - In public/javascripts create a file called message.test.js and paste in this code

            import getMessage from './message';

            test('gives correct name', () => {
                expect(getMessage('person')).toBe('Hello person');
            });

  - Run `npm run test`, there will be an error message about import statements
  - Run `npm install --save-dev @babel/core @babel/preset-env babel-jest`
  - Create a file in the root of jest-testing called babel.config.js and paste in this code

            module.exports = {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                        targets: {
                            node: 'current',
                        },
                        },
                    ],
                ],
            };

  - Run `npm run test` again and now it will work
  - In public/javascripts/index.js
    - Add this line `import getUserId from './getUserId';` to the top of the file
    - Add these lines to the bottom of the file

            getUserId().then(id => {
                console.log('user id: ', id);
            });

  - In public/javascripts, create a file called getUserId.js and paste in this code

            export default function getUserId() {
                return new Promise(resolve => {
                    // Get response object
                    var userId = response.id;
                    resolve(userId);
                });
            }

  - In getUserId.js
    - Add this line to the top of the file `import makeNetworkRequest from './makeNetworkRequest';`
    - Replace the lines

            // Get response object
            var userId = response.id;
            resolve(userId);

        with

            makeNetworkRequest()
                .then(response => {
                        var userId = response.id;
                        resolve(userId);
                    }
                );

  - In public/javascripts create a file called makeNetworkRequest.js and paste in this code

            export default function makeNetworkRequest() {
                return new Promise(resolve => {
                    axios.get('https://jsonplaceholder.typicode.com/todos/1')
                        .then(response => {
                            resolve(response.data);
                        }
                    );
                });
            }

  - In view/index.pug add this line `script(src='https://unpkg.com/axios/dist/axios.min.js')` before this line `script(src='/dist/index.bundle.js')`

  - Run `npm run build`
  - Run npm start and open a browser to localhost:3000
  - In public/javascripts create a file called getUserId.test.js and paste in this code

            jest.mock('./makeNetworkRequest');

            import getUserId from './getUserId';

            test('gets async data', () => {
                return getUserId().then(id => {
                    expect(id).toEqual(1);
                });
            });

  - In public/javascripts create a folder called __mocks__
    - In the __mocks__ folder create a file called makeNetworkRequest.js and paste in this code

            const data = {
                completed: false,
                id: 1
            };

            export default function getData() {
                return new Promise((resolve) => {
                    process.nextTick(() =>
                        resolve(data)
                    );
                });
            }

  - Run `npm run test`
  - In public/javascripts/index.js
    - Add this line `import setupButtonEventListener from './setupButtonEventListener';` to the top of the file
    - Add this line `setupButtonEventListener();` to the bottom of the file
  - In public/javascripts add a file called setupButtonEventListener.js and paste in this code

            import alterDOM from "./alterDOM"

            export default function setupButtonEventListener() {
                document.getElementById('button').addEventListener('click', function () {
                    alterDOM();
                });
            }

  - In public/javascripts add a file called alterDOM.js and paste in this code

            export default function alterDOM() {
                document.getElementById('message').textContent = "I've been put here by JS!";
            }

  - In views/index.pug add these lines

        button(id='button') Click me
        div(id='message')

    after this line `div The sum is #{sum}`

  - Run `npm run build`
  - Run `npm start`, open a browser to localhost:3000, and click the button
  - In public/javascripts create a file called setupButtonEventListener.test.js
    - Paste in this code

            import setupButtonEventListener from './setupButtonEventListener';

            test('displays a message after a click', () => {
                // test code here
            });

    - Replace `//test code here` with these lines

            document.body.innerHTML =
            '<button id="button" />' +
            '<div id="message" />';

    - Beneath the previous lines add this line `setupButtonEventListener();`
    - Then add this line `document.getElementById('button').click();`
    - Lastly, add these lines

            const messageNode = document.getElementById('message');
            expect(messageNode.textContent).toEqual("I've been put here by JS!");

    - Run `npm run test`

