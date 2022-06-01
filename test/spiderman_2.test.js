const Spiderman_1 = require('./../app/spiderman')
describe("getInfo()", () => {
    test("2) Uso de metodo getInfo()", () =>{
    const tomHolland = new Spiderman_1("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
})