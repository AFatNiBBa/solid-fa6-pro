
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mango` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mango?s=duotone mango}
 * @preview ![mango](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mango.svg)
 */
const Mango: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 408c0 26.8 17 51.8 43.9 60.7c0 0 100.1 43.3 244.1 43.3c166.5 0 224-147.4 224-224c0-49.1-18.7-98.3-56.2-135.8c-25.2-25.2-55.6-41.9-87.8-50.2l0 25.9c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c-49.1 0-98.3 18.7-135.8 56.2c-45.8 37.2-67.8 76.7-88.4 113.5c-19.1 34.1-36.9 66-71.2 91.8C15 365 7.4 375.4 3.3 387.9C1 394.5 0 401.3 0 408zm288 8c0-8.8 7.2-16 16-16c53 0 96-43 96-96c0-8.8 7.2-16 16-16s16 7.2 16 16c0 70.7-57.3 128-128 128c-8.8 0-16-7.2-16-16z" />
        <path d="M352 0l-8 0c-13.3 0-24 10.7-24 24l0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-74.9C385.2 79 414.6 96 448 96l40 0c13.3 0 24-10.7 24-24c0-39.8-32.2-72-72-72L384 0l-8 0L352 0z" />
    </Icon>
);

export default Mango;