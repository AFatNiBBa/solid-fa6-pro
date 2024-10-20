
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-lock?s=sharp-regular nfc-lock}
 * @preview ![nfc-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/nfc-lock.svg)
 */
const NfcLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M400 80L48 80l0 352 272 0 0 48L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 81.1c-17.7 2.5-34 9.2-48 18.9L400 80zm-32 56l0 78.3c-10.2 16.9-16 36.6-16 57.7l0 16-32 0 0-128-72 0 0 54.4c14.3 8.3 24 23.8 24 41.6c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-17.8 9.7-33.3 24-41.6l0-78.4 0-24 24 0 120 0 24 0 0 24zM128 352l192 0 0 48-216 0-24 0 0-24 0-240 0-24 24 0 32 0 24 0 0 48-24 0-8 0 0 192zM464 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default NfcLock;