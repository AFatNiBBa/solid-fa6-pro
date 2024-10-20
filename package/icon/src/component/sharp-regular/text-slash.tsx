
import { Icon } from "../../index";

/**
 * A component that renders the `text-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-slash?s=sharp-regular text-slash}
 * @preview ![text-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/text-slash.svg)
 */
const TextSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7-272-211.2L396.4 80l124.8 0-16 64 49.5 0 20.5-82.2L582.7 32 552 32 184 32l-18.7 0-4.5 18.2L149.9 93.6 48.4 14.8zm142.9 111L202.7 80l143.8 0L308 216.4 191.3 125.7zm57.6 299.7c-.6 2.2-.9 4.4-.9 6.5l-56 0-24 0 0 48 24 0 160 0 24 0 0-48-24 0-55.1 0 23.6-83.5-40.8-32.1L248.9 425.5z" />
    </Icon>
);

export default TextSlash;