
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-right?s=light square-caret-right}
 * @preview ![square-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-caret-right.svg)
 */
const SquareCaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 96c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320zM384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM320 256c0 9.6-4 18.7-11 25.2L206.2 376.7c-5.1 4.7-11.8 7.3-18.7 7.3c-15.2 0-27.5-12.3-27.5-27.5l0-201c0-15.2 12.3-27.5 27.5-27.5c6.9 0 13.6 2.6 18.7 7.3L309 230.8c7 6.5 11 15.6 11 25.2zm-32.7-1.7L192 165.8l0 180.3 95.3-88.4c.5-.4 .7-1.1 .7-1.7s-.3-1.3-.7-1.7z" />
    </Icon>
);

export default SquareCaretRight;