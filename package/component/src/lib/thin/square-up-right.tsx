
import { Icon } from "../../index";

/**
 * A component that renders the `square-up-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-right?s=thin square-up-right}
 * @preview ![square-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-up-right.svg)
 */
const SquareUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0zm64 48c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM320 168l0 127c0 5-4 9-9 9c-2.4 0-4.7-.9-6.3-2.6l-35-35c-3.1-3.1-8.2-3.1-11.3 0L176 348.7c-2.1 2.1-5 3.3-8 3.3s-5.9-1.2-8-3.3L131.3 320c-2.1-2.1-3.3-5-3.3-8s1.2-5.9 3.3-8l82.3-82.3c3.1-3.1 3.1-8.2 0-11.3l-35-35c-1.7-1.7-2.6-4-2.6-6.3c0-5 4-9 9-9l127 0c4.4 0 8 3.6 8 8zm-8-24l-127 0c-13.8 0-25 11.2-25 25c0 6.6 2.6 13 7.3 17.7L196.7 216 120 292.7c-5.1 5.1-8 12.1-8 19.3s2.9 14.2 8 19.3L148.7 360c5.1 5.1 12.1 8 19.3 8s14.2-2.9 19.3-8L264 283.3l29.4 29.4c4.7 4.7 11 7.3 17.7 7.3c13.8 0 25-11.2 25-25l0-127c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default SquareUpRight;