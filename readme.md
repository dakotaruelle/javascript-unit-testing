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
  - In routes/components, create a file called myComponent.test.js and paste in this code

            var myComponent = require('./myComponent');

            test('adds 1 + 2 to equal 3', () => {
                expect(myComponent.getSum(1, 2)).toBe(3);
            });

  - In package.json, add a script called "test" with the command "jest"
  - Run `npm run test`