
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pinball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pinball?s=duotone pinball}
 * @preview ![pinball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pinball.svg)
 */
const Pinball: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M256 128a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
        <path d="M412.1 463.4c-7.2 13.2-23.1 19.9-37.9 15L66.3 379.3c-12.1-3.9-22.8-10-32-17.7c-40.6-34.1-46-94.7-11.9-135.3s94.6-45.9 135.2-11.8l246 208.3c12.6 9.8 15.8 27.1 8.4 40.6zM96 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Pinball;