
import { Icon } from "../../index";

/**
 * A component that renders the `capsules` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/capsules?s=sharp-thin capsules}
 * @preview ![capsules](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/capsules.svg)
 */
const Capsules: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 48c-53 0-96 43-96 96l0 112 192 0 0-112c0-53-43-96-96-96zM16 368c0 53 43 96 96 96s96-43 96-96l0-96L16 272l0 96zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112l0 24.2c3-32.2 19.3-63 47.3-83c50.7-36.2 120.5-23.6 156 28.1L555.7 300.6c35.5 51.7 23.2 123-27.5 159.2s-120.5 23.6-156-28.1L243.8 244.4c-11.5-16.8-18-35.7-19.8-54.8L224 368c0 61.9-50.1 112-112 112S0 429.9 0 368L0 144zm257 91.4l62.8 91.6L474.1 209.8l-60-87.5c-30.5-44.4-90.2-55.1-133.5-24.1c-43.5 31.1-54.2 92.5-23.6 137.2zM385.4 422.7c30.5 44.4 90.2 55.1 133.5 24.1c43.5-31.1 54.2-92.5 23.6-137.2L483.1 223 328.8 340.1l56.6 82.5z" />
    </Icon>
);

export default Capsules;