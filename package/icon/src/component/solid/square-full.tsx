
import { Icon } from "../../index";

/**
 * A component that renders the `square-full` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-full?s=solid square-full}
 * @preview ![square-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-full.svg)
 */
const SquareFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0H512V512H0V0z" />
    </Icon>
);

export default SquareFull;