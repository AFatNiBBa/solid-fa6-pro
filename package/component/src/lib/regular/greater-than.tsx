
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=regular greater-than}
 * @preview ![greater-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/greater-than.svg)
 */
const GreaterThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M2.5 77.3c-5.9 11.9-1.1 26.3 10.7 32.2L306.3 256 13.3 402.5C1.4 408.5-3.4 422.9 2.5 434.7s20.3 16.7 32.2 10.7l336-168c8.1-4.1 13.3-12.4 13.3-21.5s-5.1-17.4-13.3-21.5l-336-168C22.9 60.6 8.5 65.4 2.5 77.3z" />
    </Icon>
);

export default GreaterThan;