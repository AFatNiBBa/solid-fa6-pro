
import { Icon } from "../../index";

/**
 * A component that renders the `house-flag` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flag?s=light house-flag}
 * @preview ![house-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/house-flag.svg)
 */
const HouseFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 0c-8.8 0-16 7.2-16 16l0 16 0 32 0 96 0 32 0 320 32 0 0-320 144 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L480 32l0-16c0-8.8-7.2-16-16-16zm16 160l0-96 128 0 0 96-128 0zm-64-24L281.6 35.2c-5.7-4.3-13.5-4.3-19.2 0l-256 192c-7.1 5.3-8.5 15.3-3.2 22.4s15.3 8.5 22.4 3.2L64 224l0 216c0 39.8 32.2 72 72 72l272 0c2.7 0 5.4-.2 8-.4l0-32.4c-2.6 .5-5.3 .8-8 .8l-64 0 0-128c0-17.7-14.3-32-32-32l-80 0c-17.7 0-32 14.3-32 32l0 128-64 0c-22.1 0-40-17.9-40-40l0-240L272 68 416 176l0-40zM312 352l0 128-80 0 0-128 80 0z" />
    </Icon>
);

export default HouseFlag;