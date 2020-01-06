- Create a folder called mocha-testing
  - Run npm init -y
  - Run npm i -D mocha chai
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