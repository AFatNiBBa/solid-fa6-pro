
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=duotone dreidel}
 * @preview ![dreidel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dreidel.svg)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M89.4 153.4c79.1 79.1 158.2 158.2 237.3 237.3c22.9-22.9 45.8-45.8 68.7-68.7c18.7-18.7 18.7-49.1 0-67.9L333.3 192 438.6 86.6c12.5-12.5 12.5-32.8 0-45.3C432.4 35.1 424.2 32 416 32s-16.4 3.1-22.6 9.4L288 146.7 225.9 84.7c-18.7-18.7-49.1-18.7-67.9 0c-22.9 22.9-45.8 45.8-68.7 68.7z" />
        <path d="M326.6 390.6L89.4 153.4 18.7 224C6.7 236 0 252.3 0 269.3L0 416c0 35.3 28.7 64 64 64l146.7 0c17 0 33.3-6.7 45.3-18.7l70.6-70.6z" />
    </Icon>
);

export default Dreidel;