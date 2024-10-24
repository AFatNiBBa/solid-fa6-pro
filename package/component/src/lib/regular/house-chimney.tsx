
import { Icon } from "../../index";

/**
 * A component that renders the `house-chimney` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney?s=regular house-chimney}
 * @preview ![house-chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/house-chimney.svg)
 */
const HouseChimney: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M272.5 5.7c9-7.6 22.1-7.6 31.1 0L464 141.9 464 56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 126.6 55.5 47.1c10.1 8.6 11.4 23.7 2.8 33.8s-23.7 11.3-33.8 2.8L512 245.5 512 432c0 44.2-35.8 80-80 80l-288 0c-44.2 0-80-35.8-80-80l0-186.5L39.5 266.3c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l264-224zM112 204.8L112 432c0 17.7 14.3 32 32 32l48 0 0-152c0-22.1 17.9-40 40-40l112 0c22.1 0 40 17.9 40 40l0 152 48 0c17.7 0 32-14.3 32-32l0-227.2L288 55.5 112 204.8zM336 320l-96 0 0 144 96 0 0-144z" />
    </Icon>
);

export default HouseChimney;