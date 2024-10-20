
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands?s=sharp-duotone-solid hands}
 * @preview ![hands](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hands.svg)
 */
const Hands: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M144 155.4l12 20.8L174.3 208l28.2 0 14.2-22.7-19.1-33.1-12-20.8-41.6 24zm46.4-63.7l12 20.8 28.7 49.8 19.6-31.4 9.2-14.7-16-27.7-12-20.8-41.6 24zM236.7 28l12 20.8 39 67.5 7.1 4.4 27.1 17 60.2 37.6C443 213.4 480 280.2 480 352l0 8c0 5-.2 9.9-.6 14.7c39.6-24.5 64.4-68 64.5-115.6L544 160l0-32-64-.1 0 32 0 49.3-57.1-98.9c-16.5-28.6-33-57.1-49.5-85.7L361.4 4 319.8 28l12 20.8 49.5 85.7-20.8 12L290.3 24.8 278.3 4 236.7 28z" />
        <path d="M305 164.9l-27.1-17-33.9 54.3 27.1 17L317.2 248 224 248s0 0 0 0L88 248l-24 0 0 48 24 0 136 0 0 24L56 320l-24 0 0 48 24 0 168 0 0 24L88 392l-24 0 0 48 24 0 136 0 0 24-104 0-24 0 0 48 24 0 176 0c83.9 0 152-68.1 152-152c0 0 0 0 0 0l0-8s0 0 0 0c0-60.8-31.3-117.3-82.9-149.5L305 164.9z" />
    </Icon>
);

export default Hands;