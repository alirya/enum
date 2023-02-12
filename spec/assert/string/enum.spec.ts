import {EnumParameters} from '../../../dist/assert/string/enum.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

enum EnumTest {
    a,
    b,
    c
}

it('true', ()=>{

    expect(EnumParameters(EnumTest.a, true)).toBe('value is value of enum.');
});

it('true + name', ()=>{

    expect(EnumParameters(EnumTest.a, true, 'EnumTest')).toBe('value is value of enum EnumTest.');
});

it('false', ()=>{

    expect(EnumParameters(EnumTest.a, false)).toBe('value must value of enum.');
});

it('false + name', ()=>{

    expect(EnumParameters(EnumTest.a, false, 'EnumTest')).toBe('value must value of enum EnumTest.');
});
