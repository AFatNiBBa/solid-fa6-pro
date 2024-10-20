
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=solid greater-than}
 * @preview ![greater-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/greater-than.svg)
 */
const GreaterThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
    </Icon>
);

export default GreaterThan;