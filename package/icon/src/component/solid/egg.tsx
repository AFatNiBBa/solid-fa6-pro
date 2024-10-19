
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `egg` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/egg?s=solid egg}
 * @preview ![egg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMTZDODYgMTYgMCAxOTguMDAxIDAgMzA0QzAgNDEwLjAwMSA4NiA0OTYgMTkyIDQ5NkMyOTggNDk2IDM4NCA0MTAuMDAxIDM4NCAzMDRDMzg0IDE5OC4wMDEgMjk4IDE2IDE5MiAxNlpNMTYwLjEyNSAxMzguMDQ3QzEyOC41OTQgMTc3LjA3OCA5NiAyNDkuODEyIDk2IDMwNEM5NiAzMTIuODQ0IDg4Ljg0NCAzMjAgODAgMzIwUzY0IDMxMi44NDQgNjQgMzA0QzY0IDI0MC40MzggMTAwLjcwMyAxNjAuNzAzIDEzNS4yMTkgMTE3Ljk1M0MxNDAuNzgxIDExMS4wNDcgMTUwLjg1OSAxMDkuOTg0IDE1Ny43MTkgMTE1LjU0N0MxNjQuNTk0IDEyMS4xMDkgMTY1LjY3MiAxMzEuMTcyIDE2MC4xMjUgMTM4LjA0N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Egg(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 16C86 16 0 198.001 0 304C0 410.001 86 496 192 496C298 496 384 410.001 384 304C384 198.001 298 16 192 16ZM160.125 138.047C128.594 177.078 96 249.812 96 304C96 312.844 88.844 320 80 320S64 312.844 64 304C64 240.438 100.703 160.703 135.219 117.953C140.781 111.047 150.859 109.984 157.719 115.547C164.594 121.109 165.672 131.172 160.125 138.047Z" />
        </Icon>
    </>
}