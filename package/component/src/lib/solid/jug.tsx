
import { Icon } from "../../index";

/**
 * A component that renders the `jug` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug?s=solid jug}
 * @preview ![jug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/jug.svg)
 */
const Jug: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L160 64c-17.7 0-32-14.3-32-32s14.3-32 32-32zM400 168c0-13.3-10.7-24-24-24c-10.3 0-19.1 6.5-22.5 15.6l25.1 32.2c12.1-1.3 21.4-11.5 21.4-23.9zm-89.3-63.3l11.8 15.1C335.7 105.2 354.8 96 376 96c39.8 0 72 32.2 72 72c0 29.2-17.4 54.3-42.3 65.6c6.8 15.8 10.3 32.9 10.3 50.3L416 448c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-164.1c0-28.5 9.5-56.1 27-78.6l78.3-100.7c2.1-2.6 3.7-5.6 4.8-8.7l163.9 0c1.1 3.1 2.7 6 4.8 8.7zM128 288c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-192 0z" />
    </Icon>
);

export default Jug;