
import { Icon } from "../../index";

/**
 * A component that renders the `face-tissue` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tissue?s=sharp-thin face-tissue}
 * @preview ![face-tissue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-tissue.svg)
 */
const FaceTissue: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.5 16 16 123.5 16 256c0 10.5 .7 20.8 2 31L2.1 289C.7 278.2 0 267.2 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256c-11.2 0-22.2-.7-33-2.1l2-15.9c10.1 1.3 20.5 2 31 2c132.5 0 240-107.5 240-240S388.5 16 256 16zm48 326.4l4.4 3 44.1 29.4 27.8-13.9 7.2-3.6 7.2 14.3-7.2 3.6-32 16-4.2 2.1-3.9-2.6-43.6-29-43.6 29-6.7 4.4-8.9-13.3 6.7-4.4 48-32 4.4-3zM139.6 160.8l80 40 14.3 7.2-14.3 7.2-80 40-7.2 3.6-7.2-14.3 7.2-3.6L198.1 208l-65.7-32.8-7.2-3.6 7.2-14.3 7.2 3.6zm240-3.6l7.2 14.3-7.2 3.6L313.9 208l65.7 32.8 7.2 3.6-7.2 14.3-7.2-3.6-80-40L278.1 208l14.3-7.2 80-40 7.2-3.6zM79.2 389.1L57.3 454.7l65.6-21.9 9.4-3.1 7 7 41.4 41.4 24.5-171.2L33.9 331.3l41.4 41.4 7 7-3.1 9.4zM0 320l19.8-2.8 187.7-26.8L224 288l-2.4 16.5L194.8 492.2 192 512l-14.1-14.1L128 448 51 473.7 32 480l6.3-19L64 384 14.1 334.1 0 320z" />
    </Icon>
);

export default FaceTissue;