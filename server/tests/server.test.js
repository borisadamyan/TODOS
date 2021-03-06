const _ = require('lodash');
const should = require('chai').should();
var expectChai = require('chai').expect;
const request = require('supertest');
const expect = require('expect');
const {ObjectID} = require('mongodb');
const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {todos, populateTodos, populateUsers} = require('./seed/seed');


beforeEach( populateUsers);
beforeEach(populateTodos);

describe('POST /todos', () => {
   it('should create a new todo', (done) => {
      var text = 'Test todo text';

      request(app)
          .post('/todos')
          .send({text})
          .expect(200)
          .expect((res) => {
              expect(res.body.text).toBe(text);
          })
          .end((err, res) => {
            if(err) {
                return done(err)
            }

            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
          });
   });

   it('should not create todo with invalid data', (done) => {
       request(app)
           .post('/todos')
           .send({})
           .expect(400)
           .end((err) => {
               if(err){
                   return done(err)
               }
           });
       Todo.find().then((todos) => {
           expect(todos.length).toBe(2);
           done();
       }).catch((e) => done(e));
   })
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
            expect(res.body.todos.length).toBe(2)
            })
            .end(done);
    })
});

describe('GET /todos/:id', () => {
    it('should get  todo by ID', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text)
            })
            .end(done);
    });

    it('should return 404 if todo not found', (done) => {
        var hexId = new ObjectID().toHexString();
        request(app)
            .get(`/todos/${hexId}`)
            .expect(404)
            .end(done);

    });

    it('should return 404 none-object ids', (done) => {
        request(app)
            .get(`/todos/123abc`)
            .expect(404)
            .end(done);
    });
});

describe('DELETE /todos/:id', () => {
    it('should remove a Todo', (done) => {
        var hexId = todos[1]._id.toHexString();
        request(app)
            .delete(`/todos/${hexId}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo._id).toBe(hexId)
            })
            .end((err, res) => {
            if(err){
                    return done(err);
                }
                Todo.findById(hexId).then((todo) => {
                   // expect(todo).toNotExist();
                    should.not.exist(todo);
                    done();
                }).catch((e) => done(e))
            });
    });
    it('should return 404 if todo not found', (done) => {
        var hexId = new ObjectID().toHexString();
        request(app)
            .delete(`/todos/${hexId}`)
            .expect(404)
            .end(done);

    });

    it('should return 404 if object ids invalid', (done) => {
        request(app)
            .get(`/todos/123abc`)
            .expect(404)
            .end(done);
    });
});

describe('PATCH /todos/:id', () =>{
   it('should be update the todo', (done) => {
       var hexId  = todos[0]._id.toHexString();
       var text = 'Upbated text';

       request(app)
           .patch(`/todos/${hexId}`)
           .send({
               completed: true,
               text
           })
           .expect(200)
           .expect((res) => {
           expect(res.body.todo.text).toBe(text);
           expect(res.body.todo.completed).toBe(true);
           expectChai(res.body.todo.completedAt).to.be.a('number');

           })
           .end(done)
   });
    it('should clear completedAt when todo is not complete', (done) => {
        var hexId  = todos[1]._id.toHexString();
        var text = 'Updated text !!';

        request(app)
            .patch(`/todos/${hexId}`)
            .send({
                completed: false,
                text
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(text);
                expect(res.body.todo.completed).toBe(false);
                //expect(res.body.todo.completedAt).toBeA('number');
                //expectChai(res.body.todo.completedAt).to.be.a('number');
                //expect(res.body.todo.completedAt).toNotExist();
                should.not.exist(res.body.todo.completedAt);
            })
            .end(done)
    })
});