
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-cowboy-hat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-cowboy-hat?s=duotone face-cowboy-hat}
 * @preview ![face-cowboy-hat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-cowboy-hat.svg)
 */
const FaceCowboyHat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 304c0-49.4 17.2-94.7 45.9-130.4c21.3 15.6 46.2 28.2 73.6 36.9c13.7 4.3 28 7.7 42.8 10c7.4 1.1 14.9 2 22.5 2.6c3.8 .3 7.6 .5 11.4 .7s7.7 .2 11.7 .2c62.5 0 119.4-19.1 162.1-50.4c28.7 35.7 45.9 81 45.9 130.4c0 114.9-93.1 208-208 208S48 418.9 48 304zm98 79.5C166.2 424.1 208 452 256.2 452s90-27.9 110.2-68.6c5.7-11.5-6.2-22.2-18.6-18.8c-27.9 7.8-59 12.1-91.6 12.1s-63.7-4.3-91.6-12.1c-12.4-3.5-24.3 7.3-18.6 18.8zM168 296a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm128 0a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M133.6 109.8C148.6 64.9 179.2 0 216 0c9.1 0 17.9 4 26.1 10.7c7.9 6.5 19.8 6.5 27.7 0C278.1 4 286.9 0 296 0c36.8 0 67.4 64.9 82.4 109.8C412 99.3 442 84.6 466.9 66.8c2.5-1.8 5.4-2.8 8.4-2.8c8.9 0 15.6 8.3 12.9 16.7C461.2 163.2 367.5 224 256 224S50.8 163.2 23.8 80.7C21 72.3 27.7 64 36.7 64c3 0 6 1 8.4 2.8C70 84.6 100 99.3 133.6 109.8zM168 296a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm152-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FaceCowboyHat;