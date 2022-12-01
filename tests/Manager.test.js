const Manager = require('../library/Manager');

test('create the manager object', () => {
    const manager = new Manager('Benjamin Franklin', 'bfrank@test.com', '1', '555-555-5555');

    expect(manager.name).toBe('Benjamin Franklin');
    expect(manager.email).toBe('bfrank@test.com');
    expect(manager.id).toBe('1');
    expect(manager.officeNumber).toBe('555-555-5555');

});

test("Get manager's officenumber", () => {
    const manager = new Manager('Benjamin Franklin', 'bfrank@test.com', '1', '555-555-5555');

    expect(manager.getOfficeNumber()).toBe('800-555-5555');
});

test("Get manager's role", () => {
    const manager = new Manager('Benjamin Franklin', 'bfrank@test.com', '1', '555-555-5555');

    expect(manager.getRole()).toBe('Manager');
});