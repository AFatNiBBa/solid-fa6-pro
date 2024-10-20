
import { Icon } from "../../index";

/**
 * A component that renders the `melon` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon?s=solid melon}
 * @preview ![melon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/melon.svg)
 */
const Melon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512c-38.5 0-75-8.5-107.7-23.7c67.1-5.8 149.8-48.2 220.8-119.2s113.4-153.8 119.2-220.8C503.5 181 512 217.5 512 256c0 141.4-114.6 256-256 256zM74.7 436.8c-19.1-19.4-26.8-55.8-11.9-108c14.6-51.2 49.6-110.2 102.7-163.3s112.1-88.1 163.3-102.7c52.4-15 88.9-7.1 108.2 12.2s27.2 55.9 12.2 108.2c-14.6 51.2-49.6 110.2-102.7 163.3s-112.1 88.1-163.3 102.7c-52.1 14.9-88.6 7.2-108-11.9c-.2-.2-.4-.4-.5-.5zm-51-73.1C8.5 331 0 294.5 0 256C0 114.6 114.6 0 256 0c38.5 0 75 8.5 107.7 23.7c-67.1 5.8-149.8 48.2-220.8 119.2s-113.4 153.8-119.2 220.8z" />
    </Icon>
);

export default Melon;