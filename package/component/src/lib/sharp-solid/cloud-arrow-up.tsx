
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-arrow-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-arrow-up?s=sharp-solid cloud-arrow-up}
 * @preview ![cloud-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cloud-arrow-up.svg)
 */
const CloudArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 480L0 480 0 336c0-62.7 40.1-116 96-135.8l0-8.2c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96l0 36c55.2 14.2 96 64.3 96 124l0 128-128 0-368 0zm79-217l-17 17L240 313.9l17-17 39-39L296 392l0 24 48 0 0-24 0-134.1 39 39 17 17L433.9 280l-17-17-80-80-17-17-17 17-80 80z" />
    </Icon>
);

export default CloudArrowUp;