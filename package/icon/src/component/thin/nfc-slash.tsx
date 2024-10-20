
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-slash?s=thin nfc-slash}
 * @preview ![nfc-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/nfc-slash.svg)
 */
const NfcSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM544 96l0 245.1-16-12.6L528 96c0-26.5-21.5-48-48-48L172.7 48 152.9 32.4c2.3-.3 4.7-.4 7.1-.4l320 0c35.3 0 64 28.7 64 64zM312 158l16 12.6 0-34.6c0-4.4 3.6-8 8-8l104 0c4.4 0 8 3.6 8 8l0 129.3L464 278l0-142c0-13.3-10.7-24-24-24l-104 0c-13.3 0-24 10.7-24 24l0 22zM192 376l0-129.3L176 234l0 142c0 13.3 10.7 24 24 24l186.2 0-20.3-16L200 384c-4.4 0-8-3.6-8-8zM96 170.9L96 416c0 35.3 28.7 64 64 64l320 0c2.4 0 4.7-.1 7-.4L467.3 464 160 464c-26.5 0-48-21.5-48-48l0-232.5L96 170.9z" />
    </Icon>
);

export default NfcSlash;