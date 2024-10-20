
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-ungroup` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-ungroup?s=duotone object-ungroup}
 * @preview ![object-ungroup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/object-ungroup.svg)
 */
const ObjectUngroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 448c0 35.3 28.7 64 64 64c23.7 0 44.4-12.9 55.4-32l209.1 0c11.1 19.1 31.7 32 55.4 32c35.3 0 64-28.7 64-64c0-23.7-12.9-44.4-32-55.4l0-113.1c19.1-11.1 32-31.7 32-55.4c0-35.3-28.7-64-64-64c-23.7 0-44.4 12.9-55.4 32L416 192l0 40.6c.6 .4 1.2 .7 1.8 1.1s1.2 .8 1.8 1.1c1.2 .8 2.3 1.6 3.4 2.4c2.2 1.7 4.3 3.5 6.3 5.5c3.9 3.9 7.4 8.4 10.2 13.3l81.1 0c5.6 9.7 13.7 17.8 23.4 23.4l0 113.1c-9.7 5.6-17.8 13.7-23.4 23.4l-209.1 0c-5.6-9.7-13.7-17.8-23.4-23.4l0-72.6-64 0 0 72.6c-19.1 11.1-32 31.7-32 55.4z" />
        <path d="M0 64c0 23.7 12.9 44.4 32 55.4l0 113.1C12.9 243.6 0 264.3 0 288c0 35.3 28.7 64 64 64c23.7 0 44.4-12.9 55.4-32l209.1 0c11.1 19.1 31.7 32 55.4 32c35.3 0 64-28.7 64-64c0-23.7-12.9-44.4-32-55.4l0-113.1c19.1-11.1 32-31.7 32-55.4c0-35.3-28.7-64-64-64c-23.7 0-44.4 12.9-55.4 32L119.4 32C108.4 12.9 87.7 0 64 0C28.7 0 0 28.7 0 64zM328.6 96c5.6 9.7 13.7 17.8 23.4 23.4l0 113.1c-9.7 5.6-17.8 13.7-23.4 23.4l-209.1 0c-5.6-9.7-13.7-17.8-23.4-23.4l0-113.1c9.7-5.6 17.8-13.7 23.4-23.4l209.1 0z" />
    </Icon>
);

export default ObjectUngroup;