// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// Define a module for the Caesar shift
caesarModule = function () {

  // Helper function to check if a character is alphabetic
  function isAlphabetic(char) {
    return /^[a-zA-Z]$/.test(char);
  }

  // Main Caesar shift function
  function caesar(input, shift, encode = true) {
    // Check if shift is valid
    if (shift is 0 OR shift is less than -25 OR shift is greater than 25 OR shift is undefined) {
      return false; // Return false if shift is invalid
    }

    // Normalize shift to be within the range -25 to 25
    shift = ((shift % 26) + 26) % 26;

    // Convert the input string to an array of characters
    inputArray = split input into an array of characters;

    // Process each character in the input
    result = map each character in inputArray to a new character:
      if (character is alphabetic) {
        isUpperCase = check if character is uppercase;
        baseCode = get ASCII code for 'A' or 'a' depending on case;

        // Calculate the new character code after shifting
        newCode = character's ASCII code + (if encode then shift else -shift);

        // Wrap around the alphabet if needed
        if (newCode is less than baseCode) {
          newCode = newCode + 26;
        } else if (newCode is greater than baseCode + 25) {
          newCode = newCode - 26;
        }

        newCharacter = convert newCode to the corresponding character;
      } else {
        // Non-alphabetic characters are unchanged
        newCharacter = character;
      }

    // Join the array of characters, convert to lowercase, and form the final result
    return join result into a string, convert to lowercase;
  }

  // Expose the caesar function as part of the module
  return {
    caesar,
  };
};
})();

module.exports = { caesar: caesarModule.caesar };
