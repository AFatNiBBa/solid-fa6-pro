
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tower-broadcast` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tower-broadcast?s=duotone tower-broadcast}
 * @preview ![tower-broadcast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tower-broadcast.svg)
 */
const TowerBroadcast: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128c0 38.1 7.4 74.6 20.9 108c6.6 16.4 25.3 24.3 41.7 17.7S86.9 228.4 80.3 212C69.8 186.1 64 157.8 64 128s5.8-58.1 16.3-84C86.9 27.6 79 9 62.6 2.3S27.6 3.6 20.9 20C7.4 53.4 0 89.9 0 128zm96 0c0 27.2 5.7 53.2 16 76.8c7.1 16.2 25.9 23.6 42.1 16.5s23.6-25.9 16.5-42.1C163.8 163.6 160 146.3 160 128s3.8-35.6 10.6-51.2c7.1-16.2-.3-35.1-16.5-42.1s-35.1 .3-42.1 16.5C101.7 74.8 96 100.8 96 128zM405.4 76.8C412.2 92.4 416 109.7 416 128s-3.8 35.6-10.6 51.2c-7.1 16.2 .3 35.1 16.5 42.1s35.1-.3 42.1-16.5c10.3-23.6 16-49.6 16-76.8s-5.7-53.2-16-76.8c-7.1-16.2-25.9-23.6-42.1-16.5s-23.6 25.9-16.5 42.1zM495.7 44C506.2 69.9 512 98.2 512 128s-5.8 58.1-16.3 84c-6.6 16.4 1.3 35 17.7 41.7s35-1.3 41.7-17.7c13.5-33.4 20.9-69.9 20.9-108s-7.4-74.6-20.9-108C548.4 3.6 529.8-4.3 513.4 2.3S489.1 27.6 495.7 44z" />
        <path d="M320 183.4c19.1-11.1 32-31.7 32-55.4c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.4 32 55.4L256 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-296.6z" />
    </Icon>
);

export default TowerBroadcast;