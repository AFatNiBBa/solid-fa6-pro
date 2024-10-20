
import { Icon } from "../../index";

/**
 * A component that renders the `whistle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whistle?s=sharp-light whistle}
 * @preview ![whistle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/whistle.svg)
 */
const Whistle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M93.4 115.3C79.5 128.1 67.6 143 58 159.4c-14.8-2.8-26-15.8-26-31.4c0-17.7 14.3-32 32-32c13.2 0 24.5 7.9 29.4 19.3zM0 128c0 28.4 18.5 52.5 44.1 60.8C36.3 209.7 32 232.4 32 256c0 106 86 192 192 192c64.7 0 121.9-32 156.7-81L536 448l82.2-88.5L640 336l-25.2-19.9L493.9 220.5 448 248l-32-24 14.6-53.6-78.1-61.8C315.9 79.7 270.6 64 224 64c-38.8 0-74.8 11.5-105 31.2C107.8 76.5 87.4 64 64 64C28.7 64 0 92.7 0 128zM370.8 325.7l-16.2 22.8C325.6 389.4 277.9 416 224 416c-88.4 0-160-71.6-160-160s71.6-160 160-160c39.4 0 77.7 13.3 108.6 37.8l61.5 48.7-9 33.2-5.7 21 17.4 13 32 24L446 286.5l18.5-11.1 26.9-16.2L593 339.6l-63.8 68.7L395.5 338.6l-24.7-12.9zM256 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128z" />
    </Icon>
);

export default Whistle;