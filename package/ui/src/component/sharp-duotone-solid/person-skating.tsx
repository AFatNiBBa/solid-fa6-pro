
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-skating` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-skating?s=sharp-duotone-solid person-skating}
 * @preview ![person-skating](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-skating.svg)
 */
const PersonSkating: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M1.4 408l11.3 11.3 72 72 8.2 8.2 10.3-5.2 32-16 14.3-7.2-14.3-28.6-14.3 7.2L99.2 460.5 35.3 396.7 24 385.4 1.4 408zM272 480l0 32 16 0 104 0 12.5 0 3-12.1 8-32 3.9-15.5-31-7.8-3.9 15.5-5 19.9L288 480l-16 0z" />
        <path d="M352 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM128 96l32 0 160 0 13.3 0 9.4 9.4 19.3 19.3 23.4 23.4-24.2 22.6-83.4 77.8 64.9 64.9 9.4 9.4 0 13.3 0 80 0 32-64 0 0-32 0-66.7-77.9-77.8c-26.6-26.6-24.6-70.3 4.3-94.4l20.4-17L160 160l-32 0 0-64zM81.4 353.4l86.9-86.9c4.6 10 11 19.3 19.3 27.5l21.8 21.8-82.7 82.7L104 421.3 58.7 376l22.6-22.6z" />
    </Icon>
);

export default PersonSkating;