
import { Icon } from "../../index";

/**
 * A component that renders the `dial-low` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-low?s=solid dial-low}
 * @preview ![dial-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dial-low.svg)
 */
const DialLow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-.4 447.6c-80.2 0-146.6-59-158.2-136l158.2 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-158.2 0c11.6-77 78-136 158.2-136c88.4 0 160 71.6 160 160s-71.6 160-160 160zM512 288a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 96a32 32 0 1 1 64 0A32 32 0 1 1 64 96zM480 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 480a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default DialLow;