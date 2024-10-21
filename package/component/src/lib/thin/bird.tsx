
import { Icon } from "../../index";

/**
 * A component that renders the `bird` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bird?s=thin bird}
 * @preview ![bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bird.svg)
 */
const Bird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 104c0-48.6 39.4-88 88-88c41.1 0 75.6 28.2 85.3 66.3l-.3 .5 .5 .3c1.6 6.7 2.5 13.8 2.5 21l0 80c0 110.3-90.8 200-201.3 200C105.5 384 16 295.5 16 186.7c0-5.9 4.8-10.7 10.7-10.7L192 176c26.5 0 48-21.5 48-48l0-24zm192 0c0-3.4-.2-6.8-.5-10.2L488.5 128 432 161.9l0-57.9zm0 80l0-3.5 76.1-45.7c2.4-1.4 3.9-4 3.9-6.9s-1.5-5.4-3.9-6.9l-80-48-.9-.6C413.8 30.5 374.5 0 328 0C270.6 0 224 46.6 224 104l0 24c0 17.7-14.3 32-32 32L26.7 160C11.9 160 0 171.9 0 186.7C0 292.2 77.7 379.8 178.6 397l62.5 111c2.2 3.8 7 5.2 10.9 3s5.2-7 3-10.9L198.3 399.4c5.4 .4 10.9 .6 16.4 .6c18.8 0 37-2.4 54.4-6.9l68.1 115c2.2 3.8 7.2 5.1 11 2.8s5.1-7.2 2.8-11l-66-111.5C370.1 359.3 432 278.8 432 184zm-96-56a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Bird;