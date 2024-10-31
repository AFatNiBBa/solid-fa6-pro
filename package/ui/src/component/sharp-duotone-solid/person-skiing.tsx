
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-skiing` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-skiing?s=sharp-duotone-solid person-skiing}
 * @preview ![person-skiing](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-skiing.svg)
 */
const PersonSkiing: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M-8.4 290.2l21.3 11.1 392 203.5 10.9 5.6 10.9-5.5 48-24 21.5-10.7-21.5-42.9-21.5 10.7-37.1 18.5c-42.1-21.9-84.3-43.8-126.4-65.6l-57.1-29.7c-65.9-34.2-131.7-68.4-197.6-102.6L13.8 247.6-8.4 290.2zM90.8 87.9l14.6 6.6 17.5 7.9-9.2 18.3-7.2 14.3 28.6 14.3 7.2-14.3 9.7-19.4c71.9 32.7 143.8 65.4 215.7 98c-1.1-1.9-2.2-3.8-3.3-5.7c-6.5-11.1-13-22.2-19.4-33.3l-5.2-8.9C300.2 148 260.7 130 221.1 112c-18.3-8.3-36.5-16.6-54.8-24.9l8-16 7.2-14.3L152.8 42.5l-7.2 14.3-8.5 17-18.6-8.4-14.6-6.6L90.8 87.9z" />
        <path d="M428.7 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm-60 215.5l-1-1.7-3.3-5.7-19.4-33.3-5.2-8.9L221.1 112l.4-.2L323 66.8l26.2-11.6 14.4 24.8 51.7 88.6 48.6 27.7 27.8 15.9-31.8 55.6-27.8-15.9-56-32-7.4-4.3zM289.8 391l-57.1-29.7 46.2-69.2-76.5-76.5c-14.8-14.8-20.5-34.3-18.3-52.8l103.8 47.8 54.8 54.8 18.6 18.6-14.6 21.8L289.8 391z" />
    </Icon>
);

export default PersonSkiing;