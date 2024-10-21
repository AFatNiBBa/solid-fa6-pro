
import { Icon } from "../../index";

/**
 * A component that renders the `phone-intercom` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-intercom?s=thin phone-intercom}
 * @preview ![phone-intercom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/phone-intercom.svg)
 */
const PhoneIntercom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 48c17.7 0 32 14.3 32 32l0 352c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32L16 80c0-17.7 14.3-32 32-32l32 0zM48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zM448 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-320c0-26.5 21.5-48 48-48l224 0zM224 32c-35.3 0-64 28.7-64 64l0 320c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L224 32zm16 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm32-24c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0c-4.4 0-8 3.6-8 8zm0 48c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0c-4.4 0-8 3.6-8 8zM256 112l160 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm-32 16l0 96c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L256 96c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default PhoneIntercom;