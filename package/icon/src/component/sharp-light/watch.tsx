
import { Icon } from "../../index";

/**
 * A component that renders the `watch` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=sharp-light watch}
 * @preview ![watch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/watch.svg)
 */
const Watch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0L80 0 304 0l16 0 0 16 0 96-1 0c39.9 35.2 65 86.7 65 144s-25.1 108.8-65 144l1 0 0 96 0 16-16 0L80 512l-16 0 0-16 0-96 1 0C25.1 364.8 0 313.3 0 256s25.1-108.8 65-144l-1 0 0-96L64 0zM96 422.3L96 480l192 0 0-57.7c-28.2 16.3-61 25.7-96 25.7s-67.8-9.4-96-25.7zM288 32L96 32l0 57.7C124.2 73.3 157 64 192 64s67.8 9.3 96 25.7L288 32zm64 224A160 160 0 1 0 32 256a160 160 0 1 0 320 0zM208 176l0 71.4 40.9 27.2 13.3 8.9-17.8 26.6-13.3-8.9-48-32-7.1-4.8 0-8.6 0-80 0-16 32 0 0 16z" />
    </Icon>
);

export default Watch;