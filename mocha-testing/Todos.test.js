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