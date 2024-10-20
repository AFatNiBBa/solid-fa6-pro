
import { Icon, generic } from "../../index";

/**
 * A component that renders the `garage-car` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garage-car?s=duotone garage-car}
 * @preview ![garage-car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/garage-car.svg)
 */
const GarageCar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 192 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-21.1-11.7-39.5-28.9-49L431 277.5C423.2 255.1 402 240 378.2 240l-116.3 0c-23.8 0-45 15.1-52.9 37.5L188.9 335c-17.2 9.5-28.9 27.9-28.9 49zm104 16a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-21.8-72l12.1-34.6c1.1-3.2 4.2-5.4 7.6-5.4l116.3 0c3.4 0 6.4 2.2 7.6 5.4L397.8 328l-155.6 0zM424 400a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M0 171.3V488c0 13.3 10.7 24 24 24H72c13.3 0 24-10.7 24-24V224c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32V488c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V171.3c0-26.2-15.9-49.7-40.2-59.4L331.9 4.8c-7.6-3.1-16.1-3.1-23.8 0L40.2 111.9C15.9 121.6 0 145.2 0 171.3z" />
    </Icon>
);

export default GarageCar;