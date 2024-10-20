
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-z` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-z?s=duotone circle-z}
 * @preview ![circle-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-z.svg)
 */
const CircleZ: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 152c0-13.3 10.7-24 24-24l144 0c8.9 0 17.1 5 21.3 12.9s3.6 17.5-1.5 24.8L229.8 336l98.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-8.9 0-17.1-5-21.3-12.9c-1.8-3.5-2.7-7.3-2.7-11.1c0-4.8 1.4-9.6 4.3-13.7L282.2 176 184 176c-13.3 0-24-10.7-24-24z" />
        <path d="M160 152c0-13.3 10.7-24 24-24l144 0c8.9 0 17.1 5 21.3 12.9s3.6 17.5-1.5 24.8L229.8 336l98.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-8.9 0-17.1-5-21.3-12.9s-3.6-17.5 1.5-24.8L282.2 176 184 176c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default CircleZ;