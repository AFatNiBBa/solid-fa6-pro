
import { Icon } from "../../index";

/**
 * A component that renders the `nfc` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc?s=sharp-regular nfc}
 * @preview ![nfc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/nfc.svg)
 */
const Nfc: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 352L48 432 48 80l352 0zM48 32L0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32zM272 256c0-17.8-9.7-33.3-24-41.6l0-54.4 72 0 0 192-192 0 0-192 8 0 24 0 0-48-24 0-32 0-24 0 0 24 0 240 0 24 24 0 240 0 24 0 0-24 0-240 0-24-24 0-120 0-24 0 0 24 0 78.4c-14.3 8.3-24 23.8-24 41.6c0 26.5 21.5 48 48 48s48-21.5 48-48z" />
    </Icon>
);

export default Nfc;