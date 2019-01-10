/* eslint-disable */
/*
 * DO NOT EDIT THIS FILE.
 * YOUR CHANGES WILL BE OVERWRITTEN.
 * FILE IS BASED ON scripts/generate-testkit-exports/templates/vanilla.js
 * AND GENERATED BY scripts/generate-testkit-exports
 */
import ReactDOM from 'react-dom';

import {
  testkitFactoryCreator,
  uniTestkitFactoryCreator,
} from 'wix-ui-test-utils/vanilla';

export {
  badgeTestkitFactory,
  stylableCounterBadgeTestkitFactory as counterBadgeTestkitFactory,
  toggleSwitchTestkitFactory,
  labelTestkitFactory,
  floatingHelperTestkitFactory,
  linearProgressBarTestkitFactory,
  circularProgressBarTestkitFactory,
} from 'wix-ui-backoffice/dist/src/testkit';

import buttonDriverFactory from '../src/Backoffice/Button/Button.driver';
import { buttonDriverFactory as buttonNextDriverFactory } from '../src/Button/Button.driver';

export const buttonTestkitFactory = obj => {
  const domInstance = ReactDOM.findDOMNode(obj.wrapper);
  const hasUpgrade = domInstance.querySelector('[data-upgrade]');

  return hasUpgrade
    ? uniTestkitFactoryCreator(buttonNextDriverFactory)(obj)
    : testkitFactoryCreator(buttonDriverFactory)(obj);
};

const load = path => {
  const item = require(path);

  return item.default
    ? item.default
    : Object.keys(item).length === 1
    ? Object.values(item)[0]
    : item;
};

export const addItemTestkitFactory = testkitFactoryCreator(load('../src/AddItem/AddItem.driver'));
export const autoCompleteTestkitFactory = testkitFactoryCreator(load('../src/AutoComplete/AutoComplete.driver'));
export const autoCompleteCompositeTestkitFactory = testkitFactoryCreator(load('../src/AutoCompleteComposite/AutoCompleteComposite.driver'));
export const avatarTestkitFactory = uniTestkitFactoryCreator(load('../src/Avatar/Avatar.driver'));
export const badgeSelectTestkitFactory = testkitFactoryCreator(load('../src/BadgeSelect/BadgeSelect.driver'));
export const breadcrumbsTestkitFactory = testkitFactoryCreator(load('../src/Breadcrumbs/Breadcrumbs.driver'));
export const buttonLayoutTestkitFactory = testkitFactoryCreator(load('../src/ButtonLayout/ButtonLayout.driver'));
export const buttonWithOptionsTestkitFactory = testkitFactoryCreator(load('../src/ButtonWithOptions/ButtonWithOptions.driver'));
export const calendarTestkitFactory = testkitFactoryCreator(load('../src/Calendar/Calendar.driver'));
export const calendarPanelTestkitFactory = testkitFactoryCreator(load('../src/CalendarPanel/CalendarPanel.driver'));
export const cardGalleryItemTestkitFactory = uniTestkitFactoryCreator(load('../src/CardGalleryItem/CardGalleryItem.driver'));
export const carouselTestkitFactory = testkitFactoryCreator(load('../src/Carousel/Carousel.driver'));
export const checkboxTestkitFactory = testkitFactoryCreator(load('../src/Checkbox/Checkbox.driver'));
export const closeButtonTestkitFactory = uniTestkitFactoryCreator(load('../src/CloseButton/CloseButton.driver'));
export const colorPickerTestkitFactory = testkitFactoryCreator(load('../src/ColorPicker/ColorPicker.driver'));
export const contactItemBuilderTestkitFactory = testkitFactoryCreator(load('../src/ContactItemBuilder/ContactItemBuilder.driver'));
export const dataTableTestkitFactory = testkitFactoryCreator(load('../src/DataTable/DataTable.driver'));
export const datePickerTestkitFactory = testkitFactoryCreator(load('../src/DatePicker/DatePicker.driver'));
export const dropdownTestkitFactory = testkitFactoryCreator(load('../src/Dropdown/Dropdown.driver'));
export const dropdownCompositeTestkitFactory = testkitFactoryCreator(load('../src/DropdownComposite/DropdownComposite.driver'));
export const dropdownLayoutTestkitFactory = testkitFactoryCreator(load('../src/DropdownLayout/DropdownLayout.driver'));
export const dropdownPopoverTestkitFactory = uniTestkitFactoryCreator(load('../src/DropdownPopover/DropdownPopover.driver'));
export const editableSelectorTestkitFactory = testkitFactoryCreator(load('../src/EditableSelector/EditableSelector.driver'));
export const emptyStateTestkitFactory = testkitFactoryCreator(load('../src/EmptyState/EmptyState.driver'));
export const endorseContentLayoutTestkitFactory = testkitFactoryCreator(load('../src/EndorseContentLayout/EndorseContentLayout.driver'));
export const filePickerTestkitFactory = testkitFactoryCreator(load('../src/FilePicker/FilePicker.driver'));
export const formFieldTestkitFactory = testkitFactoryCreator(load('../src/FormField/FormField.driver'));
export const generatedTestComponentTestkitFactory = uniTestkitFactoryCreator(load('../src/GeneratedTestComponent/GeneratedTestComponent.driver'));
export const genericModalLayoutTestkitFactory = testkitFactoryCreator(load('../src/GenericModalLayout/GenericModalLayout.driver'));
export const googleAddressInputTestkitFactory = testkitFactoryCreator(load('../src/GoogleAddressInput/GoogleAddressInput.driver'));
export const googleAddressInputWithLabelTestkitFactory = testkitFactoryCreator(load('../src/GoogleAddressInputWithLabel/GoogleAddressInputWithLabel.driver'));
export const headingTestkitFactory = testkitFactoryCreator(load('../src/Heading/Heading.driver'));
export const highlighterTestkitFactory = testkitFactoryCreator(load('../src/Highlighter/Highlighter.driver'));
export const iconButtonTestkitFactory = uniTestkitFactoryCreator(load('../src/IconButton/IconButton.driver'));
export const iconWithOptionsTestkitFactory = testkitFactoryCreator(load('../src/IconWithOptions/IconWithOptions.driver'));
export const imageViewerTestkitFactory = testkitFactoryCreator(load('../src/ImageViewer/ImageViewer.driver'));
export const inputTestkitFactory = testkitFactoryCreator(load('../src/Input/Input.driver'));
export const inputAreaTestkitFactory = testkitFactoryCreator(load('../src/InputArea/InputArea.driver'));
export const inputWithOptionsTestkitFactory = testkitFactoryCreator(load('../src/InputWithOptions/InputWithOptions.driver'));
export const loaderTestkitFactory = testkitFactoryCreator(load('../src/Loader/Loader.driver'));
export const modalTestkitFactory = testkitFactoryCreator(load('../src/Modal/Modal.driver'));
export const modalSelectorLayoutTestkitFactory = testkitFactoryCreator(load('../src/ModalSelectorLayout/ModalSelectorLayout.driver'));
export const multiSelectTestkitFactory = testkitFactoryCreator(load('../src/MultiSelect/MultiSelect.driver'));
export const multiSelectCheckboxTestkitFactory = testkitFactoryCreator(load('../src/MultiSelectCheckbox/MultiSelectCheckbox.driver'));
export const multiSelectCompositeTestkitFactory = testkitFactoryCreator(load('../src/MultiSelectComposite/MultiSelectComposite.driver'));
export const notificationTestkitFactory = testkitFactoryCreator(load('../src/Notification/Notification.driver'));
export const pageTestkitFactory = testkitFactoryCreator(load('../src/Page/Page.driver'));
export const pageHeaderTestkitFactory = testkitFactoryCreator(load('../src/PageHeader/PageHeader.driver'));
export const popoverTestkitFactory = testkitFactoryCreator(load('../src/Popover/Popover.driver'));
export const popoverMenuTestkitFactory = testkitFactoryCreator(load('../src/PopoverMenu/PopoverMenu.driver'));
export const proportionTestkitFactory = uniTestkitFactoryCreator(load('../src/Proportion/Proportion.driver'));
export const radioGroupTestkitFactory = testkitFactoryCreator(load('../src/RadioGroup/RadioGroup.driver'));
export const rangeTestkitFactory = testkitFactoryCreator(load('../src/Range/Range.driver'));
export const richTextAreaTestkitFactory = testkitFactoryCreator(load('../src/RichTextArea/RichTextArea.driver'));
export const richTextAreaCompositeTestkitFactory = testkitFactoryCreator(load('../src/RichTextAreaComposite/RichTextAreaComposite.driver'));
export const searchTestkitFactory = testkitFactoryCreator(load('../src/Search/Search.driver'));
export const sectionHelperTestkitFactory = testkitFactoryCreator(load('../src/SectionHelper/SectionHelper.driver'));
export const selectorTestkitFactory = testkitFactoryCreator(load('../src/Selector/Selector.driver'));
export const sideMenuTestkitFactory = testkitFactoryCreator(load('../src/SideMenu/core/SideMenu.driver'));
export const sideMenuDrillTestkitFactory = testkitFactoryCreator(load('../src/SideMenu/DrillView/DrillView.driver'));
export const skeletonTestkitFactory = testkitFactoryCreator(load('../src/Skeleton/Skeleton.driver'));
export const sliderTestkitFactory = testkitFactoryCreator(load('../src/Slider/Slider.driver'));
export const sortableListTestkitFactory = testkitFactoryCreator(load('../src/SortableList/SortableList.driver'));
export const statsWidgetTestkitFactory = testkitFactoryCreator(load('../src/StatsWidget/StatsWidget.driver'));
export const tableTestkitFactory = testkitFactoryCreator(load('../src/Table/Table.driver'));
export const tableActionCellTestkitFactory = testkitFactoryCreator(load('../src/TableActionCell/TableActionCell.driver'));
export const tabsTestkitFactory = testkitFactoryCreator(load('../src/Tabs/Tabs.driver'));
export const tagTestkitFactory = testkitFactoryCreator(load('../src/Tag/Tag.driver'));
export const textTestkitFactory = testkitFactoryCreator(load('../src/Text/Text.driver'));
export const textAreaTestkitFactory = testkitFactoryCreator(load('../src/TextArea/TextArea.driver'));
export const textButtonTestkitFactory = uniTestkitFactoryCreator(load('../src/TextButton/TextButton.driver'));
export const textFieldTestkitFactory = testkitFactoryCreator(load('../src/TextField/TextField.driver'));
export const textLinkTestkitFactory = testkitFactoryCreator(load('../src/TextLink/TextLink.driver'));
export const timeInputTestkitFactory = testkitFactoryCreator(load('../src/TimeInput/TimeInput.driver'));
export const tooltipTestkitFactory = testkitFactoryCreator(load('../src/Tooltip/Tooltip.driver'));
export const backofficeTooltipTestkitFactory = testkitFactoryCreator(load('../src/Backoffice/Tooltip/Tooltip.driver'));
export const buttonHeaderTestkitFactory = testkitFactoryCreator(load('../src/Card/ButtonHeader/ButtonHeader.driver'));
export const linkHeaderTestkitFactory = testkitFactoryCreator(load('../src/Card/LinkHeader/LinkHeader.driver'));
export const collapsedHeaderTestkitFactory = testkitFactoryCreator(load('../src/Card/CollapsedHeader/CollapsedHeader.driver'));
export const headerTestkitFactory = testkitFactoryCreator(load('../src/Card/Header/Header.driver'));
export const draggableTestkitFactory = testkitFactoryCreator(load('../src/DragAndDrop/Draggable/Draggable.driver'));
export const editableRowTestkitFactory = testkitFactoryCreator(load('../src/EditableSelector/EditableRow/EditableRow.driver'));
export const fieldLabelAttributesTestkitFactory = testkitFactoryCreator(load('../src/FieldLabelAttributes/FieldLabelAttributes.driver'));
export const fieldWithSelectionCompositeTestkitFactory = testkitFactoryCreator(load('../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite.driver'));
export const tpaLabelTestkitFactory = testkitFactoryCreator(load('../src/TPA/Label/Label.driver'));
export const tpaTextLinkTestkitFactory = testkitFactoryCreator(load('../src/TPA/TextLink/TextLink.driver'));
export const tpaButtonTestkitFactory = testkitFactoryCreator(load('../src/TPA/Button/Button.driver'));
export const tpaFloatingTabsTestkitFactory = testkitFactoryCreator(load('../src/TPA/FloatingTabs/FloatingTabs.driver'));
export const radioButtonTestkitFactory = testkitFactoryCreator(load('../src/RadioGroup/RadioButton/RadioButton.driver'));
export const tpaInputTestkitFactory = testkitFactoryCreator(load('../src/TPA/Input/Input.driver'));
export const messageBoxMarketerialLayoutTestkitFactory = testkitFactoryCreator(load('../src/MessageBox/MessageBoxMarketerialLayout.driver'));
export const messageBoxFunctionalLayoutTestkitFactory = testkitFactoryCreator(load('../src/MessageBox/MessageBoxFunctionalLayout.driver'));
export const textLinkLayoutTestkitFactory = testkitFactoryCreator(load('../src/BaseComponents/TextLinkLayout/TextLinkLayout.driver'));