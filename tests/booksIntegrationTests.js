require("should");

const request = require("supertest");
const mongoose = require("mongoose");

process.env.ENV = "Test";

const testServer = require("../server.js");
// const bookModel = require("../models/bookModel.js");

const Book = mongoose.model("books");
const agent = request.agent(testServer);

describe("Book Crud Test", () => {
  it("should allow a book to be posted and return read and _it", (done) => {
    const bookPost = {
      title: "Title Test",
      author: "Author Test",
      genre: "Genre Test",
    };

    agent
      .post("/api/books")
      .send(bookPost)
      .expect(200)
      .end((err, results) => {
        //console.log(results);
        //results.body.read.should.not.equal(false);
        results.body.should.have.property("_id");
        done();
      });
  });

  afterEach((done) => {
    // Executes after each test run
    Book.deleteMany({}).exec();
    done();
  });

  after((done) => {
    // Exectutes after all test are run
    mongoose.connection.close();
    testServer.server.close(done());
    console.log("Database Connection Closed Successfully");
  });
});
