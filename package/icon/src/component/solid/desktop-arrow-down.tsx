
import { Icon } from "../../index";

/**
 * A component that renders the `desktop-arrow-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/desktop-arrow-down?s=solid desktop-arrow-down}
 * @preview ![desktop-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/desktop-arrow-down.svg)
 */
const DesktopArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L352 0l0 64 160 0 0 224L64 288 64 64l160 0 0-64L64 0zM312 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 150.1-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39L312 24z" />
    </Icon>
);

export default DesktopArrowDown;