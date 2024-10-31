
import { Icon } from "../../index";

/**
 * A component that renders the `worm` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/worm?s=light worm}
 * @preview ![worm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/worm.svg)
 */
const Worm: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 192l0-27.8-27.5-3.9-31.1-4.4c-30.7-4.4-53.4-30.6-53.4-61.6C320 59.9 347.9 32 382.3 32l40.1 0C454.2 32 480 57.8 480 89.6l0 70.4 0 48 0 148c0 68.5-55.5 124-124 124s-124-55.5-124-124l0-36c0-44.2-35.8-80-80-80c-39.8 0-72 32.2-72 72l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-66.3 53.7-120 120-120c70.7 0 128 57.3 128 128l0 36c0 42 34 76 76 76s76-34 76-76l0-164zM382.3 0C330.2 0 288 42.2 288 94.3c0 46.9 34.5 86.7 80.9 93.3L400 192l0 164c0 24.3-19.7 44-44 44s-44-19.7-44-44l0-36c0-88.4-71.6-160-160-160C68.1 160 0 228.1 0 312L0 456c0 30.9 25.1 56 56 56s56-25.1 56-56l0-144c0-22.1 17.9-40 40-40c26.5 0 48 21.5 48 48l0 36c0 86.2 69.8 156 156 156s156-69.8 156-156l0-148 0-48 0-70.4C512 40.1 471.9 0 422.4 0L382.3 0zM408 112a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Worm;