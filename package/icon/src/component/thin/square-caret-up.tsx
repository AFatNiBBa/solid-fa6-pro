
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-up?s=thin square-caret-up}
 * @preview ![square-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-caret-up.svg)
 */
const SquareCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 64c7.3 0 14.3 3 19.3 8.4L345.2 277.6c4.4 4.7 6.8 10.8 6.8 17.2c0 13.9-11.3 25.2-25.2 25.2l-205.6 0C107.3 320 96 308.7 96 294.8c0-6.4 2.4-12.5 6.8-17.2L204.7 168.4c5-5.4 12-8.4 19.3-8.4zm-7.6 19.3L114.5 288.5c-1.6 1.7-2.5 4-2.5 6.3c0 5.1 4.1 9.2 9.2 9.2l205.6 0c5.1 0 9.2-4.1 9.2-9.2c0-2.3-.9-4.6-2.5-6.3L231.6 179.3c-2-2.1-4.7-3.3-7.6-3.3s-5.6 1.2-7.6 3.3z" />
    </Icon>
);

export default SquareCaretUp;