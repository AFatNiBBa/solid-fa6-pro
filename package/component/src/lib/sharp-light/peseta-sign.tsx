
import { Icon } from "../../index";

/**
 * A component that renders the `peseta-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peseta-sign?s=sharp-light peseta-sign}
 * @preview ![peseta-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/peseta-sign.svg)
 */
const PesetaSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 32L32 32l0 16 0 112L0 160l0 32 32 0 0 112 0 160 0 16 32 0 0-16 0-144 144 0c74.1 0 135.2-56 143.1-128l32.9 0 0-32-32.9 0c-8-72-69-128-143.1-128L48 32zM318.9 160L64 160l0-96 144 0c56.4 0 103.1 41.7 110.9 96zM64 192l254.9 0c-7.8 54.3-54.4 96-110.9 96L64 288l0-96z" />
    </Icon>
);

export default PesetaSign;