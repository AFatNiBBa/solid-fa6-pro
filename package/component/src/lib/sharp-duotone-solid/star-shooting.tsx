
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-shooting` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-shooting?s=sharp-duotone-solid star-shooting}
 * @preview ![star-shooting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/star-shooting.svg)
 */
const StarShooting: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M214.1 72L248 105.9l17-17 32-32 17-17L280 6.1 263 23 231 55l-17 17zm96 96L344 201.9l17-17L489 57l17-17L472 6.1 455 23 327 151l-17 17zm96 96L440 297.9l17-17 32-32 17-17L472 198.1l-17 17-32 32-17 17z" />
        <path d="M193.5 144l59.8 121.1 133.7 19.4-96.7 94.3L313 512 193.5 449.1 73.9 512 96.7 378.9 0 284.6l133.7-19.4L193.5 144z" />
    </Icon>
);

export default StarShooting;