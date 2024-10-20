
import { Icon } from "../../index";

/**
 * A component that renders the `text-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-slash?s=light text-slash}
 * @preview ![text-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/text-slash.svg)
 */
const TextSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM390.4 64l149.1 0-11 44.1c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l11-44.1c5-20.2-10.2-39.8-31-39.8l-383 0c-4.7 0-9.2 1-13.3 2.9L180.1 64l177.1 0L325.1 178.5 352.3 200 390.4 64zM287.7 312L249.6 448 176 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-53.1 0 32.1-114.5L287.7 312z" />
    </Icon>
);

export default TextSlash;