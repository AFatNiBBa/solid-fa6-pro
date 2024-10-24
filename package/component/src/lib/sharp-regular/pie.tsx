
import { Icon } from "../../index";

/**
 * A component that renders the `pie` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pie?s=sharp-regular pie}
 * @preview ![pie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pie.svg)
 */
const Pie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 240l-12.7 0C497.7 137.8 401.4 64 288 64S78.3 137.8 44.7 240L32 240 0 240l0 64 32 0 9.2 0 63.9-30.4 6-2.9 6.3 2.3L200 303l82.5-30 5.5-2 5.5 2L376 303l82.5-30 6.3-2.3 6.1 2.9L534.8 304l9.2 0 32 0 0-64-32 0zM96 448l384 0 38.7-116.2L475.1 311l-29.7 89-314.8 0-29.7-89L57.3 331.8 96 448zM206.3 151.2l-16 32-7.2 14.3-28.6-14.3 7.2-14.3 16-32 7.2-14.3 28.6 14.3-7.2 14.3zm192-14.3l16 32 7.2 14.3-28.6 14.3-7.2-14.3-16-32-7.2-14.3 28.6-14.3 7.2 14.3zM304 144l0 32 0 16-32 0 0-16 0-32 0-16 32 0 0 16z" />
    </Icon>
);

export default Pie;