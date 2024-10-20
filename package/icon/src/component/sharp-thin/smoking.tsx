
import { Icon } from "../../index";

/**
 * A component that renders the `smoking` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smoking?s=sharp-thin smoking}
 * @preview ![smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/smoking.svg)
 */
const Smoking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 0l0 43c0 46.7 18.5 91.4 51.5 124.5l21 21c15 15 23.4 35.4 23.4 56.6l0 43 16 0 0-43c0-25.5-10.1-49.9-28.1-67.9l-21-21C480.9 126.1 464 85.4 464 43l0-43L448 0zM640 288l0-43c0-46.7-18.5-91.4-51.5-124.5l-21-21C552.4 84.5 544 64.2 544 43l0-43L528 0l0 43c0 25.5 10.1 49.9 28.1 67.9l21 21c30 30 46.9 70.7 46.9 113.1l0 43 16 0zM0 352l0 16L0 496l0 16 16 0 208 0 16 0 256 0 16 0 0-16 0-128 0-16-16 0-256 0-16 0L16 352 0 352zM496 496l-256 0 0-128 256 0 0 128zm-272 0L16 496l0-128 208 0 0 128zM640 360l0-8-16 0 0 8 0 144 0 8 16 0 0-8 0-144zm-80-8l-16 0 0 8 0 144 0 8 16 0 0-8 0-144 0-8zm40 8l0-8-16 0 0 8 0 144 0 8 16 0 0-8 0-144z" />
    </Icon>
);

export default Smoking;