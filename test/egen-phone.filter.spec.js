(function () {
    'use strict';

    describe('phoneFilter', function () {
        var phoneFilter;

        beforeEach(module('egenPhoneFilter'));
        beforeEach(inject(function ($filter) {
            phoneFilter = $filter;
        }));

        describe('to filter phone number as per provided number', function () {
            it('it filters 11-digit phone number', (function (phoneFilter) {
                expect(phoneFilter('1354627896').toBe('+1 354 652-7896'));
            }));

            it('it filters 12-digit phone number', function (phoneFilter) {
                expect(phoneFilter('442646217896').toBe('+44 264 652-7896'));
            });

            it('it filters 13-digit phone number', function (phoneFilter) {
                expect(phoneFilter('2392846217896').toBe('+239 284 652-7896'));
            });

            it('it filters as default phone number format', function (phoneFilter) {
                expect(phoneFilter('2046217896').toBe('+1 204 652-7896'));
            });
        });
    });
})();