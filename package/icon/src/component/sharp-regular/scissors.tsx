
import { Icon } from "../../index";

/**
 * A component that renders the `scissors` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scissors?s=sharp-regular scissors}
 * @preview ![scissors](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/scissors.svg)
 */
const Scissors: typeof Icon = x => (
    <Icon {...x}>
        <path d="M504.2 404.9l-30.7 36.9-18.5-15.3L312.6 308 350 276.7 485.8 389.5l18.5 15.3zM112 48a64 64 0 1 0 0 128 64 64 0 1 0 0-128zm0-48c61.9 0 112 50.1 112 112c0 17.9-4.2 34.8-11.6 49.8l75.4 63.2L464.6 77.6l18.4-15.4 30.7 36.9-18.4 15.4-283 235.8c7.4 15 11.6 31.9 11.6 49.7c0 61.9-50.1 112-112 112S0 461.9 0 400s50.1-112 112-112c26.6 0 51.1 9.3 70.3 24.8l68-56.7-68-57C163.1 214.7 138.6 224 112 224C50.1 224 0 173.9 0 112S50.1 0 112 0zm64 400A64 64 0 1 0 48 400a64 64 0 1 0 128 0z" />
    </Icon>
);

export default Scissors;