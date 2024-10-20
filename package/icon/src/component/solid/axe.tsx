
import { Icon } from "../../index";

/**
 * A component that renders the `axe` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe?s=solid axe}
 * @preview ![axe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/axe.svg)
 */
const Axe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M374.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3L384 301.3l0 82.7c0 17.7 14.3 32 32 32c123.7 0 224-100.3 224-224c0-17.7-14.3-32-32-32l-82.7 0-56-56 33.4-33.4c12.5-12.5 12.5-32.8 0-45.3l-16-16c-12.5-12.5-32.8-12.5-45.3 0L408 42.7 374.6 9.4zM448 316c45-11.6 80.4-47 92-92l32.8 0C560.1 286.7 510.7 336.1 448 348.8l0-32.8zM244.1 206.6L9.4 441.4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0L305.4 267.9l-61.3-61.3z" />
    </Icon>
);

export default Axe;