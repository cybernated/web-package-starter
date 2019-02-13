/* tslint:disable:no-magic-numbers comment-type */
import { Example } from './example';

describe('Example', () => {

    it('should get timestamp', () => {
        expect(Example.getTimestamp('10.12.2019')).toEqual(1570827600000);
    });
});
