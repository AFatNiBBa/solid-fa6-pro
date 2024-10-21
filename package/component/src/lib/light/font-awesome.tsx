
import { Icon } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=light font-awesome}
 * @preview ![font-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/font-awesome.svg)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm55.5 64c5.4-9.4 8.6-20.3 8.6-32C128 28.7 99.3 0 64 0S0 28.7 0 64c0 23.7 12.9 44.4 32 55.4l0 8.6 0 288 0 32 0 64 32 0 0-64 405.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L119.4 96zM64 128l397 0L402.8 259c-3.7 8.3-3.7 17.7 0 26L461 416 64 416l0-288z" />
    </Icon>
);

export default FontAwesome;