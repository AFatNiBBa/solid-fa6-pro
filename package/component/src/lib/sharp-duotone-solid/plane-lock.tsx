
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-lock?s=sharp-duotone-solid plane-lock}
 * @preview ![plane-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plane-lock.svg)
 */
const PlaneLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 96 192-64 0 80-64 48 0 64 128-32 128 32 0-64-64-48 0-80 64 21.3 0-53.3 32 0 0-16c0-15 3-29.4 8.3-42.5L320 160l0-66.3C320 59.5 292 0 256 0c-35 0-64 59.5-64 93.7l0 66.3L0 288z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default PlaneLock;