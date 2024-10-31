
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-slash?s=light nfc-slash}
 * @preview ![nfc-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/nfc-slash.svg)
 */
const NfcSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM544 351.3L544 96c0-35.3-28.7-64-64-64L160 32c-6 0-11.9 .8-17.4 2.4L180.1 64 192 64l64 0 224 0c17.7 0 32 14.3 32 32l0 230 32 25.3zm-64-50.5L480 128c0-17.7-14.3-32-32-32L336 96c-17.7 0-32 14.3-32 32l0 33.8 32 25.3 0-59.1 112 0 0 147.5 32 25.3zM378.8 384L192 384l0-147.5-32-25.3L160 384c0 17.7 14.3 32 32 32l227.4 0-40.5-32zM128 186L96 160.7 96 416c0 35.3 28.7 64 64 64l320 0c6 0 11.9-.8 17.4-2.4L459.9 448 160 448c-17.7 0-32-14.3-32-32l0-230z" />
    </Icon>
);

export default NfcSlash;