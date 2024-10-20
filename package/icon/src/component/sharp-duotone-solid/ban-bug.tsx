
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ban-bug` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-bug?s=sharp-duotone-solid ban-bug}
 * @preview ![ban-bug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ban-bug.svg)
 */
const BanBug: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M125.2 275.4l6.3 31.4 15.7-3.1 28.9-5.8 0 30.6-16.2 9.7L146 346.5 162.5 374l13.7-8.2 18.4-11.1L224 384l64 0 25.4-25.4C267.6 312.8 221.8 267 176 221.3l0 44-35.1 7-15.7 3.1zm73.5-122.1L345 299.7l19.9 4 15.7 3.1 6.3-31.4-15.7-3.1-35.1-7 0-18.6 35.1-7 15.7-3.1-6.3-31.4-15.7 3.1L336 214.1l0-30.6 16.2-9.7 13.7-8.2L349.5 138l-13.7 8.2-18.4 11.1L288 128l-64 0-25.4 25.4z" />
        <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default BanBug;