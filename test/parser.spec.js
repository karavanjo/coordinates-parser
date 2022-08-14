import {describe, expect} from '@jest/globals';
import {parse} from '../src/parser';

const testDD = [
    {input: '40.730, -73.935', expected: [{lon: 40.73, lat: -73.935}, {lon: -73.935, lat: 40.73}]},
    {input: '40.730, 73.935-', expected: [{lon: 40.73, lat: -73.935}, {lon: -73.935, lat: 40.73}]},
    {input: '40.730-, 73.935', expected: [{lon: -40.73, lat: 73.935}, {lon: 73.935, lat: -40.73}]},
    {input: '40.730-, 170', expected: [{lon: 170, lat: -40.73}]},
    {input: 'N 40.730, W 73.935', expected: [{lon: -73.935, lat: 40.73}]},
    {input: '40.730 N, 73.935 W', expected: [{lon: -73.935, lat: 40.73}]},
    {input: '40.730 S, 73.935 E', expected: [{lon: 73.935, lat: -40.73}]},
    {input: '40.730° N, 73.935° W', expected: [{lon: -73.935, lat: 40.73}]},
    {
        input: '40 43.836, -73 56.114',
        expected: [{lon: 40.7306, lat: -73.93523333333333}, {lon: -73.93523333333333, lat: 40.7306}]
    },
    {
        input: '-40 43.836, 73 56.114',
        expected: [{lon: -40.7306, lat: 73.93523333333333}, {lon: 73.93523333333333, lat: -40.7306}]
    }
];

describe('DD (decimal degrees)', () => {
    test.each(testDD)('parse $input', ({input, expected}) => {
        const actualCoordinates = parse(input);
        expect(actualCoordinates).toEqual(expected);
    })
});

const testDDM = [
    {
        input: '40 43.836, -73 56.114',
        expected: [{lon: 40.7306, lat: -73.93523333333333}, {lon: -73.93523333333333, lat: 40.7306}]
    },
    {
        input: '40 43.836, 73 56.114-',
        expected: [{lon: 40.7306, lat: -73.93523333333333}, {lon: -73.93523333333333, lat: 40.7306}]
    },
    {input: 'N 40 43.836, W 73 56.114', expected: [{lon: -73.93523333333333, lat: 40.7306}]},
    {input: '40 43.836 N, 73 56.114 W', expected: [{lon: -73.93523333333333, lat: 40.7306}]},
    {input: '40° 43.836\' E, 73° 56.114\' S', expected: [{lon: 40.7306, lat: -73.93523333333333}]},
];

describe('DDM (degree minutes)', () => {
    test.each(testDDM)('parse $input', ({input, expected}) => {
        const actualCoordinates = parse(input);
        expect(actualCoordinates).toEqual(expected);
    })
});

const testDMS = [
    {
        input: '+40° 43\' 50.196", -73° 56\' 6.871"',
        expected: [{lon: 40.73061, lat: -73.93524194444444}, {lon: -73.93524194444444, lat: 40.73061}]
    },
    {
        input: '40° 43\' 50.196", 73° 56\' 6.871"-',
        expected: [{lon: 40.73061, lat: -73.93524194444444}, {lon: -73.93524194444444, lat: 40.73061}]
    },
    {input: '40° 43\' 50.196", 170° 56\' 6.871"-', expected: [{lon: -170.93524194444444, lat: 40.73061}]},
    {input: '170° 56\' 6.871"-, 40° 43\' 50.196"', expected: [{lon: -170.93524194444444, lat: 40.73061}]},
    {input: '40° 43\' 50.196" N, 73° 56\' 6.871" W', expected: [{lon: -73.93524194444444, lat: 40.73061}]},
    {input: 'N 40° 43\' 50.196", W 73° 56\' 6.871"', expected: [{lon: -73.93524194444444, lat: 40.73061}]},
];

describe('DMS (degree minute seconds)', () => {
    test.each(testDMS)('parse $input', ({input, expected}) => {
        const actualCoordinates = parse(input);
        expect(actualCoordinates).toEqual(expected);
    })
});

const testMarks = [
    {input: '40° 43\' 50.196", -173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40˚ 43\' 50.196", -173˚ 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40º 43\' 50.196", -173º 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40~ 43\' 50.196", -173~ 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40* 43\' 50.196", -173* 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40° 43′ 50.196", -173° 56′ 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40° 43\' 50.196", -173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40° 43\' 50.196", -173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40° 43\' 50.196¨, -173° 56\' 6.871¨', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40° 43\' 50.196˝, -173° 56\' 6.871˝', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
];

describe('Marks DMS', () => {
    test.each(testMarks)('parse $input', ({input, expected}) => {
        const actualCoordinates = parse(input);
        expect(actualCoordinates).toEqual(expected);
    })
});

const testSeparators = [
    {input: '40° 43\' 50.196" -173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: 'N 40° 43\' 50.196" W 173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40° 43\' 50.196" / -173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: 'N 40° 43\' 50.196" / W 173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40° 43\' 50.196" \\ -173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: 'N 40° 43\' 50.196" \\ W 173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40° 43\' 50.196" | -173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: 'N 40° 43\' 50.196" | W 173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40° 43\' 50.196", -173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: 'N 40° 43\' 50.196", W 173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
];

describe('Separators', () => {
    test.each(testSeparators)('parse $input', ({input, expected}) => {
        const actualCoordinates = parse(input);
        expect(actualCoordinates).toEqual(expected);
    })
});

const spaceSeparatorTest = [
    {input: '40.730 -73.935', expected: [{lon: 40.73, lat: -73.935}, {lon: -73.935, lat: 40.73}]},
    {input: '40.730 73.935-', expected: [{lon: 40.73, lat: -73.935}, {lon: -73.935, lat: 40.73}]},
    {input: '40.730- 73.935', expected: [{lon: -40.73, lat: 73.935}, {lon: 73.935, lat: -40.73}]},
    {input: '40.730- 170', expected: [{lon: 170, lat: -40.73}]},
    {input: 'N 40.730 W 73.935', expected: [{lon: -73.935, lat: 40.73}]},
    {input: '40.730 N 73.935 W', expected: [{lon: -73.935, lat: 40.73}]},
    {input: '40.730 S 73.935 E', expected: [{lon: 73.935, lat: -40.73}]},
    {input: '40.730° N 73.935° W', expected: [{lon: -73.935, lat: 40.73}]},
    {
        input: '40 43.836 -73 56.114',
        expected: [{lon: 40.7306, lat: -73.93523333333333}, {lon: -73.93523333333333, lat: 40.7306}]
    },
    {
        input: '-40 43.836 73 56.114',
        expected: [{lon: -40.7306, lat: 73.93523333333333}, {lon: 73.93523333333333, lat: -40.7306}]
    },
    {
        input: '+40° 43\' 50.196" -73° 56\' 6.871"',
        expected: [{lon: 40.73061, lat: -73.93524194444444}, {lon: -73.93524194444444, lat: 40.73061}]
    },
    {
        input: '40° 43\' 50.196" 73° 56\' 6.871"-',
        expected: [{lon: 40.73061, lat: -73.93524194444444}, {lon: -73.93524194444444, lat: 40.73061}]
    },
    {input: '40° 43\' 50.196" 170° 56\' 6.871"-', expected: [{lon: -170.93524194444444, lat: 40.73061}]},
    {input: '170° 56\' 6.871"- 40° 43\' 50.196"', expected: [{lon: -170.93524194444444, lat: 40.73061}]},
    {input: '40° 43\' 50.196" N 73° 56\' 6.871" W', expected: [{lon: -73.93524194444444, lat: 40.73061}]},
    {input: 'N 40° 43\' 50.196" W 73° 56\' 6.871"', expected: [{lon: -73.93524194444444, lat: 40.73061}]},
];

describe('Separator "space"', () => {
    test.each(spaceSeparatorTest)('parse $input', ({input, expected}) => {
        const actualCoordinates = parse(input);
        expect(actualCoordinates).toEqual(expected);
    })
});

const testMixFormats = [
    {input: 'N 40° 43\' 50.196", -173° 56\' 6.871"', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
    {input: '40° 43\' 50.196", 173° 56\' 6.871" W', expected: [{lon: -173.93524194444444, lat: 40.73061}]},
];

describe('Mixing formats', () => {
    test.each(testMixFormats)('parse $input', ({input, expected}) => {
        const actualCoordinates = parse(input);
        expect(actualCoordinates).toEqual(expected);
    })
});

const testInvalidFormats = [
    {input: 'N -40° 43\' 50.196"-, -W 173° 56\' 6.871"+', expected: []},
    {input: '40° 43\' 50.196" с.ш., 173° 56\' 6.871" в.д.', expected: []},
    {input: '190, 50', expected: []},
    {input: 'N 40.730 173° 56\' 6.871" W', expected: []},
];

describe('Invalid formats', () => {
    test.each(testInvalidFormats)('parse $input', ({input, expected}) => {
        const actualCoordinates = parse(input);
        expect(actualCoordinates).toEqual(expected);
    })
});

