
import { Icon, generic } from "../../index";

/**
 * A component that renders the `garage-open` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garage-open?s=duotone garage-open}
 * @preview ![garage-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/garage-open.svg)
 */
const GarageOpen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 192 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-21.1-11.7-39.5-28.9-49l-5.2-15L395 320l2.8 8-155.6 0 2.8-8-50.8 0-5.2 15c-17.2 9.5-28.9 27.9-28.9 49zm104 16a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm160 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M0 488L0 171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4L640 488c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-264c0-17.7-14.3-32-32-32l-384 0c-17.7 0-32 14.3-32 32l0 264c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM512 224l0 64-384 0 0-64 384 0z" />
    </Icon>
);

export default GarageOpen;