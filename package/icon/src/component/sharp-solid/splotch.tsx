
import { Icon } from "../../index";

/**
 * A component that renders the `splotch` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/splotch?s=sharp-solid splotch}
 * @preview ![splotch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/splotch.svg)
 */
const Splotch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0h80l30.9 103c10.8 35.9 37.7 64.7 72.8 77.9L512 208v64l-73.2 54.9c-34 25.5-52 67-47.3 109.3L400 512H304l-73.3-58.6c-4.5-3.6-9.3-6.7-14.5-9.2c-15.8-7.9-33.7-10.4-51-7.3L16 464V376l24.3-29.1c14.6-17.4 22.6-39.4 22.6-62.1c0-18.8-5.5-37.2-15.8-53L0 160V80L101.1 97.2c44 7.5 88.5-10.1 115.5-45.5L256 0z" />
    </Icon>
);

export default Splotch;