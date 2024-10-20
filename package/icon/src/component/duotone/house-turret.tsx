
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-turret` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-turret?s=duotone house-turret}
 * @preview ![house-turret](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-turret.svg)
 */
const HouseTurret: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 24L0 96l0 8 0 93.5c0 17 6.7 33.3 18.7 45.3L64 288l0 176c0 26.5 21.5 48 48 48l128 0c-10-13.4-16-30-16-48l0-186.9c0-22.4 9.4-43.8 25.9-59L352 124.6l0-20.6 0-8 0-72c0-13.3-10.7-24-24-24L280 0c-13.3 0-24 10.7-24 24l0 72-32 0 0-72c0-13.3-10.7-24-24-24L152 0c-13.3 0-24 10.7-24 24l0 72L96 96l0-72C96 10.7 85.3 0 72 0L24 0C10.7 0 0 10.7 0 24zM136 200c0-22.1 17.9-40 40-40s40 17.9 40 40l0 24c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-24z" />
        <path d="M256 464l0-186.9c0-13.5 5.6-26.3 15.6-35.4l144-132c18.4-16.8 46.5-16.8 64.9 0l144 132c9.9 9.1 15.6 21.9 15.6 35.4L640 464c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48zM424 272c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z" />
    </Icon>
);

export default HouseTurret;