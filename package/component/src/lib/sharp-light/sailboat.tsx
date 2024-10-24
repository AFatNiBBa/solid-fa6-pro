
import { Icon } from "../../index";

/**
 * A component that renders the `sailboat` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sailboat?s=sharp-light sailboat}
 * @preview ![sailboat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sailboat.svg)
 */
const Sailboat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 352l-32 0 0-32 0-267.7L256 0l32 41.4L503.3 320 528 352l-40.4 0L288 352zm174.8-32L288 93.7 288 320l174.8 0zM40 384l496 0 40 0-24 32-72 96L96 512 24 416 0 384l40 0zm24 32l48 64 352 0 48-64L64 416zm160-64l-32 0L85.5 352 48 352l19.6-32L192 116.4 224 64l0 61.4L224 320l0 32zM192 177.7L105.1 320l86.9 0 0-142.3z" />
    </Icon>
);

export default Sailboat;