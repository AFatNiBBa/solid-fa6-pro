
import { Icon } from "../../index";

/**
 * A component that renders the `phone-intercom` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-intercom?s=sharp-light phone-intercom}
 * @preview ![phone-intercom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/phone-intercom.svg)
 */
const PhoneIntercom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 64l0 384-64 0L32 64l64 0zM32 32L0 32 0 64 0 448l0 32 32 0 64 0 32 0 0-32 0-384 0-32L96 32 32 32zM480 64l0 384-288 0 0-384 288 0zM192 32l-32 0 0 32 0 384 0 32 32 0 288 0 32 0 0-32 0-384 0-32-32 0L192 32zm64 320a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm32-48l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zm0 64l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zM256 128l160 0 0 96-160 0 0-96zM224 96l0 32 0 96 0 32 32 0 160 0 32 0 0-32 0-96 0-32-32 0L256 96l-32 0z" />
    </Icon>
);

export default PhoneIntercom;