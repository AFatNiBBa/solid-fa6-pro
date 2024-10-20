
import { Icon } from "../../index";

/**
 * A component that renders the `phone-intercom` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-intercom?s=regular phone-intercom}
 * @preview ![phone-intercom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/phone-intercom.svg)
 */
const PhoneIntercom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l48 0zm0 400c15.1 0 29-5.3 40-14c11 8.8 24.9 14 40 14l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L192 32c-15.1 0-29 5.3-40 14c-11-8.8-24.9-14-40-14L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l48 0zm64-64l0-320c0-8.8 7.2-16 16-16l256 0c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16l-256 0c-8.8 0-16-7.2-16-16zm80-32a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm80-80c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM240 112c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-160 0z" />
    </Icon>
);

export default PhoneIntercom;