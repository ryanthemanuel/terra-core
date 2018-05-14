import FrameUtil from '../../src/_FrameUtil';
import { Variants } from '../../src/_constants';

describe('FrameUtil', () => {
  describe('dropdownStyle', () => {
    it('should return an empty object when no values are provided', () => {
      let dropdownAttrs;
      expect(FrameUtil.dropdownStyle(dropdownAttrs, {})).toEqual({});
    });

    it('should preserve dropdown styles except maxHeight and width', () => {
      const state = {};
      const dropdownAttrs = { style: { height: '10px', maxHeight: '10px', width: '10px' } };

      const result = FrameUtil.dropdownStyle(dropdownAttrs, state);
      const expected = { height: '10px' };

      expect(result).toEqual(expected);
    });

    it('should merge state maxHeight into dropdownAttrs style', () => {
      const state = { maxHeight: '20px', width: '20px' };
      const dropdownAttrs = { style: { height: '10px', width: '10px' } };

      const result = FrameUtil.dropdownStyle(dropdownAttrs, state);
      const expected = { height: '10px', maxHeight: '20px', width: '20px' };

      expect(result).toEqual(expected);
    });
  });

  describe('isMultiple', () => {
    it('should return false for a default variant', () => {
      expect(FrameUtil.isMultiple({ variant: Variants.DEFAULT })).toBeFalsy();
    });

    it('should return false for a combobox variant', () => {
      expect(FrameUtil.isMultiple({ variant: Variants.COMBOBOX })).toBeFalsy();
    });

    it('should return true for a multiple variant', () => {
      expect(FrameUtil.isMultiple({ variant: Variants.MULTIPLE })).toBeTruthy();
    });

    it('should return false for a search variant', () => {
      expect(FrameUtil.isMultiple({ variant: Variants.SEARCH })).toBeFalsy();
    });

    it('should return true for a tag variant', () => {
      expect(FrameUtil.isMultiple({ variant: Variants.TAG })).toBeTruthy();
    });
  });

  describe('includes', () => {
    it('should return false if the query is an empty string', () => {
      expect(FrameUtil.includes({ value: ['blue'] }, '')).toBeFalsy();
    });

    it('should return false if the query is a blank string', () => {
      expect(FrameUtil.includes({ value: ['blue'] }, '   ')).toBeFalsy();
    });

    it('should return false if the query is not included in the value', () => {
      expect(FrameUtil.includes({ value: ['blue'] }, 'red')).toBeFalsy();
    });

    it('should return true if the query is included in the value', () => {
      expect(FrameUtil.includes({ value: ['blue'] }, 'blue')).toBeTruthy();
    });
  });

  describe('shouldPositionDropdown', () => {
    it('should return false if the dropdown is not open', () => {
      const currentState = { isOpen: false };
      const previousState = { isOpen: false };
      expect(FrameUtil.shouldPositionDropdown(previousState, currentState)).toBeFalsy();
    });
  });

  describe('shouldAddOptionOnBlur', () => {
    it('should return false for a default variant', () => {
      const props = { variant: Variants.DEFAULT };
      expect(FrameUtil.shouldAddOptionOnBlur(props, {})).toBeFalsy();
    });

    it('should return false for a search variant', () => {
      const props = { variant: Variants.SEARCH };
      expect(FrameUtil.shouldAddOptionOnBlur(props, {})).toBeFalsy();
    });

    it('should return false for a multiple variant', () => {
      const props = { variant: Variants.MULTIPLE };
      expect(FrameUtil.shouldAddOptionOnBlur(props, {})).toBeFalsy();
    });

    it('should return false for a tag variant if the search value is empty', () => {
      const props = { variant: Variants.TAG, onSelect: 'Mock', value: ['Tag'] };
      const state = { hasSearchChanged: true, searchValue: '' };
      expect(FrameUtil.shouldAddOptionOnBlur(props, state)).toBeFalsy();
    });

    it('should return false for a tag variant if the search value is blank', () => {
      const props = { variant: Variants.TAG, onSelect: 'Mock', value: ['Tag'] };
      const state = { hasSearchChanged: true, searchValue: '   ' };
      expect(FrameUtil.shouldAddOptionOnBlur(props, state)).toBeFalsy();
    });

    it('should return false for a tag variant if the search value has not changed', () => {
      const props = { variant: Variants.TAG, onSelect: 'Mock', value: ['Tag'] };
      const state = { hasSearchChanged: false, searchValue: 'New Tag' };
      expect(FrameUtil.shouldAddOptionOnBlur(props, state)).toBeFalsy();
    });

    it('should return false for a tag variant if onSelect is not defined', () => {
      const props = { variant: Variants.TAG, value: ['Tag'] };
      const state = { hasSearchChanged: true, searchValue: 'New Tag' };
      expect(FrameUtil.shouldAddOptionOnBlur(props, state)).toBeFalsy();
    });

    it('should return false for a tag variant if the search value is already defined in the value', () => {
      const props = { variant: Variants.TAG, onSelect: 'Mock', value: ['Tag'] };
      const state = { hasSearchChanged: true, searchValue: 'Tag' };
      expect(FrameUtil.shouldAddOptionOnBlur(props, state)).toBeFalsy();
    });

    it('should return true for a tag variant if all conditions are met', () => {
      const props = { variant: Variants.TAG, onSelect: 'Mock', value: ['Tag'] };
      const state = { hasSearchChanged: true, searchValue: 'New Tag' };
      expect(FrameUtil.shouldAddOptionOnBlur(props, state)).toBeTruthy();
    });

    it('should return false for a combobox variant if the search value is empty', () => {
      const props = { variant: Variants.COMBOBOX, onSelect: 'Mock', value: ['Tag'] };
      const state = { hasSearchChanged: true, searchValue: '' };
      expect(FrameUtil.shouldAddOptionOnBlur(props, state)).toBeTruthy();
    });

    it('should return true for a combobox variant if the search value is blank', () => {
      const props = { variant: Variants.COMBOBOX, onSelect: 'Mock', value: ['Tag'] };
      const state = { hasSearchChanged: true, searchValue: '  ' };
      expect(FrameUtil.shouldAddOptionOnBlur(props, state)).toBeTruthy();
    });

    it('should return false for a combobox variant if the search value has not changed', () => {
      const props = { variant: Variants.COMBOBOX, onSelect: 'Mock', value: ['Tag'] };
      const state = { hasSearchChanged: false, searchValue: '' };
      expect(FrameUtil.shouldAddOptionOnBlur(props, state)).toBeFalsy();
    });

    it('should return false for a combobox variant if onSelect is not defined', () => {
      const props = { variant: Variants.COMBOBOX, value: ['Tag'] };
      const state = { hasSearchChanged: true, searchValue: '' };
      expect(FrameUtil.shouldAddOptionOnBlur(props, state)).toBeFalsy();
    });

    it('should return false for a combobox variant if the search value is already defined in the value', () => {
      const props = { variant: Variants.COMBOBOX, onSelect: 'Mock', value: ['Tag'] };
      const state = { hasSearchChanged: true, searchValue: 'Tag' };
      expect(FrameUtil.shouldAddOptionOnBlur(props, state)).toBeFalsy();
    });

    it('should return true for a combobox variant if all conditions are met', () => {
      const props = { variant: Variants.COMBOBOX, onSelect: 'Mock', value: ['Tag'] };
      const state = { hasSearchChanged: true, searchValue: 'New Tag' };
      expect(FrameUtil.shouldAddOptionOnBlur(props, state)).toBeTruthy();
    });
  });

  describe('tabIndex', () => {
    it('should return -1 for a combobox variant', () => {
      const props = { variant: Variants.COMBOBOX };
      expect(FrameUtil.tabIndex(props)).toEqual('-1');
    });

    it('should return -1 for a multiple variant', () => {
      const props = { variant: Variants.MULTIPLE };
      expect(FrameUtil.tabIndex(props)).toEqual('-1');
    });

    it('should return -1 for a search variant', () => {
      const props = { variant: Variants.SEARCH };
      expect(FrameUtil.tabIndex(props)).toEqual('-1');
    });

    it('should return -1 for a tag variant', () => {
      const props = { variant: Variants.TAG };
      expect(FrameUtil.tabIndex(props)).toEqual('-1');
    });

    it('should return 0 for a default variant', () => {
      const props = { variant: Variants.DEFAULT };
      expect(FrameUtil.tabIndex(props)).toEqual('0');
    });

    it('should return -1 for a disabled default variant', () => {
      const props = { variant: Variants.DEFAULT, disabled: true };
      expect(FrameUtil.tabIndex(props)).toEqual('-1');
    });
  });
});
