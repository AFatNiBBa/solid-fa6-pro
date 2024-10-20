
import { Icon } from "../../index";

/**
 * A component that renders the `display-arrow-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-arrow-down?s=sharp-solid display-arrow-down}
 * @preview ![display-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/display-arrow-down.svg)
 */
const DisplayArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 0L352 0l0 64 160 0 0 288L64 352 64 64l160 0 0-64L0 0 0 416l240 0-10.7 32L160 448l-32 0 0 64 32 0 256 0 32 0 0-64-32 0-69.3 0L336 416l240 0L576 0zM312 24l0-24L264 0l0 24 0 174.1-39-39-17-17L174.1 176l17 17 80 80 17 17 17-17 80-80 17-17L368 142.1l-17 17-39 39L312 24z" />
    </Icon>
);

export default DisplayArrowDown;