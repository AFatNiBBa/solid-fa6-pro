
import { Icon } from "../../index";

/**
 * A component that renders the `windsock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windsock?s=light windsock}
 * @preview ![windsock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/windsock.svg)
 */
const Windsock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 0c8.8 0 16 7.2 16 16l0 112 64 0 0-41.3c0-20.1 18.3-35.2 38-31.4L486 123c15.1 2.9 26 16.1 26 31.4l0 107.1c0 15.3-10.9 28.5-26 31.4L134 360.7c-19.7 3.8-38-11.3-38-31.4L96 288l-64 0 0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 272 0 144 0 16C0 7.2 7.2 0 16 0zM32 160l0 96 64 0 0-96-64 0zm96-73.3l0 242.5 96-18.5 0-205.6L128 86.7zm128 24.6l0 193.3L384 280 384 136 256 111.4zm160 30.8l0 131.8 64-12.3 0-107.1-64-12.3z" />
    </Icon>
);

export default Windsock;