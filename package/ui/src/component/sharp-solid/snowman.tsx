
import { Icon } from "../../index";

/**
 * A component that renders the `snowman` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowman?s=sharp-solid snowman}
 * @preview ![snowman](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/snowman.svg)
 */
const Snowman: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 96c0 18.7-5.4 36.2-14.7 51c9.3 9.8 16.8 21.3 22.1 34L408 160.2l0-40.2 0-24 48 0 0 24 0 19.6 22.5-9.7 22.1-9.5 18.9 44.1-22.1 9.5-56 24-73.6 31.5c-.6 11.8-3 23.1-6.9 33.6C394.7 292.6 416 335.8 416 384c0 52.3-25.1 98.8-64 128l-192 0c-38.9-29.2-64-75.7-64-128c0-48.2 21.3-91.4 55.1-120.8c-3.9-10.5-6.3-21.8-6.9-33.6L70.5 198.1l-56-24-22.1-9.5 18.9-44.1 22.1 9.5L56 139.6 56 120l0-24 48 0 0 24 0 40.2L152.6 181c5.3-12.7 12.8-24.2 22.1-34c-9.3-14.8-14.7-32.3-14.7-51c0-53 43-96 96-96s96 43 96 96zM272 272l-32 0 0 32 32 0 0-32zm0 96l0-32-32 0 0 32 32 0zM240 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-48 24l0 .3c0 2.9 .8 5.8 2.3 8.3L256 152l13.7-23.4c1.5-2.5 2.3-5.4 2.3-8.3l0-.3c0-8.8-7.2-16-16-16s-16 7.2-16 16zm32 88l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default Snowman;