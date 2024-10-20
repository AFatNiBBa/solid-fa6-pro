
import { Icon } from "../../index";

/**
 * A component that renders the `melon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon?s=sharp-solid melon}
 * @preview ![melon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/melon.svg)
 */
const Melon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512c141.4 0 256-114.6 256-256c0-50.8-14.8-98.1-40.3-137.9c.4 65-16.1 164.5-102.6 251s-186 103-251 102.6C157.9 497.2 205.2 512 256 512zM47.6 404.8c3.2-70.3 20.6-187.3 95.2-261.9C224.8 61 332 44.8 399.4 43.9C358.5 16.2 309.1 0 256 0C114.6 0 0 114.6 0 256c0 55.5 17.7 106.8 47.6 148.8zm34.2 32.7c17.2 2.1 41.6 3.5 70.1 .8c56.9-5.3 129.5-26.8 194.5-91.8s86.4-137.7 91.8-194.5c2.7-28.5 1.3-53-.8-70.1c-.2-1.7-.4-3.3-.6-4.8c-2.1-.2-4.4-.3-6.8-.5c-18.6-1.1-44.7-1.3-74.5 2.2c-59.9 7.1-132.4 29-190.1 86.7c-49 49-71.3 121.1-80.6 184.7c-4.6 31.3-5.8 59.4-5.9 79.6c0 2.6 0 5 0 7.3c.9 .1 1.9 .2 2.9 .4z" />
    </Icon>
);

export default Melon;