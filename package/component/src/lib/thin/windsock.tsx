
import { Icon } from "../../index";

/**
 * A component that renders the `windsock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windsock?s=thin windsock}
 * @preview ![windsock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/windsock.svg)
 */
const Windsock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 0c4.4 0 8 3.6 8 8l0 120 80 0 0-41.3c0-20.1 18.3-35.2 38-31.4L486 123c15.1 2.9 26 16.1 26 31.4l0 107.1c0 15.3-10.9 28.5-26 31.4L134 360.7c-19.7 3.8-38-11.3-38-31.4L96 288l-80 0 0 216c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 280 0 136 0 8C0 3.6 3.6 0 8 0zm8 144l0 128 80 0 0-128-80 0zm96 185.3c0 10 9.2 17.6 19 15.7l85-16.3 0-241.3L131 71c-9.9-1.9-19 5.7-19 15.7l0 41.3 0 16 0 128 0 16 0 41.3zm120-3.7l144-27.7 0-179.7L232 90.4l0 235.1zM392 121.2l0 173.6 91-17.5c7.5-1.4 13-8 13-15.7l0-107.1c0-7.7-5.4-14.3-13-15.7l-91-17.5z" />
    </Icon>
);

export default Windsock;