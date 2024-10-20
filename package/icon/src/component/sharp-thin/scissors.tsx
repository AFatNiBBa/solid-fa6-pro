
import { Icon } from "../../index";

/**
 * A component that renders the `scissors` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scissors?s=sharp-thin scissors}
 * @preview ![scissors](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/scissors.svg)
 */
const Scissors: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 112a96 96 0 1 1 192 0A96 96 0 1 1 16 112zm208 0C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c32.4 0 61.6-13.8 82.1-35.8L249.4 235l24.8 21-80.1 67.8c-20.5-22-49.6-35.8-82.1-35.8C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-23.7-7.4-45.7-19.9-63.8L509.2 78.1 498.8 65.9 286.5 245.5l-24.8-21-57.7-48.8C216.6 157.7 224 135.7 224 112zM112 304a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm199.3-16.6L498.8 446.1l10.3-12.2L323.7 277l-12.4 10.5z" />
    </Icon>
);

export default Scissors;