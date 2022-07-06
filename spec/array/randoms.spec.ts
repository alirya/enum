import {RandomsParameters} from '../../dist/array/randoms.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

enum Enumerate {
    DATA0 = 'DATA0',
    DATA1 = 'DATA1',
    DATA2 = 'DATA2',
    DATA3 = 'DATA3',
    DATA4 = 'DATA4',
    DATA5 = 'DATA5',
    DATA6 = 'DATA6',
    DATA7 = 'DATA7',
    DATA8 = 'DATA8',
    DIFFERENCE0 = 0,
    DIFFERENCE1 = 1,
    DIFFERENCE2 = 2,
    DIFFERENCE3 = 3,
    DIFFERENCE4 = 4,
    DIFFERENCE5 = 5,
    DIFFERENCE6 = 6,

}

for(let i = 0; i <= 10; i++) {

    describe('random', () => {

        it(`iterate ${i}`, () => {

            let random = RandomsParameters(Enumerate);

            TOP : for (let value of random) {

                for(let property in Enumerate) {

                    if(Enumerate[property] === value) {

                        expect(Enumerate[property] === value).toBe(true);
                        continue TOP;
                    }
                }

                fail({random : random, enumerate : Enumerate});
            }

        });


    });
}

