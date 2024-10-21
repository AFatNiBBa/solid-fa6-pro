
import { Icon } from "../../index";

/**
 * A component that renders the `b` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/b?s=light b}
 * @preview ![b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/b.svg)
 */
const B: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 32C21.5 32 0 53.5 0 80L0 240 0 432c0 26.5 21.5 48 48 48l144 0c70.7 0 128-57.3 128-128c0-52.8-32-98.2-77.7-117.7C270 213.9 288 181 288 144c0-61.9-50.1-112-112-112L48 32zM192 256c53 0 96 43 96 96s-43 96-96 96L48 448c-8.8 0-16-7.2-16-16l0-176 144 0 16 0zm-16-32L32 224 32 80c0-8.8 7.2-16 16-16l128 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default B;