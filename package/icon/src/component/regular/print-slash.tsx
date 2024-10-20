
import { Icon } from "../../index";

/**
 * A component that renders the `print-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print-slash?s=regular print-slash}
 * @preview ![print-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/print-slash.svg)
 */
const PrintSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L542.6 400l1.4 0c17.7 0 32-14.3 32-32l0-112c0-35.3-28.7-64-64-64l-234.8 0L176 112.6 176 64c0-8.8 7.2-16 16-16l229.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c3 3 4.7 7.1 4.7 11.3l0 69.5 48 0 0-69.5c0-17-6.7-33.3-18.7-45.3L466.7 18.7C454.7 6.7 438.5 0 421.5 0L192 0c-35.3 0-64 28.7-64 64l0 11L38.8 5.1zM338.5 240L512 240c8.8 0 16 7.2 16 16l0 96-16 0-16 0-14.6 0L338.5 240zm-155.7 0l-60.6-47.7C89.6 195.2 64 222.6 64 256l0 112c0 17.7 14.3 32 32 32l48 0 0 80c0 17.7 14.3 32 32 32l288 0c15.5 0 28.5-11 31.4-25.7L448 449l0 15-256 0 0-96 153.2 0-60.9-48L176 320c-17.7 0-32 14.3-32 32l-32 0 0-96c0-8.8 7.2-16 16-16l54.8 0z" />
    </Icon>
);

export default PrintSlash;