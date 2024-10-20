
import { Icon } from "../../index";

/**
 * A component that renders the `watch` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=sharp-thin watch}
 * @preview ![watch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/watch.svg)
 */
const Watch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0l8 0L312 0l8 0 0 8 0 104-1 0c39.9 35.2 65 86.7 65 144c0 56.9-24.7 108-64 143.1L320 504l0 8-8 0L72 512l-8 0 0-8 0-104.9C24.7 364 0 312.9 0 256c0-57.3 25.1-108.8 65-144l-1 0L64 8l0-8zM80 412l0 84 224 0 0-84c-31.5 22.7-70.2 36-112 36s-80.5-13.4-112-36zM304 16L80 16l0 84c31.5-22.7 70.2-36 112-36s80.5 13.4 112 36l0-84zm64 240A176 176 0 1 0 16 256a176 176 0 1 0 352 0zM200 160l0 92 60.8 45.6 6.4 4.8-9.6 12.8-6.4-4.8-64-48L184 260l0-4 0-96 0-8 16 0 0 8z" />
    </Icon>
);

export default Watch;