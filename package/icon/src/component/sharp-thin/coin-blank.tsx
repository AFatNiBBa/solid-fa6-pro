
import { Icon } from "../../index";

/**
 * A component that renders the `coin-blank` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-blank?s=sharp-thin coin-blank}
 * @preview ![coin-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/coin-blank.svg)
 */
const CoinBlank: typeof Icon = x => (
    <Icon {...x}>
        <path d="M82.8 295.9C38.8 271.1 16 239.4 16 208s22.8-63.1 66.8-87.9C126.3 95.6 187.5 80 256 80s129.7 15.6 173.2 40.1c44 24.8 66.8 56.5 66.8 87.9s-22.8 63.1-66.8 87.9C385.7 320.4 324.5 336 256 336s-129.7-15.6-173.2-40.1zM256 64C114.6 64 0 128.5 0 208l0 16 0 96c0 70.7 114.6 128 256 128s256-57.3 256-128l0-96 0-16c0-79.5-114.6-144-256-144zm-8 287.9l0 80c-28.2-.4-55.2-3.2-80-8l0-80.7c25.1 5.2 52 8.2 80 8.7zM88 316.7c19.1 9.3 40.6 17.1 64 23l0 81c-23.8-5.5-45.4-12.8-64-21.6l0-82.4zm-16-8.5l0 82.7C34.2 369.5 16 344 16 320l0-61.8C28.4 277 47.7 294 72 308.1zM264 431.9l0-80c28-.5 54.9-3.5 80-8.7l0 80.7c-24.8 4.7-51.8 7.5-80 8zm96-11.3l0-81c23.4-5.9 44.9-13.6 64-23l0 82.4c-18.6 8.7-40.2 16-64 21.6zm80-29.8l0-82.7c24.3-14.1 43.6-31.1 56-49.9l0 61.8c0 24-18.2 49.5-56 70.8z" />
    </Icon>
);

export default CoinBlank;