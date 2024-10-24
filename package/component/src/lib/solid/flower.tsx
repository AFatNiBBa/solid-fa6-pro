
import { Icon } from "../../index";

/**
 * A component that renders the `flower` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flower?s=solid flower}
 * @preview ![flower](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/flower.svg)
 */
const Flower: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 480c38.2 0 72.5-16.8 96-43.3c23.5 26.6 57.8 43.3 96 43.3c70.7 0 128-57.3 128-128c0-38.2-16.8-72.5-43.3-96c26.6-23.5 43.3-57.8 43.3-96c0-70.7-57.3-128-128-128c-38.2 0-72.5 16.8-96 43.3C200.5 48.8 166.2 32 128 32C57.3 32 0 89.3 0 160c0 38.2 16.8 72.5 43.3 96C16.8 279.5 0 313.8 0 352c0 70.7 57.3 128 128 128zm96-304a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default Flower;