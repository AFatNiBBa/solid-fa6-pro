
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users-medical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-medical?s=duotone users-medical}
 * @preview ![users-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/users-medical.svg)
 */
const UsersMedical: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 298.7C0 310.4 9.6 320 21.3 320l213.3 0c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7l-42.7 0C47.8 192 0 239.8 0 298.7zM64 80a80 80 0 1 0 160 0A80 80 0 1 0 64 80zm64 405.3c0 14.7 11.9 26.7 26.7 26.7l328.1 0c-1.8-5-2.7-10.4-2.7-16l0-16-16 0c-26.5 0-48-21.5-48-48l0-32c0-14.6 6.5-27.7 16.9-36.5C416.3 356.1 398 352 378.7 352l-117.3 0C187.7 352 128 411.7 128 485.3zM224 224a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm180.7 96c.2 0 .4 0 .7 0l77.4 0c6.6-18.6 24.4-32 45.3-32l32 0c20.9 0 38.7 13.4 45.3 32l13.4 0c11.8 0 21.3-9.6 21.3-21.3C640 239.8 592.2 192 533.3 192l-42.7 0c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 38.2-16.8 72.5-43.3 96zM432 80a80 80 0 1 0 160 0A80 80 0 1 0 432 80z" />
        <path d="M528 320c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0z" />
    </Icon>
);

export default UsersMedical;