
import { Icon, generic } from "../../index";

/**
 * A component that renders the `poo-storm` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poo-storm?s=duotone poo-storm}
 * @preview ![poo-storm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/poo-storm.svg)
 */
const PooStorm: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96.9 373.3c2.2 6.4 8.3 10.7 15.1 10.7l70.1 0L129.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6c2.9 2.4 6.5 3.6 10.1 3.6c3.5 0 7.1-1.2 10-3.5l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7l-70.1 0 52.4-104.8c3.4-6.7 1.6-14.9-4.3-19.6s-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8z" />
        <path d="M222.4 5.9c3.5-4.3 9-6.5 14.5-5.7C283.9 6.5 320 46.7 320 95.4c0 5.7-.5 11.2-1.4 16.6l1.4 0c35.3 0 64 28.7 64 64c0 12-3.3 23.1-9 32.7c41.2 5.4 73 40.6 73 83.3c0 46.4-37.6 84-84 84l-12.7 0c1.3-7.8 .7-16-2-23.9C342.5 332.9 324.4 320 304 320l-18.3 0 29.3-58.5c10.1-20.2 4.8-44.6-12.8-58.8s-42.6-14.2-60.2-.2L82 330.5C68.9 341 62.4 357.5 64.3 373.7C27.4 364.8 0 331.6 0 292c0-42.7 31.8-77.9 73-83.3c-5.7-9.6-9-20.8-9-32.7c0-35.3 28.7-64 64-64l16.3 0c23.8 0 44-6.3 57.8-17C215.5 84.5 224 69.1 224 47.3c0-9.2-1.5-18-4.3-26.1c-1.8-5.2-.8-11.1 2.8-15.3z" />
    </Icon>
);

export default PooStorm;