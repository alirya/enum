import Enum from '../../../dist/assert/string/enum-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

enum EnumTest {
    a,
    b,
    c
}

it('true', ()=>{

    expect(Enum(EnumTest.a, true)).toBe('value is value of enum.');
});

it('true + name', ()=>{

    expect(Enum(EnumTest.a, true, 'EnumTest')).toBe('value is value of enum EnumTest.');
});

it('false', ()=>{

    expect(Enum(EnumTest.a, false)).toBe('value must value of enum.');
});

it('false + name', ()=>{

    expect(Enum(EnumTest.a, false, 'EnumTest')).toBe('value must value of enum EnumTest.');
});
