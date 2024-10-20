
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-rifle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-rifle?s=duotone person-rifle}
 * @preview ![person-rifle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-rifle.svg)
 */
const PersonRifle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M21.6 387.7c-11.2 19-4.9 43.5 14.1 54.8s43.5 4.9 54.8-14.1L144 337.7 144 512l192 0 0-300.1c-21-12.8-45.4-19.9-70.8-19.9l-50.4 0c-48.1 0-92.6 25.4-117.1 66.8L21.6 387.7zM160 80a80 80 0 1 0 160 0A80 80 0 1 0 160 80z" />
        <path d="M432 0l16 0c8.8 0 16 7.2 16 16l0 116.3c9.6 5.5 16 15.9 16 27.7l0 109.3 16-5.3 0-56c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 84.5c0 6.9-4.4 13-10.9 15.2L480 325.3l0 26.7 48 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-44 0 23 92.1c2.5 10.1-5.1 19.9-15.5 19.9L432 512c-8.8 0-16-7.2-16-16l0-96-16 0c-17.7 0-32-14.3-32-32l0-144c0-17.7 14.3-32 32-32l0-32c0-11.8 6.4-22.2 16-27.7L416 32c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0z" />
    </Icon>
);

export default PersonRifle;