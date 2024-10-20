
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-down?s=light square-caret-down}
 * @preview ![square-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-caret-down.svg)
 */
const SquareCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448zM0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zm224-64c9.6 0 18.7-4 25.2-11l95.5-102.8c4.7-5.1 7.3-11.8 7.3-18.7c0-15.2-12.3-27.5-27.5-27.5l-201 0C108.3 192 96 204.3 96 219.5c0 6.9 2.6 13.6 7.3 18.7L198.8 341c6.5 7 15.6 11 25.2 11zm-1.7-32.7L133.8 224l180.3 0-88.4 95.3c-.4 .5-1.1 .7-1.7 .7s-1.3-.3-1.7-.7z" />
    </Icon>
);

export default SquareCaretDown;