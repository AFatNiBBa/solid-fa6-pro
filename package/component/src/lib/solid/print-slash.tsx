
import { Icon } from "../../index";

/**
 * A component that renders the `print-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print-slash?s=solid print-slash}
 * @preview ![print-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/print-slash.svg)
 */
const PrintSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L522.2 384l21.8 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64l-234.8 0L192 125.2 192 64l226.7 0L448 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L464 18.7C452 6.7 435.7 0 418.7 0L192 0c-35.3 0-64 28.7-64 64l0 11L38.8 5.1zm459 483.1l-51-40.2L192 448l0-64 0-16 0-16 132.9 0L122.2 192.3C89.6 195.2 64 222.6 64 256l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c20.1 0 38.1-9.3 49.8-23.8zM496 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default PrintSlash;