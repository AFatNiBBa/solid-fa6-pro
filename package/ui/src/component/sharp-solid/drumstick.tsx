
import { Icon } from "../../index";

/**
 * A component that renders the `drumstick` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drumstick?s=sharp-solid drumstick}
 * @preview ![drumstick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/drumstick.svg)
 */
const Drumstick: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 278.5L160 176C160 78.8 238.8 0 336 0s176 78.8 176 176s-78.8 176-176 176l-102.5 0-58.4 58.3C185.6 421.1 192 435.8 192 452c0 33.1-26.9 60-60 60s-60-26.9-60-60l0-12-12 0c-33.1 0-60-26.9-60-60s26.9-60 60-60c16.2 0 30.9 6.4 41.6 16.8L160 278.5z" />
    </Icon>
);

export default Drumstick;