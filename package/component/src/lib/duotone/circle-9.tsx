
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-9` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-9?s=duotone circle-9}
 * @preview ![circle-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-9.svg)
 */
const Circle_9: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-32c0-53 43-96 96-96s96 43 96 96c0 32.4-14.2 63.2-38.8 84.3l-81.6 70c-4.5 3.9-10.1 5.8-15.6 5.8c-6.8 0-13.5-2.8-18.2-8.4c-8.6-10.1-7.5-25.2 2.6-33.8L230 316.4c-40.4-11.4-70-48.4-70-92.4zm48 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M304 224a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-74 92.4l-29.6 25.4c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6l81.6-70C337.8 287.2 352 256.4 352 224c0-53-43-96-96-96s-96 43-96 96c0 44 29.6 81.1 70 92.4z" />
    </Icon>
);

export default Circle_9;