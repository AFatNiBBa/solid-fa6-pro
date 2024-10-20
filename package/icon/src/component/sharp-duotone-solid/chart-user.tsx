
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-user?s=sharp-duotone-solid chart-user}
 * @preview ![chart-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-user.svg)
 */
const ChartUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 0l32 0L608 0l32 0 0 32 0 352 0 32-32 0-283.4 0-19.2-64L576 352l0-288L224 64l0 49.1C205.2 102.2 183.3 96 160 96l0-64 0-32zM286.1 192L320 158.1l17 17 47 47 55-55-39-39 16-16 112 0 0 112-16 16-39-39-72 72-17 17-17-17-64-64-17-17z" />
        <path d="M160 320a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM320 512L272 352 48 352 0 512l320 0z" />
    </Icon>
);

export default ChartUser;