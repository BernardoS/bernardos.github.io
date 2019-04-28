import * as CSS from 'csstype';



export interface CSSProperties extends CSS.Properties<string | number> {
    /**
     * The index signature was removed to enable closed typing for style
     * using CSSType. You're able to use type assertion or module augmentation
     * to add properties or an index signature of your own.
     *
     * For examples and more information, visit:
     * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
     */
}
export interface CSSAttributes {
  /**
   * Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a
   * separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for
   * example for testing purposes.
   */
  style?: string | CSSProperties
}
// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
export interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: string;
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: 'false' | 'true';
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  'aria-busy'?: 'false' | 'true';
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  'aria-checked'?: 'false' | 'mixed' | 'true';
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  'aria-colcount'?: number;
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  'aria-colindex'?: number;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  'aria-colspan'?: number;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  'aria-controls'?: string;
  /** Indicates the element that represents the current item within a container or set of related elements. */
  'aria-current'?: 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  'aria-describedby'?: string;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  'aria-details'?: string;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  'aria-disabled'?: 'false' | 'true';
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  'aria-errormessage'?: string;
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded'?: 'false' | 'true';
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  'aria-flowto'?: string;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  'aria-grabbed'?: 'false' | 'true';
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?: 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  'aria-hidden'?: 'false' | 'true';
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  'aria-invalid'?: 'false' | 'true' | 'grammar' | 'spelling';
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  'aria-keyshortcuts'?: string;
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  'aria-label'?: string;
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  'aria-labelledby'?: string;
  /** Defines the hierarchical level of an element within a structure. */
  'aria-level'?: number;
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  'aria-live'?: 'off' | 'assertive' | 'polite';
  /** Indicates whether an element is modal when displayed. */
  'aria-modal'?: 'false' | 'true';
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline'?: 'false' | 'true';
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable'?: 'false' | 'true';
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  'aria-orientation'?: 'horizontal' | 'vertical';
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  'aria-owns'?: string;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  'aria-placeholder'?: string;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  'aria-posinset'?: number;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  'aria-pressed'?: 'false' | 'mixed' | 'true';
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  'aria-readonly'?: 'false' | 'true';
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text';
  /** Indicates that user input is required on the element before a form may be submitted. */
  'aria-required'?: 'false' | 'true';
  /** Defines a human-readable, author-localized description for the role of an element. */
  'aria-roledescription'?: string;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  'aria-rowcount'?: number;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  'aria-rowindex'?: number;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  'aria-rowspan'?: number;
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  'aria-selected'?: 'false' | 'true';
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  'aria-setsize'?: number;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax'?: number;
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin'?: number;
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  'aria-valuenow'?: number;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext'?: string;
}

export interface EventHandlers<Element extends HTMLElement> {
  /**
   * Fires when the user aborts the download.
   * @param ev The event.
   */
  onabort?: ((this: Element, ev: UIEvent) => any) | null;
  onanimationcancel?: ((this: Element, ev: AnimationEvent) => any) | null;
  onanimationend?: ((this: Element, ev: AnimationEvent) => any) | null;
  onanimationiteration?: ((this: Element, ev: AnimationEvent) => any) | null;
  onanimationstart?: ((this: Element, ev: AnimationEvent) => any) | null;
  onauxclick?: ((this: Element, ev: Event) => any) | null;
  /**
   * Fires when the object loses the input focus.
   * @param ev The focus event.
   */
  onblur?: ((this: Element, ev: FocusEvent) => any) | null;
  oncancel?: ((this: Element, ev: Event) => any) | null;
  /**
   * Occurs when playback is possible, but would require further buffering.
   * @param ev The event.
   */
  oncanplay?: ((this: Element, ev: Event) => any) | null;
  oncanplaythrough?: ((this: Element, ev: Event) => any) | null;
  /**
   * Fires when the contents of the object or selection have changed.
   * @param ev The event.
   */
  onchange?: ((this: Element, ev: Event) => any) | null;
  /**
   * Fires when the user clicks the left mouse button on the object
   * @param ev The mouse event.
   */
  onclick?: ((this: Element, ev: MouseEvent) => any) | null;
  onclose?: ((this: Element, ev: Event) => any) | null;
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   * @param ev The mouse event.
   */
  oncontextmenu?: ((this: Element, ev: MouseEvent) => any) | null;
  oncuechange?: ((this: Element, ev: Event) => any) | null;
  /**
   * Fires when the user double-clicks the object.
   * @param ev The mouse event.
   */
  ondblclick?: ((this: Element, ev: MouseEvent) => any) | null;
  /**
   * Fires on the source object continuously during a drag operation.
   * @param ev The event.
   */
  ondrag?: ((this: Element, ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user releases the mouse at the close of a drag operation.
   * @param ev The event.
   */
  ondragend?: ((this: Element, ev: DragEvent) => any) | null;
  /**
   * Fires on the target element when the user drags the object to a valid drop target.
   * @param ev The drag event.
   */
  ondragenter?: ((this: Element, ev: DragEvent) => any) | null;
  ondragexit?: ((this: Element, ev: Event) => any) | null;
  /**
   * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
   * @param ev The drag event.
   */
  ondragleave?: ((this: Element, ev: DragEvent) => any) | null;
  /**
   * Fires on the target element continuously while the user drags the object over a valid drop target.
   * @param ev The event.
   */
  ondragover?: ((this: Element, ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user starts to drag a text selection or selected object.
   * @param ev The event.
   */
  ondragstart?: ((this: Element, ev: DragEvent) => any) | null;
  ondrop?: ((this: Element, ev: DragEvent) => any) | null;
  /**
   * Occurs when the duration attribute is updated.
   * @param ev The event.
   */
  ondurationchange?: ((this: Element, ev: Event) => any) | null;
  /**
   * Occurs when the media element is reset to its initial state.
   * @param ev The event.
   */
  onemptied?: ((this: Element, ev: Event) => any) | null;
  /**
   * Occurs when the end of playback is reached.
   * @param ev The event
   */
  onended?: ((this: Element, ev: Event) => any) | null;
  /**
   * Fires when an error occurs during object loading.
   * @param ev The event.
   */
  onerror?: OnErrorEventHandler;
  /**
   * Fires when the object receives focus.
   * @param ev The event.
   */
  onfocus?: ((this: Element, ev: FocusEvent) => any) | null;
  ongotpointercapture?: ((this: Element, ev: PointerEvent) => any) | null;
  oninput?: ((this: Element, ev: Event) => any) | null;
  oninvalid?: ((this: Element, ev: Event) => any) | null;
  /**
   * Fires when the user presses a key.
   * @param ev The keyboard event
   */
  onkeydown?: ((this: Element, ev: KeyboardEvent) => any) | null;
  /**
   * Fires when the user presses an alphanumeric key.
   * @param ev The event.
   */
  onkeypress?: ((this: Element, ev: KeyboardEvent) => any) | null;
  /**
   * Fires when the user releases a key.
   * @param ev The keyboard event
   */
  onkeyup?: ((this: Element, ev: KeyboardEvent) => any) | null;
  /**
   * Fires immediately after the browser loads the object.
   * @param ev The event.
   */
  onload?: ((this: Element, ev: Event) => any) | null;
  /**
   * Occurs when media data is loaded at the current playback position.
   * @param ev The event.
   */
  onloadeddata?: ((this: Element, ev: Event) => any) | null;
  /**
   * Occurs when the duration and dimensions of the media have been determined.
   * @param ev The event.
   */
  onloadedmetadata?: ((this: Element, ev: Event) => any) | null;
  onloadend?: ((this: Element, ev: ProgressEvent) => any) | null;
  /**
   * Occurs when Internet Explorer begins looking for media data.
   * @param ev The event.
   */
  onloadstart?: ((this: Element, ev: Event) => any) | null;
  onlostpointercapture?: ((this: Element, ev: PointerEvent) => any) | null;
  /**
   * Fires when the user clicks the object with either mouse button.
   * @param ev The mouse event.
   */
  onmousedown?: ((this: Element, ev: MouseEvent) => any) | null;
  onmouseenter?: ((this: Element, ev: MouseEvent) => any) | null;
  onmouseleave?: ((this: Element, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse over the object.
   * @param ev The mouse event.
   */
  onmousemove?: ((this: Element, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse pointer outside the boundaries of the object.
   * @param ev The mouse event.
   */
  onmouseout?: ((this: Element, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse pointer into the object.
   * @param ev The mouse event.
   */
  onmouseover?: ((this: Element, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user releases a mouse button while the mouse is over the object.
   * @param ev The mouse event.
   */
  onmouseup?: ((this: Element, ev: MouseEvent) => any) | null;
  /**
   * Occurs when playback is paused.
   * @param ev The event.
   */
  onpause?: ((this: Element, ev: Event) => any) | null;
  /**
   * Occurs when the play method is requested.
   * @param ev The event.
   */
  onplay?: ((this: Element, ev: Event) => any) | null;
  /**
   * Occurs when the audio or video has started playing.
   * @param ev The event.
   */
  onplaying?: ((this: Element, ev: Event) => any) | null;
  onpointercancel?: ((this: Element, ev: PointerEvent) => any) | null;
  onpointerdown?: ((this: Element, ev: PointerEvent) => any) | null;
  onpointerenter?: ((this: Element, ev: PointerEvent) => any) | null;
  onpointerleave?: ((this: Element, ev: PointerEvent) => any) | null;
  onpointermove?: ((this: Element, ev: PointerEvent) => any) | null;
  onpointerout?: ((this: Element, ev: PointerEvent) => any) | null;
  onpointerover?: ((this: Element, ev: PointerEvent) => any) | null;
  onpointerup?: ((this: Element, ev: PointerEvent) => any) | null;
  /**
   * Occurs to indicate progress while downloading media data.
   * @param ev The event.
   */
  onprogress?: ((this: Element, ev: ProgressEvent) => any) | null;
  /**
   * Occurs when the playback rate is increased or decreased.
   * @param ev The event.
   */
  onratechange?: ((this: Element, ev: Event) => any) | null;
  /**
   * Fires when the user resets a form.
   * @param ev The event.
   */
  onreset?: ((this: Element, ev: Event) => any) | null;
  onresize?: ((this: Element, ev: UIEvent) => any) | null;
  /**
   * Fires when the user repositions the scroll box in the scroll bar on the object.
   * @param ev The event.
   */
  onscroll?: ((this: Element, ev: Event) => any) | null;
  onsecuritypolicyviolation?: ((this: Element, ev: SecurityPolicyViolationEvent) => any) | null;
  /**
   * Occurs when the seek operation ends.
   * @param ev The event.
   */
  onseeked?: ((this: Element, ev: Event) => any) | null;
  /**
   * Occurs when the current playback position is moved.
   * @param ev The event.
   */
  onseeking?: ((this: Element, ev: Event) => any) | null;
  /**
   * Fires when the current selection changes.
   * @param ev The event.
   */
  onselect?: ((this: Element, ev: Event) => any) | null;
  onselectionchange?: ((this: Element, ev: Event) => any) | null;
  onselectstart?: ((this: Element, ev: Event) => any) | null;
  /**
   * Occurs when the download has stopped.
   * @param ev The event.
   */
  onstalled?: ((this: Element, ev: Event) => any) | null;
  onsubmit?: ((this: Element, ev: Event) => any) | null;
  /**
   * Occurs if the load operation has been intentionally halted.
   * @param ev The event.
   */
  onsuspend?: ((this: Element, ev: Event) => any) | null;
  /**
   * Occurs to indicate the current playback position.
   * @param ev The event.
   */
  ontimeupdate?: ((this: Element, ev: Event) => any) | null;
  ontoggle?: ((this: Element, ev: Event) => any) | null;
  ontouchcancel?: ((this: Element, ev: TouchEvent) => any) | null;
  ontouchend?: ((this: Element, ev: TouchEvent) => any) | null;
  ontouchmove?: ((this: Element, ev: TouchEvent) => any) | null;
  ontouchstart?: ((this: Element, ev: TouchEvent) => any) | null;
  ontransitioncancel?: ((this: Element, ev: TransitionEvent) => any) | null;
  ontransitionend?: ((this: Element, ev: TransitionEvent) => any) | null;
  ontransitionrun?: ((this: Element, ev: TransitionEvent) => any) | null;
  ontransitionstart?: ((this: Element, ev: TransitionEvent) => any) | null;
  /**
   * Occurs when the volume is changed, or playback is muted or unmuted.
   * @param ev The event.
   */
  onvolumechange?: ((this: Element, ev: Event) => any) | null;
  /**
   * Occurs when playback stops because the next frame of a video resource is not available.
   * @param ev The event.
   */
  onwaiting?: ((this: Element, ev: Event) => any) | null;
  onwheel?: ((this: Element, ev: WheelEvent) => any) | null;
}

export interface GlobalAttributes<Element extends HTMLElement = HTMLElement>
  extends AriaAttributes, EventHandlers<Element> {
  /**
   * Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.
   */
  accesskey?: string
  /**
   * Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:
    
    off or none, no autocapitalization is applied (all letters default to lowercase)

    on or sentences, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase
    
    words, the first letter of each word defaults to a capital letter; all other letters default to lowercase
    
    characters, all letters should default to uppercase
   */
  autocapitalize?: string
  /**
   * A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method Document.getElementsByClassName().
   */
  class?: string
  /**
   * An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:
    true or the empty string, which indicates that the element must be editable;
    false, which indicates that the element must not be editable.
   */
  contenteditable?: boolean
  /**
   * An enumerated attribute indicating the directionality of the element's text. It can have the following values:
    
    ltr, which means left to right and is to be used for languages that are written from the left to the right (like English);

    rtl, which means right to left and is to be used for languages that are written from the right to the left (like Arabic);
    
    auto, which let the user agent decides. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then apply that directionality to the whole element.
   */
  dir?: string
  /**
   * An enumerated attribute indicating whether the element can be dragged, using the Drag and Drop API. It can have the following values:
    true, which indicates that the element may be dragged
    false, which indicates that the element may not be dragged.
   */
  draggable?: boolean
  /**
   * An enumerated attribute indicating what types of content can be dropped on an element, using the Drag and Drop API. It can have the following values:
    
    copy, which indicates that dropping will create a copy of the element that was dragged
    
    move, which indicates that the element that was dragged will be moved to this new location.
    
    link, will create a link to the dragged data.
   */
  dropzone?: string
  /**
   * A Boolean attribute indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.
   */
  hidden?: boolean
  /**
   * Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
   */
  id?: string
  /**
   * Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on <input> elements, but is usable on any element while in contenteditable mode.
   */
  inputmode?: string
  /**
   * Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see Using custom elements for more details).
   */
  is?: string
  /**
   * Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one “language tag” (made of hyphen-separated “language subtags”) in the format defined in Tags for Identifying Languages (BCP47). xml:lang has priority over it.
   */
  lang?: string
  /**
   * Assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the <slot> element whose name attribute's value matches that slot attribute's value.
   */
  slot ?: string
  /**
   * An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:
    true, which indicates that the element should be, if possible, checked for spelling errors;
    false, which indicates that the element should not be checked for spelling errors.
   */
  spellcheck?: boolean
  /**
   * An integer attribute indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:
    a negative value means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
    0 means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
    a positive value means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the tabindex. If several elements share the same tabindex, their relative order follows their relative positions in the document.
   */
  tabindex?: number
  /**
   * Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.
   */
  title?: string
  /**
   * An enumerated attribute that is used to specify whether an element's attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:
  empty string and "yes", which indicates that the element will be translated.
  "no", which indicates that the element will not be translated.
   */
  translate?: boolean
}


export interface HTMLAnchorElementAttributes<Element extends HTMLAnchorElement = HTMLAnchorElement>
  extends GlobalAttributes<Element> {
  /**
   * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). There are no restrictions on allowed values, though / and \ are converted to underscores. Most file systems limit some punctuation in file names, and browsers will adjust the suggested name accordingly.
   */
  download?: string
  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
    A URL fragment is a name preceded by a hash mark (#), which specifies an internal target location (an id of an HTML element) within the current document. URLs are not restricted to Web (HTTP)-based documents, but can use any protocol supported by the browser. For example, file:, ftp:, and mailto: work in most browsers.
   */
  href?: string
  /**
   * This attribute indicates the human language of the linked resource. It is purely advisory, with no built-in functionality. Allowed values are determined by BCP47.
   */
  hreflang?: string
  /**
   * Contains a space-separated list of URLs to which, when the hyperlink is followed, POST requests with the body PING will be sent by the browser (in the background). Typically used for tracking.
   */
  ping?: string
  /**
   * Indicates which referrer to send when fetching the URL:
    'no-referrer' means the Referer: header will not be sent.
    'no-referrer-when-downgrade' means no Referer: header will be sent when navigating to an origin without HTTPS. This is the default behavior.
    'origin' means the referrer will be the origin of the page, not including information after the domain.
    'origin-when-cross-origin' meaning that navigations to other origins will be limited to the scheme, the host and the port, while navigations on the same origin will include the referrer's path.
    'strict-origin-when-cross-origin'
    'unsafe-url' means the referrer will include the origin and path, but not the fragment, password, or username. This is unsafe because it can leak data from secure URLs to insecure ones.
   */
  referrerpolicy?: string
  /**
   * Specifies the relationship of the target object to the link object. The value is a space-separated list of link types.
   */
  rel?: string
  /**
   * Specifies where to display the linked URL. It is a name of, or keyword for, a browsing context: a tab, window, or <iframe>. The following keywords have special meanings:
    _self: Load the URL into the same browsing context as the current one. This is the default behavior.
    _blank: Load the URL into a new browsing context. This is usually a tab, but users can configure browsers to use new windows instead.
    _parent: Load the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as _self.
    _top: Load the URL into the top-level browsing context (that is, the "highest" browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this behaves the same way as _self.
   */
  target?: string
  // target?: '_self' | '_blank' | '_parent' | '_top'
  /**
   * Specifies the media type in the form of a MIME type for the linked URL. It is purely advisory, with no built-in functionality.
   */
  type?: string
}

export interface HTMLSlotElementAttributes extends GlobalAttributes<HTMLSlotElement> {
  /**
   * The slot's name. A named slot is a <slot> element with a name attribute.
   */
  name?: string
}
