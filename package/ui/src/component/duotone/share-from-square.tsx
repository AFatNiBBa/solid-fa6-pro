
import { Icon, generic } from "../../index";

/**
 * A component that renders the `share-from-square` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-from-square?s=duotone share-from-square}
 * @preview ![share-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/share-from-square.svg)
 */
const ShareFromSquare: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32C35.8 32 0 67.8 0 112z" />
        <path d="M352 224l0 64c0 17.7 14.3 32 32 32l3.7 0c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7L352 96l-80 0c-79.5 0-144 64.5-144 144c0 93.4 82.8 134.8 100.6 142.6c2.2 1 4.6 1.4 7.1 1.4l2.5 0c9.8 0 17.8-8 17.8-17.8c0-8.3-5.9-15.5-12.8-20.3c-8.9-6.2-19.2-18.2-19.2-40.5c0-45 36.5-81.5 81.5-81.5l46.5 0z" />
    </Icon>
);

export default ShareFromSquare;