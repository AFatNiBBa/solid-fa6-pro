
import { Icon } from "../../index";

/**
 * A component that renders the `person-dress` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress?s=thin person-dress}
 * @preview ![person-dress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/person-dress.svg)
 */
const PersonDress: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 96a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm0-96a56 56 0 1 1 0 112A56 56 0 1 1 160 0zM114.5 200.4c4.2 1.4 6.5 5.9 5.1 10.1L67.1 368 96 368l48 0 32 0 48 0 28.9 0L200.4 210.5c-1.4-4.2 .9-8.7 5.1-10.1s8.7 .9 10.1 5.1l56 168c.8 2.4 .4 5.1-1.1 7.2s-3.9 3.3-6.5 3.3l-32 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-16 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-2.6 0-5-1.2-6.5-3.3s-1.9-4.8-1.1-7.2l56-168c1.4-4.2 5.9-6.5 10.1-5.1zM104 384l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96-32 0zm80 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96-32 0 0 96zM84.1 189.2L23.2 315.5c-1.9 4-6.7 5.6-10.7 3.7s-5.6-6.7-3.7-10.7L69.7 182.3c16-33.2 49.6-54.3 86.5-54.3l7.7 0c36.8 0 70.4 21.1 86.5 54.3l60.9 126.2c1.9 4 .3 8.8-3.7 10.7s-8.8 .3-10.7-3.7L235.9 189.2c-13.3-27.7-41.3-45.2-72.1-45.2l-7.7 0c-30.7 0-58.7 17.6-72.1 45.2z" />
    </Icon>
);

export default PersonDress;