
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ban-bug` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-bug?s=duotone ban-bug}
 * @preview ![ban-bug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ban-bug.svg)
 */
const BanBug: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128.3 291.1c1.7 8.7 10.2 14.3 18.8 12.6l29.5-5.9c1.1 9.2 3.8 17.8 7.7 25.8l-24.5 14.7c-7.6 4.5-10 14.4-5.5 22s14.4 10 22 5.5L204.2 349c14 11.9 32.1 19 51.8 19c18.7 0 35.9-6.4 49.6-17.2c-43.2-43.2-86.3-86.3-129.5-129.5c0 .9 0 1.8 0 2.7l0 41.3-35.1 7c-8.7 1.7-14.3 10.2-12.6 18.8zm78.1-129.9L345 299.7l19.9 4c8.7 1.7 17.1-3.9 18.8-12.6s-3.9-17.1-12.6-18.8l-35.1-7 0-18.6 35.1-7c8.7-1.7 14.3-10.2 12.6-18.8s-10.2-14.3-18.8-12.6l-29.5 5.9c-1.1-9.2-3.8-17.8-7.7-25.8l24.5-14.7c7.6-4.5 10-14.4 5.5-22c-3-5-8.3-7.8-13.7-7.8c-2.8 0-5.6 .7-8.2 2.3L307.8 163c-14-11.9-32.1-19-51.8-19c-18.7 0-35.9 6.4-49.6 17.2z" />
        <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default BanBug;