
import { Icon } from "../../index";

/**
 * A component that renders the `coin` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin?s=thin coin}
 * @preview ![coin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/coin.svg)
 */
const Coin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 336c68.5 0 129.7-15.6 173.2-40.1c44-24.8 66.8-56.5 66.8-87.9s-22.8-63.1-66.8-87.9C385.7 95.6 324.5 80 256 80s-129.7 15.6-173.2 40.1C38.8 144.9 16 176.6 16 208s22.8 63.1 66.8 87.9C126.3 320.4 187.5 336 256 336zM0 208C0 128.5 114.6 64 256 64s256 64.5 256 144l0 16 0 96c0 70.7-114.6 128-256 128S0 390.7 0 320l0-96 0-16zM168 343.3l0 80.7c24.8 4.7 51.8 7.5 80 8l0-80c-28-.5-54.9-3.5-80-8.7zm-16-3.6c-23.4-5.9-44.9-13.6-64-23L88 399c18.6 8.7 40.2 16 64 21.6l0-81zM16 258.2L16 320c0 24 18.2 49.5 56 70.8l0-82.7C47.7 294 28.4 277 16 258.2zM344 424l0-80.7c-25.1 5.2-52 8.2-80 8.7l0 80c28.2-.4 55.2-3.2 80-8zm16-84.3l0 81c23.8-5.5 45.4-12.8 64-21.6l0-82.4c-19.1 9.3-40.6 17.1-64 23zM496 320l0-61.8c-12.4 18.8-31.7 35.7-56 49.9l0 82.7c37.8-21.3 56-46.8 56-70.8zM256 128c-49.9 0-94.8 9.3-126.8 23.9C96.5 166.8 80 185.9 80 204s16.5 37.2 49.2 52.1c32 14.6 76.9 23.9 126.8 23.9s94.8-9.3 126.8-23.9c32.7-14.9 49.2-34 49.2-52.1s-16.5-37.2-49.2-52.1C350.8 137.3 305.9 128 256 128zm192 76c0 28.2-24.7 51.2-58.6 66.7C354.9 286.5 307.7 296 256 296s-98.9-9.5-133.4-25.3C88.7 255.2 64 232.2 64 204s24.7-51.2 58.6-66.7C157.1 121.5 204.3 112 256 112s98.9 9.5 133.4 25.3C423.3 152.8 448 175.8 448 204z" />
    </Icon>
);

export default Coin;