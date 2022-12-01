const Employee = require('../library/Employee');

test('create the employee object', () => {
    const employee = new Employee('Benjamin Franklin', 'bfrank@test.com', '1');

    expect(employee.name).toBe('Benjamin Franklin');
    expect(employee.email).toBe('bfrank@test.com');
    expect(employee.id).toBe('1');
});

test("get employee's name", () => {
    const employee = new Employee('Benjamin Franklin', 'bfrank@test.com', '1');

    expect(employee.getName()).toBe(employee.name);
});

test("get employee's id", () => {
    const employee = new Employee('Benjamin Franklin', 'bfrank@test.com', '1');

    expect(employee.getId()).toBe(employee.id);
});

test("get employee's email", () => {
    const employee = new Employee('Benjamin Franklin', 'bfrank@test.com', '1');

    expect(employee.getEmail()).toBe(employee.email);
});

test("get employee's role", () => {
    const employee = new Employee('Benjamin Franklin', 'bfrank@test.com', '1');

    expect(employee.getRole()).toBe('Employee');
    
});