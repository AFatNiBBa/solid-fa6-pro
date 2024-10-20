
import { Icon } from "../../index";

/**
 * A component that renders the `jug` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug?s=sharp-regular jug}
 * @preview ![jug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/jug.svg)
 */
const Jug: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M181.9 125.5L80 256.5 80 288l288 0 0-31.5-101.9-131-10.1-13L256 96l0-48-64 0 0 48 0 16.5-10.1 13zM80 416l0 48 288 0 0-48L80 416zM304 48l0 48 18.5 23.8C335.7 105.2 354.8 96 376 96c39.8 0 72 32.2 72 72c0 27.6-15.6 51.7-38.4 63.7L416 240l0 224 0 48-48 0L80 512l-48 0 0-48 0-224L144 96l0-48-24 0 0-48 24 0 48 0 64 0 48 0 24 0 0 48-24 0zm49.5 111.6l25.1 32.2c12.1-1.3 21.4-11.5 21.4-23.9c0-13.3-10.7-24-24-24c-10.3 0-19.1 6.5-22.5 15.6z" />
    </Icon>
);

export default Jug;