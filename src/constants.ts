// -- CONSTANTS

export const /**
 * Checks if the code is running in a browser environment.
 * @returns { boolean } True if running in a browser, false otherwise.
 */
isBrowser: boolean = typeof globalThis.window !== "undefined" &&
  typeof globalThis.window.document !== "undefined",
  /**
   * The nullTuid property represents the null TUID value.
   */
  nullTuid: string = "AAAAAAAAAAAAAAAAAAAAAA",
  /**
   * The null UUID value.
   */
  nullUuid: string = "00000000-0000-0000-0000-000000000000",
  /**
   * Represents a null date.
   * @typedef { Object } NullDate
   * @property { number } year: The year of the null date.
   * @property { number } month: The month of the null date.
   * @property { number } day: The day of the null date.
   */
  nullDate: { year: number; month: number; day: number } = {
    year: 1000,
    month: 1,
    day: 1,
  },
  /**
   * Represents a null time.
   *
   * @remarks
   * This object has properties for hour, minute, second, millisecond, and microsecond.
   */
  nullTime: {
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    microsecond: number;
  } = {
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
  },
  /**
   * Represents a null date and time.
   *
   * @remarks
   * This object has properties for year, month, day, hour, minute, second, millisecond, and microsecond.
   */
  nullDateTime: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    microsecond: number;
  } = {
    year: 1000,
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
  },
  /**
   * Represents the minimum integer value.
   */
  minimumInteger: number = -9007199254740991,
  /**
   * Represents the maximum integer value.
   */
  maximumInteger: number = 9007199254740991,
  /**
   * The value of half pi.
   */
  halfPi: number = Math.PI * 0.5,
  /**
   * Represents the mathematical constant pi.
   */
  pi: number = Math.PI,
  /**
   * Represents the value of two times the mathematical constant pi.
   */
  twoPi: number = Math.PI * 2,
  /**
   * Converts degrees to radians.
   */
  degreesToRadians: number = Math.PI / 180,
  /**
   * Converts radians to degrees.
   */
  radiansToDegrees: number = 180 / Math.PI,
  /**
   * Regular expression for matching natural numbers.
   */
  naturalExpression: RegExp = /^[0-9][0-9]*$/,
  /**
   * Regular expression for matching integer expressions.
   * An integer expression can be a positive or negative whole number.
   * It should not contain any decimal places or fractions.
   */
  integerExpression: RegExp = /^-?[0-9][0-9]*$/,
  /**
   * Regular expression for matching real numbers.
   *
   * The regular expression matches real numbers in the following format:
   * - The number can be positive or negative.
   * - The number must start with at least one digit.
   * - The number can have a decimal part.
   */
  realExpression: RegExp = /^-?[0-9][0-9]*\.[0-9]*$/,
  /**
   * Regular expression for matching numeric expressions.
   *
   * The expression matches numbers in the following formats:
   * - Positive or negative integers
   * - Positive or negative floating-point numbers
   *
   * Examples:
   * - 0
   * - -10
   * - 3.14
   * - -2.5
   */
  numericExpression: RegExp = /^-?[0-9][0-9]*\.?[0-9]*$/,
  /**
   * Regular expression for validating slugs.
   * A slug is a string that consists of lowercase letters, numbers, and hyphens.
   * It should start and end with a lowercase letter or number, and can have hyphens in between.
   */
  slugExpression: RegExp = /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  /**
   * Regular expression pattern for matching a value expression.
   * The pattern consists of three parts:
   * - The first part captures any characters lazily (non-greedy).
   * - The second part captures one or more comparison operators.
   * - The third part captures any remaining characters.
   */
  valueExpression: RegExp = /^(.*?)([<=>]+)(.*)$/,
  /**
   * Regular expression to match invalid characters.
   *
   * @remarks
   * This regular expression matches any character that is not a letter, a number, a hyphen, an underscore, or a period.
   */
  invalidCharacterExpression: RegExp = /[^\p{L}\p{N}\-_.]/gu;

// -- FUNCTIONS

export const /**
 * Returns a string created by combining the text of the template string with the provided substitutions.
 * This function is equivalent to the `String.raw` method.
 *
 * @param template: The template string object.
 * @param substitutions: The values to substitute into the template string.
 * @returns The resulting string.
 */
raw: (
  template: { raw: readonly string[] | ArrayLike<string> },
  ...substitutions: unknown[]
) => string = String.raw,
  /**
   * Logs the provided data to the console.
   *
   * @param {...unknown[]} data: The data to be logged.
   * @returns {void}
   */
  log: (...data: unknown[]) => void = console.log,
  /**
   * Logs an object to the console using the `console.dir` method.
   *
   * @param item: The object to be logged.
   * @param options: Additional options for logging.
   * @returns {void}
   */
  logObject: (item?: unknown, options?: unknown) => void = console.dir,
  /**
   * Logs the provided tabular data to the console using the console.table method.
   *
   * @param tabularData: The data to be logged in a tabular format.
   * @param properties: Optional. An array of property names to include in the table.
   * @returns {void}
   */
  logTable: (tabularData: unknown, properties?: string[] | undefined) => void =
    console.table,
  /**
   * Logs the stack trace with the provided data.
   *
   * @param {...unknown[]} data: The data to be logged.
   * @returns {void}
   */
  logStack: (...data: unknown[]) => void = console.trace,
  /**
   * Checks if a value is NaN.
   *
   * @param value: The value to check.
   * @returns `true` if the value is NaN, `false` otherwise.
   */
  isNaN: (value: unknown) => boolean = Number.isNaN,
  /**
   * Checks if a value is an integer.
   *
   * @param value: The value to check.
   * @returns Returns `true` if the value is an integer, `false` otherwise.
   */
  isInteger: (value: unknown) => boolean = Number.isInteger,
  /**
   * Converts a string value to a number.
   *
   * @param value: The string value to convert.
   * @returns The converted number value.
   */
  getReal: (value: string) => number = parseFloat,
  /**
   * Parses a string and returns an integer.
   *
   * @param value: The string to parse.
   * @param radix: An optional radix parameter that specifies the base of the number system to be used.
   * @returns The parsed integer value.
   */
  getInteger: (value: string, radix?: number | undefined) => number = parseInt,
  /**
   * Converts the given value to a number.
   *
   * @param value: The value to be converted.
   * @returns The converted number.
   */
  getNumber: (value: unknown) => number = Number,
  /**
   * Returns the minimum value from a list of numbers.
   *
   * @param values: The numbers to compare.
   * @returns The minimum value.
   */
  getMinimumReal: (...values: number[]) => number = Math.min,
  /**
   * Returns the maximum value from a list of numbers.
   *
   * @param values: The numbers to compare.
   * @returns The maximum value.
   */
  getMaximumReal: (...values: number[]) => number = Math.max,
  /**
   * Returns the absolute value of a given number.
   *
   * @param value: The number to get the absolute value of.
   * @returns The absolute value of the given number.
   */
  getPositiveReal: (value: number) => number = Math.abs,
  /**
   * Returns the sign of a number.
   *
   * @param value: The number to determine the sign of.
   * @returns A number representing the sign of the input value:
   *   - 1 if the value is positive
   *   - -1 if the value is negative
   *   - 0 if the value is zero
   */
  getSign: (value: number) => number = Math.sign,
  /**
   * Returns the largest integer less than or equal to a given number.
   *
   * @param value: The number to be rounded down.
   * @returns The largest integer less than or equal to the given number.
   */
  getFloorInteger: (value: number) => number = Math.floor,
  /**
   * Returns the smallest integer greater than or equal to a given number.
   *
   * @param value: The number to ceil.
   * @returns The smallest integer greater than or equal to the given number.
   */
  getCeilInteger: (value: number) => number = Math.ceil,
  /**
   * Rounds a number to the nearest integer.
   *
   * @param value: The number to round.
   * @returns The rounded integer value.
   */
  getRoundInteger: (value: number) => number = Math.round,
  /**
   * Calculates the square root of a given number.
   *
   * @param value: The number to calculate the square root of.
   * @returns The square root of the given number.
   */
  getSquareRoot: (value: number) => number = Math.sqrt,
  /**
   * Calculates the hypotenuse of a right triangle given the lengths of its two sides.
   *
   * @param values: The lengths of the sides of the right triangle.
   * @returns The length of the hypotenuse.
   */
  getHypotenuse: (...values: number[]) => number = Math.hypot,
  /**
   * Calculates the power of a base raised to an exponent.
   *
   * @param base: The base number.
   * @param exponent: The exponent number.
   * @returns The result of raising the base to the exponent.
   */
  getPower: (base: number, exponent: number) => number = Math.pow,
  /**
   * Calculates the exponential value of a given number.
   *
   * @param value: The number to calculate the exponential value for.
   * @returns The exponential value of the given number.
   */
  getExponential: (value: number) => number = Math.exp,
  /**
   * Calculates the natural logarithm of a given value.
   *
   * @param value: The value to calculate the logarithm for.
   * @returns The natural logarithm of the given value.
   */
  getLogarithm: (value: number) => number = Math.log,
  /**
   * Calculates the base 10 logarithm of a given number.
   *
   * @param value: The number to calculate the logarithm for.
   * @returns The base 10 logarithm of the given number.
   */
  getLogarithm10: (value: number) => number = Math.log10,
  /**
   * Calculates the cosine of a given value.
   *
   * @param value: The value for which to calculate the cosine.
   * @returns The cosine of the given value.
   */
  getCosinus: (value: number) => number = Math.cos,
  /**
   * Calculates the sine of a given value.
   *
   * @param value: The value to calculate the sine of.
   * @returns The sine of the given value.
   */
  getSinus: (value: number) => number = Math.sin,
  /**
   * Calculates the tangent of a given value.
   *
   * @param value: The value for which to calculate the tangent.
   * @returns The tangent of the given value.
   */
  getTangent: (value: number) => number = Math.tan,
  /**
   * Calculates the arc cosine of a given value.
   *
   * @param value: The value for which to calculate the arc cosine.
   * @returns The arc cosine of the given value.
   */
  getArcCosinus: (value: number) => number = Math.acos,
  /**
   * Calculates the arcsine of a given value.
   *
   * @param value: The value for which to calculate the arcsine.
   * @returns The arcsine of the given value.
   */
  getArcSinus: (value: number) => number = Math.asin,
  /**
   * Calculates the arc tangent of a number.
   *
   * @param value: The number to calculate the arc tangent of.
   * @returns The arc tangent of the given number.
   */
  getArcTangent: (value: number) => number = Math.atan,
  /**
   * Calculates the arctangent of the quotient of its arguments.
   *
   * @param y: The y-coordinate of the point.
   * @param x: The x-coordinate of the point.
   * @returns The arctangent of the quotient of `y` and `x`.
   */
  getArcTangent2: (y: number, x: number) => number = Math.atan2,
  /**
   * Returns a random number between 0 and 1.
   *
   * @returns The random number.
   */
  getRandom: () => number = Math.random,
  /**
   * Retrieves the text representation of a given value.
   *
   * @param value: The value to retrieve the text representation of.
   * @returns The text representation of the given value.
   */
  getText: (value: unknown) => string = String,
  /**
   * Returns the escaped version of the given text.
   *
   * @deprecated A legacy feature for browser compatibility
   * @param value: The text to be escaped.
   * @returns The escaped text.
   */
  getEscapedText: (value: string) => string = escape,
  /**
   * Retrieves the unescaped text from the given value.
   *
   * @deprecated A legacy feature for browser compatibility
   * @param value: The value to unescape.
   * @returns The unescaped text.
   */
  getUnescapedText: (value: string) => string = unescape,
  /**
   * Encodes a URI string.
   *
   * @param uri: The URI string to be encoded.
   * @returns The encoded URI string.
   */
  getEncodedUri: (uri: string) => string = encodeURI,
  /**
   * Decodes a URI string.
   *
   * @param encodedUri: The URI string to be decoded.
   * @returns The decoded URI string.
   */
  getDecodedUri: (encodedUri: string) => string = decodeURI,
  /**
   * Converts a JavaScript value to a JSON string.
   * @param value: The value to convert to a JSON string.
   * @param replacer: A function that alters the behavior of the stringification process.
   * @param space: The number of spaces to use for indentation when pretty-printing the JSON string.
   * @returns The JSON string representation of the given value.
   */
  getJsonText: (
    value: unknown,
    replacer?: (this: unknown, key: string, value: unknown) => unknown,
    space?: string | number | undefined,
  ) => string = JSON.stringify,
  /**
   * Parses a JSON string and returns the corresponding JavaScript object.
   *
   * @param text: The JSON string to parse.
   * @param reviver: Optional function that transforms the results. This function is called for each member of the object.
   * @returns The JavaScript object corresponding to the JSON string.
   */
  getJsonObject: (
    text: string,
    reviver?:
      | ((this: unknown, key: string, value: unknown) => unknown)
      | undefined,
  ) => unknown = JSON.parse;
