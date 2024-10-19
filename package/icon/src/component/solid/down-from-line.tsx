
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `down-from-line` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-line?s=solid down-from-line}
 * @preview ![down-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjggMjg4LjE4MkgyNTZWMTYwLjA5MkMyNTYgMTQyLjQwNCAyNDEuNjcyIDEyOC4wNjggMjI0IDEyOC4wNjhIMTYwQzE0Mi4zMjYgMTI4LjA2OCAxMjggMTQyLjQwNCAxMjggMTYwLjA5MlYyODguMTgySDU2QzQ2LjQyMiAyODguMTgyIDM3Ljc1IDI5My44OTEgMzMuOTUzIDMwMi42OTNDMzAuMTcyIDMxMS40OTYgMzEuOTY5IDMyMS43MjMgMzguNTQ3IDMyOC42OTVMMTc0LjU0NyA0NzIuNzk5QzE4My42MDkgNDgyLjQgMjAwLjM5MSA0ODIuNCAyMDkuNDUzIDQ3Mi43OTlMMzQ1LjQ1MyAzMjguNjk1QzM1Mi4wMzEgMzIxLjcyMyAzNTMuODI4IDMxMS40OTYgMzUwLjA0NyAzMDIuNjkzQzM0Ni4yNSAyOTMuODkxIDMzNy41NzggMjg4LjE4MiAzMjggMjg4LjE4MlpNMzUyIDMySDMyQzE0LjMyNyAzMiAwIDQ2LjMyNyAwIDY0VjY0QzAgODEuNjczIDE0LjMyNyA5NiAzMiA5NkgzNTJDMzY5LjY3MyA5NiAzODQgODEuNjczIDM4NCA2NFY2NEMzODQgNDYuMzI3IDM2OS42NzMgMzIgMzUyIDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DownFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M328 288.182H256V160.092C256 142.404 241.672 128.068 224 128.068H160C142.326 128.068 128 142.404 128 160.092V288.182H56C46.422 288.182 37.75 293.891 33.953 302.693C30.172 311.496 31.969 321.723 38.547 328.695L174.547 472.799C183.609 482.4 200.391 482.4 209.453 472.799L345.453 328.695C352.031 321.723 353.828 311.496 350.047 302.693C346.25 293.891 337.578 288.182 328 288.182ZM352 32H32C14.327 32 0 46.327 0 64V64C0 81.673 14.327 96 32 96H352C369.673 96 384 81.673 384 64V64C384 46.327 369.673 32 352 32Z" />
        </Icon>
    </>
}