
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-box` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-box?s=thin pallet-box}
 * @preview ![pallet-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pallet-box.svg)
 */
const PalletBox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 16c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32l80 0 0 120c0 3.1 1.8 6 4.7 7.3s6.2 .8 8.5-1.2L320 98.5l50.8 43.5c2.4 2 5.7 2.5 8.6 1.2s4.7-4.1 4.7-7.3l0-120 80 0zM272 16l96 0 0 102.6L325.2 81.9c-3-2.6-7.4-2.6-10.4 0L272 118.6 272 16zM176 0c-26.5 0-48 21.5-48 48l0 192c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48L176 0zM0 360c0 4.4 3.6 8 8 8l72 0 0 128L8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 232 0 232 0 80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-72 0 0-128 72 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0-232 0L88 352 8 352c-4.4 0-8 3.6-8 8zM96 496l0-128 216 0 0 128L96 496zm232 0l0-128 216 0 0 128-216 0z" />
    </Icon>
);

export default PalletBox;