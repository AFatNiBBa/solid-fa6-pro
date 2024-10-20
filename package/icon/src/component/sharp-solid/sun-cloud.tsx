
import { Icon } from "../../index";

/**
 * A component that renders the `sun-cloud` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-cloud?s=sharp-solid sun-cloud}
 * @preview ![sun-cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sun-cloud.svg)
 */
const SunCloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 73.1L150 0 126.7 126.7 0 150 73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l11.8-64L288 448l0-68c-10.2 2.6-21 4-32 4c-70.7 0-128-57.3-128-128s57.3-128 128-128c61.3 0 112.6 43.1 125.1 100.7c20.5-22.5 50-36.7 82.9-36.7c6.1 0 12.2 .5 18 1.4L512 150 385.3 126.7 362 0 256 73.1zm32.2 273.4c2.2-39.3 28.1-72.3 63.7-85c.1-1.8 .2-3.7 .2-5.5c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c11.3 0 22.1-1.9 32.2-5.5zM568 416l72 0 0-72c0-39.8-32.2-72-72-72c-10.1 0-19.7 2.1-28.4 5.8C528.8 246.5 499 224 464 224c-38.7 0-71 27.5-78.4 64c-.5 0-1.1 0-1.6 0c-35.3 0-64 28.7-64 64l0 64 64 0 184 0z" />
    </Icon>
);

export default SunCloud;