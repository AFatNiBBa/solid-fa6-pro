
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-nib` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-nib?s=duotone pen-nib}
 * @preview ![pen-nib](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-nib.svg)
 */
const PenNib: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.1 456c0 8.2 3.1 16.2 9 22.3L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.4l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1c1.5-5 3-10.1 4.5-15.1c-41.8-41.8-83.5-83.5-125.3-125.3c-5 1.5-10.1 3-15.1 4.5L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-1.1 3.3-1.7 6.8-1.7 10.2z" />
        <path d="M368.4 18.3c21.9-21.9 57.3-21.9 79.2 0l46.1 46.1c21.9 21.9 21.9 57.3 0 79.2l-71 71-3.4 3.4s0 0 0 0L293.9 92.8s0 0 0 0s0 0 0 0l3.4-3.4 71-71z" />
    </Icon>
);

export default PenNib;