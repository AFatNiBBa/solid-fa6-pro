
import { Icon } from "../../index";

/**
 * A component that renders the `melon` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon?s=thin melon}
 * @preview ![melon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/melon.svg)
 */
const Melon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256c0-47.7-13.9-92.1-37.9-129.5c3.9 59.8-37.6 145.8-111.7 219.9S186.4 462 126.5 458.1c37.4 24 81.8 37.9 129.5 37.9c132.5 0 240-107.5 240-240zM53.9 385.5C50 325.7 91.5 239.7 165.6 165.6S325.7 50 385.5 53.9C348.1 29.9 303.7 16 256 16C123.5 16 16 123.5 16 256c0 47.7 13.9 92.1 37.9 129.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM425.7 86.3C407.3 68 372.4 63.5 325.1 79.3c-46.3 15.4-99.6 49-148.2 97.6s-82.2 101.9-97.6 148.2C63.5 372.4 68 407.3 86.3 425.7s53.2 22.8 100.6 7.1c46.3-15.4 99.6-49 148.2-97.6s82.2-101.9 97.6-148.2c15.8-47.3 11.3-82.2-7.1-100.6z" />
    </Icon>
);

export default Melon;