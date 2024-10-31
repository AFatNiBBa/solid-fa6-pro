
import { Icon } from "../../index";

/**
 * A component that renders the `dial-max` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-max?s=solid dial-max}
 * @preview ![dial-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dial-max.svg)
 */
const DialMax: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM401.4 174.7c56.7 56.7 61.9 145.4 15.7 208L305.2 270.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L383.2 416.7c-62.6 46.2-151.3 41-208-15.7c-62.5-62.5-62.5-163.8 0-226.3s163.8-62.5 226.3 0zM512 288a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 96a32 32 0 1 1 64 0A32 32 0 1 1 64 96zM480 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 480a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default DialMax;