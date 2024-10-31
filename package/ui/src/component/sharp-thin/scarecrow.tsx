
import { Icon } from "../../index";

/**
 * A component that renders the `scarecrow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scarecrow?s=sharp-thin scarecrow}
 * @preview ![scarecrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/scarecrow.svg)
 */
const Scarecrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 192a88 88 0 1 0 0-176 88 88 0 1 0 0 176zm0 16c-43.3 0-80.4-26.4-96-64l-83 0 10.2 20.4 3 6-5.3 4L29.3 192l23.5 17.6 5.3 4-3 6L44.9 240l91.1 0 9.8 0-1.9 9.6L115 393.5l49.4-24.7 3.8-1.9 3.7 2.1 52 29.7 52-29.7 3.7-2.1 3.8 1.9 49.4 24.7-28.8-144-1.9-9.6 9.8 0 91.1 0-10.2-20.4-3-6 5.3-4L418.7 192l-23.5-17.6-5.3-4 3-6L403.1 144l-83 0c-15.7 37.6-52.8 64-96 64zM328 104c0 8.3-1 16.3-2.8 24l90.8 0 12.9 0-5.8 11.6-13 26 26.7 20 8.5 6.4-8.5 6.4-26.7 20 13 26 5.8 11.6L416 256l-94.2 0 30.1 150.4 3.2 16-14.6-7.3-60.2-30.1L228 414.9l-4 2.3-4-2.3-52.3-29.9-60.2 30.1-14.6 7.3 3.2-16L126.2 256 32 256l-12.9 0 5.8-11.6 13-26-26.7-20L2.7 192l8.5-6.4 26.7-20-13-26L19.1 128 32 128l90.8 0c-1.8-7.7-2.8-15.7-2.8-24C120 46.6 166.6 0 224 0s104 46.6 104 104zM176 88a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80 0a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM216 504l0-67.1 8 4.6 8-4.6 0 67.1 0 8-16 0 0-8z" />
    </Icon>
);

export default Scarecrow;