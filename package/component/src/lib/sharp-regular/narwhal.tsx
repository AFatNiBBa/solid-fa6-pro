
import { Icon } from "../../index";

/**
 * A component that renders the `narwhal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/narwhal?s=sharp-regular narwhal}
 * @preview ![narwhal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/narwhal.svg)
 */
const Narwhal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M587.4 210.5C619.9 242.4 640 286.9 640 336c0 97.2-78.8 176-176 176l-232 0c-54.1 0-102-26.9-130.9-68c-15.4-21.9-25.5-47.9-28.3-76c-.5-5.3-.8-10.6-.8-16l0-80 0-12L0 224 0 96l96 48 96-48 0 128-72 36 0 12 0 34.9 0 45.1 0 16 1-.8 47-37L323.2 207.9c39.4-31 88-47.9 138.2-47.9l2.6 0c16.6 0 32.6 2.3 47.9 6.6L640 0 587.4 210.5zM232 464l232 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-2.6 0c-39.4 0-77.6 13.2-108.5 37.6L149.7 405.7l-10.8 8.5C159 444.2 193.2 464 232 464zM496 280a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Narwhal;