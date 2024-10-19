
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-up-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-left?s=solid circle-up-left}
 * @preview ![circle-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAyNTZDMTYgMzg4LjU4IDEyMy40MiA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU4IDQ5NiAyNTZDNDk2IDEyMy40MTggMzg4LjU4IDE2IDI1NiAxNlMxNiAxMjMuNDE4IDE2IDI1NlpNMzM4LjY2NSAxNTkuMzY5QzM0MS4xNTEgMTY1LjM0NyAzMzkuNzcgMTcyLjIzIDMzNS4xOTYgMTc2LjgwNEwyODkuOTQxIDIyMi4wNTlMMzU3LjgyMyAyODkuOTQxQzM3MC4zMiAzMDIuNDM4IDM3MC4zMiAzMjIuNjk5IDM1Ny44MjMgMzM1LjE5NkwzMzUuMTk2IDM1Ny44MjNDMzIyLjY5OSAzNzAuMzIgMzAyLjQzOCAzNzAuMzIgMjg5Ljk0MSAzNTcuODIzTDIyMi4wNTkgMjg5Ljk0MUwxNzYuODA0IDMzNS4xOTZDMTcyLjIzIDMzOS43NyAxNjUuMzQ3IDM0MS4xNTEgMTU5LjM2OSAzMzguNjY1QzE1My4zODEgMzM2LjE5IDE0OS40OTIgMzMwLjM1NyAxNDkuNDkyIDMyMy44ODJWMTY1LjQ5QzE0OS40OTIgMTU2LjY1NSAxNTYuNjU1IDE0OS40OTIgMTY1LjQ5IDE0OS40OTJIMzIzLjg4MkMzMzAuMzU3IDE0OS40OTIgMzM2LjE5IDE1My4zODEgMzM4LjY2NSAxNTkuMzY5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleUpLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16S16 123.418 16 256ZM338.665 159.369C341.151 165.347 339.77 172.23 335.196 176.804L289.941 222.059L357.823 289.941C370.32 302.438 370.32 322.699 357.823 335.196L335.196 357.823C322.699 370.32 302.438 370.32 289.941 357.823L222.059 289.941L176.804 335.196C172.23 339.77 165.347 341.151 159.369 338.665C153.381 336.19 149.492 330.357 149.492 323.882V165.49C149.492 156.655 156.655 149.492 165.49 149.492H323.882C330.357 149.492 336.19 153.381 338.665 159.369Z" />
        </Icon>
    </>
}