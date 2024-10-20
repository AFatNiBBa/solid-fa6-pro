
import { Icon } from "../../index";

/**
 * A component that renders the `explosion` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/explosion?s=sharp-regular explosion}
 * @preview ![explosion](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/explosion.svg)
 */
const Explosion: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M312 24l0-24L264 0l0 24 0 48 0 24 48 0 0-24 0-48zM24 464L0 464l0 48 24 0 528 0 24 0 0-48-24 0-162.8 0c-10.8-45.9-52-80-101.2-80s-90.4 34.1-101.2 80L24 464zm213.4 0c9-18.9 28.3-32 50.6-32s41.6 13.1 50.6 32l-101.2 0zM32 336l29.5 48 29.5 48 56.4 0-29.5-48 10.1 0 53.6 0-5.9-53.3-4.9-43.8L198 304.4 252 339 270 277.5l17.6-59.9 10.2 35.6 24.9 87.3 58.1-69.7 54.6-65.5L401.8 322.8 384.4 384l63.6 0 10.1 0-29.5 48 56.4 0 29.5-48L544 336l-46.1 0-10.3 0L448 336l13.7-48 49.7-173.9L544 0 468 91.2 381.2 195.4 344 240l-16-55.8L312 128l-48 0-25.9 88L224 264l-42.1-27L164 225.4 112 192l6.8 61.5 3.8 34.5 5.3 48-39.6 0-8.7 0L32 336z" />
    </Icon>
);

export default Explosion;