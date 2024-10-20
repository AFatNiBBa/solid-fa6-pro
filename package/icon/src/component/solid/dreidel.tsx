
import { Icon } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=solid dreidel}
 * @preview ![dreidel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dreidel.svg)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M438.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 146.7 225.9 84.7c-18.7-18.7-49.1-18.7-67.9 0l-57.4 57.4L337.9 379.3l57.4-57.4c18.7-18.7 18.7-49.1 0-67.9L333.3 192 438.6 86.6zM315.3 401.9L78.1 164.7 18.7 224C6.7 236 0 252.3 0 269.3L0 416c0 35.3 28.7 64 64 64l146.7 0c17 0 33.3-6.7 45.3-18.7l59.3-59.3z" />
    </Icon>
);

export default Dreidel;