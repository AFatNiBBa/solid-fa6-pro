
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-slash?s=sharp-thin nfc-slash}
 * @preview ![nfc-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/nfc-slash.svg)
 */
const NfcSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM544 48l0-16-16 0L152.5 32l20.3 16L528 48l0 280.5 16 12.6L544 48zM96 170.9L96 464l0 16 16 0 375.5 0-20.3-16L112 464l0-280.5L96 170.9zM184 400l202.2 0-20.3-16L192 384l0-137.3L176 234l0 158 0 8 8 0zM464 120l0-8-8 0-136 0-8 0 0 8 0 38 16 12.6 0-42.6 120 0 0 137.3L464 278l0-158zm-208-8l-2.2 0 2.2 1.7 0-1.7z" />
    </Icon>
);

export default NfcSlash;