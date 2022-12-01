const Intern = require('../library/Intern');

test('create the intern object', () => {
    const intern = new Intern('Benjamin Franklin', 'bfrank@test.com', '1', 'olamerica');

    expect(intern.name).toBe('Benjamin Franklin');
    expect(intern.email).toBe('bfrank@test.com');
    expect(intern.id).toBe('1');
    expect(intern.school).toBe('olamerica');
});

test("get intern's school", () => {
    const intern = new Intern('Benjamin Franklin', 'bfrank@test.com', '1', 'olamerica');

    expect(intern.getSchool()).toBe('olamerica');

});

test("get intern's role", () => {
    const intern = new Intern('Benjamin Franklin', 'bfrank@test.com', '1', 'olamerica');

    expect(intern.getRole()).toBe('Intern');
});