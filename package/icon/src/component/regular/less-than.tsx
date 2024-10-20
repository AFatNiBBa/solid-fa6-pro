
import { Icon } from "../../index";

/**
 * A component that renders the `less-than` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=regular less-than}
 * @preview ![less-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/less-than.svg)
 */
const LessThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M381.5 77.3c5.9 11.9 1.1 26.3-10.7 32.2L77.7 256 370.7 402.5c11.9 5.9 16.7 20.3 10.7 32.2s-20.3 16.7-32.2 10.7l-336-168C5.1 273.4 0 265.1 0 256s5.1-17.4 13.3-21.5l336-168c11.9-5.9 26.3-1.1 32.2 10.7z" />
    </Icon>
);

export default LessThan;