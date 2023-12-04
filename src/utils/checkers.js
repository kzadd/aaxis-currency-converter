import { ONLY_NUMBERS_CHECK } from './../configs/settings/regexes'

/**
 * Check if the given string value contain only numbers.
 */
export const checkErrorOnlyNumbers = value => ONLY_NUMBERS_CHECK.test(value)
