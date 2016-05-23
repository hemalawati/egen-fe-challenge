(function() {
        'use strict';

        angular.module('egenPhoneFilter', [])
            .filter('phoneFilter', function () {
                return function (input) {
                    var countryCode, areaCode, number, format;

                    if (!input) {
                        return '';
                    }

                    var value = input.toString().trim().replace(/^\+/, '');

                    if (value.match(/[^0-9]/)) {
                        return input;
                    }

                    switch (value.length) {
                        case 11:
                            countryCode = value[0];
                            areaCode = value.slice(1, 4);
                            number = value.slice(4);
                            number = number.slice(0, 3) + '-' + number.slice(3);
                            break;

                        case 12:
                            countryCode = value.slice(0, 2);
                            areaCode = value.slice(2, 5);
                            number = value.slice(5,8) + '-' + value.slice(8);
                            break;

                        case 13:
                            countryCode = value.slice(0, 3);
                            areaCode = value.slice(3, 6);
                            number = value.slice(6,9) + '-' + value.slice(9);
                            break;

                        default:
                            countryCode = 1;
                            areaCode = value.slice(0, 3);
                            number = value.slice(3, 6) + '-' + value.slice(6);
                            break;
                    }

                    format = "+" + countryCode + " " + areaCode + " " + number;
                    return format.trim();
                };
            });
    })();