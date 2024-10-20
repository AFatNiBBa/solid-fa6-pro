
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-group` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-group?s=duotone object-group}
 * @preview ![object-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/object-group.svg)
 */
const ObjectGroup: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1C12.9 108.4 0 87.7 0 64zm96 55.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4z" />
        <path d="M160 128c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-128 0zm96 224c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-64 0 0 32c0 35.3-28.7 64-64 64l-32 0 0 32z" />
    </Icon>
);

export default ObjectGroup;