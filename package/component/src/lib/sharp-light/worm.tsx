
import { Icon } from "../../index";

/**
 * A component that renders the `worm` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/worm?s=sharp-light worm}
 * @preview ![worm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/worm.svg)
 */
const Worm: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 192l0-27.8-27.5-3.9-31.1-4.4c-30.7-4.4-53.4-30.6-53.4-61.6C320 59.9 347.9 32 382.3 32L480 32l0 72 0 56 0 48 0 148c0 68.5-55.5 124-124 124s-124-55.5-124-124l0-36c0-44.2-35.8-80-80-80c-39.8 0-72 32.2-72 72l0 144 0 24-48 0 0-24 0-144c0-66.3 53.7-120 120-120c70.7 0 128 57.3 128 128l0 36c0 42 34 76 76 76s76-34 76-76l0-164zM382.3 0C330.2 0 288 42.2 288 94.3c0 46.9 34.5 86.7 80.9 93.3L400 192l0 164c0 24.3-19.7 44-44 44s-44-19.7-44-44l0-36c0-88.4-71.6-160-160-160C68.1 160 0 228.1 0 312L0 456l0 24 0 32 32 0 48 0 32 0 0-32 0-24 0-144c0-22.1 17.9-40 40-40c26.5 0 48 21.5 48 48l0 36c0 86.2 69.8 156 156 156s156-69.8 156-156l0-148 0-48 0-56 0-72 0-32L480 0 382.3 0zM408 112a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Worm;