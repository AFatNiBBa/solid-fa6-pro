
import { Icon } from "../../index";

/**
 * A component that renders the `planet-moon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/planet-moon?s=sharp-light planet-moon}
 * @preview ![planet-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/planet-moon.svg)
 */
const PlanetMoon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96A64 64 0 1 0 512 0a64 64 0 1 0 0 128zM224 480C118 480 32 394 32 288c0-8.1 .5-16.1 1.5-24l71.9 0L152 310.6l0 49.4 0 9.9 8.8 4.4L184 385.9l0 54.1 0 16 16 0 48 0 8.9 0 4.7-7.6 64-104 2.4-3.9 0-4.5 0-72 0-16-16 0-102.1 0-7.4-14.9 58.8-88.3 3-4.5-.4-5.4-2.4-35.3C349.6 117.2 416 194.8 416 288c0 106-86 192-192 192zM40.3 232C64.3 153.3 137.4 96 224 96c1.8 0 3.5 0 5.3 .1l2.4 35.6-61 91.5-5.2 7.7 4.2 8.3 16 32 4.4 8.8 9.9 0 96 0 0 51.5L239.1 424 216 424l0-48 0-9.9-8.8-4.4L184 350.1l0-46.1 0-6.6-4.7-4.7-56-56-4.7-4.7-6.6 0-71.7 0zM227.2 64c-1.1 0-2.1 0-3.2 0C100.3 64 0 164.3 0 288S100.3 512 224 512s224-100.3 224-224c0-111.7-81.7-204.2-188.6-221.2c0 0 0 0 0 0c-10.5-1.7-21.3-2.6-32.3-2.8c0 0 0 0 0 0z" />
    </Icon>
);

export default PlanetMoon;