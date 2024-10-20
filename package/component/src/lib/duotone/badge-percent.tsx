
import { Icon, generic } from "../../index";

/**
 * A component that renders the `badge-percent` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/badge-percent?s=duotone badge-percent}
 * @preview ![badge-percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/badge-percent.svg)
 */
const BadgePercent: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 36.8 20.7 68.8 51.1 84.9C41 373.8 49 411 75 437s63.3 34 96.1 23.9C187.2 491.3 219.2 512 256 512s68.8-20.7 84.9-51.1C373.8 471 411 463 437 437s34-63.3 23.9-96.1C491.3 324.8 512 292.8 512 256s-20.7-68.8-51.1-84.9C471 138.2 463 101 437 75s-63.3-34-96.1-23.9C324.8 20.7 292.8 0 256 0s-68.8 20.7-84.9 51.1C138.2 41 101 49 75 75s-34 63.3-23.9 96.1C20.7 187.2 0 219.2 0 256zm224-64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM175 303L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L209 337c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9zm177 17a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M224 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM352 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM337 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L175 303c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L337 209z" />
    </Icon>
);

export default BadgePercent;