
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-rotate-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-rotate-right?s=light arrow-rotate-right}
 * @preview ![arrow-rotate-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-rotate-right.svg)
 */
const ArrowRotateRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 192c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 92.6C408.8 75.5 337.5 32 256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c79.9 0 150-41.8 189.7-104.8c6.6-10.4-1.4-23.2-13.7-23.2c-6 0-11.4 3.2-14.7 8.2C383.1 413 323.6 448 256 448C150 448 64 362 64 256S150 64 256 64c71.1 0 133.1 38.6 166.3 96L336 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0z" />
    </Icon>
);

export default ArrowRotateRight;