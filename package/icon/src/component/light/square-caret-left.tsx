
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-left?s=light square-caret-left}
 * @preview ![square-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-caret-left.svg)
 */
const SquareCaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 416c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96l0 320zm32 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zm64-224c0-9.6 4-18.7 11-25.2l102.8-95.5c5.1-4.7 11.8-7.3 18.7-7.3c15.2 0 27.5 12.3 27.5 27.5l0 201c0 15.2-12.3 27.5-27.5 27.5c-6.9 0-13.6-2.6-18.7-7.3L139 281.2c-7-6.5-11-15.6-11-25.2zm32.7 1.7L256 346.2l0-180.3-95.3 88.4c-.5 .4-.7 1.1-.7 1.7s.3 1.3 .7 1.7z" />
    </Icon>
);

export default SquareCaretLeft;