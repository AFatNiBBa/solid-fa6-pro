
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chestnut` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chestnut?s=duotone chestnut}
 * @preview ![chestnut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chestnut.svg)
 */
const Chestnut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M4 384L444 384c-14.2 55.2-64.3 96-124 96l-192 0C68.4 480 18.2 439.2 4 384z" />
        <path d="M224 32c5.3 0 10.3 2.7 13.3 7.1c2.9 4.3 7.9 9.7 15.5 16.6c7.5 6.8 16.7 14.3 27.2 22.8l3.1 2.5s0 0 0 0c20.3 16.4 44.7 36.1 68.2 59.6C400.8 190.2 448 258 448 352c0 11-1.4 21.8-4 32L4 384c-2.6-10.2-4-21-4-32c0-94 47.2-161.8 96.7-211.3c23.5-23.5 47.9-43.2 68.2-59.6l3.1-2.5c10.6-8.5 19.7-16 27.2-22.8c7.6-6.9 12.7-12.3 15.5-16.6c3-4.5 8-7.1 13.3-7.1z" />
    </Icon>
);

export default Chestnut;