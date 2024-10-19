
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `brush` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=duotone brush}
 * @preview ![brush](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMlYyODhIMFYzMkMwIDE0LjM3NSAxNC4zNzUgMCAzMiAwSDY0TDk2IDY0TDEyOCAwSDE2MEwxOTIgNjRMMjI0IDBIMzUyQzM2OS42MjUgMCAzODQgMTQuMzc1IDM4NCAzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMCAyODhWMzIwQzAgMzU1LjM3NSAyOC42MjUgMzg0IDY0IDM4NEgxMjhWNDQ4QzEyOCA0ODMuMzc1IDE1Ni42MjUgNTEyIDE5MiA1MTJTMjU2IDQ4My4zNzUgMjU2IDQ0OFYzODRIMzIwQzM1NS4zNzUgMzg0IDM4NCAzNTUuMzc1IDM4NCAzMjBWMjg4SDBaTTE5MiA0NzJDMTc4Ljc1IDQ3MiAxNjggNDYxLjI1IDE2OCA0NDhTMTc4Ljc1IDQyNCAxOTIgNDI0UzIxNiA0MzQuNzUgMjE2IDQ0OFMyMDUuMjUgNDcyIDE5MiA0NzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Brush(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M384 32V288H0V32C0 14.375 14.375 0 32 0H64L96 64L128 0H160L192 64L224 0H352C369.625 0 384 14.375 384 32Z" />
            <path d="M0 288V320C0 355.375 28.625 384 64 384H128V448C128 483.375 156.625 512 192 512S256 483.375 256 448V384H320C355.375 384 384 355.375 384 320V288H0ZM192 472C178.75 472 168 461.25 168 448S178.75 424 192 424S216 434.75 216 448S205.25 472 192 472Z" />
        </Icon>
    </>
}