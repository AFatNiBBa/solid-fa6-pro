
import { Icon } from "../../index";

/**
 * A component that renders the `trowel-bricks` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel-bricks?s=thin trowel-bricks}
 * @preview ![trowel-bricks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/trowel-bricks.svg)
 */
const TrowelBricks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232.4 18.4c-4.7-2.9-10.6-3.2-15.6-.7l-192 96c-5.4 2.7-8.8 8.3-8.8 14.3s3.4 11.6 8.8 14.3l192 96c5 2.5 10.9 2.2 15.6-.7s7.6-8.1 7.6-13.6l0-192c0-5.5-2.9-10.7-7.6-13.6zM256 32l0 88 88 0 0-8c0-17.7 14.3-32 32-32l88 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-88 0c-17.7 0-32-14.3-32-32l0-8-88 0 0 88c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4S256 20.9 256 32zM360 144c0 8.8 7.2 16 16 16l88 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-88 0c-8.8 0-16 7.2-16 16l0 16 0 16zM288 384l-48 0 0 112 240 0c8.8 0 16-7.2 16-16l0-72 0-8 0-16-192 0-16 0zm-64-16l16 0 32 0 16 0 0-16 0-80c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 128 0 8 0 72c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-80c0-17.7 14.3-32 32-32l192 0zm0 16L32 384c-8.8 0-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16l192 0 0-112zm272-16l0-96c0-8.8-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16l0 96 192 0z" />
    </Icon>
);

export default TrowelBricks;