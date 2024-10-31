
import { Icon } from "../../index";

/**
 * A component that renders the `circle-p` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-p?s=regular circle-p}
 * @preview ![circle-p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-p.svg)
 */
const CircleP: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128c-13.3 0-24 10.7-24 24l0 136 0 72c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48 68 0c50.8 0 92-41.2 92-92s-41.2-92-92-92l-92 0zm92 136l-68 0 0-88 68 0c24.3 0 44 19.7 44 44s-19.7 44-44 44z" />
    </Icon>
);

export default CircleP;