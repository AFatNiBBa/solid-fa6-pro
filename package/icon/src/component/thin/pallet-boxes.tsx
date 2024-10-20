
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-boxes` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-boxes?s=thin pallet-boxes}
 * @preview ![pallet-boxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pallet-boxes.svg)
 */
const PalletBoxes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M272 16L112 16C94.3 16 80 30.3 80 48l0 192c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32zM112 0L272 0c26.5 0 48 21.5 48 48l0 192c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48L64 48C64 21.5 85.5 0 112 0zM528 112l-96 0c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32zM432 96l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zM0 360c0-4.4 3.6-8 8-8l80 0 232 0 232 0 80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-72 0 0 128 72 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0-232 0L88 512 8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8l72 0 0-128L8 368c-4.4 0-8-3.6-8-8zM96 496l216 0 0-128L96 368l0 128zm232 0l216 0 0-128-216 0 0 128z" />
    </Icon>
);

export default PalletBoxes;