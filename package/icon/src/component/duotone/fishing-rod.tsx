
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fishing-rod` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fishing-rod?s=duotone fishing-rod}
 * @preview ![fishing-rod](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fishing-rod.svg)
 */
const FishingRod: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 320L0 480c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32l-8 0 0-55.2c0-75 49.7-140.9 121.8-161.5L287 49.2c2.9-.8 5.8-1.2 8.8-1.2C313.6 48 328 62.4 328 80.1l0 55.9c0 13.3 10.7 24 24 24s24-10.7 24-24l0-55.9C376 35.9 340.1 0 295.9 0c-7.4 0-14.9 1-22 3.1L196.7 25.1C103.9 51.6 40 136.4 40 232.8L40 288l-8 0c-17.7 0-32 14.3-32 32z" />
        <path d="M345 195.9c-33.5 20.3-89 76.6-89 148.1c0 32 16 80 64 112l-27.3 27.3c-3 3-4.7 7.1-4.7 11.3l0 1.4c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-1.4c0-4.2-1.7-8.3-4.7-11.3L384 456c48-32 64-80 64-112c0-71.6-55.6-127.8-89-148.1c-4.3-2.6-9.6-2.6-14 0zM360 288a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FishingRod;