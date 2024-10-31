
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=thin rotate-left}
 * @preview ![rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/rotate-left.svg)
 */
const RotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M419.9 384.1c-70.7 90.5-201.4 106.6-292 35.8C105 402 86.9 380.2 73.7 356.3c-2.1-3.9-7-5.3-10.9-3.2s-5.3 7-3.2 10.9c14.2 25.8 33.7 49.3 58.4 68.6c97.5 76.2 238.3 58.9 314.4-38.6s58.9-238.3-38.6-314.4C304.1 9.3 177.5 18.5 98.6 96.6l11.3 11.3c73.3-72.5 190.8-81 274.2-15.8c90.5 70.7 106.6 201.4 35.8 292zM32 192c-4.4 0-8-3.6-8-8L24 64c0-3.2 1.9-6.2 4.9-7.4s6.4-.6 8.7 1.7l120 120c2.3 2.3 3 5.7 1.7 8.7s-4.2 4.9-7.4 4.9L32 192zm120 16c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2L49 47c-6.9-6.9-17.2-8.9-26.2-5.2S8 54.3 8 64L8 184c0 13.3 10.7 24 24 24l120 0z" />
    </Icon>
);

export default RotateLeft;