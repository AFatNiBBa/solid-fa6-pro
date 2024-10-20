
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-slash?s=regular nfc-slash}
 * @preview ![nfc-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/nfc-slash.svg)
 */
const NfcSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.8-68L544 96c0-35.3-28.7-64-64-64L160 32c-21.6 0-40.7 10.7-52.3 27.1L38.8 5.1zM145.7 88.9c2.6-5.3 8.1-8.9 14.3-8.9l320 0c8.8 0 16 7.2 16 16l0 267.5-32-25.1L464 152c0-22.1-17.9-40-40-40l-88 0c-22.1 0-40 17.9-40 40l0 54.7-60-47c11.4-1.9 20-11.8 20-23.7c0-13.3-10.7-24-24-24l-16 0c-10.5 0-20.1 4-27.2 10.7L145.7 88.9zM416 300.8l-48.5-38c.3-2.2 .5-4.5 .5-6.8c0-17.8-9.7-33.3-24-41.6l0-54.4 72 0 0 140.8zm70.9 178.9L426.5 432 160 432c-8.8 0-16-7.2-16-16l0-206.5L96 171.6 96 416c0 35.3 28.7 64 64 64l320 0c2.3 0 4.6-.1 6.9-.4zM385.8 400l-60.9-48L224 352l0-79.5-48-37.8L176 360c0 22.1 17.9 40 40 40l169.8 0z" />
    </Icon>
);

export default NfcSlash;