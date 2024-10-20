
import { Icon } from "../../index";

/**
 * A component that renders the `phone-office` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-office?s=solid phone-office}
 * @preview ![phone-office](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/phone-office.svg)
 */
const PhoneOffice: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 0C110.3 0 96 14.3 96 32l0 352c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-352c0-17.7-14.3-32-32-32L128 0zM64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-352c0-35.3-28.7-64-64-64L256 32l0 352c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L64 32zm256 96c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32zm32 192a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm160-32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM480 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-96-32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
    </Icon>
);

export default PhoneOffice;