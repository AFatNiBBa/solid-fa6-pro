
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up?s=regular square-arrow-up}
 * @preview ![square-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-arrow-up.svg)
 */
const SquareArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm241 23l88 88c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47L248 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-182.1-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l88-88c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default SquareArrowUp;