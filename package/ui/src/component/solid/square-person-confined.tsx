
import { Icon } from "../../index";

/**
 * A component that renders the `square-person-confined` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-person-confined?s=solid square-person-confined}
 * @preview ![square-person-confined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-person-confined.svg)
 */
const SquarePersonConfined: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm96 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm80 104c0-30.9 25.1-56 56-56s56 25.1 56 56l0 102.1c0 36.4-29.5 65.9-65.9 65.9c-17.5 0-34.3-6.9-46.6-19.3L184.8 342l-28.1 56.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l48-96c4.6-9.2 13.3-15.6 23.5-17.3s20.5 1.7 27.8 9L240 306.7l0-58.7z" />
    </Icon>
);

export default SquarePersonConfined;