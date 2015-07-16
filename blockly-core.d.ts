
declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Block__Class  { 
    
            /**
            * Class for one block.
            * @constructor
            */
            constructor();
    
            /**
             * Initialization for one block.
             * @param {!Blockly.Workspace} workspace The new block's workspace.
             * @param {?string} prototypeName Name of the language object containing
             *     type-specific functions for this block.
             */
            initialize(workspace: Blockly.Workspace, prototypeName: string): void;
    
            /**
             * Fill a block with initial values.
             * @param {!Blockly.Workspace} workspace The workspace to use.
             * @param {string} prototypeName The typename of the block.
             */
            fill(workspace: Blockly.Workspace, prototypeName: string): void;
    
            /** @type {Blockly.Connection} */
            outputConnection: Blockly.Connection;
    
            /** @type {Blockly.Connection} */
            nextConnection: Blockly.Connection;
    
            /** @type {Blockly.Connection} */
            previousConnection: Blockly.Connection;
    
            /** @type {!Array.<!Blockly.Input>} */
            inputList: Blockly.Input[];
    
            /** @type {boolean|undefined} */
            inputsInline: any /*boolean|any (undefined)*/;
    
            /** @type {boolean} */
            rendered: boolean;
    
            /** @type {boolean} */
            disabled: boolean;
    
            /** @type {string|!Function} */
            tooltip: any /*string|Function*/;
    
            /** @type {boolean} */
            contextMenu: boolean;
    
            /** @type {Blockly.Block} */
            parentBlock_: Blockly.Block;
    
            /** @type {!Array.<!Blockly.Block>} */
            childBlocks_: Blockly.Block[];
    
            /** @type {boolean} */
            deletable_: boolean;
    
            /** @type {boolean} */
            movable_: boolean;
    
            /** @type {boolean} */
            editable_: boolean;
    
            /** @type {boolean} */
            collapsed_: boolean;
    
            /** @type {string|Blockly.Comment} */
            comment: any /*string|Blockly.Comment*/;
    
            /** @type {!goog.math.Coordinate} */
            xy_: goog.math.Coordinate;
    
            /** @type {!Blockly.Workspace} */
            workspace: Blockly.Workspace;
    
            /** @type {boolean} */
            isInFlyout: boolean;
    
            /** @type {boolean} */
            RTL: boolean;
    
            /** @type {string} */
            type: string;
    
            /** @type {boolean|undefined} */
            inputsInlineDefault: any /*boolean|any (undefined)*/;
    
            /**
             * Dispose of this block.
             * @param {boolean} healStack If true, then try to heal any gap by connecting
             *     the next statement with the previous statement.  Otherwise, dispose of
             *     all children of this block.
             * @param {boolean} animate If true, show a disposal animation and sound.
             * @param {boolean=} opt_dontRemoveFromWorkspace If true, don't remove this
             *     block from the workspace's list of top blocks.
             */
            dispose(healStack: boolean, animate: boolean, opt_dontRemoveFromWorkspace?: boolean): void;
    
            /**
             * Unplug this block from its superior block.  If this block is a statement,
             * optionally reconnect the block underneath with the block on top.
             * @param {boolean} healStack Disconnect child statement and reconnect stack.
             * @param {boolean} bump Move the unplugged block sideways a short distance.
             */
            unplug(healStack: boolean, bump: boolean): void;
    
            /**
             * Return the parent block or null if this block is at the top level.
             * @return {Blockly.Block} The block that holds the current block.
             */
            getParent(): Blockly.Block;
    
            /**
             * Return the parent block that surrounds the current block, or null if this
             * block has no surrounding block.  A parent block might just be the previous
             * statement, whereas the surrounding block is an if statement, while loop, etc.
             * @return {Blockly.Block} The block that surrounds the current block.
             */
            getSurroundParent(): Blockly.Block;
    
            /**
             * Return the next statement block directly connected to this block.
             * @return {Blockly.Block} The next statement block or null.
             */
            getNextBlock(): Blockly.Block;
    
            /**
             * Return the top-most block in this block's tree.
             * This will return itself if this block is at the top level.
             * @return {!Blockly.Block} The root block.
             */
            getRootBlock(): Blockly.Block;
    
            /**
             * Find all the blocks that are directly nested inside this one.
             * Includes value and block inputs, as well as any following statement.
             * Excludes any connection on an output tab or any preceding statement.
             * @return {!Array.<!Blockly.Block>} Array of blocks.
             */
            getChildren(): Blockly.Block[];
    
            /**
             * Set parent of this block to be a new block or null.
             * @param {Blockly.Block} newParent New parent block.
             */
            setParent(newParent: Blockly.Block): void;
    
            /**
             * Find all the blocks that are directly or indirectly nested inside this one.
             * Includes this block in the list.
             * Includes value and block inputs, as well as any following statements.
             * Excludes any connection on an output tab or any preceding statements.
             * @return {!Array.<!Blockly.Block>} Flattened array of blocks.
             */
            getDescendants(): Blockly.Block[];
    
            /**
             * Get whether this block is deletable or not.
             * @return {boolean} True if deletable.
             */
            isDeletable(): boolean;
    
            /**
             * Set whether this block is deletable or not.
             * @param {boolean} deletable True if deletable.
             */
            setDeletable(deletable: boolean): void;
    
            /**
             * Get whether this block is movable or not.
             * @return {boolean} True if movable.
             */
            isMovable(): boolean;
    
            /**
             * Set whether this block is movable or not.
             * @param {boolean} movable True if movable.
             */
            setMovable(movable: boolean): void;
    
            /**
             * Get whether this block is editable or not.
             * @return {boolean} True if editable.
             */
            isEditable(): boolean;
    
            /**
             * Set whether this block is editable or not.
             * @param {boolean} editable True if editable.
             */
            setEditable(editable: boolean): void;
    
            /**
             * Set whether the connections are hidden (not tracked in a database) or not.
             * Recursively walk down all child blocks (except collapsed blocks).
             * @param {boolean} hidden True if connections are hidden.
             */
            setConnectionsHidden(hidden: boolean): void;
    
            /**
             * Set the URL of this block's help page.
             * @param {string|Function} url URL string for block help, or function that
             *     returns a URL.  Null for no help.
             */
            setHelpUrl(url: string): void;
            /**
             * Set the URL of this block's help page.
             * @param {string|Function} url URL string for block help, or function that
             *     returns a URL.  Null for no help.
             */
            setHelpUrl(url: Function): void;
    
            /**
             * Change the tooltip text for a block.
             * @param {string|!Function} newTip Text for tooltip or a parent element to
             *     link to for its tooltip.  May be a function that returns a string.
             */
            setTooltip(newTip: string): void;
            /**
             * Change the tooltip text for a block.
             * @param {string|!Function} newTip Text for tooltip or a parent element to
             *     link to for its tooltip.  May be a function that returns a string.
             */
            setTooltip(newTip: Function): void;
    
            /**
             * Get the colour of a block.
             * @return {number} HSV hue value.
             */
            getColour(): number;
    
            /**
             * Change the colour of a block.
             * @param {number} colourHue HSV hue value.
             */
            setColour(colourHue: number): void;
    
            /**
             * Returns the named field from a block.
             * @param {string} name The name of the field.
             * @return {Blockly.Field} Named field, or null if field does not exist.
             */
            getField(name: string): Blockly.Field;
    
            /**
             * Returns the language-neutral value from the field of a block.
             * @param {string} name The name of the field.
             * @return {?string} Value from the field or null if field does not exist.
             */
            getFieldValue(name: string): string;
    
            /**
             * Returns the language-neutral value from the field of a block.
             * @param {string} name The name of the field.
             * @return {?string} Value from the field or null if field does not exist.
             * @deprecated December 2013
             */
            getTitleValue(name: string): string;
    
            /**
             * Change the field value for a block (e.g. 'CHOOSE' or 'REMOVE').
             * @param {string} newValue Value to be the new field.
             * @param {string} name The name of the field.
             */
            setFieldValue(newValue: string, name: string): void;
    
            /**
             * Change the field value for a block (e.g. 'CHOOSE' or 'REMOVE').
             * @param {string} newValue Value to be the new field.
             * @param {string} name The name of the field.
             * @deprecated December 2013
             */
            setTitleValue(newValue: string, name: string): void;
    
            /**
             * Set whether this block can chain onto the bottom of another block.
             * @param {boolean} newBoolean True if there can be a previous statement.
             * @param {string|Array.<string>|null|undefined} opt_check Statement type or
             *     list of statement types.  Null/undefined if any type could be connected.
             */
            setPreviousStatement(newBoolean: boolean, opt_check: string): void;
            /**
             * Set whether this block can chain onto the bottom of another block.
             * @param {boolean} newBoolean True if there can be a previous statement.
             * @param {string|Array.<string>|null|undefined} opt_check Statement type or
             *     list of statement types.  Null/undefined if any type could be connected.
             */
            setPreviousStatement(newBoolean: boolean, opt_check: string[]): void;
            /**
             * Set whether this block can chain onto the bottom of another block.
             * @param {boolean} newBoolean True if there can be a previous statement.
             * @param {string|Array.<string>|null|undefined} opt_check Statement type or
             *     list of statement types.  Null/undefined if any type could be connected.
             */
            setPreviousStatement(newBoolean: boolean, opt_check: any /*null*/): void;
    
            /**
             * Set whether another block can chain onto the bottom of this block.
             * @param {boolean} newBoolean True if there can be a next statement.
             * @param {string|Array.<string>|null|undefined} opt_check Statement type or
             *     list of statement types.  Null/undefined if any type could be connected.
             */
            setNextStatement(newBoolean: boolean, opt_check: string): void;
            /**
             * Set whether another block can chain onto the bottom of this block.
             * @param {boolean} newBoolean True if there can be a next statement.
             * @param {string|Array.<string>|null|undefined} opt_check Statement type or
             *     list of statement types.  Null/undefined if any type could be connected.
             */
            setNextStatement(newBoolean: boolean, opt_check: string[]): void;
            /**
             * Set whether another block can chain onto the bottom of this block.
             * @param {boolean} newBoolean True if there can be a next statement.
             * @param {string|Array.<string>|null|undefined} opt_check Statement type or
             *     list of statement types.  Null/undefined if any type could be connected.
             */
            setNextStatement(newBoolean: boolean, opt_check: any /*null*/): void;
    
            /**
             * Set whether this block returns a value.
             * @param {boolean} newBoolean True if there is an output.
             * @param {string|Array.<string>|null|undefined} opt_check Returned type or list
             *     of returned types.  Null or undefined if any type could be returned
             *     (e.g. variable get).
             */
            setOutput(newBoolean: boolean, opt_check: string): void;
            /**
             * Set whether this block returns a value.
             * @param {boolean} newBoolean True if there is an output.
             * @param {string|Array.<string>|null|undefined} opt_check Returned type or list
             *     of returned types.  Null or undefined if any type could be returned
             *     (e.g. variable get).
             */
            setOutput(newBoolean: boolean, opt_check: string[]): void;
            /**
             * Set whether this block returns a value.
             * @param {boolean} newBoolean True if there is an output.
             * @param {string|Array.<string>|null|undefined} opt_check Returned type or list
             *     of returned types.  Null or undefined if any type could be returned
             *     (e.g. variable get).
             */
            setOutput(newBoolean: boolean, opt_check: any /*null*/): void;
    
            /**
             * Change the output type on a block.
             * @param {string|Array.<string>|null} check Returned type or list of
             *     returned types.  Null or undefined if any type could be returned
             *     (e.g. variable get).  It is fine if this is the same as the old type.
             * @throws {goog.asserts.AssertionError} if the block did not already have an
             *     output.
             */
            changeOutput(check: string): void;
            /**
             * Change the output type on a block.
             * @param {string|Array.<string>|null} check Returned type or list of
             *     returned types.  Null or undefined if any type could be returned
             *     (e.g. variable get).  It is fine if this is the same as the old type.
             * @throws {goog.asserts.AssertionError} if the block did not already have an
             *     output.
             */
            changeOutput(check: string[]): void;
            /**
             * Change the output type on a block.
             * @param {string|Array.<string>|null} check Returned type or list of
             *     returned types.  Null or undefined if any type could be returned
             *     (e.g. variable get).  It is fine if this is the same as the old type.
             * @throws {goog.asserts.AssertionError} if the block did not already have an
             *     output.
             */
            changeOutput(check: any /*null*/): void;
    
            /**
             * Set whether value inputs are arranged horizontally or vertically.
             * @param {boolean} newBoolean True if inputs are horizontal.
             */
            setInputsInline(newBoolean: boolean): void;
    
            /**
             * Get whether value inputs are arranged horizontally or vertically.
             * @return {boolean} True if inputs are horizontal.
             */
            getInputsInline(): boolean;
    
            /**
             * Set whether the block is disabled or not.
             * @param {boolean} disabled True if disabled.
             */
            setDisabled(disabled: boolean): void;
    
            /**
             * Get whether the block is disabled or not due to parents.
             * The block's own disabled property is not considered.
             * @return {boolean} True if disabled.
             */
            getInheritedDisabled(): boolean;
    
            /**
             * Get whether the block is collapsed or not.
             * @return {boolean} True if collapsed.
             */
            isCollapsed(): boolean;
    
            /**
             * Set whether the block is collapsed or not.
             * @param {boolean} collapsed True if collapsed.
             */
            setCollapsed(collapsed: boolean): void;
    
            /**
             * Create a human-readable text representation of this block and any children.
             * @param {number=} opt_maxLength Truncate the string to this length.
             * @return {string} Text of block.
             */
            toString(opt_maxLength?: number): string;
    
            /**
             * Shortcut for appending a value input row.
             * @param {string} name Language-neutral identifier which may used to find this
             *     input again.  Should be unique to this block.
             * @return {!Blockly.Input} The input object created.
             */
            appendValueInput(name: string): Blockly.Input;
    
            /**
             * Shortcut for appending a statement input row.
             * @param {string} name Language-neutral identifier which may used to find this
             *     input again.  Should be unique to this block.
             * @return {!Blockly.Input} The input object created.
             */
            appendStatementInput(name: string): Blockly.Input;
    
            /**
             * Shortcut for appending a dummy input row.
             * @param {string=} opt_name Language-neutral identifier which may used to find
             *     this input again.  Should be unique to this block.
             * @return {!Blockly.Input} The input object created.
             */
            appendDummyInput(opt_name?: string): Blockly.Input;
    
            /**
             * Initialize this block using a cross-platform, internationalization-friendly
             * JSON description.
             * @param {!Object} json Structured data describing the block.
             */
            jsonInit(json: Object): void;
    
            /**
             * Move a named input to a different location on this block.
             * @param {string} name The name of the input to move.
             * @param {?string} refName Name of input that should be after the moved input,
             *   or null to be the input at the end.
             */
            moveInputBefore(name: string, refName: string): void;
    
            /**
             * Move a numbered input to a different location on this block.
             * @param {number} inputIndex Index of the input to move.
             * @param {number} refIndex Index of input that should be after the moved input.
             */
            moveNumberedInputBefore(inputIndex: number, refIndex: number): void;
    
            /**
             * Remove an input from this block.
             * @param {string} name The name of the input.
             * @param {boolean=} opt_quiet True to prevent error if input is not present.
             * @throws {goog.asserts.AssertionError} if the input is not present and
             *     opt_quiet is not true.
             */
            removeInput(name: string, opt_quiet?: boolean): void;
    
            /**
             * Fetches the named input object.
             * @param {string} name The name of the input.
             * @return {Blockly.Input} The input object, or null of the input does not exist.
             */
            getInput(name: string): Blockly.Input;
    
            /**
             * Fetches the block attached to the named input.
             * @param {string} name The name of the input.
             * @return {Blockly.Block} The attached value block, or null if the input is
             *     either disconnected or if the input does not exist.
             */
            getInputTargetBlock(name: string): Blockly.Block;
    
            /**
             * Returns the comment on this block (or '' if none).
             * @return {string} Block's comment.
             */
            getCommentText(): string;
    
            /**
             * Set this block's comment text.
             * @param {?string} text The text, or null to delete.
             */
            setCommentText(text: string): void;
    
            /**
             * Set this block's warning text.
             * @param {?string} text The text, or null to delete.
             */
            setWarningText(text: string): void;
    
            /**
             * Give this block a mutator dialog.
             * @param {Blockly.Mutator} mutator A mutator dialog instance or null to remove.
             */
            setMutator(mutator: Blockly.Mutator): void;
    
            /**
             * Return the coordinates of the top-left corner of this block relative to the
             * drawing surface's origin (0,0).
             * @return {!goog.math.Coordinate} Object with .x and .y properties.
             */
            getRelativeToSurfaceXY(): goog.math.Coordinate;
    
            /**
             * Move a block by a relative offset.
             * @param {number} dx Horizontal offset.
             * @param {number} dy Vertical offset.
             */
            moveBy(dx: number, dy: number): void;
    } 
    class Block extends Block__Class { }
    module Block { }
    
}

declare module Blockly.Block {

    /**
     * Obtain a newly created block.
     * @param {!Blockly.Workspace} workspace The block's workspace.
     * @param {?string} prototypeName Name of the language object containing
     *     type-specific functions for this block.
     * @return {!Blockly.Block} The created block
     */
    function obtain(workspace: Blockly.Workspace, prototypeName: string): Blockly.Block;

    /**
     * Get an existing block.
     * @param {string} id The block's id.
     * @param {!Blockly.Workspace} workspace The block's workspace.
     * @return {Blockly.Block} The found block, or null if not found.
     */
    function getById(id: string, workspace: Blockly.Workspace): Blockly.Block;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class BlockSvg__Class extends Blockly.Block__Class  { 
    
            /**
             * Class for a block's SVG representation.
             * @extends {Blockly.Block}
             * @constructor
             */
            constructor();
    
            /**
             * Height of this block, not including any statement blocks above or below.
             */
            height: any /*missing*/;
    
            /**
             * Width of this block, including any connected value blocks.
             */
            width: any /*missing*/;
    
            /**
             * Create and initialize the SVG representation of the block.
             * May be called more than once.
             */
            initSvg(): void;
    
            /**
             * Select this block.  Highlight it visually.
             */
            select(): void;
    
            /**
             * Unselect this block.  Remove its highlighting.
             */
            unselect(): void;
    
            /**
             * Block's mutator icon (if any).
             * @type {Blockly.Mutator}
             */
            mutator: Blockly.Mutator;
    
            /**
             * Block's comment icon (if any).
             * @type {Blockly.Comment}
             */
            comment: Blockly.Comment;
    
            /**
             * Block's warning icon (if any).
             * @type {Blockly.Warning}
             */
            warning: Blockly.Warning;
    
            /**
             * Returns a list of mutator, comment, and warning icons.
             * @return {!Array} List of icons.
             */
            getIcons(): any[];
    
            /**
             * Set parent of this block to be a new block or null.
             * @param {Blockly.BlockSvg} newParent New parent block.
             */
            setParent(newParent: Blockly.BlockSvg): void;
    
            /**
             * Return the coordinates of the top-left corner of this block relative to the
             * drawing surface's origin (0,0).
             * @return {!goog.math.Coordinate} Object with .x and .y properties.
             */
            getRelativeToSurfaceXY(): goog.math.Coordinate;
    
            /**
             * Move a block by a relative offset.
             * @param {number} dx Horizontal offset.
             * @param {number} dy Vertical offset.
             */
            moveBy(dx: number, dy: number): void;
    
            /**
             * Returns a bounding box describing the dimensions of this block
             * and any blocks stacked below it.
             * @return {!Object} Object with height and width properties.
             */
            getHeightWidth(): Object;
    
            /**
             * Set whether the block is collapsed or not.
             * @param {boolean} collapsed True if collapsed.
             */
            setCollapsed(collapsed: boolean): void;
    
            /**
             * Add or remove the UI indicating if this block is movable or not.
             */
            updateMovable(): void;
    
            /**
             * Set whether this block is movable or not.
             * @param {boolean} movable True if movable.
             */
            setMovable(movable: boolean): void;
    
            /**
             * Return the root node of the SVG or null if none exists.
             * @return {Element} The root SVG node (probably a group).
             */
            getSvgRoot(): Element;
    
            /**
             * Dispose of this block.
             * @param {boolean} healStack If true, then try to heal any gap by connecting
             *     the next statement with the previous statement.  Otherwise, dispose of
             *     all children of this block.
             * @param {boolean} animate If true, show a disposal animation and sound.
             * @param {boolean=} opt_dontRemoveFromWorkspace If true, don't remove this
             *     block from the workspace's list of top blocks.
             */
            dispose(healStack: boolean, animate: boolean, opt_dontRemoveFromWorkspace?: boolean): void;
    
            /**
             * Play some UI effects (sound, animation) when disposing of a block.
             */
            disposeUiEffect(): void;
    
            /**
             * Play some UI effects (sound, ripple) after a connection has been established.
             */
            connectionUiEffect(): void;
    
            /**
             * Change the colour of a block.
             */
            updateColour(): void;
    
            /**
             * Enable or disable a block.
             */
            updateDisabled(): void;
    
            /**
             * Returns the comment on this block (or '' if none).
             * @return {string} Block's comment.
             */
            getCommentText(): string;
    
            /**
             * Set this block's comment text.
             * @param {?string} text The text, or null to delete.
             */
            setCommentText(text: string): void;
    
            /**
             * Set this block's warning text.
             * @param {?string} text The text, or null to delete.
             */
            setWarningText(text: string): void;
    
            /**
             * Give this block a mutator dialog.
             * @param {Blockly.Mutator} mutator A mutator dialog instance or null to remove.
             */
            setMutator(mutator: Blockly.Mutator): void;
    
            /**
             * Set whether the block is disabled or not.
             * @param {boolean} disabled True if disabled.
             */
            setDisabled(disabled: boolean): void;
    
            /**
             * Select this block.  Highlight it visually.
             */
            addSelect(): void;
    
            /**
             * Unselect this block.  Remove its highlighting.
             */
            removeSelect(): void;
    
            /**
             * Adds the dragging class to this block.
             * Also disables the highlights/shadows to improve performance.
             */
            addDragging(): void;
    
            /**
             * Removes the dragging class from this block.
             */
            removeDragging(): void;
    
            /**
             * Render the block.
             * Lays out and reflows a block based on its contents and settings.
             * @param {boolean=} opt_bubble If false, just render this block.
             *   If true, also render block's parent, grandparent, etc.  Defaults to true.
             */
            render(opt_bubble?: boolean): void;
    } 
    class BlockSvg extends BlockSvg__Class { }
    module BlockSvg { }
    
}

declare module Blockly.BlockSvg {

    /**
     * Constant for identifying rows that are to be rendered inline.
     * Don't collide with Blockly.INPUT_VALUE and friends.
     * @const
     */
    var INLINE: any /*missing*/;

    /**
     * Horizontal space between elements.
     * @const
     */
    var SEP_SPACE_X: any /*missing*/;

    /**
     * Vertical space between elements.
     * @const
     */
    var SEP_SPACE_Y: any /*missing*/;

    /**
     * Vertical padding around inline elements.
     * @const
     */
    var INLINE_PADDING_Y: any /*missing*/;

    /**
     * Minimum height of a block.
     * @const
     */
    var MIN_BLOCK_Y: any /*missing*/;

    /**
     * Height of horizontal puzzle tab.
     * @const
     */
    var TAB_HEIGHT: any /*missing*/;

    /**
     * Width of horizontal puzzle tab.
     * @const
     */
    var TAB_WIDTH: any /*missing*/;

    /**
     * Width of vertical tab (inc left margin).
     * @const
     */
    var NOTCH_WIDTH: any /*missing*/;

    /**
     * Rounded corner radius.
     * @const
     */
    var CORNER_RADIUS: any /*missing*/;

    /**
     * Minimum height of field rows.
     * @const
     */
    var FIELD_HEIGHT: any /*missing*/;

    /**
     * Distance from shape edge to intersect with a curved corner at 45 degrees.
     * Applies to highlighting on around the inside of a curve.
     * @const
     */
    var DISTANCE_45_INSIDE: any /*missing*/;

    /**
     * Distance from shape edge to intersect with a curved corner at 45 degrees.
     * Applies to highlighting on around the outside of a curve.
     * @const
     */
    var DISTANCE_45_OUTSIDE: any /*missing*/;

    /**
     * SVG path for drawing next/previous notch from left to right.
     * @const
     */
    var NOTCH_PATH_LEFT: any /*missing*/;

    /**
     * SVG path for drawing next/previous notch from left to right with
     * highlighting.
     * @const
     */
    var NOTCH_PATH_LEFT_HIGHLIGHT: any /*missing*/;

    /**
     * SVG path for drawing next/previous notch from right to left.
     * @const
     */
    var NOTCH_PATH_RIGHT: any /*missing*/;

    /**
     * SVG path for drawing jagged teeth at the end of collapsed blocks.
     * @const
     */
    var JAGGED_TEETH: any /*missing*/;

    /**
     * Height of SVG path for jagged teeth at the end of collapsed blocks.
     * @const
     */
    var JAGGED_TEETH_HEIGHT: any /*missing*/;

    /**
     * Width of SVG path for jagged teeth at the end of collapsed blocks.
     * @const
     */
    var JAGGED_TEETH_WIDTH: any /*missing*/;

    /**
     * SVG path for drawing a horizontal puzzle tab from top to bottom.
     * @const
     */
    var TAB_PATH_DOWN: any /*missing*/;

    /**
     * SVG path for drawing a horizontal puzzle tab from top to bottom with
     * highlighting from the upper-right.
     * @const
     */
    var TAB_PATH_DOWN_HIGHLIGHT_RTL: any /*missing*/;

    /**
     * SVG start point for drawing the top-left corner.
     * @const
     */
    var TOP_LEFT_CORNER_START: any /*missing*/;

    /**
     * SVG start point for drawing the top-left corner's highlight in RTL.
     * @const
     */
    var TOP_LEFT_CORNER_START_HIGHLIGHT_RTL: any /*missing*/;

    /**
     * SVG start point for drawing the top-left corner's highlight in LTR.
     * @const
     */
    var TOP_LEFT_CORNER_START_HIGHLIGHT_LTR: any /*missing*/;

    /**
     * SVG path for drawing the rounded top-left corner.
     * @const
     */
    var TOP_LEFT_CORNER: any /*missing*/;

    /**
     * SVG path for drawing the highlight on the rounded top-left corner.
     * @const
     */
    var TOP_LEFT_CORNER_HIGHLIGHT: any /*missing*/;

    /**
     * SVG path for drawing the top-left corner of a statement input.
     * Includes the top notch, a horizontal space, and the rounded inside corner.
     * @const
     */
    var INNER_TOP_LEFT_CORNER: any /*missing*/;

    /**
     * SVG path for drawing the bottom-left corner of a statement input.
     * Includes the rounded inside corner.
     * @const
     */
    var INNER_BOTTOM_LEFT_CORNER: any /*missing*/;

    /**
     * SVG path for drawing highlight on the top-left corner of a statement
     * input in RTL.
     * @const
     */
    var INNER_TOP_LEFT_CORNER_HIGHLIGHT_RTL: any /*missing*/;

    /**
     * SVG path for drawing highlight on the bottom-left corner of a statement
     * input in RTL.
     * @const
     */
    var INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_RTL: any /*missing*/;

    /**
     * SVG path for drawing highlight on the bottom-left corner of a statement
     * input in LTR.
     * @const
     */
    var INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_LTR: any /*missing*/;
}

declare module Blockly {

    /**
     * Required name space for SVG elements.
     * @const
     */
    var SVG_NS: any /*missing*/;

    /**
     * Required name space for HTML elements.
     * @const
     */
    var HTML_NS: any /*missing*/;

    /**
     * The richness of block colours, regardless of the hue.
     * Must be in the range of 0 (inclusive) to 1 (exclusive).
     */
    var HSV_SATURATION: any /*missing*/;

    /**
     * The intensity of block colours, regardless of the hue.
     * Must be in the range of 0 (inclusive) to 1 (exclusive).
     */
    var HSV_VALUE: any /*missing*/;

    /**
     * Sprited icons and images.
     */
    var SPRITE: any /*missing*/;

    /**
     * Convert a hue (HSV model) into an RGB hex triplet.
     * @param {number} hue Hue on a colour wheel (0-360).
     * @return {string} RGB code, e.g. '#5ba65b'.
     */
    function makeColour(hue: number): string;

    /**
     * ENUM for a right-facing value input.  E.g. 'set item to' or 'return'.
     * @const
     */
    var INPUT_VALUE: any /*missing*/;

    /**
     * ENUM for a left-facing value output.  E.g. 'random fraction'.
     * @const
     */
    var OUTPUT_VALUE: any /*missing*/;

    /**
     * ENUM for a down-facing block stack.  E.g. 'if-do' or 'else'.
     * @const
     */
    var NEXT_STATEMENT: any /*missing*/;

    /**
     * ENUM for an up-facing block stack.  E.g. 'break out of loop'.
     * @const
     */
    var PREVIOUS_STATEMENT: any /*missing*/;

    /**
     * ENUM for an dummy input.  Used to add field(s) with no input.
     * @const
     */
    var DUMMY_INPUT: any /*missing*/;

    /**
     * ENUM for left alignment.
     * @const
     */
    var ALIGN_LEFT: any /*missing*/;

    /**
     * ENUM for centre alignment.
     * @const
     */
    var ALIGN_CENTRE: any /*missing*/;

    /**
     * ENUM for right alignment.
     * @const
     */
    var ALIGN_RIGHT: any /*missing*/;

    /**
     * Lookup table for determining the opposite type of a connection.
     * @const
     */
    var OPPOSITE_TYPE: any /*missing*/;

    /**
     * Currently selected block.
     * @type {Blockly.Block}
     */
    var selected: Blockly.Block;

    /**
     * Number of pixels the mouse must move before a drag starts.
     */
    var DRAG_RADIUS: any /*missing*/;

    /**
     * Maximum misalignment between connections for them to snap together.
     */
    var SNAP_RADIUS: any /*missing*/;

    /**
     * Delay in ms between trigger and bumping unconnected block out of alignment.
     */
    var BUMP_DELAY: any /*missing*/;

    /**
     * Number of characters to truncate a collapsed block to.
     */
    var COLLAPSE_CHARS: any /*missing*/;

    /**
     * Length in ms for a touch to become a long press.
     */
    var LONGPRESS: any /*missing*/;

    /**
     * The main workspace most recently used.
     * Set by Blockly.WorkspaceSvg.prototype.markFocused
     * @type {Blockly.Workspace}
     */
    var mainWorkspace: Blockly.Workspace;

    /**
     * Returns the dimensions of the specified SVG image.
     * @param {!Element} svg SVG image.
     * @return {!Object} Contains width and height properties.
     */
    function svgSize(svg: Element): Object;

    /**
     * Size the SVG image to completely fill its container.
     * Record the height/width of the SVG image.
     * @param {!Blockly.WorkspaceSvg} workspace Any workspace in the SVG.
     */
    function svgResize(workspace: Blockly.WorkspaceSvg): void;

    /**
     * Close tooltips, context menus, dropdown selections, etc.
     * @param {boolean=} opt_allowToolbox If true, don't close the toolbox.
     */
    function hideChaff(opt_allowToolbox?: boolean): void;

    /**
     * Execute a command.  Generally, a command is the result of a user action
     * e.g., a click, drag or context menu selection.  Calling the cmdThunk function
     * through doCommand() allows us to capture information that can be used for
     * capabilities like undo (which is supported by the realtime collaboration
     * feature).
     * @param {function()} cmdThunk A function representing the command execution.
     */
    function doCommand(cmdThunk: () => any /*missing*/): void;

    /**
     * When something in Blockly's workspace changes, call a function.
     * @param {!Function} func Function to call.
     * @return {!Array.<!Array>} Opaque data that can be passed to
     *     removeChangeListener.
     * @deprecated April 2015
     */
    function addChangeListener(func: Function): any[][];

    /**
     * Returns the main workspace.  Returns the last used main workspace (based on
     * focus).
     * @return {!Blockly.Workspace} The main workspace.
     */
    function getMainWorkspace(): Blockly.Workspace;
}

declare module Blockly.Blocks {

    /**
     * Generate a unique ID.  This will be locally or globally unique, depending on
     * whether we are in single user or realtime collaborative mode.
     * @return {string}
     */
    function genUid(): string;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Bubble__Class  { 
    
            /**
             * Class for UI bubble.
             * @param {!Blockly.Workspace} workspace The workspace on which to draw the
             *     bubble.
             * @param {!Element} content SVG content for the bubble.
             * @param {Element} shape SVG element to avoid eclipsing.
             * @param {number} anchorX Absolute horizontal position of bubbles anchor point.
             * @param {number} anchorY Absolute vertical position of bubbles anchor point.
             * @param {?number} bubbleWidth Width of bubble, or null if not resizable.
             * @param {?number} bubbleHeight Height of bubble, or null if not resizable.
             * @constructor
             */
            constructor(workspace: Blockly.Workspace, content: Element, shape: Element, anchorX: number, anchorY: number, bubbleWidth: number, bubbleHeight: number);
    
            /**
             * Register a function as a callback event for when the bubble is resized.
             * @param {Object} thisObject The value of 'this' in the callback.
             * @param {!Function} callback The function to call on resize.
             */
            registerResizeEvent(thisObject: Object, callback: Function): void;
    
            /**
             * Notification that the anchor has moved.
             * Update the arrow and bubble accordingly.
             * @param {number} x Absolute horizontal location.
             * @param {number} y Absolute vertical location.
             */
            setAnchorLocation(x: number, y: number): void;
    
            /**
             * Get the dimensions of this bubble.
             * @return {!Object} Object with width and height properties.
             */
            getBubbleSize(): Object;
    
            /**
             * Size this bubble.
             * @param {number} width Width of the bubble.
             * @param {number} height Height of the bubble.
             */
            setBubbleSize(width: number, height: number): void;
    
            /**
             * Change the colour of a bubble.
             * @param {string} hexColour Hex code of colour.
             */
            setColour(hexColour: string): void;
    
            /**
             * Dispose of this bubble.
             */
            dispose(): void;
    } 
    class Bubble extends Bubble__Class { }
    module Bubble { }
    
}

declare module Blockly.Bubble {

    /**
     * Width of the border around the bubble.
     */
    var BORDER_WIDTH: any /*missing*/;

    /**
     * Determines the thickness of the base of the arrow in relation to the size
     * of the bubble.  Higher numbers result in thinner arrows.
     */
    var ARROW_THICKNESS: any /*missing*/;

    /**
     * The number of degrees that the arrow bends counter-clockwise.
     */
    var ARROW_ANGLE: any /*missing*/;

    /**
     * The sharpness of the arrow's bend.  Higher numbers result in smoother arrows.
     */
    var ARROW_BEND: any /*missing*/;

    /**
     * Distance between arrow point and anchor point.
     */
    var ANCHOR_RADIUS: any /*missing*/;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Comment__Class extends Blockly.Icon__Class  { 
    
            /**
             * Class for a comment.
             * @param {!Blockly.Block} block The block associated with this comment.
             * @extends {Blockly.Icon}
             * @constructor
             */
            constructor(block: Blockly.Block);
    
            /**
             * Show or hide the comment bubble.
             * @param {boolean} visible True if the bubble should be visible.
             */
            setVisible(visible: boolean): void;
    
            /**
             * Get the dimensions of this comment's bubble.
             * @return {!Object} Object with width and height properties.
             */
            getBubbleSize(): Object;
    
            /**
             * Size this comment's bubble.
             * @param {number} width Width of the bubble.
             * @param {number} height Height of the bubble.
             */
            setBubbleSize(width: number, height: number): void;
    
            /**
             * Returns this comment's text.
             * @return {string} Comment text.
             */
            getText(): string;
    
            /**
             * Set this comment's text.
             * @param {string} text Comment text.
             */
            setText(text: string): void;
    
            /**
             * Dispose of this comment.
             */
            dispose(): void;
    } 
    class Comment extends Comment__Class { }
    module Comment { }
    
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Connection__Class  { 
    
            /**
             * Class for a connection between blocks.
             * @param {!Blockly.Block} source The block establishing this connection.
             * @param {number} type The type of the connection.
             * @constructor
             */
            constructor(source: Blockly.Block, type: number);
    
            /** @type {Blockly.Connection} */
            targetConnection: Blockly.Connection;
    
            /** @type {number} */
            type: number;
    
            /**
             * Sever all links to this connection (not including from the source object).
             */
            dispose(): void;
    
            /**
             * Does the connection belong to a superior block (higher in the source stack)?
             * @return {boolean} True if connection faces down or right.
             */
            isSuperior(): boolean;
    
            /**
             * Connect this connection to another connection.
             * @param {!Blockly.Connection} otherConnection Connection to connect to.
             */
            connect(otherConnection: Blockly.Connection): void;
    
            /**
             * Disconnect this connection.
             */
            disconnect(): void;
    
            /**
             * Returns the block that this connection connects to.
             * @return {Blockly.Block} The connected block or null if none is connected.
             */
            targetBlock(): Blockly.Block;
    
            /**
             * Change the connection's coordinates.
             * @param {number} x New absolute x coordinate.
             * @param {number} y New absolute y coordinate.
             */
            moveTo(x: number, y: number): void;
    
            /**
             * Change the connection's coordinates.
             * @param {number} dx Change to x coordinate.
             * @param {number} dy Change to y coordinate.
             */
            moveBy(dx: number, dy: number): void;
    
            /**
             * Add highlighting around this connection.
             */
            highlight(): void;
    
            /**
             * Remove the highlighting around this connection.
             */
            unhighlight(): void;
    
            /**
             * Find the closest compatible connection to this connection.
             * @param {number} maxLimit The maximum radius to another connection.
             * @param {number} dx Horizontal offset between this connection's location
             *     in the database and the current location (as a result of dragging).
             * @param {number} dy Vertical offset between this connection's location
             *     in the database and the current location (as a result of dragging).
             * @return {!Object} Contains two properties: 'connection' which is either
             *     another connection or null, and 'radius' which is the distance.
             */
            closest(maxLimit: number, dx: number, dy: number): Object;
    
            /**
             * Change a connection's compatibility.
             * @param {*} check Compatible value type or list of value types.
             *     Null if all types are compatible.
             * @return {!Blockly.Connection} The connection being modified
             *     (to allow chaining).
             */
            setCheck(check: any): Blockly.Connection;
    
            /**
             * Set whether this connections is hidden (not tracked in a database) or not.
             * @param {boolean} hidden True if connection is hidden.
             */
            setHidden(hidden: boolean): void;
    
            /**
             * Hide this connection, as well as all down-stream connections on any block
             * attached to this connection.  This happens when a block is collapsed.
             * Also hides down-stream comments.
             */
            hideAll(): void;
    
            /**
             * Unhide this connection, as well as all down-stream connections on any block
             * attached to this connection.  This happens when a block is expanded.
             * Also unhides down-stream comments.
             * @return {!Array.<!Blockly.Block>} List of blocks to render.
             */
            unhideAll(): Blockly.Block[];
    } 
    class Connection extends Connection__Class { }
    module Connection { }
    

    /** Fake class which should be extended to avoid inheriting static properties */
    class ConnectionDB__Class  { 
    
            /**
             * Database of connections.
             * Connections are stored in order of their vertical component.  This way
             * connections in an area may be looked up quickly using a binary search.
             * @constructor
             */
            constructor();
    } 
    class ConnectionDB extends ConnectionDB__Class { }
    module ConnectionDB { }
    
}

declare module Blockly.ConnectionDB {

    /**
     * Don't inherit the constructor from Array.
     * @type {!Function}
     */
    var constructor: Function;

    /**
     * Initialize a set of connection DBs for a specified workspace.
     * @param {!Blockly.Workspace} workspace The workspace this DB is for.
     */
    function init(workspace: Blockly.Workspace): void;
}

declare module Blockly.ContextMenu {

    /**
     * Which block is the context menu attached to?
     * @type {Blockly.Block}
     */
    var currentBlock: Blockly.Block;

    /**
     * Construct the menu based on the list of options and show the menu.
     * @param {!Event} e Mouse event.
     * @param {!Array.<!Object>} options Array of menu options.
     * @param {boolean} rtl True if RTL, false if LTR.
     */
    function show(e: Event, options: Object[], rtl: boolean): void;

    /**
     * Hide the context menu.
     */
    function hide(): void;

    /**
     * Create a callback function that creates and configures a block,
     *   then places the new block next to the original.
     * @param {!Blockly.Block} block Original block.
     * @param {!Element} xml XML representation of new block.
     * @return {!Function} Function that creates a block.
     */
    function callbackFactory(block: Blockly.Block, xml: Element): Function;
}

declare module Blockly.Css {

    /**
     * List of cursors.
     * @enum {string}
     */
    enum Cursor { OPEN, CLOSED, DELETE } 

    /**
     * Inject the CSS into the DOM.  This is preferable over using a regular CSS
     * file since:
     * a) It loads synchronously and doesn't force a redraw later.
     * b) It speeds up loading by not blocking on a separate HTTP transfer.
     * c) The CSS content may be made dynamic depending on init options.
     * @param {boolean} hasCss If false, don't inject CSS
     *     (providing CSS becomes the document's responsibility).
     * @param {string} pathToMedia Path from page to the Blockly media directory.
     */
    function inject(hasCss: boolean, pathToMedia: string): void;

    /**
     * Set the cursor to be displayed when over something draggable.
     * @param {Blockly.Cursor} cursor Enum.
     */
    function setCursor(cursor: Blockly.Cursor): void;

    /**
     * Array making up the CSS content for Blockly.
     */
    var CONTENT: any /*missing*/;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Field__Class  { 
    
            /**
             * Class for an editable field.
             * @param {string} text The initial content of the field.
             * @constructor
             */
            constructor(text: string);
    
            /**
             * Clone this Field.  This must be implemented by all classes derived from
             * Field.  Since this class should not be instantiated, calling this method
             * throws an exception.
             * @throws {goog.assert.AssertionError}
             */
            clone(): void;
    
            /**
             * Editable fields are saved by the XML renderer, non-editable fields are not.
             */
            EDITABLE: any /*missing*/;
    
            /**
             * Install this field on a block.
             * @param {!Blockly.Block} block The block containing this field.
             */
            init(block: Blockly.Block): void;
    
            /**
             * Dispose of all DOM objects belonging to this editable field.
             */
            dispose(): void;
    
            /**
             * Add or remove the UI indicating if this field is editable or not.
             */
            updateEditable(): void;
    
            /**
             * Gets whether this editable field is visible or not.
             * @return {boolean} True if visible.
             */
            isVisible(): boolean;
    
            /**
             * Sets whether this editable field is visible or not.
             * @param {boolean} visible True if visible.
             */
            setVisible(visible: boolean): void;
    
            /**
             * Sets a new change handler for editable fields.
             * @param {Function} handler New change handler, or null.
             */
            setChangeHandler(handler: Function): void;
    
            /**
             * Gets the group element for this editable field.
             * Used for measuring the size and for positioning.
             * @return {!Element} The group element.
             */
            getSvgRoot(): Element;
    
            /**
             * Returns the height and width of the field.
             * @return {!goog.math.Size} Height and width.
             */
            getSize(): goog.math.Size;
    
            /**
             * Get the text from this field.
             * @return {string} Current text.
             */
            getText(): string;
    
            /**
             * Set the text in this field.  Trigger a rerender of the source block.
             * @param {*} text New text.
             */
            setText(text: any): void;
    
            /**
             * By default there is no difference between the human-readable text and
             * the language-neutral values.  Subclasses (such as dropdown) may define this.
             * @return {string} Current text.
             */
            getValue(): string;
    
            /**
             * By default there is no difference between the human-readable text and
             * the language-neutral values.  Subclasses (such as dropdown) may define this.
             * @param {string} text New text.
             */
            setValue(text: string): void;
    
            /**
             * Change the tooltip text for this field.
             * @param {string|!Element} newTip Text for tooltip or a parent element to
             *     link to for its tooltip.
             */
            setTooltip(newTip: string): void;
            /**
             * Change the tooltip text for this field.
             * @param {string|!Element} newTip Text for tooltip or a parent element to
             *     link to for its tooltip.
             */
            setTooltip(newTip: Element): void;
    } 
    class Field extends Field__Class { }
    module Field { }
    
}

declare module Blockly.Field {

    /**
     * Non-breaking space.
     */
    var NBSP: any /*missing*/;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldAngle__Class extends Blockly.FieldTextInput__Class  { 
    
            /**
             * Class for an editable angle field.
             * @param {string} text The initial content of the field.
             * @param {Function=} opt_changeHandler An optional function that is called
             *     to validate any constraints on what the user entered.  Takes the new
             *     text as an argument and returns the accepted text or null to abort
             *     the change.
             * @extends {Blockly.FieldTextInput}
             * @constructor
             */
            constructor(text: string, opt_changeHandler?: Function);
    
            /**
             * Sets a new change handler for angle field.
             * @param {Function} handler New change handler, or null.
             */
            setChangeHandler(handler: Function): void;
    
            /**
             * Clone this FieldAngle.
             * @return {!Blockly.FieldAngle} The result of calling the constructor again
             *   with the current values of the arguments used during construction.
             */
            clone(): Blockly.FieldAngle;
    
            /**
             * Set the angle to match the mouse's position.
             * @param {!Event} e Mouse move event.
             */
            onMouseMove(e: Event): void;
    
            /**
             * Insert a degree symbol.
             * @param {?string} text New text.
             */
            setText(text: string): void;
    } 
    class FieldAngle extends FieldAngle__Class { }
    module FieldAngle { }
    
}

declare module Blockly.FieldAngle {

    /**
     * Round angles to the nearest 15 degrees when using mouse.
     * Set to 0 to disable rounding.
     */
    var ROUND: any /*missing*/;

    /**
     * Half the width of protractor image.
     */
    var HALF: any /*missing*/;

    /**
     * Radius of protractor circle.  Slightly smaller than protractor size since
     * otherwise SVG crops off half the border at the edges.
     */
    var RADIUS: any /*missing*/;

    /**
     * Ensure that only an angle may be entered.
     * @param {string} text The user's text.
     * @return {?string} A string representing a valid angle, or null if invalid.
     */
    function angleValidator(text: string): string;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldCheckbox__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for a checkbox field.
             * @param {string} state The initial state of the field ('TRUE' or 'FALSE').
             * @param {Function=} opt_changeHandler A function that is executed when a new
             *     option is selected.  Its sole argument is the new checkbox state.  If
             *     it returns a value, this becomes the new checkbox state, unless the
             *     value is null, in which case the change is aborted.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(state: string, opt_changeHandler?: Function);
    
            /**
             * Clone this FieldCheckbox.
             * @return {!Blockly.FieldCheckbox} The result of calling the constructor again
             *   with the current values of the arguments used during construction.
             */
            clone(): Blockly.FieldCheckbox;
    
            /**
             * Mouse cursor style when over the hotspot that initiates editability.
             */
            CURSOR: any /*missing*/;
    
            /**
             * Install this checkbox on a block.
             * @param {!Blockly.Block} block The block containing this text.
             */
            init(block: Blockly.Block): void;
    
            /**
             * Return 'TRUE' if the checkbox is checked, 'FALSE' otherwise.
             * @return {string} Current state.
             */
            getValue(): string;
    
            /**
             * Set the checkbox to be checked if strBool is 'TRUE', unchecks otherwise.
             * @param {string} strBool New state.
             */
            setValue(strBool: string): void;
    } 
    class FieldCheckbox extends FieldCheckbox__Class { }
    module FieldCheckbox { }
    
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldColour__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for a colour input field.
             * @param {string} colour The initial colour in '#rrggbb' format.
             * @param {Function=} opt_changeHandler A function that is executed when a new
             *     colour is selected.  Its sole argument is the new colour value.  Its
             *     return value becomes the selected colour, unless it is undefined, in
             *     which case the new colour stands, or it is null, in which case the change
             *     is aborted.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(colour: string, opt_changeHandler?: Function);
    
            /**
             * Install this field on a block.
             * @param {!Blockly.Block} block The block containing this field.
             */
            init(block: Blockly.Block): void;
    
            /**
             * Clone this FieldColour.
             * @return {!Blockly.FieldColour} The result of calling the constructor again
             *   with the current values of the arguments used during construction.
             */
            clone(): Blockly.FieldColour;
    
            /**
             * Mouse cursor style when over the hotspot that initiates the editor.
             */
            CURSOR: any /*missing*/;
    
            /**
             * Close the colour picker if this input is being deleted.
             */
            dispose(): void;
    
            /**
             * Return the current colour.
             * @return {string} Current colour in '#rrggbb' format.
             */
            getValue(): string;
    
            /**
             * Set the colour.
             * @param {string} colour The new colour in '#rrggbb' format.
             */
            setValue(colour: string): void;
    
            /**
             * Get the text from this field.  Used when the block is collapsed.
             * @return {string} Current text.
             */
            getText(): string;
    
            /**
             * Set a custom colour grid for this field.
             * @param {Array.<string>} colours Array of colours for this block,
             *     or null to use default (Blockly.FieldColour.COLOURS).
             * @return {!Blockly.FieldColour} Returns itself (for method chaining).
             */
            setColours(colours: string[]): Blockly.FieldColour;
    
            /**
             * Set a custom grid size for this field.
             * @param {number} columns Number of columns for this block,
             *     or 0 to use default (Blockly.FieldColour.COLUMNS).
             * @return {!Blockly.FieldColour} Returns itself (for method chaining).
             */
            setColumns(columns: number): Blockly.FieldColour;
    } 
    class FieldColour extends FieldColour__Class { }
    module FieldColour { }
    
}

declare module Blockly.FieldColour {

    /**
     * An array of colour strings for the palette.
     * See bottom of this page for the default:
     * http://docs.closure-library.googlecode.com/git/closure_goog_ui_colorpicker.js.source.html
     * @type {!Array.<string>}
     */
    var COLOURS: string[];

    /**
     * Number of columns in the palette.
     */
    var COLUMNS: any /*missing*/;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldDate__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for a date input field.
             * @param {string} date The initial date.
             * @param {Function=} opt_changeHandler A function that is executed when a new
             *     date is selected.  Its sole argument is the new date value.  Its
             *     return value becomes the selected date, unless it is undefined, in
             *     which case the new date stands, or it is null, in which case the change
             *     is aborted.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(date: string, opt_changeHandler?: Function);
    
            /**
             * Clone this FieldDate.
             * @return {!Blockly.FieldDate} The result of calling the constructor again
             *   with the current values of the arguments used during construction.
             */
            clone(): Blockly.FieldDate;
    
            /**
             * Mouse cursor style when over the hotspot that initiates the editor.
             */
            CURSOR: any /*missing*/;
    
            /**
             * Close the colour picker if this input is being deleted.
             */
            dispose(): void;
    
            /**
             * Return the current date.
             * @return {string} Current date.
             */
            getValue(): string;
    
            /**
             * Set the date.
             * @param {string} date The new date.
             */
            setValue(date: string): void;
    } 
    class FieldDate extends FieldDate__Class { }
    module FieldDate { }
    
}

declare module Blockly.FieldDate {

    /**
     * CSS for date picker.  See css.js for use.
     */
    var CSS: any /*missing*/;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldDropdown__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for an editable dropdown field.
             * @param {(!Array.<!Array.<string>>|!Function)} menuGenerator An array of options
             *     for a dropdown list, or a function which generates these options.
             * @param {Function=} opt_changeHandler A function that is executed when a new
             *     option is selected, with the newly selected value as its sole argument.
             *     If it returns a value, that value (which must be one of the options) will
             *     become selected in place of the newly selected option, unless the return
             *     value is null, in which case the change is aborted.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(menuGenerator: string[][], opt_changeHandler?: Function);
            /**
             * Class for an editable dropdown field.
             * @param {(!Array.<!Array.<string>>|!Function)} menuGenerator An array of options
             *     for a dropdown list, or a function which generates these options.
             * @param {Function=} opt_changeHandler A function that is executed when a new
             *     option is selected, with the newly selected value as its sole argument.
             *     If it returns a value, that value (which must be one of the options) will
             *     become selected in place of the newly selected option, unless the return
             *     value is null, in which case the change is aborted.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(menuGenerator: Function, opt_changeHandler?: Function);
    
            /**
             * Clone this FieldDropdown.
             * @return {!Blockly.FieldDropdown} The result of calling the constructor again
             *   with the current values of the arguments used during construction.
             */
            clone(): Blockly.FieldDropdown;
    
            /**
             * Mouse cursor style when over the hotspot that initiates the editor.
             */
            CURSOR: any /*missing*/;
    
            /**
             * Install this dropdown on a block.
             * @param {!Blockly.Block} block The block containing this text.
             */
            init(block: Blockly.Block): void;
    
            /**
             * Get the language-neutral value from this dropdown menu.
             * @return {string} Current text.
             */
            getValue(): string;
    
            /**
             * Set the language-neutral value for this dropdown menu.
             * @param {string} newValue New value to set.
             */
            setValue(newValue: string): void;
    
            /**
             * Set the text in this field.  Trigger a rerender of the source block.
             * @param {?string} text New text.
             */
            setText(text: string): void;
    
            /**
             * Close the dropdown menu if this input is being deleted.
             */
            dispose(): void;
    } 
    class FieldDropdown extends FieldDropdown__Class { }
    module FieldDropdown { }
    
}

declare module Blockly.FieldDropdown {

    /**
     * Horizontal distance that a checkmark ovehangs the dropdown.
     */
    var CHECKMARK_OVERHANG: any /*missing*/;

    /**
     * Android can't (in 2014) display "▾", so use "▼" instead.
     */
    var ARROW_CHAR: any /*missing*/;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldImage__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for an image.
             * @param {string} src The URL of the image.
             * @param {number} width Width of the image.
             * @param {number} height Height of the image.
             * @param {string=} opt_alt Optional alt text for when block is collapsed.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(src: string, width: number, height: number, opt_alt?: string);
    
            /**
             * Clone this FieldImage.
             * @return {!Blockly.FieldImage} The result of calling the constructor again
             *   with the current values of the arguments used during construction.
             */
            clone(): Blockly.FieldImage;
    
            /**
             * Editable fields are saved by the XML renderer, non-editable fields are not.
             */
            EDITABLE: any /*missing*/;
    
            /**
             * Install this image on a block.
             * @param {!Blockly.Block} block The block containing this text.
             */
            init(block: Blockly.Block): void;
    
            /**
             * Dispose of all DOM objects belonging to this text.
             */
            dispose(): void;
    
            /**
             * Change the tooltip text for this field.
             * @param {string|!Element} newTip Text for tooltip or a parent element to
             *     link to for its tooltip.
             */
            setTooltip(newTip: string): void;
            /**
             * Change the tooltip text for this field.
             * @param {string|!Element} newTip Text for tooltip or a parent element to
             *     link to for its tooltip.
             */
            setTooltip(newTip: Element): void;
    } 
    class FieldImage extends FieldImage__Class { }
    module FieldImage { }
    
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldLabel__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for a non-editable field.
             * @param {string} text The initial content of the field.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(text: string);
    
            /**
             * Clone this FieldLabel.
             * @return {!Blockly.FieldLabel} The result of calling the constructor again
             *   with the current values of the arguments used during construction.
             */
            clone(): Blockly.FieldLabel;
    
            /**
             * Editable fields are saved by the XML renderer, non-editable fields are not.
             */
            EDITABLE: any /*missing*/;
    
            /**
             * Install this text on a block.
             * @param {!Blockly.Block} block The block containing this text.
             */
            init(block: Blockly.Block): void;
    
            /**
             * Dispose of all DOM objects belonging to this text.
             */
            dispose(): void;
    
            /**
             * Gets the group element for this field.
             * Used for measuring the size and for positioning.
             * @return {!Element} The group element.
             */
            getSvgRoot(): Element;
    
            /**
             * Change the tooltip text for this field.
             * @param {string|!Element} newTip Text for tooltip or a parent element to
             *     link to for its tooltip.
             */
            setTooltip(newTip: string): void;
            /**
             * Change the tooltip text for this field.
             * @param {string|!Element} newTip Text for tooltip or a parent element to
             *     link to for its tooltip.
             */
            setTooltip(newTip: Element): void;
    } 
    class FieldLabel extends FieldLabel__Class { }
    module FieldLabel { }
    
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldTextInput__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for an editable text field.
             * @param {string} text The initial content of the field.
             * @param {Function=} opt_changeHandler An optional function that is called
             *     to validate any constraints on what the user entered.  Takes the new
             *     text as an argument and returns either the accepted text, a replacement
             *     text, or null to abort the change.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(text: string, opt_changeHandler?: Function);
    
            /**
             * Clone this FieldTextInput.
             * @return {!Blockly.FieldTextInput} The result of calling the constructor again
             *   with the current values of the arguments used during construction.
             */
            clone(): Blockly.FieldTextInput;
    
            /**
             * Mouse cursor style when over the hotspot that initiates the editor.
             */
            CURSOR: any /*missing*/;
    
            /**
             * Close the input widget if this input is being deleted.
             */
            dispose(): void;
    
            /**
             * Set whether this field is spellchecked by the browser.
             * @param {boolean} check True if checked.
             */
            setSpellcheck(check: boolean): void;
    } 
    class FieldTextInput extends FieldTextInput__Class { }
    module FieldTextInput { }
    
}

declare module Blockly.FieldTextInput {

    /**
     * Ensure that only a number may be entered.
     * @param {string} text The user's text.
     * @return {?string} A string representing a valid number, or null if invalid.
     */
    function numberValidator(text: string): string;

    /**
     * Ensure that only a nonnegative integer may be entered.
     * @param {string} text The user's text.
     * @return {?string} A string representing a valid int, or null if invalid.
     */
    function nonnegativeIntegerValidator(text: string): string;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldVariable__Class extends Blockly.FieldDropdown__Class  { 
    
            /**
             * Class for a variable's dropdown field.
             * @param {?string} varname The default name for the variable.  If null,
             *     a unique variable name will be generated.
             * @param {Function=} opt_changeHandler A function that is executed when a new
             *     option is selected.  Its sole argument is the new option value.
             * @extends {Blockly.FieldDropdown}
             * @constructor
             */
            constructor(varname: string, opt_changeHandler?: Function);
    
            /**
             * Sets a new change handler for angle field.
             * @param {Function} handler New change handler, or null.
             */
            setChangeHandler(handler: Function): void;
    
            /**
             * Install this dropdown on a block.
             * @param {!Blockly.Block} block The block containing this text.
             */
            init(block: Blockly.Block): void;
    
            /**
             * Clone this FieldVariable.
             * @return {!Blockly.FieldVariable} The result of calling the constructor again
             *   with the current values of the arguments used during construction.
             */
            clone(): Blockly.FieldVariable;
    
            /**
             * Get the variable's name (use a variableDB to convert into a real name).
             * Unline a regular dropdown, variables are literal and have no neutral value.
             * @return {string} Current text.
             */
            getValue(): string;
    
            /**
             * Set the variable name.
             * @param {string} text New text.
             */
            setValue(text: string): void;
    } 
    class FieldVariable extends FieldVariable__Class { }
    module FieldVariable { }
    
}

declare module Blockly.FieldVariable {

    /**
     * Return a sorted list of variable names for variable dropdown menus.
     * Include a special option at the end for creating a new variable name.
     * @return {!Array.<string>} Array of variable names.
     * @this {!Blockly.FieldVariable}
     */
    function dropdownCreate(): string[];

    /**
     * Event handler for a change in variable name.
     * Special case the 'New variable...' and 'Rename variable...' options.
     * In both of these special cases, prompt the user for a new name.
     * @param {string} text The selected dropdown menu option.
     * @return {null|undefined|string} An acceptable new variable name, or null if
     *     change is to be either aborted (cancel button) or has been already
     *     handled (rename), or undefined if an existing variable was chosen.
     * @this {!Blockly.FieldVariable}
     */
    function dropdownChange(text: string): any /*any (null)|any (undefined)|string*/;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Flyout__Class  { 
    
            /**
             * Class for a flyout.
             * @param {!Object} workspaceOptions Dictionary of options for the workspace.
             * @constructor
             */
            constructor(workspaceOptions: Object);
    
            /**
             * Is RTL vs LTR.
             * @type {boolean}
             */
            RTL: boolean;
    
            /**
             * Does the flyout automatically close when a block is created?
             * @type {boolean}
             */
            autoClose: boolean;
    
            /**
             * Corner radius of the flyout background.
             * @type {number}
             * @const
             */
            CORNER_RADIUS: number;
    
            /**
             * Creates the flyout's DOM.  Only needs to be called once.
             * @return {!Element} The flyout's SVG group.
             */
            createDom(): Element;
    
            /**
             * Initializes the flyout.
             * @param {!Blockly.Workspace} workspace The workspace in which to create new
             *     blocks.
             */
            init(workspace: Blockly.Workspace): void;
    
            /**
             * Dispose of this flyout.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Move the toolbox to the edge of the workspace.
             */
            position(): void;
    
            /**
             * Scroll the flyout to the top.
             */
            scrollToTop(): void;
    
            /**
             * Is the flyout visible?
             * @return {boolean} True if visible.
             */
            isVisible(): boolean;
    
            /**
             * Hide and empty the flyout.
             */
            hide(): void;
    
            /**
             * Show and populate the flyout.
             * @param {!Array|string} xmlList List of blocks to show.
             *     Variables and procedures have a custom set of blocks.
             */
            show(xmlList: any[]): void;
            /**
             * Show and populate the flyout.
             * @param {!Array|string} xmlList List of blocks to show.
             *     Variables and procedures have a custom set of blocks.
             */
            show(xmlList: string): void;
    
            /**
             * Compute width of flyout.  Position button under each block.
             * For RTL: Lay out the blocks right-aligned.
             */
            reflow(): void;
    
            /**
             * Return the deletion rectangle for this flyout.
             * @return {goog.math.Rect} Rectangle in which to delete.
             */
            getRect(): goog.math.Rect;
    } 
    class Flyout extends Flyout__Class { }
    module Flyout { }
    
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Generator__Class  { 
    
            /**
             * Class for a code generator that translates the blocks into a language.
             * @param {string} name Language name of this generator.
             * @constructor
             */
            constructor(name: string);
    
            /**
             * Arbitrary code to inject into locations that risk causing infinite loops.
             * Any instances of '%1' will be replaced by the block ID that failed.
             * E.g. '  checkTimeout(%1);\n'
             * @type {?string}
             */
            INFINITE_LOOP_TRAP: string;
    
            /**
             * Arbitrary code to inject before every statement.
             * Any instances of '%1' will be replaced by the block ID of the statement.
             * E.g. 'highlight(%1);\n'
             * @type {?string}
             */
            STATEMENT_PREFIX: string;
    
            /**
             * Generate code for all blocks in the workspace to the specified language.
             * @param {Blockly.Workspace} workspace Workspace to generate code from.
             * @return {string} Generated code.
             */
            workspaceToCode(workspace: Blockly.Workspace): string;
    
            /**
             * Prepend a common prefix onto each line of code.
             * @param {string} text The lines of code.
             * @param {string} prefix The common prefix.
             * @return {string} The prefixed lines of code.
             */
            prefixLines(text: string, prefix: string): string;
    
            /**
             * Recursively spider a tree of blocks, returning all their comments.
             * @param {!Blockly.Block} block The block from which to start spidering.
             * @return {string} Concatenated list of comments.
             */
            allNestedComments(block: Blockly.Block): string;
    
            /**
             * Generate code for the specified block (and attached blocks).
             * @param {Blockly.Block} block The block to generate code for.
             * @return {string|!Array} For statement blocks, the generated code.
             *     For value blocks, an array containing the generated code and an
             *     operator order value.  Returns '' if block is null.
             */
            blockToCode(block: Blockly.Block): any /*string|any[]*/;
    
            /**
             * Generate code representing the specified value input.
             * @param {!Blockly.Block} block The block containing the input.
             * @param {string} name The name of the input.
             * @param {number} order The maximum binding strength (minimum order value)
             *     of any operators adjacent to "block".
             * @return {string} Generated code or '' if no blocks are connected or the
             *     specified input does not exist.
             */
            valueToCode(block: Blockly.Block, name: string, order: number): string;
    
            /**
             * Generate code representing the statement.  Indent the code.
             * @param {!Blockly.Block} block The block containing the input.
             * @param {string} name The name of the input.
             * @return {string} Generated code or '' if no blocks are connected.
             */
            statementToCode(block: Blockly.Block, name: string): string;
    
            /**
             * Add an infinite loop trap to the contents of a loop.
             * If loop is empty, add a statment prefix for the loop block.
             * @param {string} branch Code for loop contents.
             * @param {string} id ID of enclosing block.
             * @return {string} Loop contents, with infinite loop trap added.
             */
            addLoopTrap(branch: string, id: string): string;
    
            /**
             * The method of indenting.  Defaults to two spaces, but language generators
             * may override this to increase indent or change to tabs.
             */
            INDENT: any /*missing*/;
    
            /**
             * Add one or more words to the list of reserved words for this language.
             * @param {string} words Comma-separated list of words to add to the list.
             *     No spaces.  Duplicates are ok.
             */
            addReservedWords(words: string): void;
    } 
    class Generator extends Generator__Class { }
    module Generator { }
    
}

declare module Blockly.Generator {

    /**
     * Category to separate generated function names from variables and procedures.
     */
    var NAME_TYPE: any /*missing*/;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Icon__Class  { 
    
            /**
             * Class for an icon.
             * @param {Blockly.Block} block The block associated with this icon.
             * @constructor
             */
            constructor(block: Blockly.Block);
    
            /**
             * Height and width of icons.
             */
            SIZE: any /*missing*/;
    
            /**
             * Create the icon on the block.
             */
            createIcon(): void;
    
            /**
             * Dispose of this icon.
             */
            dispose(): void;
    
            /**
             * Add or remove the UI indicating if this icon may be clicked or not.
             */
            updateEditable(): void;
    
            /**
             * Is the associated bubble visible?
             * @return {boolean} True if the bubble is visible.
             */
            isVisible(): boolean;
    
            /**
             * Change the colour of the associated bubble to match its block.
             */
            updateColour(): void;
    
            /**
             * Render the icon.
             * @param {number} cursorX Horizontal offset at which to position the icon.
             * @return {number} Horizontal offset for next item to draw.
             */
            renderIcon(cursorX: number): number;
    
            /**
             * Notification that the icon has moved.  Update the arrow accordingly.
             * @param {number} x Absolute horizontal location.
             * @param {number} y Absolute vertical location.
             */
            setIconLocation(x: number, y: number): void;
    
            /**
             * Notification that the icon has moved, but we don't really know where.
             * Recompute the icon's location from scratch.
             */
            computeIconLocation(): void;
    
            /**
             * Returns the center of the block's icon relative to the surface.
             * @return {!Object} Object with x and y properties.
             */
            getIconLocation(): Object;
    } 
    class Icon extends Icon__Class { }
    module Icon { }
    
}

declare module Blockly {

    /**
     * Inject a Blockly editor into the specified container element (usually a div).
     * @param {!Element|string} container Containing element or its ID.
     * @param {Object=} opt_options Optional dictionary of options.
     * @return {!Blockly.Workspace} Newly created main workspace.
     */
    function inject(container: Element, opt_options?: Object): Blockly.Workspace;
    /**
     * Inject a Blockly editor into the specified container element (usually a div).
     * @param {!Element|string} container Containing element or its ID.
     * @param {Object=} opt_options Optional dictionary of options.
     * @return {!Blockly.Workspace} Newly created main workspace.
     */
    function inject(container: string, opt_options?: Object): Blockly.Workspace;

    /**
     * Modify the block tree on the existing toolbox.
     * @param {Node|string} tree DOM tree of blocks, or text representation of same.
     */
    function updateToolbox(tree: Node): void;
    /**
     * Modify the block tree on the existing toolbox.
     * @param {Node|string} tree DOM tree of blocks, or text representation of same.
     */
    function updateToolbox(tree: string): void;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Input__Class  { 
    
            /**
             * Class for an input with an optional field.
             * @param {number} type The type of the input.
             * @param {string} name Language-neutral identifier which may used to find this
             *     input again.
             * @param {!Blockly.Block} block The block containing this input.
             * @param {Blockly.Connection} connection Optional connection for this input.
             * @constructor
             */
            constructor(type: number, name: string, block: Blockly.Block, connection: Blockly.Connection);
    
            /** @type {number} */
            type: number;
    
            /** @type {string} */
            name: string;
    
            /** @type {!Blockly.Block} */
            sourceBlock_: Blockly.Block;
    
            /** @type {Blockly.Connection} */
            connection: Blockly.Connection;
    
            /** @type {!Array.<!Blockly.Field>} */
            fieldRow: Blockly.Field[];
    
            /** @type {number} */
            align: number;
    
            /** @type {boolean} */
            visible_: boolean;
    
            /**
             * Add an item to the end of the input's field row.
             * @param {string|!Blockly.Field} field Something to add as a field.
             * @param {string=} opt_name Language-neutral identifier which may used to find
             *     this field again.  Should be unique to the host block.
             * @return {!Blockly.Input} The input being append to (to allow chaining).
             */
            appendField(field: string, opt_name?: string): Blockly.Input;
            /**
             * Add an item to the end of the input's field row.
             * @param {string|!Blockly.Field} field Something to add as a field.
             * @param {string=} opt_name Language-neutral identifier which may used to find
             *     this field again.  Should be unique to the host block.
             * @return {!Blockly.Input} The input being append to (to allow chaining).
             */
            appendField(field: Blockly.Field, opt_name?: string): Blockly.Input;
    
            /**
             * Add an item to the end of the input's field row.
             * @param {*} field Something to add as a field.
             * @param {string=} opt_name Language-neutral identifier which may used to find
             *     this field again.  Should be unique to the host block.
             * @return {!Blockly.Input} The input being append to (to allow chaining).
             * @deprecated December 2013
             */
            appendTitle(field: any, opt_name?: string): Blockly.Input;
    
            /**
             * Remove a field from this input.
             * @param {string} name The name of the field.
             * @throws {goog.asserts.AssertionError} if the field is not present.
             */
            removeField(name: string): void;
    
            /**
             * Gets whether this input is visible or not.
             * @return {boolean} True if visible.
             */
            isVisible(): boolean;
    
            /**
             * Sets whether this input is visible or not.
             * Used to collapse/uncollapse a block.
             * @param {boolean} visible True if visible.
             * @return {!Array.<!Blockly.Block>} List of blocks to render.
             */
            setVisible(visible: boolean): Blockly.Block[];
    
            /**
             * Change a connection's compatibility.
             * @param {string|Array.<string>|null} check Compatible value type or
             *     list of value types.  Null if all types are compatible.
             * @return {!Blockly.Input} The input being modified (to allow chaining).
             */
            setCheck(check: string): Blockly.Input;
            /**
             * Change a connection's compatibility.
             * @param {string|Array.<string>|null} check Compatible value type or
             *     list of value types.  Null if all types are compatible.
             * @return {!Blockly.Input} The input being modified (to allow chaining).
             */
            setCheck(check: string[]): Blockly.Input;
            /**
             * Change a connection's compatibility.
             * @param {string|Array.<string>|null} check Compatible value type or
             *     list of value types.  Null if all types are compatible.
             * @return {!Blockly.Input} The input being modified (to allow chaining).
             */
            setCheck(check: any /*null*/): Blockly.Input;
    
            /**
             * Change the alignment of the connection's field(s).
             * @param {number} align One of Blockly.ALIGN_LEFT, ALIGN_CENTRE, ALIGN_RIGHT.
             *   In RTL mode directions are reversed, and ALIGN_RIGHT aligns to the left.
             * @return {!Blockly.Input} The input being modified (to allow chaining).
             */
            setAlign(align: number): Blockly.Input;
    
            /**
             * Initialize the fields on this input.
             */
            init(): void;
    
            /**
             * Sever all links to this input.
             */
            dispose(): void;
    } 
    class Input extends Input__Class { }
    module Input { }
    
}

declare module goog {

    /**
     * Back up original getMsg function.
     * @type {!Function}
     */
    var getMsgOrig: Function;

    /**
     * Gets a localized message.
     * Overrides the default Closure function to check for a Blockly.Msg first.
     * Used infrequently, only known case is TODAY button in date picker.
     * @param {string} str Translatable string, places holders in the form {$foo}.
     * @param {Object<string, string>=} opt_values Maps place holder name to value.
     * @return {string} message with placeholders filled.
     * @suppress {duplicate}
     */
    function getMsg(str: string, opt_values?: { [key: string]: string }): string;
}

declare module goog.getMsg {

    /**
     * Mapping of Closure messages to Blockly.Msg names.
     */
    var blocklyMsgMap: any /*missing*/;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Mutator__Class extends Blockly.Icon__Class  { 
    
            /**
             * Class for a mutator dialog.
             * @param {!Array.<string>} quarkNames List of names of sub-blocks for flyout.
             * @extends {Blockly.Icon}
             * @constructor
             */
            constructor(quarkNames: string[]);
    
            /**
             * Add or remove the UI indicating if this icon may be clicked or not.
             */
            updateEditable(): void;
    
            /**
             * Show or hide the mutator bubble.
             * @param {boolean} visible True if the bubble should be visible.
             */
            setVisible(visible: boolean): void;
    
            /**
             * Dispose of this mutator.
             */
            dispose(): void;
    } 
    class Mutator extends Mutator__Class { }
    module Mutator { }
    
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Names__Class  { 
    
            /**
             * Class for a database of entity names (variables, functions, etc).
             * @param {string} reservedWords A comma-separated string of words that are
             *     illegal for use as names in a language (e.g. 'new,if,this,...').
             * @param {string=} opt_variablePrefix Some languages need a '$' or a namespace
             *     before all variable names.
             * @constructor
             */
            constructor(reservedWords: string, opt_variablePrefix?: string);
    
            /**
             * Empty the database and start from scratch.  The reserved words are kept.
             */
            reset(): void;
    
            /**
             * Convert a Blockly entity name to a legal exportable entity name.
             * @param {string} name The Blockly entity name (no constraints).
             * @param {string} type The type of entity in Blockly
             *     ('VARIABLE', 'PROCEDURE', 'BUILTIN', etc...).
             * @return {string} An entity name legal for the exported language.
             */
            getName(name: string, type: string): string;
    
            /**
             * Convert a Blockly entity name to a legal exportable entity name.
             * Ensure that this is a new name not overlapping any previously defined name.
             * Also check against list of reserved words for the current language and
             * ensure name doesn't collide.
             * @param {string} name The Blockly entity name (no constraints).
             * @param {string} type The type of entity in Blockly
             *     ('VARIABLE', 'PROCEDURE', 'BUILTIN', etc...).
             * @return {string} An entity name legal for the exported language.
             */
            getDistinctName(name: string, type: string): string;
    } 
    class Names extends Names__Class { }
    module Names { }
    
}

declare module Blockly.Names {

    /**
     * Do the given two entity names refer to the same entity?
     * Blockly names are case-insensitive.
     * @param {string} name1 First name.
     * @param {string} name2 Second name.
     * @return {boolean} True if names are the same.
     */
    function equals(name1: string, name2: string): boolean;
}

declare module Blockly.Procedures {

    /**
     * Category to separate procedure names from variables and generated functions.
     */
    var NAME_TYPE: any /*missing*/;

    /**
     * Find all user-created procedure definitions in a workspace.
     * @param {!Blockly.Workspace} root Root workspace.
     * @return {!Array.<!Array.<!Array>>} Pair of arrays, the
     *     first contains procedures without return variables, the second with.
     *     Each procedure is defined by a three-element list of name, parameter
     *     list, and return value boolean.
     */
    function allProcedures(root: Blockly.Workspace): any[][][];

    /**
     * Ensure two identically-named procedures don't exist.
     * @param {string} name Proposed procedure name.
     * @param {!Blockly.Block} block Block to disambiguate.
     * @return {string} Non-colliding name.
     */
    function findLegalName(name: string, block: Blockly.Block): string;

    /**
     * Does this procedure have a legal name?  Illegal names include names of
     * procedures already defined.
     * @param {string} name The questionable name.
     * @param {!Blockly.Workspace} workspace The workspace to scan for collisions.
     * @param {Blockly.Block=} opt_exclude Optional block to exclude from
     *     comparisons (one doesn't want to collide with oneself).
     * @return {boolean} True if the name is legal.
     */
    function isLegalName(name: string, workspace: Blockly.Workspace, opt_exclude?: Blockly.Block): boolean;

    /**
     * Rename a procedure.  Called by the editable field.
     * @param {string} text The proposed new name.
     * @return {string} The accepted name.
     * @this {!Blockly.Field}
     */
    function rename(text: string): string;

    /**
     * Construct the blocks required by the flyout for the procedure category.
     * @param {!Array.<!Blockly.Block>} blocks List of blocks to show.
     * @param {!Array.<number>} gaps List of widths between blocks.
     * @param {number} margin Standard margin width for calculating gaps.
     * @param {!Blockly.Workspace} workspace The flyout's workspace.
     */
    function flyoutCategory(blocks: Blockly.Block[], gaps: number[], margin: number, workspace: Blockly.Workspace): void;

    /**
     * Find all the callers of a named procedure.
     * @param {string} name Name of procedure.
     * @param {!Blockly.Workspace} workspace The workspace to find callers in.
     * @return {!Array.<!Blockly.Block>} Array of caller blocks.
     */
    function getCallers(name: string, workspace: Blockly.Workspace): Blockly.Block[];

    /**
     * When a procedure definition is disposed of, find and dispose of all its
     *     callers.
     * @param {string} name Name of deleted procedure definition.
     * @param {!Blockly.Workspace} workspace The workspace to delete callers from.
     */
    function disposeCallers(name: string, workspace: Blockly.Workspace): void;

    /**
     * When a procedure definition changes its parameters, find and edit all its
     * callers.
     * @param {string} name Name of edited procedure definition.
     * @param {!Blockly.Workspace} workspace The workspace to delete callers from.
     * @param {!Array.<string>} paramNames Array of new parameter names.
     * @param {!Array.<string>} paramIds Array of unique parameter IDs.
     */
    function mutateCallers(name: string, workspace: Blockly.Workspace, paramNames: string[], paramIds: string[]): void;

    /**
     * Find the definition block for the named procedure.
     * @param {string} name Name of procedure.
     * @param {!Blockly.Workspace} workspace The workspace to search.
     * @return {Blockly.Block} The procedure definition block, or null not found.
     */
    function getDefinition(name: string, workspace: Blockly.Workspace): Blockly.Block;
}

declare module Blockly.Realtime {

    /**
     * Are currently syncing from another instance of this realtime doc.
     * @type {boolean}
     */
    var withinSync: boolean;

    /**
     * Returns whether realtime collaboration is enabled.
     * @return {boolean}
     */
    function isEnabled(): boolean;

    /**
     * Delete a block from the realtime blocks map.
     * @param {!Blockly.Block} block The block to remove.
     */
    function removeBlock(block: Blockly.Block): void;

    /**
     * Add to the list of top-level blocks.
     * @param {!Blockly.Block} block The block to add.
     */
    function addTopBlock(block: Blockly.Block): void;

    /**
     * Delete a block from the list of top-level blocks.
     * @param {!Blockly.Block} block The block to remove.
     */
    function removeTopBlock(block: Blockly.Block): void;

    /**
     * Obtain a newly created block known by the Realtime API.
     * @param {!Blockly.Workspace} workspace The workspace to put the block in.
     * @param {string} prototypeName The name of the prototype for the block.
     * @return {!Blockly.Block}
     */
    function obtainBlock(workspace: Blockly.Workspace, prototypeName: string): Blockly.Block;

    /**
     * Get an existing block by id.
     * @param {string} id The block's id.
     * @return {Blockly.Block} The found block.
     */
    function getBlockById(id: string): Blockly.Block;

    /**
     * Delete a block.
     * @param {!Blockly.Block} block The block to delete.
     */
    function deleteBlock(block: Blockly.Block): void;

    /**
     * Cause a changed block to update the realtime model, and therefore to be
     * synced with other apps editing this same doc.
     * @param {!Blockly.Block} block The block that changed.
     */
    function blockChanged(block: Blockly.Block): void;

    /**
     * Get the domain (if it exists) associated with a realtime file.  The callback
     * will be called with the domain, if it exists.
     * @param {string} fileId the id of the file
     * @param {function(string)} callback a function to call back with the domain
     */
    function getUserDomain(fileId: string, callback: (_0: string) => any /*missing*/): void;

    /**
     * Setup the Blockly container for realtime authorization and start the
     * Realtime loader.
     * @param {function()} uiInitialize Function to initialize the Blockly UI.
     * @param {!Element} uiContainer Container element for the Blockly UI.
     * @param {!Object} options The realtime options.
     */
    function startRealtime(uiInitialize: () => any /*missing*/, uiContainer: Element, options: Object): void;

    /**
     * Execute a command.  Generally, a command is the result of a user action
     * e.g. a click, drag or context menu selection.
     * @param {function()} cmdThunk A function representing the command execution.
     */
    function doCommand(cmdThunk: () => any /*missing*/): void;

    /**
     * Generate an id that is unique among the all the sessions that ever
     * collaborated on this document.
     * @param {string} extra A string id which is unique within this particular
     * session.
     * @return {string}
     */
    function genUid(extra: string): string;
}

declare module rtclient {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Authorizer__Class  { 
    
            /**
             * Creates a new Authorizer from the options.
             * @constructor
             * @param {!Object} options For authorizer. Two keys are required as mandatory,
             *     these are:
             *
             *    1. "clientId", the Client ID from the console
             *    2. "authButtonElementId", the is of the dom element to use for
             *       authorizing.
             */
            constructor(options: Object);
    
            /**
             * Start the authorization process.
             * @param {Function} onAuthComplete To call once authorization has completed.
             */
            start(onAuthComplete: Function): void;
    
            /**
             * Reauthorize the client with no callback (used for authorization failure).
             * @param {Function} onAuthComplete To call once authorization has completed.
             */
            authorize(onAuthComplete: Function): void;
    
            /**
             * Fetch the user ID using the UserInfo API and save it locally.
             * @param {Function} callback The callback to call after user ID has been
             *     fetched.
             */
            fetchUserId(callback: Function): void;
    } 
    class Authorizer extends Authorizer__Class { }
    module Authorizer { }
    

    /** Fake class which should be extended to avoid inheriting static properties */
    class RealtimeLoader__Class  { 
    
            /**
             * Handles authorizing, parsing query parameters, loading and creating Realtime
             *     documents.
             * @constructor
             * @param {!Object} options Options for loader. Four keys are required as
             *     mandatory, these are:
             *
             *    1. "clientId", the Client ID from the console
             *    2. "initializeModel", the callback to call when the file is loaded.
             *    3. "onFileLoaded", the callback to call when the model is first created.
             *
             * and two keys are optional:
             *
             *    1. "defaultTitle", the title of newly created Realtime files.
             *    2. "defaultFolderTitle", the folder to place in which to place newly
             *       created Realtime files.
             */
            constructor(options: Object);
    
            /**
             * Redirects the browser back to the current page with an appropriate file ID.
             * @param {Array.<string>} fileIds The IDs of the files to open.
             * @param {string} userId The ID of the user.
             */
            redirectTo(fileIds: string[], userId: string): void;
    
            /**
             * Starts the loader by authorizing.
             */
            start(): void;
    
            /**
             * Handles errors thrown by the Realtime API.
             * @param {!Error} e Error.
             */
            handleErrors(e: Error): void;
    
            /**
             * Loads or creates a Realtime file depending on the fileId and state query
             * parameters.
             */
            load(): void;
    
            /**
             * Creates a new file and redirects to the URL to load it.
             */
            createNewFileAndRedirect(): void;
    } 
    class RealtimeLoader extends RealtimeLoader__Class { }
    module RealtimeLoader { }
    

    /**
     * OAuth 2.0 scope for installing Drive Apps.
     * @const
     */
    var INSTALL_SCOPE: any /*missing*/;

    /**
     * OAuth 2.0 scope for opening and creating files.
     * @const
     */
    var FILE_SCOPE: any /*missing*/;

    /**
     * OAuth 2.0 scope for accessing the appdata folder, a hidden folder private
     * to this app.
     * @const
     */
    var APPDATA_SCOPE: any /*missing*/;

    /**
     * OAuth 2.0 scope for accessing the user's ID.
     * @const
     */
    var OPENID_SCOPE: any /*missing*/;

    /**
     * MIME type for newly created Realtime files.
     * @const
     */
    var REALTIME_MIMETYPE: any /*missing*/;

    /**
     * Key used to store the folder id of the Drive folder in which we will store
     * Realtime files.
     * @type {string}
     */
    var FOLDER_KEY: string;

    /**
     * Parses the hash parameters to this page and returns them as an object.
     * @return {!Object} Parameter object.
     */
    function getParams(): Object;

    /**
     * Instance of the query parameters.
     */
    var params: any /*missing*/;

    /**
     * Fetches an option from options or a default value, logging an error if
     *     neither is available.
     * @param {!Object} options Containing options.
     * @param {string} key Option key.
     * @param {*=} opt_defaultValue Default option value (optional).
     * @return {*} Option value.
     */
    function getOption(options: Object, key: string, opt_defaultValue?: any): any;

    /**
     * Creates a new Realtime file.
     * @param {string} title Title of the newly created file.
     * @param {string} mimeType The MIME type of the new file.
     * @param {string} folderTitle Title of the folder to place the file in.
     * @param {Function} callback The callback to call after creation.
     */
    function createRealtimeFile(title: string, mimeType: string, folderTitle: string, callback: Function): void;

    /**
     * Fetches the metadata for a Realtime file.
     * @param {string} fileId The file to load metadata for.
     * @param {Function} callback The callback to be called on completion,
     *     with signature:
     *
     *    function onGetFileMetadata(file) {}
     *
     * where the file parameter is a Google Drive API file resource instance.
     */
    function getFileMetadata(fileId: string, callback: Function): void;

    /**
     * Parses the state parameter passed from the Drive user interface after
     *     Open With operations.
     * @param {string} stateParam The state query parameter as a JSON string.
     * @return {Object} The state query parameter as an object or null if
     *     parsing failed.
     */
    function parseState(stateParam: string): Object;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class ScrollbarPair__Class  { 
    
            /**
             * Class for a pair of scrollbars.  Horizontal and vertical.
             * @param {!Blockly.Workspace} workspace Workspace to bind the scrollbars to.
             * @constructor
             */
            constructor(workspace: Blockly.Workspace);
    
            /**
             * Dispose of this pair of scrollbars.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Recalculate both of the scrollbars' locations and lengths.
             * Also reposition the corner rectangle.
             */
            resize(): void;
    
            /**
             * Set the sliders of both scrollbars to be at a certain position.
             * @param {number} x Horizontal scroll value.
             * @param {number} y Vertical scroll value.
             */
            set(x: number, y: number): void;
    } 
    class ScrollbarPair extends ScrollbarPair__Class { }
    module ScrollbarPair { }
    

    /** Fake class which should be extended to avoid inheriting static properties */
    class Scrollbar__Class  { 
    
            /**
             * Class for a pure SVG scrollbar.
             * This technique offers a scrollbar that is guaranteed to work, but may not
             * look or behave like the system's scrollbars.
             * @param {!Blockly.Workspace} workspace Workspace to bind the scrollbar to.
             * @param {boolean} horizontal True if horizontal, false if vertical.
             * @param {boolean=} opt_pair True if the scrollbar is part of a horiz/vert pair.
             * @constructor
             */
            constructor(workspace: Blockly.Workspace, horizontal: boolean, opt_pair?: boolean);
    
            /**
             * Dispose of this scrollbar.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Recalculate the scrollbar's location and its length.
             * @param {Object=} opt_metrics A data structure of from the describing all the
             * required dimensions.  If not provided, it will be fetched from the host
             * object.
             */
            resize(opt_metrics?: Object): void;
    
            /**
             * Is the scrollbar visible.  Non-paired scrollbars disappear when they aren't
             * needed.
             * @return {boolean} True if visible.
             */
            isVisible(): boolean;
    
            /**
             * Set whether the scrollbar is visible.
             * Only applies to non-paired scrollbars.
             * @param {boolean} visible True if visible.
             */
            setVisible(visible: boolean): void;
    
            /**
             * Set the scrollbar slider's position.
             * @param {number} value The distance from the top/left end of the bar.
             */
            set(value: number): void;
    } 
    class Scrollbar extends Scrollbar__Class { }
    module Scrollbar { }
    
}

declare module Blockly.Scrollbar {

    /**
     * Width of vertical scrollbar or height of horizontal scrollbar.
     * Increase the size of scrollbars on touch devices.
     * Don't define if there is no document object (e.g. node.js).
     */
    var scrollbarThickness: any /*missing*/;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Toolbox__Class  { 
    
            /**
             * Class for a Toolbox.
             * Creates the toolbox's DOM.
             * @param {!Blockly.Workspace} workspace The workspace in which to create new
             *     blocks.
             * @constructor
             */
            constructor(workspace: Blockly.Workspace);
    
            /**
             * Width of the toolbox.
             * @type {number}
             */
            width: number;
    
            /**
             * Initializes the toolbox.
             */
            init(): void;
    
            /**
             * Dispose of this toolbox.
             */
            dispose(): void;
    
            /**
             * Move the toolbox to the edge.
             */
            position(): void;
    
            /**
             * Unhighlight any previously specified option.
             */
            clearSelection(): void;
    
            /**
             * Return the deletion rectangle for this toolbar.
             * @return {goog.math.Rect} Rectangle in which to delete.
             */
            getRect(): goog.math.Rect;
    } 
    class Toolbox extends Toolbox__Class { }
    module Toolbox { }
    
}

declare module Blockly.Toolbox {

    /** Fake class which should be extended to avoid inheriting static properties */
    class TreeControl__Class extends goog.ui.tree.TreeControl__Class  { 
    
            /**
             * Extention of a TreeControl object that uses a custom tree node.
             * @param {Blockly.Toolbox} toolbox The parent toolbox for this tree.
             * @param {Object} config The configuration for the tree. See
             *    goog.ui.tree.TreeControl.DefaultConfig.
             * @constructor
             * @extends {goog.ui.tree.TreeControl}
             */
            constructor(toolbox: Blockly.Toolbox, config: Object);
    } 
    class TreeControl extends TreeControl__Class { }
    module TreeControl { }
    

    /** Fake class which should be extended to avoid inheriting static properties */
    class TreeNode__Class extends goog.ui.tree.TreeNode__Class  { 
    
            /**
             * A single node in the tree, customized for Blockly's UI.
             * @param {Blockly.Toolbox} toolbox The parent toolbox for this tree.
             * @param {!goog.html.SafeHtml} html The HTML content of the node label.
             * @param {Object=} opt_config The configuration for the tree. See
             *    goog.ui.tree.TreeControl.DefaultConfig. If not specified, a default config
             *    will be used.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.tree.TreeNode}
             */
            constructor(toolbox: Blockly.Toolbox, html: goog.html.SafeHtml, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
    } 
    class TreeNode extends TreeNode__Class { }
    module TreeNode { }
    

    /** Fake class which should be extended to avoid inheriting static properties */
    class TreeSeparator__Class extends Blockly.Toolbox.prototype.TreeNode__Class  { 
    
            /**
             * A blank separator node in the tree.
             * @constructor
             * @extends {Blockly.Toolbox.prototype.TreeNode}
             */
            constructor();
    } 
    class TreeSeparator extends TreeSeparator__Class { }
    module TreeSeparator { }
    
}

declare module Blockly.Tooltip {

    /**
     * Is a tooltip currently showing?
     */
    var visible: any /*missing*/;

    /**
     * Maximum width (in characters) of a tooltip.
     */
    var LIMIT: any /*missing*/;

    /**
     * Horizontal offset between mouse cursor and tooltip.
     */
    var OFFSET_X: any /*missing*/;

    /**
     * Vertical offset between mouse cursor and tooltip.
     */
    var OFFSET_Y: any /*missing*/;

    /**
     * Radius mouse can move before killing tooltip.
     */
    var RADIUS_OK: any /*missing*/;

    /**
     * Delay before tooltip appears.
     */
    var HOVER_MS: any /*missing*/;

    /**
     * Horizontal padding between tooltip and screen edge.
     */
    var MARGINS: any /*missing*/;

    /**
     * The HTML container.  Set once by Blockly.Tooltip.createDom.
     * @type {Element}
     */
    var DIV: Element;

    /**
     * Create the tooltip div and inject it onto the page.
     */
    function createDom(): void;

    /**
     * Binds the required mouse events onto an SVG element.
     * @param {!Element} element SVG element onto which tooltip is to be bound.
     */
    function bindMouseEvents(element: Element): void;

    /**
     * Hide the tooltip.
     */
    function hide(): void;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Trashcan__Class  { 
    
            /**
             * Class for a trash can.
             * @param {!Blockly.Workspace} workspace The workspace to sit in.
             * @constructor
             */
            constructor(workspace: Blockly.Workspace);
    
            /**
             * Current open/close state of the lid.
             * @type {boolean}
             */
            isOpen: boolean;
    
            /**
             * Create the trash can elements.
             * @return {!Element} The trash can's SVG group.
             */
            createDom(): Element;
    
            /**
             * Initialize the trash can.
             */
            init(): void;
    
            /**
             * Dispose of this trash can.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Move the trash can to the bottom-right corner.
             */
            position(): void;
    
            /**
             * Return the deletion rectangle for this trash can.
             * @return {goog.math.Rect} Rectangle in which to delete.
             */
            getRect(): goog.math.Rect;
    
            /**
             * Flip the lid shut.
             * Called externally after a drag.
             */
            close(): void;
    } 
    class Trashcan extends Trashcan__Class { }
    module Trashcan { }
    
}

declare module Blockly {

    /**
     * Fire a synthetic event synchronously.
     * @param {!EventTarget} node The event's target node.
     * @param {string} eventName Name of event (e.g. 'click').
     */
    function fireUiEventNow(node: EventTarget, eventName: string): void;

    /**
     * Fire a synthetic event asynchronously.  Groups of simultaneous events (e.g.
     * a tree of blocks being deleted) are merged into one event.
     * @param {!EventTarget} node The event's target node.
     * @param {string} eventName Name of event (e.g. 'click').
     */
    function fireUiEvent(node: EventTarget, eventName: string): void;

    /**
     * Don't do anything for this event, just halt propagation.
     * @param {!Event} e An event.
     */
    function noEvent(e: Event): void;

    /**
     * Helper method for creating SVG elements.
     * @param {string} name Element's tag name.
     * @param {!Object} attrs Dictionary of attribute names and values.
     * @param {Element=} opt_parent Optional parent on which to append the element.
     * @return {!SVGElement} Newly created SVG element.
     */
    function createSvgElement(name: string, attrs: Object, opt_parent?: Element): SVGElement;

    /**
     * Deselect any selections on the webpage.
     * Chrome will select text outside the SVG when double-clicking.
     * Deselect this text, so that it doesn't mess up any subsequent drag.
     */
    function removeAllRanges(): void;

    /**
     * Is this event a right-click?
     * @param {!Event} e Mouse event.
     * @return {boolean} True if right-click.
     */
    function isRightButton(e: Event): boolean;

    /**
     * Return the converted coordinates of the given mouse event.
     * The origin (0,0) is the top-left corner of the Blockly svg.
     * @param {!Event} e Mouse event.
     * @param {!Element} svg SVG element.
     * @return {!Object} Object with .x and .y properties.
     */
    function mouseToSvg(e: Event, svg: Element): Object;

    /**
     * Given an array of strings, return the length of the shortest one.
     * @param {!Array.<string>} array Array of strings.
     * @return {number} Length of shortest string.
     */
    function shortestStringLength(array: string[]): number;

    /**
     * Given an array of strings, return the length of the common prefix.
     * Words may not be split.  Any space after a word is included in the length.
     * @param {!Array.<string>} array Array of strings.
     * @param {number=} opt_shortest Length of shortest string.
     * @return {number} Length of common prefix.
     */
    function commonWordPrefix(array: string[], opt_shortest?: number): number;

    /**
     * Given an array of strings, return the length of the common suffix.
     * Words may not be split.  Any space after a word is included in the length.
     * @param {!Array.<string>} array Array of strings.
     * @param {number=} opt_shortest Length of shortest string.
     * @return {number} Length of common suffix.
     */
    function commonWordSuffix(array: string[], opt_shortest?: number): number;

    /**
     * Is the given string a number (includes negative and decimals).
     * @param {string} str Input string.
     * @return {boolean} True if number, false otherwise.
     */
    function isNumber(str: string): boolean;

    /**
     * Parse a string with any number of interpolation tokens (%1, %2, ...).
     * '%' characters may be self-escaped (%%).
     * @param {string} message Text containing interpolation tokens.
     * @return {!Array.<string|number>} Array of strings and numbers.
     */
    function tokenizeInterpolation(message: string): any /*string|number*/[];
}

declare module Blockly.Variables {

    /**
     * Category to separate variable names from procedures and generated functions.
     */
    var NAME_TYPE: any /*missing*/;

    /**
     * Find all user-created variables.
     * @param {!Blockly.Block|!Blockly.Workspace} root Root block or workspace.
     * @return {!Array.<string>} Array of variable names.
     */
    function allVariables(root: Blockly.Block): string[];
    /**
     * Find all user-created variables.
     * @param {!Blockly.Block|!Blockly.Workspace} root Root block or workspace.
     * @return {!Array.<string>} Array of variable names.
     */
    function allVariables(root: Blockly.Workspace): string[];

    /**
     * Find all instances of the specified variable and rename them.
     * @param {string} oldName Variable to rename.
     * @param {string} newName New variable name.
     * @param {!Blockly.Workspace} workspace Workspace rename variables in.
     */
    function renameVariable(oldName: string, newName: string, workspace: Blockly.Workspace): void;

    /**
     * Construct the blocks required by the flyout for the variable category.
     * @param {!Array.<!Blockly.Block>} blocks List of blocks to show.
     * @param {!Array.<number>} gaps List of widths between blocks.
     * @param {number} margin Standard margin width for calculating gaps.
     * @param {!Blockly.Workspace} workspace The flyout's workspace.
     */
    function flyoutCategory(blocks: Blockly.Block[], gaps: number[], margin: number, workspace: Blockly.Workspace): void;

    /**
    * Return a new variable name that is not yet being used. This will try to
    * generate single letter variable names in the range 'i' to 'z' to start with.
    * If no unique name is located it will try 'i' to 'z', 'a' to 'h',
    * then 'i2' to 'z2' etc.  Skip 'l'.
     * @param {!Blockly.Workspace} workspace The workspace to be unique in.
    * @return {string} New variable name.
    */
    function generateUniqueName(workspace: Blockly.Workspace): string;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Warning__Class extends Blockly.Icon__Class  { 
    
            /**
             * Class for a warning.
             * @param {!Blockly.Block} block The block associated with this warning.
             * @extends {Blockly.Icon}
             * @constructor
             */
            constructor(block: Blockly.Block);
    
            /**
             * Show or hide the warning bubble.
             * @param {boolean} visible True if the bubble should be visible.
             */
            setVisible(visible: boolean): void;
    
            /**
             * Set this warning's text.
             * @param {string} text Warning text.
             */
            setText(text: string): void;
    
            /**
             * Dispose of this warning.
             */
            dispose(): void;
    } 
    class Warning extends Warning__Class { }
    module Warning { }
    
}

declare module Blockly.WidgetDiv {

    /**
     * The HTML container.  Set once by Blockly.WidgetDiv.createDom.
     * @type {Element}
     */
    var DIV: Element;

    /**
     * Create the widget div and inject it onto the page.
     */
    function createDom(): void;

    /**
     * Initialize and display the widget div.  Close the old one if needed.
     * @param {!Object} newOwner The object that will be using this container.
     * @param {boolean} rtl Right-to-left (true) or left-to-right (false).
     * @param {Function} dispose Optional cleanup function to be run when the widget
     *   is closed.
     */
    function show(newOwner: Object, rtl: boolean, dispose: Function): void;

    /**
     * Destroy the widget and hide the div.
     */
    function hide(): void;

    /**
     * Is the container visible?
     * @return {boolean} True if visible.
     */
    function isVisible(): boolean;

    /**
     * Destroy the widget and hide the div if it is being used by the specified
     *   object.
     * @param {!Object} oldOwner The object that was using this container.
     */
    function hideIfOwner(oldOwner: Object): void;

    /**
     * Position the widget at a given location.  Prevent the widget from going
     * offscreen top or left (right in RTL).
     * @param {number} anchorX Horizontal location (window coorditates, not body).
     * @param {number} anchorY Vertical location (window coorditates, not body).
     * @param {!goog.math.Size} windowSize Height/width of window.
     * @param {!goog.math.Coordinate} scrollOffset X/y of window scrollbars.
     * @param {boolean} rtl True if RTL, false if LTR.
     */
    function position(anchorX: number, anchorY: number, windowSize: goog.math.Size, scrollOffset: goog.math.Coordinate, rtl: boolean): void;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class Workspace__Class  { 
    
            /**
             * Class for a workspace.  This is a data structure that contains blocks.
             * There is no UI, and can be created headlessly.
             * @param {Object=} opt_options Dictionary of options.
             * @constructor
             */
            constructor(opt_options?: Object);
    
            /**
             * Workspaces may be headless.
             * @type {boolean} True if visible.  False if headless.
             */
            rendered: boolean;
    
            /**
             * Dispose of this workspace.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Add a block to the list of top blocks.
             * @param {!Blockly.Block} block Block to remove.
             */
            addTopBlock(block: Blockly.Block): void;
    
            /**
             * Remove a block from the list of top blocks.
             * @param {!Blockly.Block} block Block to remove.
             */
            removeTopBlock(block: Blockly.Block): void;
    
            /**
             * Finds the top-level blocks and returns them.  Blocks are optionally sorted
             * by position; top to bottom (with slight LTR or RTL bias).
             * @param {boolean} ordered Sort the list if true.
             * @return {!Array.<!Blockly.Block>} The top-level block objects.
             */
            getTopBlocks(ordered: boolean): Blockly.Block[];
    
            /**
             * Find all blocks in workspace.  No particular order.
             * @return {!Array.<!Blockly.Block>} Array of blocks.
             */
            getAllBlocks(): Blockly.Block[];
    
            /**
             * Dispose of all blocks in workspace.
             */
            clear(): void;
    
            /**
             * Returns the horizontal offset of the workspace.
             * Intended for LTR/RTL compatibility in XML.
             * Not relevant for a headless workspace.
             * @return {number} Width.
             */
            getWidth(): number;
    
            /**
             * Finds the block with the specified ID in this workspace.
             * @param {string} id ID of block to find.
             * @return {Blockly.Block} The matching block, or null if not found.
             */
            getBlockById(id: string): Blockly.Block;
    
            /**
             * The number of blocks that may be added to the workspace before reaching
             *     the maxBlocks.
             * @return {number} Number of blocks left.
             */
            remainingCapacity(): number;
    
            /**
             * Something on this workspace has changed.
             */
            fireChangeEvent(): void;
    } 
    class Workspace extends Workspace__Class { }
    module Workspace { }
    
}

declare module Blockly.Workspace {

    /**
     * Angle away from the horizontal to sweep for blocks.  Order of execution is
     * generally top to bottom, but a small angle changes the scan to give a bit of
     * a left to right bias (reversed in RTL).  Units are in degrees.
     * See: http://tvtropes.org/pmwiki/pmwiki.php/Main/DiagonalBilling.
     */
    var SCAN_ANGLE: any /*missing*/;
}

declare module Blockly {

    /** Fake class which should be extended to avoid inheriting static properties */
    class WorkspaceSvg__Class extends Blockly.Workspace__Class  { 
    
            /**
             * Class for a workspace.  This is an onscreen area with optional trashcan,
             * scrollbars, bubbles, and dragging.
             * @param {!Object} options Dictionary of options.
             * @extends {Blockly.Workspace}
             * @constructor
             */
            constructor(options: Object);
    
            /**
             * Svg workspaces are user-visible (as opposed to a headless workspace).
             * @type {boolean} True if visible.  False if headless.
             */
            rendered: boolean;
    
            /**
             * Is this workspace the surface for a flyout?
             * @type {boolean}
             */
            isFlyout: boolean;
    
            /**
             * Is this workspace currently being dragged around?
             * @type {boolean}
             */
            isScrolling: boolean;
    
            /**
             * Current horizontal scrolling offset.
             * @type {number}
             */
            scrollX: number;
    
            /**
             * Current vertical scrolling offset.
             * @type {number}
             */
            scrollY: number;
    
            /**
             * The workspace's trashcan (if any).
             * @type {Blockly.Trashcan}
             */
            trashcan: Blockly.Trashcan;
    
            /**
             * This workspace's scrollbars, if they exist.
             * @type {Blockly.ScrollbarPair}
             */
            scrollbar: Blockly.ScrollbarPair;
    
            /**
             * Create the trash can elements.
             * @param {string=} opt_backgroundClass Either 'blocklyMainBackground' or
             *     'blocklyMutatorBackground'.
             * @return {!Element} The workspace's SVG group.
             */
            createDom(opt_backgroundClass?: string): Element;
    
            /**
             * Dispose of this workspace.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Resize this workspace and its containing objects.
             */
            resize(): void;
    
            /**
             * Get the SVG element that forms the drawing surface.
             * @return {!Element} SVG element.
             */
            getCanvas(): Element;
    
            /**
             * Get the SVG element that forms the bubble surface.
             * @return {!SVGGElement} SVG element.
             */
            getBubbleCanvas(): SVGGElement;
    
            /**
             * Translate this workspace to new coordinates.
             * @param {number} x Horizontal translation.
             * @param {number} y Vertical translation.
             */
            translate(x: number, y: number): void;
    
            /**
             * Add a block to the list of top blocks.
             * @param {!Blockly.Block} block Block to remove.
             */
            addTopBlock(block: Blockly.Block): void;
    
            /**
             * Remove a block from the list of top blocks.
             * @param {!Blockly.Block} block Block to remove.
             */
            removeTopBlock(block: Blockly.Block): void;
    
            /**
             * Returns the horizontal offset of the workspace.
             * Intended for LTR/RTL compatibility in XML.
             * @return {number} Width.
             */
            getWidth(): number;
    
            /**
             * Toggles the visibility of the workspace.
             * Currently only intended for main workspace.
             * @param {boolean} isVisible True if workspace should be visible.
             */
            setVisible(isVisible: boolean): void;
    
            /**
             * Render all blocks in workspace.
             */
            render(): void;
    
            /**
             * Turn the visual trace functionality on or off.
             * @param {boolean} armed True if the trace should be on.
             */
            traceOn(armed: boolean): void;
    
            /**
             * Highlight a block in the workspace.
             * @param {?string} id ID of block to find.
             */
            highlightBlock(id: string): void;
    
            /**
             * Fire a change event for this workspace.  Changes include new block, dropdown
             * edits, mutations, connections, etc.  Groups of simultaneous changes (e.g.
             * a tree of blocks being deleted) are merged into one event.
             * Applications may hook workspace changes by listening for
             * 'blocklyWorkspaceChange' on workspace.getCanvas().
             */
            fireChangeEvent(): void;
    
            /**
             * Paste the provided block onto the workspace.
             * @param {!Element} xmlBlock XML block element.
             */
            paste(xmlBlock: Element): void;
    
            /**
             * Make a list of all the delete areas for this workspace.
             */
            recordDeleteAreas(): void;
    
            /**
             * Is the mouse event over a delete area (toolbar or non-closing flyout)?
             * Opens or closes the trashcan and sets the cursor as a side effect.
             * @param {!Event} e Mouse move event.
             * @return {boolean} True if event is in a delete area.
             */
            isDeleteArea(e: Event): boolean;
    
            /**
             * Play an audio file at specified value.  If volume is not specified,
             * use full volume (1).
             * @param {string} name Name of sound.
             * @param {number=} opt_volume Volume of sound (0-1).
             */
            playAudio(name: string, opt_volume?: number): void;
    
            /**
             * Modify the block tree on the existing toolbox.
             * @param {Node|string} tree DOM tree of blocks, or text representation of same.
             */
            updateToolbox(tree: Node): void;
            /**
             * Modify the block tree on the existing toolbox.
             * @param {Node|string} tree DOM tree of blocks, or text representation of same.
             */
            updateToolbox(tree: string): void;
    
            /**
             * When something in this workspace changes, call a function.
             * @param {!Function} func Function to call.
             * @return {!Array.<!Array>} Opaque data that can be passed to
             *     removeChangeListener.
             */
            addChangeListener(func: Function): any[][];
    
            /**
             * Stop listening for this workspace's changes.
             * @param {!Array.<!Array>} bindData Opaque data from addChangeListener.
             */
            removeChangeListener(bindData: any[][]): void;
    
            /**
             * Mark this workspace as the currently focused main workspace.
             */
            markFocused(): void;
    } 
    class WorkspaceSvg extends WorkspaceSvg__Class { }
    module WorkspaceSvg { }
    
}

declare module Blockly.Xml {

    /**
     * Encode a block tree as XML.
     * @param {!Blockly.Workspace} workspace The workspace containing blocks.
     * @return {!Element} XML document.
     */
    function workspaceToDom(workspace: Blockly.Workspace): Element;

    /**
     * Converts a DOM structure into plain text.
     * Currently the text format is fairly ugly: all one line with no whitespace.
     * @param {!Element} dom A tree of XML elements.
     * @return {string} Text representation.
     */
    function domToText(dom: Element): string;

    /**
     * Converts a DOM structure into properly indented text.
     * @param {!Element} dom A tree of XML elements.
     * @return {string} Text representation.
     */
    function domToPrettyText(dom: Element): string;

    /**
     * Converts plain text into a DOM structure.
     * Throws an error if XML doesn't parse.
     * @param {string} text Text representation.
     * @return {!Element} A tree of XML elements.
     */
    function textToDom(text: string): Element;

    /**
     * Decode an XML DOM and create blocks on the workspace.
     * @param {!Blockly.Workspace} workspace The workspace.
     * @param {!Element} xml XML DOM.
     */
    function domToWorkspace(workspace: Blockly.Workspace, xml: Element): void;

    /**
     * Decode an XML block tag and create a block (and possibly sub blocks) on the
     * workspace.
     * @param {!Blockly.Workspace} workspace The workspace.
     * @param {!Element} xmlBlock XML block element.
     * @param {boolean=} opt_reuseBlock Optional arg indicating whether to
     *     reinitialize an existing block.
     * @return {!Blockly.Block} The root block created.
     */
    function domToBlock(workspace: Blockly.Workspace, xmlBlock: Element, opt_reuseBlock?: boolean): Blockly.Block;

    /**
     * Remove any 'next' block (statements in a stack).
     * @param {!Element} xmlBlock XML block element.
     */
    function deleteNext(xmlBlock: Element): void;
}
