
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-down?s=thin square-caret-down}
 * @preview ![square-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-caret-down.svg)
 */
const SquareCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464zM0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zm224-64c7.3 0 14.3-3 19.3-8.4L345.2 234.4c4.4-4.7 6.8-10.8 6.8-17.2c0-13.9-11.3-25.2-25.2-25.2l-205.6 0C107.3 192 96 203.3 96 217.2c0 6.4 2.4 12.5 6.8 17.2L204.7 343.6c5 5.4 12 8.4 19.3 8.4zm-7.6-19.3L114.5 223.5c-1.6-1.7-2.5-4-2.5-6.3c0-5.1 4.1-9.2 9.2-9.2l205.6 0c5.1 0 9.2 4.1 9.2 9.2c0 2.3-.9 4.6-2.5 6.3L231.6 332.7c-2 2.1-4.7 3.3-7.6 3.3s-5.6-1.2-7.6-3.3z" />
    </Icon>
);

export default SquareCaretDown;