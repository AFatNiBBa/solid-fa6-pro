
import { Icon } from "../../index";

/**
 * A component that renders the `maximize` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/maximize?s=light maximize}
 * @preview ![maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/maximize.svg)
 */
const Maximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M50.2 196.5l.6 .2c8.2 2 16.8-.4 22.8-6.3l47.1-47.1L233.4 256 120.7 368.7 73.6 321.6c-6-6-14.6-8.4-22.8-6.3l-.6 .2C39.5 318.1 32 327.7 32 338.7L32 456c0 13.3 10.7 24 24 24l117.3 0c11 0 20.6-7.5 23.3-18.2l.2-.6c2-8.2-.4-16.8-6.3-22.8l-47.1-47.1L256 278.6 368.7 391.3l-47.1 47.1c-6 6-8.4 14.6-6.3 22.8l.2 .6c2.7 10.7 12.3 18.2 23.3 18.2L456 480c13.3 0 24-10.7 24-24l0-117.3c0-11-7.5-20.6-18.2-23.3l-.6-.2c-8.2-2-16.8 .4-22.8 6.3l-47.1 47.1L278.6 256 391.3 143.3l47.1 47.1c6 6 14.6 8.4 22.8 6.3l.6-.2c10.7-2.7 18.2-12.3 18.2-23.3L480 56c0-13.3-10.7-24-24-24L338.7 32c-11 0-20.6 7.5-23.3 18.2l-.2 .6c-2 8.2 .4 16.8 6.3 22.8l47.1 47.1L256 233.4 143.3 120.7l47.1-47.1c6-6 8.4-14.6 6.3-22.8l-.2-.6C193.9 39.5 184.3 32 173.3 32L56 32C42.7 32 32 42.7 32 56l0 117.3c0 11 7.5 20.6 18.2 23.3zM64 154.7L64 64l90.7 0L64 154.7zM154.7 448L64 448l0-90.7L154.7 448zM448 154.7L357.3 64 448 64l0 90.7zM357.3 448L448 357.3l0 90.7-90.7 0z" />
    </Icon>
);

export default Maximize;