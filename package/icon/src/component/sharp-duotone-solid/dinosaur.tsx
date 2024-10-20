
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dinosaur` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dinosaur?s=sharp-duotone-solid dinosaur}
 * @preview ![dinosaur](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dinosaur.svg)
 */
const Dinosaur: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 337.8L0 352 0 480l0 32 32 0 160 0 32 0 16 0 16 0 32 0 0-50.4L109.4 431.8 96 429.6 96 416l0-48 0-16 32 0 0 16 0 34.4 178.6 29.8 13.4 2.2 0 13.6 0 15.3c5.3 .4 10.6 .7 16 .7c16.6 0 32.7-2.1 48-6l0 54 128 0 0-87.9c76.5-35.9 128-113.5 128-201.5l0-30.6C640 86 554 0 448 0L424 0 408 32 368 48l0 80 80 0 32 0c35.3 0 64 28.7 64 64l0 64-53.3 0-66.1-49.6c-40.2-30.1-89-46.4-139.2-46.4c-57.7 0-113.4 21.5-156.1 60.3L10.5 328.3 0 337.8zM480 48a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M448 48a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Dinosaur;