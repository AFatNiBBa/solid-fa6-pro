
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scarecrow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scarecrow?s=duotone scarecrow}
 * @preview ![scarecrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scarecrow.svg)
 */
const Scarecrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 96c0 11.2 1.9 22 5.5 32c13.2 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96zm80-16a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM192 400.1l0 79.9c0 17.7 14.3 32 32 32s32-14.3 32-32l0-79.9-24.1 13.8c-2.5 1.4-5.2 2.1-7.9 2.1s-5.5-.7-7.9-2.1c-8-4.6-16-9.2-24.1-13.8zM272 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M133.5 128L32 128c-5.9 0-11.3 3.2-14.1 8.5s-2.5 11.5 .8 16.4l7.6 11.4L6.4 179.2C2.4 182.2 0 187 0 192s2.4 9.8 6.4 12.8l19.9 14.9-7.6 11.4c-3.3 4.9-3.6 11.2-.8 16.4s8.2 8.5 14.1 8.5l73 0c10.1 0 17.7 9.2 15.7 19.1L96.3 396.9c-1.2 6.2 1.2 12.5 6.3 16.1s11.8 4 17.3 .9L160.1 391c4.9-2.8 11-2.8 15.9 0l40.1 22.9c4.9 2.8 11 2.8 15.9 0L272.1 391c4.9-2.8 11-2.8 15.9 0l40.1 22.9c5.4 3.1 12.2 2.8 17.3-.9s7.6-10 6.3-16.1L327.3 275.1c-2-9.9 5.6-19.1 15.7-19.1l73 0c5.9 0 11.3-3.2 14.1-8.5s2.5-11.5-.8-16.4l-7.6-11.4 19.9-14.9c4-3 6.4-7.8 6.4-12.8s-2.4-9.8-6.4-12.8l-19.9-14.9 7.6-11.4c3.3-4.9 3.6-11.2 .8-16.4s-8.2-8.5-14.1-8.5l-101.5 0c-13.2 37.3-48.7 64-90.5 64s-77.4-26.7-90.5-64z" />
    </Icon>
);

export default Scarecrow;