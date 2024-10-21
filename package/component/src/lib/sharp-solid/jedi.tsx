
import { Icon } from "../../index";

/**
 * A component that renders the `jedi` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jedi?s=sharp-solid jedi}
 * @preview ![jedi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/jedi.svg)
 */
const Jedi: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M245.2 318.3l-25.1-50.2 50.1 25.1L280 0l16 0 9.8 293.2 50.1-25.1-25.1 50.2L384 336l-53.2 17.7 25.1 50.2-47.2-23.6 2.2 65.7C370.6 435.2 416 382.9 416 320c0-38.3-16.8-72.7-43.5-96.1C417.8 195.6 448 145.3 448 88c0-30.5-8.5-59-23.3-83.2c64.9 37.8 112.8 101.7 129.2 177.4L512 224l47.5 0c.3 5.3 .5 10.6 .5 16c0 18.2-1.8 36-5.2 53.2L496 352l39.9 0C493.3 446.4 398.3 512 288 512S82.7 446.4 40.1 352L80 352 21.2 293.2C17.8 276 16 258.2 16 240c0-5.4 .2-10.7 .5-16L64 224 22.2 182.2C38.5 106.5 86.4 42.6 151.3 4.8C136.5 29 128 57.5 128 88c0 57.3 30.2 107.6 75.5 135.9C176.8 247.3 160 281.7 160 320c0 62.9 45.4 115.2 105.1 126l2.2-65.7-47.2 23.6 25.1-50.2L192 336l53.2-17.7z" />
    </Icon>
);

export default Jedi;