
import { Icon } from "../../index";

/**
 * A component that renders the `whistle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whistle?s=sharp-thin whistle}
 * @preview ![whistle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/whistle.svg)
 */
const Whistle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M105.9 104.6C82.4 123 63.2 146.7 50.3 174C30.5 168.1 16 149.8 16 128c0-26.5 21.5-48 48-48c18 0 33.7 9.9 41.9 24.6zM0 128c0 28.4 18.5 52.5 44.1 60.8C36.3 209.7 32 232.4 32 256c0 106 86 192 192 192c64.7 0 121.9-32 156.7-81L536 448l93.1-100.2L640 336l-12.6-10L493.9 220.5 448 248l-32-24 14.6-53.6-78.1-61.8C315.9 79.7 270.6 64 224 64c-38.8 0-74.8 11.5-105 31.2C107.8 76.5 87.4 64 64 64C28.7 64 0 92.7 0 128zM375.7 346.3l-8.1 11.4C335.7 402.7 283.3 432 224 432c-97.2 0-176-78.8-176-176s78.8-176 176-176c43 0 84.8 14.5 118.6 41.2l69.8 55.2-11.8 43.4-2.9 10.5 8.7 6.5 32 24 8.6 6.5 9.2-5.5 36.4-21.8 123.9 97.9-83.9 90.4L388.1 352.8l-12.4-6.5zM176 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default Whistle;