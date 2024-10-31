
import { Icon } from "../../index";

/**
 * A component that renders the `nfc` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc?s=regular nfc}
 * @preview ![nfc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/nfc.svg)
 */
const Nfc: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM272 256c0-17.8-9.7-33.3-24-41.6l0-54.4 72 0 0 192-192 0 0-192 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0c-22.1 0-40 17.9-40 40l0 208c0 22.1 17.9 40 40 40l208 0c22.1 0 40-17.9 40-40l0-208c0-22.1-17.9-40-40-40l-88 0c-22.1 0-40 17.9-40 40l0 62.4c-14.3 8.3-24 23.8-24 41.6c0 26.5 21.5 48 48 48s48-21.5 48-48z" />
    </Icon>
);

export default Nfc;