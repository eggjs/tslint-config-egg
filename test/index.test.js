'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/index.test.js', () => {
  describe('trailing comma', () => {
    const cwd = path.join(__dirname, 'fixtures/comma');
    it('should success with trailing comma', () => {
      return coffee.spawn('tslint', [ path.resolve(cwd, './trailing-comma.ts') ])
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail when it missing trailing comma in object or has unnecessary trailing comma in paramter', () => {
      return coffee.spawn('tslint', [ path.resolve(cwd, './trailing-comma-error.ts') ])
        // .debug()
        .expect('stdout', /Missing trailing comma/)
        .expect('stdout', /Unnecessary trailing comma/)
        .expect('code', 2)
        .end();
    });
  });

  describe('semicolon', () => {
    const cwd = path.join(__dirname, 'fixtures/semi');
    it('should success with semicolon', () => {
      return coffee.spawn('tslint', [ path.resolve(cwd, './semi.ts') ])
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail without semicolon', () => {
      return coffee.spawn('tslint', [ path.resolve(cwd, './semi-error.ts') ])
        // .debug()
        .expect('stdout', /Missing semicolon/)
        .expect('code', 2)
        .end();
    });
  });

  describe('curly', () => {
    const cwd = path.join(__dirname, 'fixtures/curly');
    it('should success with same line or braces', () => {
      return coffee.spawn('tslint', [ path.resolve(cwd, './curly.ts') ])
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail with other line', () => {
      return coffee.spawn('tslint', [ path.resolve(cwd, './curly-error.ts') ])
        // .debug()
        .expect('stdout', /if statements must be braced/)
        .expect('code', 2)
        .end();
    });
  });
});

