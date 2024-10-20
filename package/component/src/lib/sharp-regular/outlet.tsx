
import { Icon } from "../../index";

/**
 * A component that renders the `outlet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outlet?s=sharp-regular outlet}
 * @preview ![outlet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/outlet.svg)
 */
const Outlet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM80 256c0-77 57.6-112 57.6-112l172.8 0s57.6 35 57.6 112s-57.6 112-57.6 112l-172.8 0s-57.6-35-57.6-112zm96-48l0-16-32 0 0 16 0 48 0 16 32 0 0-16 0-48zm128 0l0-16-32 0 0 16 0 48 0 16 32 0 0-16 0-48zM200 296l0 24 48 0 0-24c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </Icon>
);

export default Outlet;