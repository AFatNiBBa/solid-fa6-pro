
import { Icon } from "../../index";

/**
 * A component that renders the `joint` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joint?s=sharp-regular joint}
 * @preview ![joint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/joint.svg)
 */
const Joint: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 0L416 0l0 43c0 50.9 20.2 99.8 56.2 135.8l21 21c12 12 18.7 28.3 18.7 45.3l0 43 48 0 0-43c0-29.7-11.8-58.2-32.8-79.2l-21-21C479.2 117.8 464 81.2 464 43l0-43zM592 288l48 0 0-43c0-50.9-20.2-99.8-56.2-135.8l-21-21C550.7 76.2 544 60 544 43l0-43L496 0l0 43c0 29.7 11.8 58.2 32.8 79.2l21 21c27 27 42.2 63.6 42.2 101.8l0 43zM262.6 400.6L315.4 464 288 464c-73.9 0-135.5-15.4-180.3-32c39.6-14.7 92.2-28.4 154.9-31.4zM377.9 464l-53.3-64 97.5 0 53.3 64-97.5 0zm160 0l-53.3-64L592 400l0 64-54.1 0zM0 432s17 12.1 48.1 26.9C96.9 482.2 180.5 512 288 512l304 0 48 0 0-48 0-64 0-48-48 0-304 0c-107.5 0-191.1 29.8-239.9 53.1C17 419.9 0 432 0 432z" />
    </Icon>
);

export default Joint;