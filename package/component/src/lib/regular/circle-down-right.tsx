
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-right?s=regular circle-down-right}
 * @preview ![circle-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-down-right.svg)
 */
const CircleDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zm96 198.6c0-12.5-10.1-22.6-22.6-22.6c-6 0-11.8 2.4-16 6.6L280 216l-66.3-66.3C210 146 205.1 144 200 144s-10 2-13.7 5.7l-36.7 36.7C146 190 144 194.9 144 200s2 10 5.7 13.7L216 280l-33.4 33.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6L336 352c8.8 0 16-7.2 16-16l0-137.4z" />
    </Icon>
);

export default CircleDownRight;