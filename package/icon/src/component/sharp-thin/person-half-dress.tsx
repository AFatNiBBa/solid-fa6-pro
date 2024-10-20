
import { Icon } from "../../index";

/**
 * A component that renders the `person-half-dress` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-half-dress?s=sharp-thin person-half-dress}
 * @preview ![person-half-dress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/person-half-dress.svg)
 */
const PersonHalfDress: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M120 56a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm96 0A56 56 0 1 0 104 56a56 56 0 1 0 112 0zM168 384l0 120 0 8s0 0 0 0l8 0 48 0 8 0 0-8 0-88 0-168 0-8-16 0 0 8 0 248-32 0 0-80 0-32 0-16-16 0 0-224-8 0s0 0 0 0l54.1 0 82.7 171.5 3.5 7.2 14.4-7-3.5-7.2-84.9-176-2.2-4.5-5 0L160 128s0 0 0 0l-59.1 0-5 0-2.2 4.5L8.8 308.5l-3.5 7.2 14.4 7 3.5-7.2L105.9 144l46.1 0 0 224 8 0 0 16 8 0zm-8-16l0 16-8 0 0 120 0 8-8 0-48 0-8 0 0-8 0-120-32 0-11.1 0 3.5-10.5 56-168 2.5-7.6 15.2 5.1-2.5 7.6L67.1 368 88 368l16 0 32 0 16 0 8 0zM104 496l32 0 0-112-32 0 0 112z" />
    </Icon>
);

export default PersonHalfDress;