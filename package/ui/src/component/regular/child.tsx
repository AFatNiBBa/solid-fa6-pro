
import { Icon } from "../../index";

/**
 * A component that renders the `child` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child?s=regular child}
 * @preview ![child](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/child.svg)
 */
const Child: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 96a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-96a72 72 0 1 1 0 144A72 72 0 1 1 160 0zM128 214l0 122 64 0 0-121.6c-10.2-4.2-21.2-6.4-32.4-6.4c-11 0-21.6 2.1-31.6 6zm0 170l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-230.1L43.7 309.8c-7.6 10.9-22.6 13.5-33.4 5.9S-3.3 293.1 4.3 282.2L50.1 217c25-35.7 65.9-57 109.5-57c43.2 0 83.7 20.8 108.8 56L315.5 282c7.7 10.8 5.2 25.8-5.6 33.5s-25.8 5.2-33.5-5.6L240 258.9 240 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104-64 0z" />
    </Icon>
);

export default Child;