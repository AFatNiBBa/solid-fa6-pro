
import { Icon } from "../../index";

/**
 * A component that renders the `copyright` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copyright?s=sharp-thin copyright}
 * @preview ![copyright](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/copyright.svg)
 */
const Copyright: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176.8 335.2c-43.7-43.7-43.7-114.7 0-158.4s114.7-43.7 158.4 0l5.7 5.7 11.3-11.3-5.7-5.7c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0l5.7-5.7-11.3-11.3-5.7 5.7c-43.7 43.7-114.7 43.7-158.4 0z" />
    </Icon>
);

export default Copyright;