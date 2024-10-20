
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-sledding` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-sledding?s=duotone person-sledding}
 * @preview ![person-sledding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-sledding.svg)
 */
const PersonSledding: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 248c0 8.7 4.7 17 12.9 21.3L396.4 468.4c13.9 7.2 29 10.8 44.2 10.8c14.7 0 29.4-3.4 42.9-10.1l15.2-7.6c8.4-4.2 13.3-12.7 13.3-21.5c0-3.6-.8-7.3-2.5-10.7c-5.9-11.9-20.3-16.7-32.2-10.7l-15.2 7.6c-13.7 6.9-29.9 6.7-43.6-.3c-13.9-7.2-27.8-14.4-41.7-21.6c-18.9-9.8-37.9-19.7-56.8-29.5c-35.1-18.2-70.2-36.4-105.3-54.6c-14.6-7.6-29.2-15.1-43.8-22.7c-45.3-23.5-90.6-47-135.9-70.6c-11.8-6.1-26.3-1.5-32.4 10.2C.9 240.5 0 244.3 0 248z" />
        <path d="M400 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM361 196.3L301.3 256l34.7 0c26.5 0 48 21.5 48 48l0 80c0 7.6-2.7 14.7-7.2 20.2L320 374.6l0-54.6-105.3 0L171 297.3c-12.2-20.2-9.8-48.8 13.8-64.9L244 192l-84 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l172.7 0c35.6 0 53.5 43.1 28.3 68.3z" />
    </Icon>
);

export default PersonSledding;