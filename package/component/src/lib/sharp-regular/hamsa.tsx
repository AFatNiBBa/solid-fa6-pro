
import { Icon } from "../../index";

/**
 * A component that renders the `hamsa` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hamsa?s=sharp-regular hamsa}
 * @preview ![hamsa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hamsa.svg)
 */
const Hamsa: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 0L184 0l0 24 0 8-72 0L88 32l0 24 0 200-64 0L0 256l0 24 0 56 0 9.9 7 7 95.4 95.4c40.7 40.7 96 63.6 153.5 63.6s112.8-22.9 153.5-63.6L505 353l7-7 0-9.9 0-56 0-24-24 0-64 0 0-200 0-24-24 0-72 0 0-8 0-24L304 0 208 0zM328 80l48 0 0 200 0 24 24 0 64 0 0 22.1-88.4 88.4C343.9 446.2 300.9 464 256 464s-87.9-17.8-119.6-49.5L48 326.1 48 304l64 0 24 0 0-24 0-200 48 0 0 120 0 24 24 0 24 0 0-24 0-144 0-8 48 0 0 8 0 144 0 24 24 0 24 0 0-24 0-120zM160 352s48 64 96 64s96-64 96-64s-48-64-96-64s-96 64-96 64zm96-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Hamsa;