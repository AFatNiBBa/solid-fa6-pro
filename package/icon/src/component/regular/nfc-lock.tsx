
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-lock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-lock?s=regular nfc-lock}
 * @preview ![nfc-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/nfc-lock.svg)
 */
const NfcLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 80L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0 0 48L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 65.1c-17.7 2.5-34 9.2-48 18.9L400 96c0-8.8-7.2-16-16-16zm-16 72l0 62.3c-10.2 16.9-16 36.6-16 57.7l0 24.6c-19.1 11.1-32 31.7-32 55.4l0-192-72 0 0 54.4c14.3 8.3 24 23.8 24 41.6c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-17.8 9.7-33.3 24-41.6l0-62.4c0-22.1 17.9-40 40-40l88 0c22.1 0 40 17.9 40 40zM128 352l192 0 0 48-200 0c-22.1 0-40-17.9-40-40l0-208c0-22.1 17.9-40 40-40l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 192zM464 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48z" />
    </Icon>
);

export default NfcLock;