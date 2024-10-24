
import { Icon } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=light square-quarters}
 * @preview ![square-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-quarters.svg)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M55.7 65.1L224 233.4 392.3 65.1c-2.6-.7-5.4-1.1-8.3-1.1L64 64c-2.9 0-5.6 .4-8.3 1.1zM33.1 87.7C32.4 90.4 32 93.1 32 96l0 320c0 2.9 .4 5.6 1.1 8.3L201.4 256 33.1 87.7zM55.7 446.9c2.6 .7 5.4 1.1 8.3 1.1l320 0c2.9 0 5.6-.4 8.3-1.1L224 278.6 55.7 446.9zm359.2-22.6c.7-2.6 1.1-5.4 1.1-8.3l0-320c0-2.9-.4-5.6-1.1-8.3L246.6 256 414.9 424.3zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default SquareQuarters;