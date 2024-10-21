
import { Icon } from "../../index";

/**
 * A component that renders the `square-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-left?s=regular square-left}
 * @preview ![square-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-left.svg)
 */
const SquareLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 416c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320zm16 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zM185.4 360.8l-84-91c-3.5-3.8-5.4-8.7-5.4-13.9s1.9-10.1 5.4-13.9l84-91c4.2-4.6 10.1-7.2 16.4-7.2c12.3 0 22.3 10 22.3 22.3l0 41.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 41.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.4-7.2z" />
    </Icon>
);

export default SquareLeft;