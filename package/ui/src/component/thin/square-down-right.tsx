
import { Icon } from "../../index";

/**
 * A component that renders the `square-down-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down-right?s=thin square-down-right}
 * @preview ![square-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-down-right.svg)
 */
const SquareDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 464c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0zm64-48c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM320 344l0-127c0-5-4-9-9-9c-2.4 0-4.7 .9-6.3 2.6l-35 35c-3.1 3.1-8.2 3.1-11.3 0L176 163.3c-2.1-2.1-5-3.3-8-3.3s-5.9 1.2-8 3.3L131.3 192c-2.1 2.1-3.3 5-3.3 8s1.2 5.9 3.3 8l82.3 82.3c3.1 3.1 3.1 8.2 0 11.3l-35 35c-1.7 1.7-2.6 4-2.6 6.3c0 5 4 9 9 9l127 0c4.4 0 8-3.6 8-8zm-8 24l-127 0c-13.8 0-25-11.2-25-25c0-6.6 2.6-13 7.3-17.7L196.7 296 120 219.3c-5.1-5.1-8-12.1-8-19.3s2.9-14.2 8-19.3L148.7 152c5.1-5.1 12.1-8 19.3-8s14.2 2.9 19.3 8L264 228.7l29.4-29.4c4.7-4.7 11-7.3 17.7-7.3c13.8 0 25 11.2 25 25l0 127c0 13.3-10.7 24-24 24z" />
    </Icon>
);

export default SquareDownRight;