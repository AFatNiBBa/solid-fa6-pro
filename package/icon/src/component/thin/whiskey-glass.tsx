
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `whiskey-glass` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=thin whiskey-glass}
 * @preview ![whiskey-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NTIuNTMzIDY0SDU5LjQ2N0M0Mi43NTYgNjQgMzAuMDA4IDc4Ljc4OSAzMi4yNTggOTUuMjkzTDgwLjI0OCA0MDAuOTQ5Qzg0LjEwNiA0MjcuOTU3IDEwNy4yNDIgNDQ4IDEzNC42NjYgNDQ4SDM3Ny43NjJDNDA0Ljk3MSA0NDggNDI4LjIxNyA0MjcuOTU3IDQzMi4wNzQgNDAwLjk0OUw0NzkuNzQyIDk1LjI5M0M0ODEuOTkyIDc4Ljc4OSA0NjkuMjQ0IDY0IDQ1Mi41MzMgNjRaTTQxNi4yMzUgMzk4LjY4OEM0MTMuNTIyIDQxNy42OCAzOTYuOTgzIDQzMiAzNzcuNzYyIDQzMkgxMzQuNjY2QzExNS4zODUgNDMyIDk4LjgwMSA0MTcuNjggOTYuMDU1IDM5OC40NjlMNzguNzA5IDI4OEg0MzMuNDk2TDQxNi4yMzUgMzk4LjY4OFpNNDM1Ljk5MiAyNzJINzYuMTk3TDQ4LjExMiA5My4xMzNDNDcuNDg4IDg4LjU2NiA0OS41NzEgODUuMzk1IDUwLjg2NSA4My45MUM1Mi4xNDEgODIuNDQ5IDU0Ljk1MyA4MCA1OS40NjcgODBINDUyLjUzM0M0NTcuMDQ3IDgwIDQ1OS44NiA4Mi40NDkgNDYxLjEzNSA4My45MUM0NjIuNDMgODUuMzk1IDQ2NC41MTIgODguNTY2IDQ2My45MzQgOTIuODI4TDQzNS45OTIgMjcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WhiskeyGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M452.533 64H59.467C42.756 64 30.008 78.789 32.258 95.293L80.248 400.949C84.106 427.957 107.242 448 134.666 448H377.762C404.971 448 428.217 427.957 432.074 400.949L479.742 95.293C481.992 78.789 469.244 64 452.533 64ZM416.235 398.688C413.522 417.68 396.983 432 377.762 432H134.666C115.385 432 98.801 417.68 96.055 398.469L78.709 288H433.496L416.235 398.688ZM435.992 272H76.197L48.112 93.133C47.488 88.566 49.571 85.395 50.865 83.91C52.141 82.449 54.953 80 59.467 80H452.533C457.047 80 459.86 82.449 461.135 83.91C462.43 85.395 464.512 88.566 463.934 92.828L435.992 272Z" />
        </Icon>
    </>
}