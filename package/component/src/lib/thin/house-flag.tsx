
import { Icon } from "../../index";

/**
 * A component that renders the `house-flag` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flag?s=thin house-flag}
 * @preview ![house-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/house-flag.svg)
 */
const HouseFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M456 0c-4.4 0-8 3.6-8 8l0 24s0 0 0 0l0 16 0 128 0 16s0 0 0 0l0 320 16 0 0-320 160 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L464 32l0-24c0-4.4-3.6-8-8-8zm8 176l0-128 160 0 0 128-160 0zm-48-38L276.8 33.6c-2.8-2.1-6.8-2.1-9.6 0l-256 192c-3.5 2.7-4.3 7.7-1.6 11.2s7.7 4.3 11.2 1.6L64 206l0 242c0 35.3 28.7 64 64 64l288 0 0-16-64 0 0-152c0-13.3-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24l0 152-64 0c-26.5 0-48-21.5-48-48l0-254L272 50 416 158l0-20zM336 344l0 152-128 0 0-152c0-4.4 3.6-8 8-8l112 0c4.4 0 8 3.6 8 8z" />
    </Icon>
);

export default HouseFlag;