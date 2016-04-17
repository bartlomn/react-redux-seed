import { rootSaga } from 'redux/sagas/index';
import { take } from 'redux-saga/effects';

describe( 'Redux Saga', function() {
    const gen = rootSaga();

    it( 'Should export generator function', () => {
        expect( gen ).to.exist;
        expect( gen.constructor.name ).to.equal( 'GeneratorFunctionPrototype' );
    });

    it( 'Should wait for COUNTER_TRIPLE signal', function() {
        expect( gen.next().value ).to.deep.equal( take( 'COUNTER_TRIPLE' ));
    })
});
