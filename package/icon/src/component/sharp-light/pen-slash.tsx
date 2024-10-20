
import { Icon } from "../../index";

/**
 * A component that renders the `pen-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-slash?s=sharp-light pen-slash}
 * @preview ![pen-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pen-slash.svg)
 */
const PenSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M553.4 150.6L576 128l-22.6-22.6L470.6 22.6 448 0 425.4 22.6 294 154l25.3 20 60-60 82.7 82.7-50.3 50.3 25.3 20L553.4 150.6zM320.7 338.1L208.2 450.5 104.8 471.2l20.7-103.4L228.2 265.1l-25.3-20L96 352 70.8 478 64 512l34-6.8L224 480 346 358l-25.3-20zm164-164L401.9 91.3 448 45.3 530.7 128l-46.1 46.1zM32.4 10L19.9 .1 .1 25.3l12.6 9.9L607.8 502.2l12.6 9.9 19.8-25.2-12.6-9.9L32.4 10z" />
    </Icon>
);

export default PenSlash;