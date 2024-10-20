
import { Icon } from "../../index";

/**
 * A component that renders the `fishing-rod` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fishing-rod?s=sharp-light fishing-rod}
 * @preview ![fishing-rod](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/fishing-rod.svg)
 */
const FishingRod: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M272 0l-2.4 0-2.3 .7-208 64L48 68.2 48 80l0 208-16 0L0 288l0 32L0 480l0 32 32 0 64 0 32 0 0-32 0-160 0-32-32 0-16 0L80 91.8 274.4 32 320 32l0 104 0 16 32 0 0-16 0-120 0-16L336 0 272 0zm71.2 177.7l-7.2-3.6-7.2 3.6c-17.9 8.9-43.7 27.1-65.2 53.4C242 257.5 224 292.9 224 336c0 33.2 14.9 80.2 57.1 115L259.5 478l-3.5 4.4 0 5.6 0 8 0 16 16 0 128 0 16 0 0-16 0-8 0-5.6-3.5-4.4L390.9 451c42.3-34.8 57.1-81.7 57.1-115c0-43.1-18-78.5-39.6-104.9c-21.5-26.3-47.4-44.4-65.2-53.4zM256 336c0-33.7 14-62.3 32.4-84.7c15.6-19 33.8-33 47.6-41.1c13.8 8.1 32 22.1 47.6 41.1C402 273.7 416 302.3 416 336c0 27.3-13.9 70-56.9 98.7l-14.5 9.7L355.5 458l17.6 22-74.2 0 17.6-22 10.9-13.6-14.5-9.7C269.9 406 256 363.3 256 336zM32 320l64 0 0 160-64 0 0-160zm352-8a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default FishingRod;