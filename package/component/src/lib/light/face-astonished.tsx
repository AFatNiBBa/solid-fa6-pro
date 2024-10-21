
import { Icon } from "../../index";

/**
 * A component that renders the `face-astonished` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-astonished?s=light face-astonished}
 * @preview ![face-astonished](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/face-astonished.svg)
 */
const FaceAstonished: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32zm-96 0c0-35.3 28.7-64 64-64s64 28.7 64 64l0 32c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-32zM152.4 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM192 128c-4.4 0-8.8 .3-13 .9c-21.2 2.8-40.6 12.4-56.1 26.8c-6.5 6-16.6 5.7-22.6-.8s-5.7-16.6 .8-22.6c20.1-18.7 45.5-31.5 73.7-35.2c5.6-.7 11.4-1.1 17.2-1.1c8.8 0 16 7.2 16 16s-7.2 16-16 16zm141 .9c-4.3-.6-8.6-.9-13-.9c-8.8 0-16-7.2-16-16s7.2-16 16-16c5.8 0 11.6 .4 17.2 1.1c28.2 3.7 53.7 16.4 73.7 35.2c6.5 6 6.8 16.2 .8 22.6s-16.2 6.8-22.6 .8c-15.5-14.5-34.8-24-56.1-26.8z" />
    </Icon>
);

export default FaceAstonished;