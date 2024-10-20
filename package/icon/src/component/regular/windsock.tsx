
import { Icon } from "../../index";

/**
 * A component that renders the `windsock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windsock?s=regular windsock}
 * @preview ![windsock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/windsock.svg)
 */
const Windsock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 0C37.3 0 48 10.7 48 24l0 72 80 0 0-8.6c0-20.3 18.7-35.5 38.5-31.3l320 66.7c14.8 3.1 25.5 16.2 25.5 31.3l0 108c0 15.2-10.6 28.2-25.5 31.3L166.5 360c-19.9 4.1-38.5-11-38.5-31.3l0-8.6-80 0 0 168c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 296 0 120 0 24C0 10.7 10.7 0 24 0zM48 144l0 128 80 0 0-128-80 0zM416 259l48-10 0-81.9-48-10L416 259zm-48 10L368 147l-80-16.7 0 155.3L368 269zM240 295.6l0-175.3L176 107 176 309l64-13.3z" />
    </Icon>
);

export default Windsock;