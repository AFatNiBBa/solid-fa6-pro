
import { Icon } from "../../index";

/**
 * A component that renders the `text-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-slash?s=regular text-slash}
 * @preview ![text-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/text-slash.svg)
 */
const TextSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-281.9-221L396.4 80l124.8 0-8.5 34.2c-3.2 12.9 4.6 25.9 17.5 29.1s25.9-4.6 29.1-17.5l11-44.1C576.6 56.5 557.5 32 531.5 32l-335 0c-18.4 0-34.4 12.5-38.8 30.3l-7.5 30.1L38.8 5.1zM191.5 124.8L202.7 80l143.8 0L308.1 216.2 191.5 124.8zm57.4 300.7l-1.8 6.5L192 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-55.1 0 23.6-83.5-40.8-32.1L248.9 425.5z" />
    </Icon>
);

export default TextSlash;