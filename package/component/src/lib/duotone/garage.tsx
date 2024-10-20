
import { Icon, generic } from "../../index";

/**
 * A component that renders the `garage` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garage?s=duotone garage}
 * @preview ![garage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/garage.svg)
 */
const Garage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 224l384 0 0 96-384 0 0-96zm0 128l384 0 0 160-384 0 0-160zm128 80c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16z" />
        <path d="M0 171.3V488c0 13.3 10.7 24 24 24H72c13.3 0 24-10.7 24-24V224c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32V488c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V171.3c0-26.2-15.9-49.7-40.2-59.4L331.9 4.8c-7.6-3.1-16.1-3.1-23.8 0L40.2 111.9C15.9 121.6 0 145.2 0 171.3z" />
    </Icon>
);

export default Garage;