
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-magnifying-glass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-magnifying-glass?s=sharp-thin nfc-magnifying-glass}
 * @preview ![nfc-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/nfc-magnifying-glass.svg)
 */
const NfcMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 48L16 48l0 416 362.2 0c21.1 10.2 44.8 16 69.8 16l-16 0L16 480 0 480l0-16L0 48 0 32l16 0 416 0 16 0 0 16 0 112c-5.4 0-10.7 .3-16 .8L432 48zm-64 72l0 61.4c-5.6 3.2-10.9 6.7-16 10.6l0-64-120 0 0 88.8c18.3 3.7 32 19.8 32 39.2c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-19.4 13.7-35.5 32-39.2l0-96.8 0-8 8 0 136 0 8 0 0 8zM309.4 400L88 400l-8 0 0-8 0-272 0-8 8 0 64 0 8 0 0 16-8 0-56 0 0 256 205.3 0c2.4 5.5 5.1 10.8 8.1 16zM224 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM448 432.2a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0 16c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 32.5-12.1 62.1-32 84.7l93.7 93.7c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-93.7-93.7c-22.6 19.9-52.2 32-84.7 32z" />
    </Icon>
);

export default NfcMagnifyingGlass;