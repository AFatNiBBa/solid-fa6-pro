
import { Icon } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=sharp-regular ramp-loading}
 * @preview ![ramp-loading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ramp-loading.svg)
 */
const RampLoading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 48l288 0 0 264.4 48 88L416 48l0-48L368 0 80 0 32 0l0 48 0 352.4 48-88L80 48zm64 240l-14.2 0-6.8 12.5-96 176L7.6 512 48 512l352 0 40.4 0-19.4-35.5-96-176L318.2 288 304 288l-160 0zM88.4 464l69.8-128 131.5 0 69.8 128L88.4 464z" />
    </Icon>
);

export default RampLoading;