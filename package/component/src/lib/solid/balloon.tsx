
import { Icon } from "../../index";

/**
 * A component that renders the `balloon` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/balloon?s=solid balloon}
 * @preview ![balloon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/balloon.svg)
 */
const Balloon: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 192C0 86 86 0 192 0S384 86 384 192c0 102.6-102.8 194.9-143.6 227.5c-9.3 7.4-12.5 20.4-7.1 31l21.4 42.7c.9 1.8 1.4 3.8 1.4 5.8c0 7.1-5.8 12.9-12.9 12.9l-102.1 0c-7.1 0-12.9-5.8-12.9-12.9c0-2 .5-4 1.4-5.8l21.4-42.7c5.3-10.6 2.1-23.6-7.1-31C102.8 386.9 0 294.6 0 192zm96-16c0-44.2 35.8-80 80-80c8.8 0 16-7.2 16-16s-7.2-16-16-16C114.1 64 64 114.1 64 176c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
    </Icon>
);

export default Balloon;