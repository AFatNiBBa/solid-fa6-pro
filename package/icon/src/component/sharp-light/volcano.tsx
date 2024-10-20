
import { Icon } from "../../index";

/**
 * A component that renders the `volcano` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volcano?s=sharp-light volcano}
 * @preview ![volcano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/volcano.svg)
 */
const Volcano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M213 58.7C220.9 42.8 237.2 32 256 32s35.1 10.8 43 26.7l11.7 23.5L326.2 61c5.9-7.9 15.2-13 25.8-13c17.7 0 32 14.3 32 32s-14.3 32-32 32l-49.6 0-7.7 0-4.8 6-33.6 42-.6 0-33.6-42-4.8-6-7.7 0L160 112c-17.7 0-32-14.3-32-32s14.3-32 32-32c10.6 0 19.9 5.1 25.8 13l15.5 21.1L213 58.7zM256 0c-23.9 0-45.3 10.5-60 27.1c-10.3-7-22.6-11.1-36-11.1c-35.3 0-64 28.7-64 64s28.7 64 64 64l41.9 0 33.6 42 4.8 6 7.7 0 16 0 7.7 0 4.8-6 33.6-42 41.9 0c35.3 0 64-28.7 64-64s-28.7-64-64-64c-13.4 0-25.8 4.1-36 11.1C301.3 10.5 279.9 0 256 0zM32 452.2l82.7-93L128 368l112-32 80 64 78.7-39.3L480 452.2l0 27.8L32 480l0-27.8zM428.3 345.8l-22-24.8L320 224l-128 0s0 0 0 0L0 440l0 40 0 32 32 0 448 0 32 0 0-32 0-40-83.7-94.2zM324 362.2L260 311l-12.9-10.3-15.9 4.5-92 26.3L206.4 256l99.3 0 71 79.9L324 362.2z" />
    </Icon>
);

export default Volcano;