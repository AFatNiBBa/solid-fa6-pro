
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=duotone angle}
 * @preview ![angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/angle.svg)
 */
const Angle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M218.5 218.1c21.4 17.4 40.4 37.7 56.2 60.4l40.8-25.3c-20.7-30.1-46.1-56.7-75.1-78.9l-21.9 43.8zm73.1 87.6c13.3 24.2 23.3 50.5 29.5 78.3l49 0c-7-37-19.8-71.9-37.6-103.7l-40.8 25.3z" />
        <path d="M238.3 35.4c15.8 7.9 22.2 27.1 14.3 42.9L83.8 416 416 416c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l192-384c7.9-15.8 27.1-22.2 42.9-14.3z" />
    </Icon>
);

export default Angle;