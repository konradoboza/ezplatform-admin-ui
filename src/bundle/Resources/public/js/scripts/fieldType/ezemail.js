(function (global) {
    const SELECTOR_FIELD = '.ez-field-edit--ezemail';

    class EzEmailValidator extends global.eZ.BaseFieldValidator {
        /**
         * Validates the input
         *
         * @method validateInput
         * @param {Event} event
         * @returns {Object}
         * @memberof EzEmailValidator
         */
        validateInput(event) {
            const input = event.currentTarget;
            const isRequired = input.required;
            const isEmpty =  !input.value.trim();
            const isValid = global.eZ.errors.emailRegexp.test(input.value);
            const isError = (isRequired && isEmpty) || (!isEmpty && !isValid);
            const label = input.closest(SELECTOR_FIELD).querySelector('.ez-field-edit__label').innerHTML;
            const result = { isError };

            if (isRequired && isEmpty) {
                result.errorMessage = global.eZ.errors.emptyField.replace('{fieldName}', label);
            } else if (!isEmpty && !isValid) {
                result.errorMessage = global.eZ.errors.invalidEmail;
            }

            return result;
        }
    }

    const validator = new EzEmailValidator({
        classInvalid: 'is-invalid',
        fieldSelector: SELECTOR_FIELD,
        eventsMap: [
            {
                selector: '.ez-field-edit--ezemail input',
                eventName: 'blur',
                callback: 'validateInput',
                errorNodeSelectors: ['.ez-field-edit__label-wrapper'],
            },
        ],
    });

    validator.init();

    global.eZ.fieldTypeValidators = global.eZ.fieldTypeValidators ?
        [...global.eZ.fieldTypeValidators, validator] :
        [validator];
})(window);
