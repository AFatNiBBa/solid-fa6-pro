
import { Icon } from "../../index";

/**
 * A component that renders the `chart-user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-user?s=sharp-regular chart-user}
 * @preview ![chart-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chart-user.svg)
 */
const ChartUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 48l384 0 0 320-281.8 0 14.4 48L592 416l48 0 0-48 0-320 0-48L592 0 208 0 160 0l0 48 0 48c17 0 33.2 3.3 48 9.3L208 48zM512 240l16-16 0-112-112 0-16 16 39 39-55 55-47-47-17-17L286.1 192l17 17 64 64 17 17 17-17 72-72 39 39zM160 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM83.7 400l152.6 0 19.2 64-191 0 19.2-64zM272 352L48 352 14.4 464 0 512l50.1 0 219.8 0 50.1 0-14.4-48L272 352z" />
    </Icon>
);

export default ChartUser;