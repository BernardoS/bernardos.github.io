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
// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
export interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: string;
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: boolean | 'false' | 'true';
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  'aria-busy'?: boolean | 'false' | 'true';
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
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
  'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
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
  'aria-disabled'?: boolean | 'false' | 'true';
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
  'aria-expanded'?: boolean | 'false' | 'true';
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  'aria-flowto'?: string;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  'aria-grabbed'?: boolean | 'false' | 'true';
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  'aria-hidden'?: boolean | 'false' | 'true';
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
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
  'aria-modal'?: boolean | 'false' | 'true';
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline'?: boolean | 'false' | 'true';
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable'?: boolean | 'false' | 'true';
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
  'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  'aria-readonly'?: boolean | 'false' | 'true';
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text';
  /** Indicates that user input is required on the element before a form may be submitted. */
  'aria-required'?: boolean | 'false' | 'true';
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
  'aria-selected'?: boolean | 'false' | 'true';
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

export type NodeType = Node | symbol | string | number | boolean | Array<Node | symbol | string | number | boolean>

export interface EventHandlers {
  /**
   * Fires when the user aborts the download.
   * @param ev The event.
   */
  onabort?: ((ev: UIEvent) => any) | null;
  onanimationcancel?: ((ev: AnimationEvent) => any) | null;
  onanimationend?: ((ev: AnimationEvent) => any) | null;
  onanimationiteration?: ((ev: AnimationEvent) => any) | null;
  onanimationstart?: ((ev: AnimationEvent) => any) | null;
  onauxclick?: ((ev: Event) => any) | null;
  /**
   * Fires when the object loses the input focus.
   * @param ev The focus event.
   */
  onblur?: ((ev: FocusEvent) => any) | null;
  oncancel?: ((ev: Event) => any) | null;
  /**
   * Occurs when playback is possible, but would require further buffering.
   * @param ev The event.
   */
  oncanplay?: ((ev: Event) => any) | null;
  oncanplaythrough?: ((ev: Event) => any) | null;
  /**
   * Fires when the contents of the object or selection have changed.
   * @param ev The event.
   */
  onchange?: ((ev: Event) => any) | null;
  /**
   * Fires when the user clicks the left mouse button on the object
   * @param ev The mouse event.
   */
  onclick?: ((ev: MouseEvent) => any) | null;
  onclose?: ((ev: Event) => any) | null;
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   * @param ev The mouse event.
   */
  oncontextmenu?: ((ev: MouseEvent) => any) | null;
  oncuechange?: ((ev: Event) => any) | null;
  /**
   * Fires when the user double-clicks the object.
   * @param ev The mouse event.
   */
  ondblclick?: ((ev: MouseEvent) => any) | null;
  /**
   * Fires on the source object continuously during a drag operation.
   * @param ev The event.
   */
  ondrag?: ((ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user releases the mouse at the close of a drag operation.
   * @param ev The event.
   */
  ondragend?: ((ev: DragEvent) => any) | null;
  /**
   * Fires on the target element when the user drags the object to a valid drop target.
   * @param ev The drag event.
   */
  ondragenter?: ((ev: DragEvent) => any) | null;
  ondragexit?: ((ev: Event) => any) | null;
  /**
   * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
   * @param ev The drag event.
   */
  ondragleave?: ((ev: DragEvent) => any) | null;
  /**
   * Fires on the target element continuously while the user drags the object over a valid drop target.
   * @param ev The event.
   */
  ondragover?: ((ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user starts to drag a text selection or selected object.
   * @param ev The event.
   */
  ondragstart?: ((ev: DragEvent) => any) | null;
  ondrop?: ((ev: DragEvent) => any) | null;
  /**
   * Occurs when the duration attribute is updated.
   * @param ev The event.
   */
  ondurationchange?: ((ev: Event) => any) | null;
  /**
   * Occurs when the media element is reset to its initial state.
   * @param ev The event.
   */
  onemptied?: ((ev: Event) => any) | null;
  /**
   * Occurs when the end of playback is reached.
   * @param ev The event
   */
  onended?: ((ev: Event) => any) | null;
  /**
   * Fires when an error occurs during object loading.
   * @param ev The event.
   */
  onerror?: OnErrorEventHandler;
  /**
   * Fires when the object receives focus.
   * @param ev The event.
   */
  onfocus?: ((ev: FocusEvent) => any) | null;
  ongotpointercapture?: ((ev: PointerEvent) => any) | null;
  oninput?: ((ev: Event) => any) | null;
  oninvalid?: ((ev: Event) => any) | null;
  /**
   * Fires when the user presses a key.
   * @param ev The keyboard event
   */
  onkeydown?: ((ev: KeyboardEvent) => any) | null;
  /**
   * Fires when the user presses an alphanumeric key.
   * @param ev The event.
   */
  onkeypress?: ((ev: KeyboardEvent) => any) | null;
  /**
   * Fires when the user releases a key.
   * @param ev The keyboard event
   */
  onkeyup?: ((ev: KeyboardEvent) => any) | null;
  /**
   * Fires immediately after the browser loads the object.
   * @param ev The event.
   */
  onload?: ((ev: Event) => any) | null;
  /**
   * Occurs when media data is loaded at the current playback position.
   * @param ev The event.
   */
  onloadeddata?: ((ev: Event) => any) | null;
  /**
   * Occurs when the duration and dimensions of the media have been determined.
   * @param ev The event.
   */
  onloadedmetadata?: ((ev: Event) => any) | null;
  onloadend?: ((ev: ProgressEvent) => any) | null;
  /**
   * Occurs when Internet Explorer begins looking for media data.
   * @param ev The event.
   */
  onloadstart?: ((ev: Event) => any) | null;
  onlostpointercapture?: ((ev: PointerEvent) => any) | null;
  /**
   * Fires when the user clicks the object with either mouse button.
   * @param ev The mouse event.
   */
  onmousedown?: ((ev: MouseEvent) => any) | null;
  onmouseenter?: ((ev: MouseEvent) => any) | null;
  onmouseleave?: ((ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse over the object.
   * @param ev The mouse event.
   */
  onmousemove?: ((ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse pointer outside the boundaries of the object.
   * @param ev The mouse event.
   */
  onmouseout?: ((ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse pointer into the object.
   * @param ev The mouse event.
   */
  onmouseover?: ((ev: MouseEvent) => any) | null;
  /**
   * Fires when the user releases a mouse button while the mouse is over the object.
   * @param ev The mouse event.
   */
  onmouseup?: ((ev: MouseEvent) => any) | null;
  /**
   * Occurs when playback is paused.
   * @param ev The event.
   */
  onpause?: ((ev: Event) => any) | null;
  /**
   * Occurs when the play method is requested.
   * @param ev The event.
   */
  onplay?: ((ev: Event) => any) | null;
  /**
   * Occurs when the audio or video has started playing.
   * @param ev The event.
   */
  onplaying?: ((ev: Event) => any) | null;
  onpointercancel?: ((ev: PointerEvent) => any) | null;
  onpointerdown?: ((ev: PointerEvent) => any) | null;
  onpointerenter?: ((ev: PointerEvent) => any) | null;
  onpointerleave?: ((ev: PointerEvent) => any) | null;
  onpointermove?: ((ev: PointerEvent) => any) | null;
  onpointerout?: ((ev: PointerEvent) => any) | null;
  onpointerover?: ((ev: PointerEvent) => any) | null;
  onpointerup?: ((ev: PointerEvent) => any) | null;
  /**
   * Occurs to indicate progress while downloading media data.
   * @param ev The event.
   */
  onprogress?: ((ev: ProgressEvent) => any) | null;
  /**
   * Occurs when the playback rate is increased or decreased.
   * @param ev The event.
   */
  onratechange?: ((ev: Event) => any) | null;
  /**
   * Fires when the user resets a form.
   * @param ev The event.
   */
  onreset?: ((ev: Event) => any) | null;
  onresize?: ((ev: UIEvent) => any) | null;
  /**
   * Fires when the user repositions the scroll box in the scroll bar on the object.
   * @param ev The event.
   */
  onscroll?: ((ev: Event) => any) | null;
  onsecuritypolicyviolation?: ((ev: SecurityPolicyViolationEvent) => any) | null;
  /**
   * Occurs when the seek operation ends.
   * @param ev The event.
   */
  onseeked?: ((ev: Event) => any) | null;
  /**
   * Occurs when the current playback position is moved.
   * @param ev The event.
   */
  onseeking?: ((ev: Event) => any) | null;
  /**
   * Fires when the current selection changes.
   * @param ev The event.
   */
  onselect?: ((ev: Event) => any) | null;
  onselectionchange?: ((ev: Event) => any) | null;
  onselectstart?: ((ev: Event) => any) | null;
  /**
   * Occurs when the download has stopped.
   * @param ev The event.
   */
  onstalled?: ((ev: Event) => any) | null;
  onsubmit?: ((ev: Event) => any) | null;
  /**
   * Occurs if the load operation has been intentionally halted.
   * @param ev The event.
   */
  onsuspend?: ((ev: Event) => any) | null;
  /**
   * Occurs to indicate the current playback position.
   * @param ev The event.
   */
  ontimeupdate?: ((ev: Event) => any) | null;
  ontoggle?: ((ev: Event) => any) | null;
  ontouchcancel?: ((ev: TouchEvent) => any) | null;
  ontouchend?: ((ev: TouchEvent) => any) | null;
  ontouchmove?: ((ev: TouchEvent) => any) | null;
  ontouchstart?: ((ev: TouchEvent) => any) | null;
  ontransitioncancel?: ((ev: TransitionEvent) => any) | null;
  ontransitionend?: ((ev: TransitionEvent) => any) | null;
  ontransitionrun?: ((ev: TransitionEvent) => any) | null;
  ontransitionstart?: ((ev: TransitionEvent) => any) | null;
  /**
   * Occurs when the volume is changed, or playback is muted or unmuted.
   * @param ev The event.
   */
  onvolumechange?: ((ev: Event) => any) | null;
  /**
   * Occurs when playback stops because the next frame of a video resource is not available.
   * @param ev The event.
   */
  onwaiting?: ((ev: Event) => any) | null;
  onwheel?: ((ev: WheelEvent) => any) | null;
}

export interface DOMAttributes {
  children?: NodeType
}

export interface HTMLAttributes
  extends AriaAttributes,
    DOMAttributes,
    EventHandlers {
  // React-specific Attributes
  defaultChecked?: boolean;
  defaultValue?: string | string[];
  suppressContentEditableWarning?: boolean;
  suppressHydrationWarning?: boolean;

  // Standard HTML Attributes
  accessKey?: string;
  className?: string;
  contentEditable?: boolean;
  contextMenu?: string;
  dir?: string;
  draggable?: boolean;
  hidden?: boolean;
  id?: string;
  lang?: string;
  placeholder?: string;
  slot?: string;
  spellCheck?: boolean;
  style?: CSSProperties;
  tabIndex?: number;
  title?: string;

  // Unknown
  inputMode?: string;
  is?: string;
  radioGroup?: string; // <command>, <menuitem>

  // WAI-ARIA
  role?: string;

  // RDFa Attributes
  about?: string;
  datatype?: string;
  inlist?: any;
  prefix?: string;
  property?: string;
  resource?: string;
  typeof?: string;
  vocab?: string;

  // Non-standard Attributes
  autoCapitalize?: string;
  autoCorrect?: string;
  autoSave?: string;
  color?: string;
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
  itemID?: string;
  itemRef?: string;
  results?: number;
  security?: string;
  unselectable?: "on" | "off";
}

export interface AnchorHTMLAttributes {
  download?: any;
  href?: string;
  hrefLang?: string;
  media?: string;
  rel?: string;
  target?: string;
  type?: string;
  referrerPolicy?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface AudioHTMLAttributes extends MediaHTMLAttributes {}

export interface AreaHTMLAttributes {
  alt?: string;
  coords?: string;
  download?: any;
  href?: string;
  hrefLang?: string;
  media?: string;
  rel?: string;
  shape?: string;
  target?: string;
}

export interface BaseHTMLAttributes {
  href?: string;
  target?: string;
}

export interface BlockquoteHTMLAttributes {
  cite?: string;
}

export interface ButtonHTMLAttributes {
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  type?: "submit" | "reset" | "button";
  value?: string | string[] | number;
}

export interface CanvasHTMLAttributes {
  height?: number | string;
  width?: number | string;
}

export interface ColHTMLAttributes {
  span?: number;
  width?: number | string;
}

export interface ColgroupHTMLAttributes {
  span?: number;
}

export interface DetailsHTMLAttributes {
  open?: boolean;
}

export interface DelHTMLAttributes {
  cite?: string;
  dateTime?: string;
}

export interface DialogHTMLAttributes {
  open?: boolean;
}

export interface EmbedHTMLAttributes {
  height?: number | string;
  src?: string;
  type?: string;
  width?: number | string;
}

export interface FieldsetHTMLAttributes {
  disabled?: boolean;
  form?: string;
  name?: string;
}

export interface FormHTMLAttributes {
  acceptCharset?: string;
  action?: string;
  autoComplete?: string;
  encType?: string;
  method?: string;
  name?: string;
  noValidate?: boolean;
  target?: string;
}

export interface HtmlHTMLAttributes {
  manifest?: string;
}

export interface IframeHTMLAttributes {
  allow?: string;
  allowFullScreen?: boolean;
  allowTransparency?: boolean;
  frameBorder?: number | string;
  height?: number | string;
  marginHeight?: number;
  marginWidth?: number;
  name?: string;
  sandbox?: string;
  scrolling?: string;
  seamless?: boolean;
  src?: string;
  srcDoc?: string;
  width?: number | string;
}

export interface ImgHTMLAttributes {
  alt?: string;
  crossOrigin?: "anonymous" | "use-credentials" | "";
  decoding?: "async" | "auto" | "sync";
  height?: number | string;
  sizes?: string;
  src?: string;
  srcSet?: string;
  useMap?: string;
  width?: number | string;
}

export interface InsHTMLAttributes {
  cite?: string;
  dateTime?: string;
}

export interface InputHTMLAttributes {
  accept?: string;
  alt?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  capture?: boolean | string; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
  checked?: boolean;
  crossOrigin?: string;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  height?: number | string;
  list?: string;
  max?: number | string;
  maxLength?: number;
  min?: number | string;
  minLength?: number;
  multiple?: boolean;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: number;
  src?: string;
  step?: number | string;
  type?: string;
  value?: string | string[] | number;
  width?: number | string;
}

export interface KeygenHTMLAttributes {
  autoFocus?: boolean;
  challenge?: string;
  disabled?: boolean;
  form?: string;
  keyType?: string;
  keyParams?: string;
  name?: string;
}

export interface LabelHTMLAttributes {
  form?: string;
  htmlFor?: string;
}

export interface LiHTMLAttributes {
  value?: string | string[] | number;
}

export interface LinkHTMLAttributes {
  as?: string;
  crossOrigin?: string;
  href?: string;
  hrefLang?: string;
  integrity?: string;
  media?: string;
  rel?: string;
  sizes?: string;
  type?: string;
}

export interface MapHTMLAttributes {
  name?: string;
}

export interface MenuHTMLAttributes {
  type?: string;
}

export interface MediaHTMLAttributes {
  autoPlay?: boolean;
  controls?: boolean;
  controlsList?: string;
  crossOrigin?: string;
  loop?: boolean;
  mediaGroup?: string;
  muted?: boolean;
  playsinline?: boolean;
  preload?: string;
  src?: string;
}

export interface MetaHTMLAttributes {
  charSet?: string;
  content?: string;
  httpEquiv?: string;
  name?: string;
}

export interface MeterHTMLAttributes {
  form?: string;
  high?: number;
  low?: number;
  max?: number | string;
  min?: number | string;
  optimum?: number;
  value?: string | string[] | number;
}

export interface QuoteHTMLAttributes {
  cite?: string;
}

export interface ObjectHTMLAttributes {
  classID?: string;
  data?: string;
  form?: string;
  height?: number | string;
  name?: string;
  type?: string;
  useMap?: string;
  width?: number | string;
  wmode?: string;
}

export interface OlHTMLAttributes {
  reversed?: boolean;
  start?: number;
  type?: "1" | "a" | "A" | "i" | "I";
}

export interface OptgroupHTMLAttributes {
  disabled?: boolean;
  label?: string;
}

export interface OptionHTMLAttributes {
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string | string[] | number;
}

export interface OutputHTMLAttributes {
  form?: string;
  htmlFor?: string;
  name?: string;
}

export interface ParamHTMLAttributes {
  name?: string;
  value?: string | string[] | number;
}

export interface ProgressHTMLAttributes {
  max?: number | string;
  value?: string | string[] | number;
}

export interface ScriptHTMLAttributes {
  async?: boolean;
  charSet?: string;
  crossOrigin?: string;
  defer?: boolean;
  integrity?: string;
  noModule?: boolean;
  nonce?: string;
  src?: string;
  type?: string;
}

export interface SelectHTMLAttributes {
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
  value?: string | string[] | number;
}

export interface SourceHTMLAttributes {
  media?: string;
  sizes?: string;
  src?: string;
  srcSet?: string;
  type?: string;
}

export interface StyleHTMLAttributes {
  media?: string;
  nonce?: string;
  scoped?: boolean;
  type?: string;
}

export interface TableHTMLAttributes {
  cellPadding?: number | string;
  cellSpacing?: number | string;
  summary?: string;
}

export interface TextareaHTMLAttributes {
  autoComplete?: string;
  autoFocus?: boolean;
  cols?: number;
  dirName?: string;
  disabled?: boolean;
  form?: string;
  maxLength?: number;
  minLength?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  value?: string | string[] | number;
  wrap?: string;
}

export interface TdHTMLAttributes {
  align?: "left" | "center" | "right" | "justify" | "char";
  colSpan?: number;
  headers?: string;
  rowSpan?: number;
  scope?: string;
}

export interface ThHTMLAttributes {
  align?: "left" | "center" | "right" | "justify" | "char";
  colSpan?: number;
  headers?: string;
  rowSpan?: number;
  scope?: string;
}

export interface TimeHTMLAttributes {
  dateTime?: string;
}

export interface TrackHTMLAttributes {
  default?: boolean;
  kind?: string;
  label?: string;
  src?: string;
  srcLang?: string;
}

export interface VideoHTMLAttributes extends MediaHTMLAttributes {
  height?: number | string;
  playsInline?: boolean;
  poster?: string;
  width?: number | string;
}

// this list is "complete" in that it contains every SVG attribute
// that React supports, but the types can be improved.
// Full list here: https://facebook.github.io/react/docs/dom-elements.html
//
// The three broad type categories are (in order of restrictiveness):
//   - "number | string"
//   - "string"
//   - union of string literals
export interface SVGAttributes<T> extends AriaAttributes, DOMAttributes {
  // Attributes which also defined in HTMLAttributes
  // See comment in SVGDOMPropertyConfig.js
  className?: string;
  color?: string;
  height?: number | string;
  id?: string;
  lang?: string;
  max?: number | string;
  media?: string;
  method?: string;
  min?: number | string;
  name?: string;
  style?: CSSProperties;
  target?: string;
  type?: string;
  width?: number | string;

  // Other HTML properties supported by SVG elements in browsers
  role?: string;
  tabIndex?: number;

  // SVG Specific attributes
  accentHeight?: number | string;
  accumulate?: "none" | "sum";
  additive?: "replace" | "sum";
  alignmentBaseline?:
    | "auto"
    | "baseline"
    | "before-edge"
    | "text-before-edge"
    | "middle"
    | "central"
    | "after-edge"
    | "text-after-edge"
    | "ideographic"
    | "alphabetic"
    | "hanging"
    | "mathematical"
    | "inherit";
  allowReorder?: "no" | "yes";
  alphabetic?: number | string;
  amplitude?: number | string;
  arabicForm?: "initial" | "medial" | "terminal" | "isolated";
  ascent?: number | string;
  attributeName?: string;
  attributeType?: string;
  autoReverse?: number | string;
  azimuth?: number | string;
  baseFrequency?: number | string;
  baselineShift?: number | string;
  baseProfile?: number | string;
  bbox?: number | string;
  begin?: number | string;
  bias?: number | string;
  by?: number | string;
  calcMode?: number | string;
  capHeight?: number | string;
  clip?: number | string;
  clipPath?: string;
  clipPathUnits?: number | string;
  clipRule?: number | string;
  colorInterpolation?: number | string;
  colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit";
  colorProfile?: number | string;
  colorRendering?: number | string;
  contentScriptType?: number | string;
  contentStyleType?: number | string;
  cursor?: number | string;
  cx?: number | string;
  cy?: number | string;
  d?: string;
  decelerate?: number | string;
  descent?: number | string;
  diffuseConstant?: number | string;
  direction?: number | string;
  display?: number | string;
  divisor?: number | string;
  dominantBaseline?: number | string;
  dur?: number | string;
  dx?: number | string;
  dy?: number | string;
  edgeMode?: number | string;
  elevation?: number | string;
  enableBackground?: number | string;
  end?: number | string;
  exponent?: number | string;
  externalResourcesRequired?: number | string;
  fill?: string;
  fillOpacity?: number | string;
  fillRule?: "nonzero" | "evenodd" | "inherit";
  filter?: string;
  filterRes?: number | string;
  filterUnits?: number | string;
  floodColor?: number | string;
  floodOpacity?: number | string;
  focusable?: number | string;
  fontFamily?: string;
  fontSize?: number | string;
  fontSizeAdjust?: number | string;
  fontStretch?: number | string;
  fontStyle?: number | string;
  fontVariant?: number | string;
  fontWeight?: number | string;
  format?: number | string;
  from?: number | string;
  fx?: number | string;
  fy?: number | string;
  g1?: number | string;
  g2?: number | string;
  glyphName?: number | string;
  glyphOrientationHorizontal?: number | string;
  glyphOrientationVertical?: number | string;
  glyphRef?: number | string;
  gradientTransform?: string;
  gradientUnits?: string;
  hanging?: number | string;
  horizAdvX?: number | string;
  horizOriginX?: number | string;
  href?: string;
  ideographic?: number | string;
  imageRendering?: number | string;
  in2?: number | string;
  in?: string;
  intercept?: number | string;
  k1?: number | string;
  k2?: number | string;
  k3?: number | string;
  k4?: number | string;
  k?: number | string;
  kernelMatrix?: number | string;
  kernelUnitLength?: number | string;
  kerning?: number | string;
  keyPoints?: number | string;
  keySplines?: number | string;
  keyTimes?: number | string;
  lengthAdjust?: number | string;
  letterSpacing?: number | string;
  lightingColor?: number | string;
  limitingConeAngle?: number | string;
  local?: number | string;
  markerEnd?: string;
  markerHeight?: number | string;
  markerMid?: string;
  markerStart?: string;
  markerUnits?: number | string;
  markerWidth?: number | string;
  mask?: string;
  maskContentUnits?: number | string;
  maskUnits?: number | string;
  mathematical?: number | string;
  mode?: number | string;
  numOctaves?: number | string;
  offset?: number | string;
  opacity?: number | string;
  operator?: number | string;
  order?: number | string;
  orient?: number | string;
  orientation?: number | string;
  origin?: number | string;
  overflow?: number | string;
  overlinePosition?: number | string;
  overlineThickness?: number | string;
  paintOrder?: number | string;
  panose1?: number | string;
  pathLength?: number | string;
  patternContentUnits?: string;
  patternTransform?: number | string;
  patternUnits?: string;
  pointerEvents?: number | string;
  points?: string;
  pointsAtX?: number | string;
  pointsAtY?: number | string;
  pointsAtZ?: number | string;
  preserveAlpha?: number | string;
  preserveAspectRatio?: string;
  primitiveUnits?: number | string;
  r?: number | string;
  radius?: number | string;
  refX?: number | string;
  refY?: number | string;
  renderingIntent?: number | string;
  repeatCount?: number | string;
  repeatDur?: number | string;
  requiredExtensions?: number | string;
  requiredFeatures?: number | string;
  restart?: number | string;
  result?: string;
  rotate?: number | string;
  rx?: number | string;
  ry?: number | string;
  scale?: number | string;
  seed?: number | string;
  shapeRendering?: number | string;
  slope?: number | string;
  spacing?: number | string;
  specularConstant?: number | string;
  specularExponent?: number | string;
  speed?: number | string;
  spreadMethod?: string;
  startOffset?: number | string;
  stdDeviation?: number | string;
  stemh?: number | string;
  stemv?: number | string;
  stitchTiles?: number | string;
  stopColor?: string;
  stopOpacity?: number | string;
  strikethroughPosition?: number | string;
  strikethroughThickness?: number | string;
  string?: number | string;
  stroke?: string;
  strokeDasharray?: string | number;
  strokeDashoffset?: string | number;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
  strokeMiterlimit?: number | string;
  strokeOpacity?: number | string;
  strokeWidth?: number | string;
  surfaceScale?: number | string;
  systemLanguage?: number | string;
  tableValues?: number | string;
  targetX?: number | string;
  targetY?: number | string;
  textAnchor?: string;
  textDecoration?: number | string;
  textLength?: number | string;
  textRendering?: number | string;
  to?: number | string;
  transform?: string;
  u1?: number | string;
  u2?: number | string;
  underlinePosition?: number | string;
  underlineThickness?: number | string;
  unicode?: number | string;
  unicodeBidi?: number | string;
  unicodeRange?: number | string;
  unitsPerEm?: number | string;
  vAlphabetic?: number | string;
  values?: string;
  vectorEffect?: number | string;
  version?: string;
  vertAdvY?: number | string;
  vertOriginX?: number | string;
  vertOriginY?: number | string;
  vHanging?: number | string;
  vIdeographic?: number | string;
  viewBox?: string;
  viewTarget?: number | string;
  visibility?: number | string;
  vMathematical?: number | string;
  widths?: number | string;
  wordSpacing?: number | string;
  writingMode?: number | string;
  x1?: number | string;
  x2?: number | string;
  x?: number | string;
  xChannelSelector?: string;
  xHeight?: number | string;
  xlinkActuate?: string;
  xlinkArcrole?: string;
  xlinkHref?: string;
  xlinkRole?: string;
  xlinkShow?: string;
  xlinkTitle?: string;
  xlinkType?: string;
  xmlBase?: string;
  xmlLang?: string;
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
  y1?: number | string;
  y2?: number | string;
  y?: number | string;
  yChannelSelector?: string;
  z?: number | string;
  zoomAndPan?: string;
}
