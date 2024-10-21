
import { Icon } from "../../index";

/**
 * A component that renders the `kazoo` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kazoo?s=solid kazoo}
 * @preview ![kazoo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/kazoo.svg)
 */
const Kazoo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M514 128l94 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-94 0c-19.8 10.2-42.2 16-66 16s-46.3-5.8-66-16l-158 0c-3 0-6-.4-9-1.3l-192-56C9.4 322.7 0 310.2 0 296l0-80c0-14.2 9.4-26.7 23-30.7l192-56c2.9-.8 5.9-1.3 9-1.3l158 0c19.8-10.2 42.2-16 66-16s46.3 5.8 66 16zm30 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM427.3 212.7L448 233.4l20.7-20.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L470.6 256l20.7 20.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L448 278.6l-20.7 20.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L425.4 256l-20.7-20.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0z" />
    </Icon>
);

export default Kazoo;