import Enum from "../../../dist/assert/string/enum";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

enum EnumTest {
    a,
    b,
    c
}

it('true', ()=>{

    expect(Enum(true, EnumTest.a)).toBe('is value of enum');
})

it('true + name', ()=>{

    expect(Enum(true, EnumTest.a, 'EnumTest')).toBe('is value of enum EnumTest');
})

it('false', ()=>{

    expect(Enum(false, EnumTest.a)).toBe('is not value of enum');
})

it('false + name', ()=>{

    expect(Enum(false, EnumTest.a, 'EnumTest')).toBe('is not value of enum EnumTest');
})
