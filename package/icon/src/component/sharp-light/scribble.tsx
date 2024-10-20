
import { Icon } from "../../index";

/**
 * A component that renders the `scribble` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scribble?s=sharp-light scribble}
 * @preview ![scribble](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/scribble.svg)
 */
const Scribble: typeof Icon = x => (
    <Icon {...x}>
        <path d="M196.6 19.5C210.2 7 228 0 246.5 0l.9 0C287.5 0 320 32.5 320 72.6c0 19.2-7.6 37.7-21.3 51.3L75.9 346.7C68.3 354.4 64 364.7 64 375.4c0 22.4 18.2 40.6 40.6 40.6c10.8 0 21.1-4.3 28.7-11.9L388.1 149.3c13.6-13.6 32.1-21.3 51.3-21.3c40.1 0 72.6 32.5 72.6 72.6c0 19.2-7.6 37.7-21.3 51.3L370.5 372.1c-11.8 11.8-18.5 28-18.5 44.8c0 34.8 28.2 63.1 63 63.1c8.7 0 17.3-2 25.1-5.9l48.8-24.4 14.3 28.6-48.8 24.4c-12.2 6.1-25.8 9.3-39.4 9.3c-52.5 0-95-42.7-95-95.1c0-25.2 10-49.5 27.9-67.4L468.1 229.3c7.6-7.6 11.9-17.9 11.9-28.7c0-22.4-18.2-40.6-40.6-40.6c-10.8 0-21.1 4.3-28.7 11.9L155.9 426.7c-13.6 13.6-32.1 21.3-51.3 21.3C64.5 448 32 415.5 32 375.4c0-19.2 7.6-37.7 21.3-51.3L276.1 101.3c7.6-7.6 11.9-17.9 11.9-28.7C288 50.2 269.8 32 247.4 32l-.9 0c-10.4 0-20.5 3.9-28.2 11L26.9 219.8 5.1 196.2 196.6 19.5z" />
    </Icon>
);

export default Scribble;