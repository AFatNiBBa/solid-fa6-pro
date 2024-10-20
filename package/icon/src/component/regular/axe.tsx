
import { Icon } from "../../index";

/**
 * A component that renders the `axe` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe?s=regular axe}
 * @preview ![axe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/axe.svg)
 */
const Axe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M486.6 9.4c-12.5-12.5-32.8-12.5-45.3 0L408 42.7 374.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3L384 301.3l0 82.7c0 17.7 14.3 32 32 32c123.7 0 224-100.3 224-224c0-17.7-14.3-32-32-32l-82.7 0-56-56 33.4-33.4c12.5-12.5 12.5-32.8 0-45.3l-16-16zM305.4 267.9l-61.3-61.3L9.4 441.4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0L305.4 267.9zm185.9-73.9c9 9 21.2 14.1 33.9 14.1l66 0c-7.6 84.4-74.8 151.7-159.3 159.3l0-66c0-12.7-5.1-24.9-14.1-33.9L278.6 128 352 54.6 491.3 193.9z" />
    </Icon>
);

export default Axe;