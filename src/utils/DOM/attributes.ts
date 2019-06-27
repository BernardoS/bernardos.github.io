import { NodeType, Reference } from "./types";


// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
export interface AriaAttributes {
  role?: string
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  "aria-activedescendant"?: string;
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  "aria-atomic"?: "false" | "true";
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  "aria-autocomplete"?: "none" | "inline" | "list" | "both";
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  "aria-busy"?: "false" | "true";
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  "aria-checked"?: "false" | "mixed" | "true";
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  "aria-colcount"?: number;
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  "aria-colindex"?: number;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  "aria-colspan"?: number;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  "aria-controls"?: string;
  /** Indicates the element that represents the current item within a container or set of related elements. */
  "aria-current"?:
    | "false"
    | "true"
    | "page"
    | "step"
    | "location"
    | "date"
    | "time";
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  "aria-describedby"?: string;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  "aria-details"?: string;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  "aria-disabled"?: "false" | "true";
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup";
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  "aria-errormessage"?: string;
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  "aria-expanded"?: "false" | "true";
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  "aria-flowto"?: string;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  "aria-grabbed"?: "false" | "true";
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  "aria-haspopup"?:
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog";
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  "aria-hidden"?: "false" | "true";
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  "aria-invalid"?: "false" | "true" | "grammar" | "spelling";
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  "aria-keyshortcuts"?: string;
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  "aria-label"?: string;
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  "aria-labelledby"?: string;
  /** Defines the hierarchical level of an element within a structure. */
  "aria-level"?: number;
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  "aria-live"?: "off" | "assertive" | "polite";
  /** Indicates whether an element is modal when displayed. */
  "aria-modal"?: "false" | "true";
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  "aria-multiline"?: "false" | "true";
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  "aria-multiselectable"?: "false" | "true";
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  "aria-orientation"?: "horizontal" | "vertical";
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  "aria-owns"?: string;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  "aria-placeholder"?: string;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  "aria-posinset"?: number;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  "aria-pressed"?: "false" | "mixed" | "true";
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  "aria-readonly"?: "false" | "true";
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  "aria-relevant"?:
    | "additions"
    | "additions text"
    | "all"
    | "removals"
    | "text";
  /** Indicates that user input is required on the element before a form may be submitted. */
  "aria-required"?: "false" | "true";
  /** Defines a human-readable, author-localized description for the role of an element. */
  "aria-roledescription"?: string;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  "aria-rowcount"?: number;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  "aria-rowindex"?: number;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  "aria-rowspan"?: number;
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  "aria-selected"?: "false" | "true";
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  "aria-setsize"?: number;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  "aria-sort"?: "none" | "ascending" | "descending" | "other";
  /** Defines the maximum allowed value for a range widget. */
  "aria-valuemax"?: number;
  /** Defines the minimum allowed value for a range widget. */
  "aria-valuemin"?: number;
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  "aria-valuenow"?: number;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  "aria-valuetext"?: string;
}

export interface GlobalEventHandlers<E extends HTMLElement| SVGElement> {
  /**
   * Fires when the user aborts the download.
   * @param ev The event.
   */
  onabort?: ((this: E, ev: UIEvent) => any) | null;
  onanimationcancel?: ((this: E, ev: AnimationEvent) => any) | null;
  onanimationend?: ((this: E, ev: AnimationEvent) => any) | null;
  onanimationiteration?: ((this: E, ev: AnimationEvent) => any) | null;
  onanimationstart?: ((this: E, ev: AnimationEvent) => any) | null;
  onauxclick?: ((this: E, ev: Event) => any) | null;
  /**
   * Fires when the object loses the input focus.
   * @param ev The focus event.
   */
  onblur?: ((this: E, ev: FocusEvent) => any) | null;
  oncancel?: ((this: E, ev: Event) => any) | null;
  /**
   * Occurs when playback is possible, but would require further buffering.
   * @param ev The event.
   */
  oncanplay?: ((this: E, ev: Event) => any) | null;
  oncanplaythrough?: ((this: E, ev: Event) => any) | null;
  /**
   * Fires when the contents of the object or selection have changed.
   * @param ev The event.
   */
  onchange?: ((this: E, ev: Event) => any) | null;
  /**
   * Fires when the user clicks the left mouse button on the object
   * @param ev The mouse event.
   */
  onclick?: ((this: E, ev: MouseEvent) => any) | null;
  onclose?: ((this: E, ev: Event) => any) | null;
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   * @param ev The mouse event.
   */
  oncontextmenu?: ((this: E, ev: MouseEvent) => any) | null;
  oncuechange?: ((this: E, ev: Event) => any) | null;
  /**
   * Fires when the user double-clicks the object.
   * @param ev The mouse event.
   */
  ondblclick?: ((this: E, ev: MouseEvent) => any) | null;
  /**
   * Fires on the source object continuously during a drag operation.
   * @param ev The event.
   */
  ondrag?: ((this: E, ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user releases the mouse at the close of a drag operation.
   * @param ev The event.
   */
  ondragend?: ((this: E, ev: DragEvent) => any) | null;
  /**
   * Fires on the target element when the user drags the object to a valid drop target.
   * @param ev The drag event.
   */
  ondragenter?: ((this: E, ev: DragEvent) => any) | null;
  ondragexit?: ((this: E, ev: Event) => any) | null;
  /**
   * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
   * @param ev The drag event.
   */
  ondragleave?: ((this: E, ev: DragEvent) => any) | null;
  /**
   * Fires on the target element continuously while the user drags the object over a valid drop target.
   * @param ev The event.
   */
  ondragover?: ((this: E, ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user starts to drag a text selection or selected object.
   * @param ev The event.
   */
  ondragstart?: ((this: E, ev: DragEvent) => any) | null;
  ondrop?: ((this: E, ev: DragEvent) => any) | null;
  /**
   * Occurs when the duration attribute is updated.
   * @param ev The event.
   */
  ondurationchange?: ((this: E, ev: Event) => any) | null;
  /**
   * Occurs when the media element is reset to its initial state.
   * @param ev The event.
   */
  onemptied?: ((this: E, ev: Event) => any) | null;
  /**
   * Occurs when the end of playback is reached.
   * @param ev The event
   */
  onended?: ((this: E, ev: Event) => any) | null;
  /**
   * Fires when an error occurs during object loading.
   * @param ev The event.
   */
  onerror?: OnErrorEventHandler;
  /**
   * Fires when the object receives focus.
   * @param ev The event.
   */
  onfocus?: ((this: E, ev: FocusEvent) => any) | null;
  ongotpointercapture?: ((this: E, ev: PointerEvent) => any) | null;
  oninput?: ((this: E, ev: Event) => any) | null;
  oninvalid?: ((this: E, ev: Event) => any) | null;
  /**
   * Fires when the user presses a key.
   * @param ev The keyboard event
   */
  onkeydown?: ((this: E, ev: KeyboardEvent) => any) | null;
  /**
   * Fires when the user presses an alphanumeric key.
   * @param ev The event.
   */
  onkeypress?: ((this: E, ev: KeyboardEvent) => any) | null;
  /**
   * Fires when the user releases a key.
   * @param ev The keyboard event
   */
  onkeyup?: ((this: E, ev: KeyboardEvent) => any) | null;
  /**
   * Fires immediately after the browser loads the object.
   * @param ev The event.
   */
  onload?: ((this: E, ev: Event) => any) | null;
  /**
   * Occurs when media data is loaded at the current playback position.
   * @param ev The event.
   */
  onloadeddata?: ((this: E, ev: Event) => any) | null;
  /**
   * Occurs when the duration and dimensions of the media have been determined.
   * @param ev The event.
   */
  onloadedmetadata?: ((this: E, ev: Event) => any) | null;
  onloadend?: ((this: E, ev: ProgressEvent) => any) | null;
  /**
   * Occurs when Internet Explorer begins looking for media data.
   * @param ev The event.
   */
  onloadstart?: ((this: E, ev: Event) => any) | null;
  onlostpointercapture?: ((this: E, ev: PointerEvent) => any) | null;
  /**
   * Fires when the user clicks the object with either mouse button.
   * @param ev The mouse event.
   */
  onmousedown?: ((this: E, ev: MouseEvent) => any) | null;
  onmouseenter?: ((this: E, ev: MouseEvent) => any) | null;
  onmouseleave?: ((this: E, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse over the object.
   * @param ev The mouse event.
   */
  onmousemove?: ((this: E, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse pointer outside the boundaries of the object.
   * @param ev The mouse event.
   */
  onmouseout?: ((this: E, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse pointer into the object.
   * @param ev The mouse event.
   */
  onmouseover?: ((this: E, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user releases a mouse button while the mouse is over the object.
   * @param ev The mouse event.
   */
  onmouseup?: ((this: E, ev: MouseEvent) => any) | null;
  /**
   * Occurs when playback is paused.
   * @param ev The event.
   */
  onpause?: ((this: E, ev: Event) => any) | null;
  /**
   * Occurs when the play method is requested.
   * @param ev The event.
   */
  onplay?: ((this: E, ev: Event) => any) | null;
  /**
   * Occurs when the audio or video has started playing.
   * @param ev The event.
   */
  onplaying?: ((this: E, ev: Event) => any) | null;
  onpointercancel?: ((this: E, ev: PointerEvent) => any) | null;
  onpointerdown?: ((this: E, ev: PointerEvent) => any) | null;
  onpointerenter?: ((this: E, ev: PointerEvent) => any) | null;
  onpointerleave?: ((this: E, ev: PointerEvent) => any) | null;
  onpointermove?: ((this: E, ev: PointerEvent) => any) | null;
  onpointerout?: ((this: E, ev: PointerEvent) => any) | null;
  onpointerover?: ((this: E, ev: PointerEvent) => any) | null;
  onpointerup?: ((this: E, ev: PointerEvent) => any) | null;
  /**
   * Occurs to indicate progress while downloading media data.
   * @param ev The event.
   */
  onprogress?: ((this: E, ev: ProgressEvent) => any) | null;
  /**
   * Occurs when the playback rate is increased or decreased.
   * @param ev The event.
   */
  onratechange?: ((this: E, ev: Event) => any) | null;
  /**
   * Fires when the user resets a form.
   * @param ev The event.
   */
  onreset?: ((this: E, ev: Event) => any) | null;
  onresize?: ((this: E, ev: UIEvent) => any) | null;
  /**
   * Fires when the user repositions the scroll box in the scroll bar on the object.
   * @param ev The event.
   */
  onscroll?: ((this: E, ev: Event) => any) | null;
  onsecuritypolicyviolation?:
    | ((this: E, ev: SecurityPolicyViolationEvent) => any)
    | null;
  /**
   * Occurs when the seek operation ends.
   * @param ev The event.
   */
  onseeked?: ((this: E, ev: Event) => any) | null;
  /**
   * Occurs when the current playback position is moved.
   * @param ev The event.
   */
  onseeking?: ((this: E, ev: Event) => any) | null;
  /**
   * Fires when the current selection changes.
   * @param ev The event.
   */
  onselect?: ((this: E, ev: Event) => any) | null;
  onselectionchange?: ((this: E, ev: Event) => any) | null;
  onselectstart?: ((this: E, ev: Event) => any) | null;
  /**
   * Occurs when the download has stopped.
   * @param ev The event.
   */
  onstalled?: ((this: E, ev: Event) => any) | null;
  onsubmit?: ((this: E, ev: Event) => any) | null;
  /**
   * Occurs if the load operation has been intentionally halted.
   * @param ev The event.
   */
  onsuspend?: ((this: E, ev: Event) => any) | null;
  /**
   * Occurs to indicate the current playback position.
   * @param ev The event.
   */
  ontimeupdate?: ((this: E, ev: Event) => any) | null;
  ontoggle?: ((this: E, ev: Event) => any) | null;
  ontouchcancel?: ((this: E, ev: TouchEvent) => any) | null;
  ontouchend?: ((this: E, ev: TouchEvent) => any) | null;
  ontouchmove?: ((this: E, ev: TouchEvent) => any) | null;
  ontouchstart?: ((this: E, ev: TouchEvent) => any) | null;
  ontransitioncancel?: ((this: E, ev: TransitionEvent) => any) | null;
  ontransitionend?: ((this: E, ev: TransitionEvent) => any) | null;
  ontransitionrun?: ((this: E, ev: TransitionEvent) => any) | null;
  ontransitionstart?: ((this: E, ev: TransitionEvent) => any) | null;
  /**
   * Occurs when the volume is changed, or playback is muted or unmuted.
   * @param ev The event.
   */
  onvolumechange?: ((this: E, ev: Event) => any) | null;
  /**
   * Occurs when playback stops because the next frame of a video resource is not available.
   * @param ev The event.
   */
  onwaiting?: ((this: E, ev: Event) => any) | null;
  onwheel?: ((this: E, ev: WheelEvent) => any) | null;
}

export interface CustomAttributes<E extends Element> {
  ref?: Reference<E>
  children?: NodeType
}
export interface GlobalAttributes<E extends Element> extends CustomAttributes<E> {
  /**
   * Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a
   * separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for
   * example for testing purposes.
   */
  style?: string
  /**
   * A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method Document.getElementsByClassName().
   */
  class?: string
}

export interface HTMLElementAttributes<
  Element extends HTMLElement = HTMLElement
> extends AriaAttributes, GlobalEventHandlers<Element>, GlobalAttributes<Element> {
  /**
   * Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.
   */
  accesskey?: string;
  /**
   * Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:
    
    off or none, no autocapitalization is applied (all letters default to lowercase)

    on or sentences, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase
    
    words, the first letter of each word defaults to a capital letter; all other letters default to lowercase
    
    characters, all letters should default to uppercase
   */
  autocapitalize?: string;
  /**
   * An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:
    true or the empty string, which indicates that the element must be editable;
    false, which indicates that the element must not be editable.
   */
  contenteditable?: boolean;
  /**
   * An enumerated attribute indicating the directionality of the element's text. It can have the following values:
    
    ltr, which means left to right and is to be used for languages that are written from the left to the right (like English);

    rtl, which means right to left and is to be used for languages that are written from the right to the left (like Arabic);
    
    auto, which let the user agent decides. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then apply that directionality to the whole element.
   */
  dir?: string;
  /**
   * An enumerated attribute indicating whether the element can be dragged, using the Drag and Drop API. It can have the following values:
    true, which indicates that the element may be dragged
    false, which indicates that the element may not be dragged.
   */
  draggable?: boolean;
  /**
   * An enumerated attribute indicating what types of content can be dropped on an element, using the Drag and Drop API. It can have the following values:
    
    copy, which indicates that dropping will create a copy of the element that was dragged
    
    move, which indicates that the element that was dragged will be moved to this new location.
    
    link, will create a link to the dragged data.
   */
  dropzone?: string;
  /**
   * A Boolean attribute indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.
   */
  hidden?: boolean;
  /**
   * Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
   */
  id?: string;
  /**
   * Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on <input> elements, but is usable on any element while in contenteditable mode.
   */
  inputmode?: string;
  /**
   * Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see Using custom elements for more details).
   */
  is?: string;
  /**
   * Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one “language tag” (made of hyphen-separated “language subtags”) in the format defined in Tags for Identifying Languages (BCP47). xml:lang has priority over it.
   */
  lang?: string;
  /**
   * Assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the <slot> element whose name attribute's value matches that slot attribute's value.
   */
  slot?: string;
  /**
   * An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:
    true, which indicates that the element should be, if possible, checked for spelling errors;
    false, which indicates that the element should not be checked for spelling errors.
   */
  spellcheck?: boolean;
  /**
   * An integer attribute indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:
    a negative value means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
    0 means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
    a positive value means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the tabindex. If several elements share the same tabindex, their relative order follows their relative positions in the document.
   */
  tabindex?: number | string;
  /**
   * Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.
   */
  title?: string;
  /**
   * An enumerated attribute that is used to specify whether an element's attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:
  empty string and "yes", which indicates that the element will be translated.
  "no", which indicates that the element will not be translated.
   */
  translate?: boolean;
}

export interface HTMLAnchorElementAttributes<
  Element extends HTMLAnchorElement = HTMLAnchorElement
> extends HTMLElementAttributes<Element> {
  /**
   * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). There are no restrictions on allowed values, though / and \ are converted to underscores. Most file systems limit some punctuation in file names, and browsers will adjust the suggested name accordingly.
   */
  download?: string;
  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
    A URL fragment is a name preceded by a hash mark (#), which specifies an internal target location (an id of an HTML element) within the current document. URLs are not restricted to Web (HTTP)-based documents, but can use any protocol supported by the browser. For example, file:, ftp:, and mailto: work in most browsers.
   */
  href?: string;
  /**
   * This attribute indicates the human language of the linked resource. It is purely advisory, with no built-in functionality. Allowed values are determined by BCP47.
   */
  hreflang?: string;
  /**
   * Contains a space-separated list of URLs to which, when the hyperlink is followed, POST requests with the body PING will be sent by the browser (in the background). Typically used for tracking.
   */
  ping?: string;
  /**
   * Indicates which referrer to send when fetching the URL:
    'no-referrer' means the Referer: header will not be sent.
    'no-referrer-when-downgrade' means no Referer: header will be sent when navigating to an origin without HTTPS. This is the default behavior.
    'origin' means the referrer will be the origin of the page, not including information after the domain.
    'origin-when-cross-origin' meaning that navigations to other origins will be limited to the scheme, the host and the port, while navigations on the same origin will include the referrer's path.
    'strict-origin-when-cross-origin'
    'unsafe-url' means the referrer will include the origin and path, but not the fragment, password, or username. This is unsafe because it can leak data from secure URLs to insecure ones.
   */
  referrerpolicy?: string;
  /**
   * Specifies the relationship of the target object to the link object. The value is a space-separated list of link types.
   */
  rel?: string;
  /**
   * Specifies where to display the linked URL. It is a name of, or keyword for, a browsing context: a tab, window, or <iframe>. The following keywords have special meanings:
    _self: Load the URL into the same browsing context as the current one. This is the default behavior.
    _blank: Load the URL into a new browsing context. This is usually a tab, but users can configure browsers to use new windows instead.
    _parent: Load the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as _self.
    _top: Load the URL into the top-level browsing context (that is, the "highest" browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this behaves the same way as _self.
   */
  target?: string;
  // target?: '_self' | '_blank' | '_parent' | '_top'
  /**
   * Specifies the media type in the form of a MIME type for the linked URL. It is purely advisory, with no built-in functionality.
   */
  type?: string;
}

export interface HTMLSlotElementAttributes<
  Element extends HTMLSlotElement = HTMLSlotElement
> extends HTMLElementAttributes<Element> {
  /**
   * The slot's name. A named slot is a <slot> element with a name attribute.
   */
  name?: string;
}


export interface HTMLStyleElementAttributes<
  Element extends HTMLStyleElement = HTMLStyleElement
> extends HTMLElementAttributes<Element> {
  /**
   * This attribute defines the styling language as a MIME type (charset should not be specified). This attribute is optional and defaults to text/css if it is not specified — there is very little reason to include this in modern web documents.
   */
  type?: string;
  /**
   * This attribute defines which media the style should be applied to.
   * Its value is a media query, which defaults to all if the attribute is missing.
   */
  media?: string;
  /**
   * A cryptographic nonce (number used once) used to whitelist inline styles in a style-src Content-Security-Policy.
   * The server must generate a unique nonce value each time it transmits a policy.
   * It is critical to provide a nonce that cannot be guessed as bypassing a resource’s policy is otherwise trivial.
   */
  nonce?: number | string;
  /**
   * This attribute specifies alternative style sheet sets.
   */
  title?: string;
}


export interface HTMLImageElementAttributes<Element extends HTMLImageElement = HTMLImageElement>
  extends HTMLElementAttributes<Element> {
    /**
     * This attribute defines an alternative text description of the image.
     * Note: Browsers do not always display the image referenced by the element.
     * This is the case for non-graphical browsers (including those used by people with visual impairments), 
     * if the user chooses not to display images,
     * or if the browser cannot display the image because it is invalid or an unsupported type.
     * In these cases, the browser may replace the image with the text defined in this element's alt attribute.
     * You should, for these reasons and others, provide a useful value for alt whenever possible.
     */
    alt?: string
    /**
     * This enumerated attribute indicates if the fetching of the related image must be done using CORS or not. 
     * CORS-enabled images can be reused in the <canvas> element without being "tainted."
     * The allowed values are:
     * anonymous
     * A cross-origin request (i.e., with Origin HTTP header) is performed,
     * but no credential is sent (i.e., no cookie, X.509 certificate, or HTTP Basic authentication).
     * If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin HTTP header),
     * the image will be tainted and its usage restricted.
     * use-credentials
     * A cross-origin request (i.e., with the Origin HTTP header) performed along with credentials sent
     * (i.e., a cookie, certificate, or HTTP Basic authentication).
     * If the server does not give credentials to the origin site (through the Access-Control-Allow-Credentials HTTP header),
     * the image will be tainted and its usage restricted. 
     * If the attribute is not present, the resource is fetched without a CORS request
     * handled as if the anonymous value was used. See CORS settings attributes for additional information.
     */
    crossorigin?: string
    /**
     * Provides an image decoding hint to the browser. The allowed values are:
        sync
        Decode the image synchronously for atomic presentation with other content.
        async
        Decode the image asynchronously to reduce delay in presenting other content.
        auto
        Default mode, which indicates no preference for the decoding mode. The browser decides what is best for the user.
     */
    decoding?: string
    /**
     * The intrinsic height of the image in pixels.
     */
    height?: number | string
    /**
     * Indicates the relative importance of the resource. Priority hints are delegated using the values:
        auto: Indicates no preference. The browser may use its own heuristics to decide the priority of the image.

        high: Indicates to the browser that the image is of high priority.

        low: Indicates to the browser that the image is of low priority.
     */
    importance?: string
    /**
     * This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it’s the size specified in the attribute. Specifically, the image would raster at these dimensions and naturalWidth/naturalHeight on images would return the values specified in this attribute. Explainer, examples
     */
    intrinsicsize ?: string
    /**
     * This Boolean attribute indicates that the image is part of a server-side map. If so, the precise coordinates of a click are sent to the server.
     */
    ismap?: boolean
    /**
     * A string indicating which referrer to use when fetching the resource:
no-referrer: The Referer header will not be sent.
no-referrer-when-downgrade: No Referer header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent’s default behavior if no policy is otherwise specified.
origin: The Referer header will include the page of origin's scheme, the host, and the port.
origin-when-cross-origin: Navigating to other origins will limit the included referral data to the scheme, the host and the port, while navigating from the same origin will include the referrer's full path.
unsafe-url: The Referer header will include the origin and the path, but not the fragment, password, or username. This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.
     */
    referrerpolicy?: string
    /**
     * A list of one or more strings separated by commas indicating a set of source sizes. Each source size consists of:
a media condition. This must be omitted for the last item.
a source size value.
Source size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the srcset attribute, when those sources are described using width ('w') descriptors. The selected source size affects the intrinsic size of the image (the image’s display size if no CSS styling is applied). If the srcset attribute is absent, or contains no values with a width (w) descriptor, then the sizes attribute has no effect.
     */
    sizes?: string
    /**
     * The image URL. This attribute is mandatory for the <img> element. On browsers supporting srcset, src is treated like a candidate image with a pixel density descriptor 1x unless an image with this pixel density descriptor is already defined in srcset, or unless srcset contains 'w' descriptors.
     */
    src?: string
    /**
     * A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. Each string is composed of:
      a URL to an image,
      optionally, whitespace followed by one of:
      A width descriptor, or a positive integer directly followed by 'w'. The width descriptor is divided by the source size given in the sizes attribute to calculate the effective pixel density.
      A pixel density descriptor, which is a positive floating point number directly followed by 'x'.
      If no descriptor is specified, the source is assigned the default descriptor: 1x.

      It is incorrect to mix width descriptors and pixel density descriptors in the same srcset attribute. Duplicate descriptors (for instance, two sources in the same srcset which are both described with '2x') are also invalid.

      The user agent selects any one of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions. See our Responsive images tutorial for an example.
     */
    srcset?: string
    /**
     * The intrinsic width of the image in pixels.
     */
    width?: number | string
    /**
     * The partial URL (starting with '#') of an image map associated with the element.
     */
    usemap?: boolean
}


export interface HTMLLIElementAttributes<Element extends HTMLLIElement = HTMLLIElement>
  extends HTMLElementAttributes<Element> {
    /**
     * This integer attribute indicates the current ordinal value of the list item as defined by the <ol> element.
     * The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The value attribute has no meaning for unordered lists (<ul>) or for menus (<menu>).
     */
    value?: number
  }

export interface HTMLHtmlElementAttributes<Element extends HTMLHtmlElement = HTMLHtmlElement>
  extends HTMLElementAttributes<Element> {
    /**
     * Specifies the XML Namespace of the document. Default value is "http://www.w3.org/1999/xhtml".
     * This is required in documents parsed with XML parsers, and optional in text/html documents.
     */
    xmlns?: string
  }

export interface HTMLMetaElementAttributes<Element extends HTMLMetaElement = HTMLMetaElement>
  extends HTMLElementAttributes<Element> {
    /**
     * This attribute declares the page's character encoding.
     * It must contain a [standard IANA MIME name for character encodings]{@link https://www.iana.org/assignments/character-sets}.
     * Although the standard doesn't request a specific encoding, it suggests:
     *  Authors are encouraged to use UTF-8.
     *  Authors should not use ASCII-incompatible encodings to avoid security risk:
     *    browsers not supporting them may interpret harmful content as HTML.
     *    This happens with the JIS_C6226-1983, JIS_X0212-1990, HZ-GB-2312, JOHAB,
     *    the ISO-2022 family and the EBCDIC family.
     */
    charset?: string
    /**
     * This attribute contains the value for the http-equiv or name attribute, depending on which is used.
     */
    content?: string
    'http-equiv'?: string
    name?: string
  }

export interface HTMLLinkElementAttributes<Element extends HTMLLinkElement = HTMLLinkElement>
  extends HTMLElementAttributes<Element> {
    as?: string
    crossorigin?: 'anonymous' | 'use-credentials' | true
    href?: string
    hreflang?: string
    importance?: string
    integrity?: string
    media?: string
    referrerpolicy?: string
    rel?: string
    sizes?: string
    title?: string
    type?: string
  }

export interface HTMLBodyElementAttributes<Element extends HTMLBodyElement = HTMLBodyElement>
  extends HTMLElementAttributes<Element> {
    /** Function to call after the user has printed the document. */
    onafterprint?: ((this: Element, ev: Event) => any) | null
    /** Function to call when the user requests printing of the document. */
    onbeforeprint?: ((this: Element, ev: Event) => any) | null
    /** Function to call when the document is about to be unloaded. */
    onbeforeunload?: ((this: Element, ev: Event) => any) | null
    /** Function to call when the fragment identifier part (starting with the hash ('#') character) of the document's current address has changed. */
    onhashchange?: ((this: Element, ev: Event) => any) | null
    /** Function to call when the preferred languages changed. */
    onlanguagechange ?: ((this: Element, ev: Event) => any) | null
    /** Function to call when the document has received a message. */
    onmessage?: ((this: Element, ev: Event) => any) | null
    /** Function to call when network communication has failed. */
    onoffline?: ((this: Element, ev: Event) => any) | null
    /** Function to call when network communication has been restored. */
    ononline?: ((this: Element, ev: Event) => any) | null
    /** Function to call when the user has navigated session history. */
    onpopstate?: ((this: Element, ev: Event) => any) | null
    /** Function to call when the user has moved forward in undo transaction history. */
    onredo?: ((this: Element, ev: Event) => any) | null
    /** Function to call when the storage area has changed. */
    onstorage?: ((this: Element, ev: Event) => any) | null
    /** Function to call when the user has moved backward in undo transaction history. */
    onundo?: ((this: Element, ev: Event) => any) | null
    /** Function to call when the document is going away. */
    onunload?: ((this: Element, ev: Event) => any) | null
  }

export interface HTMLScriptElementAttributes<Element extends HTMLScriptElement = HTMLScriptElement>
  extends HTMLElementAttributes<Element> {
    async?: boolean
    crossorigin?: string
    defer?: boolean
    integrity?: string
    nomodule?: boolean
    nonce?: string
    referrerpolicy?: string
    src?: string
    type?: string
  }

export interface HTMLDetailsElementAttributes<Element extends HTMLDetailsElement = HTMLDetailsElement>
  extends HTMLElementAttributes<Element> {
    open?: boolean
  }

export interface HTMLButtonElementAttributes<Element extends HTMLButtonElement = HTMLButtonElement>
  extends HTMLElementAttributes<Element> {
    autofocus?: boolean
    disabled?: boolean
    form?: string
    formaction?: string
    formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
    formmethod?: 'post' | 'get'
    formnovalidate?: boolean
    formtarget?: string
    name?: string
    type?: 'submit' | 'reset' | 'button'
    value?: any
  }

export interface SVGPresentationAttributes {
  'alignment-baseline'?: string
  'baseline-shift'?: string
  clip?: string
  'clip-path'?: string
  'clip-rule'?: string
  color?: string
  'color-interpolation'?: string
  'color-interpolation-filters'?: string
  'color-profile'?: string
  'color-rendering'?: string
  cursor?: string
  direction?: string
  display?: string
  'dominant-baseline'?: string
  'enable-background'?: string
  fill?: string
  'fill-opacity'?: string
  'fill-rule'?: string
  filter?: string
  'flood-color'?: string
  'flood-opacity'?: string
  'font-family'?: string
  'font-size'?: string | number
  'font-size-adjust'?: string
  'font-stretch'?: string
  'font-style'?: string
  'font-variant'?: string
  'font-weight'?: string
  'glyph-orientation-horizontal'?: string
  'glyph-orientation-vertical'?: string
  'image-rendering'?: string
  kerning?: string
  'letter-spacing'?: string
  'lighting-color'?: string
  'marker-end'?: string
  'marker-mid'?: string
  'marker-start'?: string
  mask?: string
  opacity?: string
  overflow?: string
  'pointer-events'?: string
  'shape-rendering'?: string
  'solid-color'?: string
  'solid-opacity'?: string
  'stop-color'?: string
  'stop-opacity'?: string
  stroke?: string
  'stroke-dasharray'?: string
  'stroke-dashoffset'?: string
  'stroke-linecap'?: string
  'stroke-linejoin'?: string
  'stroke-miterlimit'?: string
  'stroke-opacity'?: string
  'stroke-width'?: string | number
  'text-anchor'?: string
  'text-decoration'?: string
  'text-rendering'?: string
  transform?: string
  'unicode-bidi'?: string
  'vector-effect'?: string
  visibility?: string
  'word-spacing'?: string
  'writing-mode'?: string
}

export interface SVGElementAttributes<Element extends SVGElement = SVGElement> extends AriaAttributes, GlobalEventHandlers<Element>, SVGPresentationAttributes, GlobalAttributes<Element> {
  id?: string
  lang?: string
  tabindex?: number | string
}

export interface SVGSVGElementAttributes<Element extends SVGSVGElement = SVGSVGElement>
  extends SVGElementAttributes<Element> {
    height?: number | string
    width?: number | string
    preserveAspectRatio?: string
    viewBox?: string
    x?: number | string
    y?: number | string
  }

export interface SVGPathElementAttributes<Element extends SVGPathElement = SVGPathElement>
  extends SVGElementAttributes<Element> {
    d?: string
    pathLength?: number | string
  }

export interface SVGRectElementAttributes<Element extends SVGRectElement = SVGRectElement>
  extends SVGElementAttributes<Element> {
    x?: number | string
    y?: number | string
    width?: number | string
    height?: number | string
  }

export interface SVGTextElementAttributes<Element extends SVGTextElement = SVGTextElement>
  extends SVGElementAttributes<Element> {
    x?: number | string
    y?: number | string
    width?: number | string
    height?: number | string
  }
