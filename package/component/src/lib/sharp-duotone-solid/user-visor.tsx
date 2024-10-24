
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-visor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-visor?s=sharp-duotone-solid user-visor}
 * @preview ![user-visor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-visor.svg)
 */
const UserVisor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M105.3 176l237.4 0c-19 46.9-65 80-118.7 80s-99.7-33.1-118.7-80zM124.1 48C147.5 18.7 183.6 0 224 0s76.5 18.7 99.9 48L124.1 48zM280 456c13.3-29.3 26.7-58.7 40-88l40 88-8 8-24-24c-13.3 8-26.7 16-40 24c-2.7-2.7-5.3-5.3-8-8z" />
        <path d="M80 48l0 128 288 0 0-128L80 48zm48 48l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32zM384 304L64 304 0 512l448 0L384 304zM328 440l-40 24-8-8 40-88 40 88-8 8-24-24z" />
    </Icon>
);

export default UserVisor;