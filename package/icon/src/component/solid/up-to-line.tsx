
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `up-to-line` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-line?s=solid up-to-line}
 * @preview ![up-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NiAzMTkuODg3SDEyOFY0NDcuOTc3QzEyOCA0NjUuNjY0IDE0Mi4zMjggNDgwIDE2MCA0ODBIMjI0QzI0MS42NzQgNDgwIDI1NiA0NjUuNjY0IDI1NiA0NDcuOTc3VjMxOS44ODdIMzI4QzMzNy41NzggMzE5Ljg4NyAzNDYuMjUgMzE0LjE3OCAzNTAuMDQ3IDMwNS4zNzVDMzUzLjgyOCAyOTYuNTcyIDM1Mi4wMzEgMjg2LjM0NiAzNDUuNDUzIDI3OS4zNzNMMjA5LjQ1MyAxMzUuMjdDMjAwLjM5MSAxMjUuNjY4IDE4My42MDkgMTI1LjY2OCAxNzQuNTQ3IDEzNS4yN0wzOC41NDcgMjc5LjM3M0MzMS45NjkgMjg2LjM0NiAzMC4xNzIgMjk2LjU3MiAzMy45NTMgMzA1LjM3NUMzNy43NSAzMTQuMTc4IDQ2LjQyMiAzMTkuODg3IDU2IDMxOS44ODdaTTM1MiAzMkgzMkMxNC4zMjcgMzIgMCA0Ni4zMjcgMCA2NFY2NEMwIDgxLjY3MyAxNC4zMjcgOTYgMzIgOTZIMzUyQzM2OS42NzMgOTYgMzg0IDgxLjY3MyAzODQgNjRWNjRDMzg0IDQ2LjMyNyAzNjkuNjczIDMyIDM1MiAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UpToLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M56 319.887H128V447.977C128 465.664 142.328 480 160 480H224C241.674 480 256 465.664 256 447.977V319.887H328C337.578 319.887 346.25 314.178 350.047 305.375C353.828 296.572 352.031 286.346 345.453 279.373L209.453 135.27C200.391 125.668 183.609 125.668 174.547 135.27L38.547 279.373C31.969 286.346 30.172 296.572 33.953 305.375C37.75 314.178 46.422 319.887 56 319.887ZM352 32H32C14.327 32 0 46.327 0 64V64C0 81.673 14.327 96 32 96H352C369.673 96 384 81.673 384 64V64C384 46.327 369.673 32 352 32Z" />
        </Icon>
    </>
}