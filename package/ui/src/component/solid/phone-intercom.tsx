
import { Icon } from "../../index";

/**
 * A component that renders the `phone-intercom` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-intercom?s=solid phone-intercom}
 * @preview ![phone-intercom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/phone-intercom.svg)
 */
const PhoneIntercom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 32l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32zM160 96c0-35.3 28.7-64 64-64l224 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-320zM320 368a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm48-48c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0zM224 128l0 96c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L256 96c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default PhoneIntercom;