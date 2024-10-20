
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-7` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-7?s=duotone circle-7}
 * @preview ![circle-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-7.svg)
 */
const Circle_7: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 152c0-13.3 10.7-24 24-24l144 0c8.4 0 16.3 4.4 20.6 11.7s4.5 16.2 .5 23.7c-37.3 69.3-74.7 138.7-112 208c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l93-172.6L184 176c-13.3 0-24-10.7-24-24z" />
        <path d="M160 152c0-13.3 10.7-24 24-24l144 0c8.4 0 16.3 4.4 20.6 11.7s4.5 16.2 .5 23.7l-112 208c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l93-172.6L184 176c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Circle_7;