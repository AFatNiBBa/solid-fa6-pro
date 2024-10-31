
import { Icon, generic } from "../../index";

/**
 * A component that renders the `standard-definition` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/standard-definition?s=sharp-duotone-solid standard-definition}
 * @preview ![standard-definition](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/standard-definition.svg)
 */
const StandardDefinition: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l576 0 0-448L0 32zM304 160l24 0 56 0c53 0 96 43 96 96s-43 96-96 96l-56 0-24 0c0-8 0-16 0-24c0-48 0-96 0-144c0-8 0-16 0-24zm48 48l0 96 32 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z" />
        <path d="M328 160l-24 0 0 24 0 144 0 24 24 0 56 0c53 0 96-43 96-96s-43-96-96-96l-56 0zm24 144l0-96 32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-32 0zM167.1 208.1c7.4-2.4 19.5-2.9 36.2-.7c5.1 .7 21.1 3.4 25.7 4.4l21.8 5 10-43.7-21.8-5c-6.5-1.5-23.9-4.4-29.7-5.1c-18.9-2.5-38.9-3.1-56 2.5c-18.8 6.1-33.9 19.7-38.5 42.3c-.1 .4-.1 .8-.2 1.2c-1.7 11.4-.2 22.4 5 32.3c5.1 9.6 12.9 16.1 20.5 20.7c13.7 8.2 31.5 12.3 45.1 15.5l1.7 .4c16 3.7 27.1 6.5 34.1 10.7c3 1.8 3.8 3 3.9 3.3c0 0 0 0 0 0c.1 .1 .7 1.2 .2 4.7c-.4 2.7-1.2 3.8-1.7 4.3c-.7 .7-2.3 2-5.8 3.1c-7.7 2.4-20.1 2.9-36.9 .6c-7.4-1-20.3-4.8-31.4-8c-2.5-.7-5-1.4-7.2-2.1l-21.5-6.1-12.3 43.1 21.5 6.1c1.5 .4 3.3 1 5.3 1.6c0 0 0 0 0 0s0 0 0 0c10.8 3.2 28.4 8.3 39.4 9.9c0 0 0 0 0 0l.1 0c18.9 2.5 39.2 3.1 56.4-2.3c8.9-2.8 17.8-7.5 24.9-15.2c7.3-7.8 11.8-17.6 13.4-28.5c1.7-11.4 .2-22.4-5-32.3c-5.1-9.6-12.9-16.1-20.5-20.7c-13.7-8.2-31.5-12.3-45.1-15.5c0 0 0 0 0 0l-1.7-.4c-16-3.7-27.1-6.5-34.1-10.7c-3-1.8-3.8-3-3.9-3.3c0 0 0 0 0 0c-.1-.1-.6-1.1-.3-4.1c.9-4 2.8-6.2 8.3-8z" />
    </Icon>
);

export default StandardDefinition;