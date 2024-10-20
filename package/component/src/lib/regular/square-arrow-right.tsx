
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-right?s=regular square-arrow-right}
 * @preview ![square-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-arrow-right.svg)
 */
const SquareArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 96c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320zM384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM361 273l-88 88c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47L104 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l88 88c9.4 9.4 9.4 24.6 0 33.9z" />
    </Icon>
);

export default SquareArrowRight;